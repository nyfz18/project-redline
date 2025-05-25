
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
    "Seeks emergency leave to care for undocumented sibling injured in a factory accident",
    "Petitions to bury a parent who died in a restricted zone",
    "Requests transfer to safer zone after surviving workplace bombing",
    "Applies for wage correction after being underpaid for five years due to administrative error",
    "Seeks permission to travel to border town to collect child left behind during last evacuation",
    "Requests clearance to access banned medicine for terminal illness",
    "Applies for sick leave due to chronic condition worsened by state-mandated labor",
    "Requests permission to leave country for urgent surgery unavailable domestically",
    "Asks for time off to care for partner labeled an ‘unfit citizen’",
    "Petitions to remain in housing block slated for demolition due to elderly dependents"
];

const forgedAdditions = [
    "using falsified identity papers acquired to avoid discrimination",
    "with records showing minor past infractions under outdated laws",
    "after bribing a lower official to fast-track the request",
    "with forged medical documents likely created out of desperation",
    "with previous applications flagged for inconsistencies",
    "despite known affiliations with blacklisted communities",
    "using a child’s ID number to mask their own travel request",
    "after being caught falsifying wage data in the past, possibly to survive"
];

const moralThrows = [
    "is a war widow with no remaining family",
    "has a dependent child with a terminal illness",
    "was once imprisoned for distributing banned literature",
    "is rumored to be collaborating with rebels, but no proof has surfaced",
    "previously reported corruption in their department and was demoted",
    "is on the government’s 'watch list' for unknown reasons",
    "lost three family members in the last regime purge",
    "has been quietly supporting neighbors whose papers were revoked",
    "was the sole survivor of a train crash blamed on infrastructure neglect",
    "is a well-liked teacher in a politically unstable district"
];

// Generator logic
const generateCitizenRequest = (id: number): CitizenRequest => {
    // Randomly select a name, occupation, and reason
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const baseReason = reasons[Math.floor(Math.random() * reasons.length)];
    const forgedAddition = forgedAdditions[Math.floor(Math.random() * forgedAdditions.length)];
    const moralThrow = moralThrows[Math.floor(Math.random() * moralThrows.length)];

    const ruleViolated = Math.random() < 0.4;
    const reason = ruleViolated
    ? `${baseReason} ${forgedAddition} and ${moralThrow}.`
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
