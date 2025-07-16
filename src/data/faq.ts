import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We use military-grade encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your EchoPoint plus account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'Can I connect all my apps',
        answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 native supported apps worldwide. Simply log in through our secure portal to link your apps.`
    },
    {
        question: 'Do I need subscription?',
        answer: 'Not at all! Free tier offers exceptional day to day solutions catered to your needs.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of EchoPoint.'
    }
];