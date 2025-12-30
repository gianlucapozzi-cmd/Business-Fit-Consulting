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

    // TODO: Integrare con servizio email (SendGrid, Resend, etc.)
    // TODO: Salvare lead in database o CRM
    
    // Esempio: Invia email di notifica
    // await sendEmail({
    //   to: 'info@businessfit.it',
    //   subject: 'Nuova Richiesta Valutazione',
    //   body: `Nome: ${body.fullName}\nEmail: ${body.email}\n...`
    // })

    // Esempio: Salva in Google Sheets o Airtable
    // await saveToSheet(body)

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

