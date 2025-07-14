import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Your AI Time",
        description: "We make time for you",
        bullets: [
            {
                title: "InsightSync AI",
                description: "Automatically recap meetings, surface fresh insights, and turbocharge your productivity.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Customizable Goals",
                description: "Describe your goal and experience productivity built just for you.",
                icon: <FiTarget size={26} />
            },
            {
                title: "TimeCraft GPT",
                description: "Generate insights to automate time management in one intelligent workspace.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Your AI-Powered Productivity Engine",
        description: "Eliminates bottlenecks with AI, you work smarter, not harder.",
        bullets: [
            {
                title: "Closing the Gaps",
                description: "Focus on outcomes.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Craft Your Perfect Workflow",
                description: "Understands your needs and builds smart tools to simplify your workflow. Effortless productivity, by design.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Lightning-Fast Intelligence",
                description: "React to changes, make decisions, and execute tasks without delay.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Your AI Life OS",
        description: "Enterprise-grade data privacy and end-to-end encryption at the core",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "One place to think, plan, create, and solve.",
                icon: <FiLock size={26} />
            },
            {
                title: "Personal Access Lock",
                description: "Only you can know.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Data Protection",
                description: "Constantly monitors for suspicious activity to keep your data safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]