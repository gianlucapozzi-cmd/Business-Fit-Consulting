import { NextRequest, NextResponse } from 'next/server'
import { LeadFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json()

    // Validation
    if (!body.email || !body.phone || !body.fullName) {
      return NextResponse.json(
        { success: false, error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    // Mappatura valori tecnici -> label leggibili
    const userTypeLabels: Record<string, string> = {
      'seller': 'Proprietario interessato a vendere',
      'valuation': 'Proprietario interessato a una valutazione',
      'buyer': 'Investitore/Acquirente'
    }
    
    const gymSizeLabels: Record<string, string> = {
      '500-1000': '500-1000mq',
      '1000-1500': '1000-1500mq',
      'over1500': 'Oltre 1500mq'
    }

    // Invia dati al webhook n8n
    try {
      const webhookUrl = 'https://automations.wolfoncloud.com/webhook/308b591c-674d-48c5-a177-b8cdcaeffc0f'
      const webhookData = {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        city: body.city,
        userType: userTypeLabels[body.userType] || body.userType, // Invia il label invece del value
        gymSize: gymSizeLabels[body.gymSize] || body.gymSize, // Invia il label invece del value
        notes: body.notes,
        timestamp: new Date().toISOString()
      }
      
      console.log('Sending data to n8n webhook:', webhookUrl)
      console.log('Webhook payload:', webhookData)
      
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      })
      
      if (webhookResponse.ok) {
        console.log('✅ Form data sent to n8n webhook successfully')
        const responseData = await webhookResponse.text()
        console.log('Webhook response:', responseData)
      } else {
        console.error('❌ Webhook returned error status:', webhookResponse.status, webhookResponse.statusText)
      }
    } catch (webhookError) {
      console.error('❌ Error sending to n8n webhook:', webhookError)
      // Non blocchiamo la risposta anche se il webhook fallisce
    }

    console.log('Form submission received:', body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Richiesta ricevuta con successo' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, error: 'Errore interno del server' },
      { status: 500 }
    )
  }
}

