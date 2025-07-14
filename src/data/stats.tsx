import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

// Ratings and statistics
export const stats: IStats[] = [
    {
        title: "200M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Tokens processed securely every day, providing real-time insights."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Rating consistently maintained."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "World Institutions use our service."
    }
];