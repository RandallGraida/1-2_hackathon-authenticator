import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 29,
        features: [
            'Basic chatbot integration',
            'Up to 1 device',
            '16k tokens',
            'No native app support',
        ],
    },
    {
        name: 'Pro',
        price: 99,
        features: [
            'Advance chatbot to app integration',
            'Up to 5 devices',
            '100k tokens',
            'In-device and in-app native support',
            'Real-time video to solution analyzer',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Advance chatbot to app integration',
            'Unlimited devices',
            'Unlimited tokens',
            'In-device and in-app native support',
            'Custom solutions',
            'On-site training',
        ],
    },
]