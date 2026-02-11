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

    // Invia dati al webhook n8n
    try {
      const webhookUrl = 'https://automations.wolfoncloud.com/webhook/308b591c-674d-48c5-a177-b8cdcaeffc0f'
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: body.fullName,
          email: body.email,
          phone: body.phone,
          region: body.region,
          userType: body.userType,
          gymSize: body.gymSize,
          notes: body.notes,
          timestamp: new Date().toISOString()
        })
      })
      
      console.log('Form data sent to n8n webhook successfully')
    } catch (webhookError) {
      console.error('Error sending to n8n webhook:', webhookError)
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

