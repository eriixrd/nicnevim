import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { plan } = await request.json();

        // Define amounts in smallest currency unit (cents/haléře)
        // Monthly: 3 770 Kč = 377 000
        // Annual: 37 770 Kč = 3 777 000
        const amount = plan === 'annual' ? 3777000 : 377000;

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'czk',
            payment_method_types: ['card'],
            metadata: {
                plan_type: plan,
            }
        });

        return json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e: any) {
        return json({ error: e.message }, { status: 500 });
    }
};
