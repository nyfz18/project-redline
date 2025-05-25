// post-day news

// Import React 
import React from "react";

// Props definition
type Props = {
    morality: number;
    obedience: number;
    corruption?: number; 
};

// Function to generate headlines based on morality and obedience scores
const generateHeadlines = (morality: number, obedience: number): string[] => {
    const headlines: string[] = [];

    // Morality-related headlines
    if (morality > 75) {
        headlines.push("Citizens praise the regime's moral leadership.");
    } else if (morality > 40) {
        headlines.push("Mixed opinions as morality scores fluctuate.");
    } else {
        headlines.push("Public concerns arise over government's declining moral standards.");
    }

    // Obedience-related headlines
    if (obedience > 75) {
        headlines.push("Obedience to laws reaches historic highs.");
    } else if (obedience > 40) {
        headlines.push("Authorities report steady obedience levels.");
    } else {
        headlines.push("Disobedience incidents cause concern among officials.");
    }

    // Combined headline example
    if (morality < 30 && obedience < 30) {
        headlines.push(
            "Unrest grows as both morale and obedience plummet in key districts."
        );
    }

    return headlines;
};

const Newspaper: React.FC<Props> = ({ morality, obedience }) => {
    const headlines = generateHeadlines(morality, obedience);

    return (
        <div className="bg-white p-4 border rounded-lg shadow">
            <h2 className="text-2xl font-bold">The Crimson Times</h2>
            <ul className="mt-4 list-disc pl-5">
            {headlines.map((h, idx) => (
                <li key={idx}>{h}</li>
            ))}
            </ul>
        </div>
    );
};

export default Newspaper;