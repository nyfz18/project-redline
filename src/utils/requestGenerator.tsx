
export type CitizenRequest = {
    id: number;
    name: string;
    occupation: string;
    reason: string;
    ruleViolated: boolean;
};

const names = [
    "Anna K.", "Tomas V.", "Leila A.", "Jin L.", "Dario R.", "Mira N.", "Elian F."
];

const occupations = [
    "Nurse", "Teacher", "Factory Worker", "Engineer", "Accountant", "Driver", "Clerk"
];

const reasons = [
    "Needs work permit renewal",
    "Applying for sick leave",
    "Requesting clearance to care for aging mother",
    "Asking for transfer to safer zone",
    "Seeking permission to travel",
    "Petitioning for wage correction",
    "Requests access to medicine"
];

const forgedAdditions = [
    "despite forged documents",
    "with incomplete records",
    "with suspicious paperwork",
    "although prior violations exist"
];

// Generator logic
const generateCitizenRequest = (id: number): CitizenRequest => {
    // Randomly select a name, occupation, and reason
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const baseReason = reasons[Math.floor(Math.random() * reasons.length)];

    const ruleViolated = Math.random() < 0.4;
    const reason = ruleViolated
    ? `${baseReason} ${forgedAdditions[Math.floor(Math.random() * forgedAdditions.length)]}`
    : baseReason;

    return {
        id,
        name,
        occupation,
        reason,
        ruleViolated,
    };
};

const generateRequestBatch = (count: number): CitizenRequest[] => {
    return Array.from({ length: count }, (_, i) => generateCitizenRequest(i + 1));
};

const RequestGenerator = {
    generateCitizenRequest,
    generateRequestBatch
};

// Export RequestGenerator
export default RequestGenerator;
