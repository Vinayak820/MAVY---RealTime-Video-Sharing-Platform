import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET || '', {
  apiVersion: '2024-09-30.acacia'
})

export async function GET() {
  try {
    // Check if required environment variables are set
    if (!process.env.STRIPE_CLIENT_SECRET) {
      console.error('STRIPE_CLIENT_SECRET is not set')
      return NextResponse.json({ error: 'Stripe secret key is not configured' }, { status: 500 })
    }

    if (!process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
      console.error('STRIPE_SUBSCRIPTION_PRICE_ID is not set')
      return NextResponse.json({ error: 'Stripe price ID is not configured' }, { status: 500 })
    }

    if (!process.env.NEXT_PUBLIC_HOST_URL) {
      console.error('NEXT_PUBLIC_HOST_URL is not set')
      return NextResponse.json({ error: 'Host URL is not configured' }, { status: 500 })
    }

    const user = await currentUser()
    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
    }

    const priceId = process.env.STRIPE_SUBSCRIPTION_PRICE_ID
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`,
      customer_email: user.emailAddresses[0]?.emailAddress, // Add customer email if available
    })

    if (!session || !session.url) {
      return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
    }

    return NextResponse.json({
      status: 200,
      session_url: session.url,
      customer_id: session.customer,
    })

  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
