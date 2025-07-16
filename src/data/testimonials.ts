import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Smith',
        role: 'CEO at Company',
        /*
        * siteDetails.siteName = 'Finwise'
        */
        message: `${siteDetails.siteName}'s AI-driven insights have transformed how we approach clients.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO at Startup',
        message: `As a CTO, I'm impressed by ${siteDetails.siteName}'s robust security measures and seamless integrations.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Product Manager',
        message: `${siteDetails.siteName} is revolutionizing.`,
        avatar: '/images/testimonial-3.webp',
    },
];