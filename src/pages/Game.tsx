// main game screen

// Import React 
import { 
    useState 
} from "react";

// Import components
import RequestCard from "../components/RequestCard";
import DecisionButtons from "../components/DecisionButtons";
import Newspaper from "../components/Newspaper";

// Import data
import requestsData from "../data/requests.json";

// Import utils
import ScoreTracker from "../utils/scoreTracker";

// Import end screen
import EndScreen from "./EndScreen";

// Request details of a citizen
type Request = {
    id: number;
    name: string;
    occupation: string;
    reason: string;
    ruleViolated?: boolean;
};

const Game: React.FC = () => {    
    const [day, setDay] = useState(1);
    const [index, setIndex] = useState(0);
    const [showNews, setShowNews] = useState(false);

    const [morality, setMorality] = useState(0);
    const [obedience, setObedience] = useState(0);

    const [headlines, setHeadlines] = useState<string[]>([]);

    const requests: Request[] = requestsData;

    const handleDecision = (choice: string) => {
    const request = requests[index];
    let newMorality = morality;
    let newObedience = obedience;
    let newHeadline = "";

    if (choice === "approve") {
        if (request.ruleViolated) {
            newMorality += 1;
            newHeadline = `You approved an illegal request. ${request.name} was saved.`;
        } else {
            newObedience += 1;
            newHeadline = `${request.name} received approval. All rules followed.`;
        }
    } else if (choice === "deny") {
        if (request.ruleViolated) {
            newObedience += 1;
            newHeadline = `${request.name} was denied. Policy upheld.`;
        } else {
            newMorality -= 1;
            newHeadline = `A legal request by ${request.name} was unfairly denied.`;
        }
    } else if (choice === "delay") {
        newHeadline = `${request.name}'s request was delayed. Situation unresolved.`;
    }

    setMorality(newMorality);
    setObedience(newObedience);
    setHeadlines([...headlines, newHeadline]);

    if ((index + 1) % 5 === 0) {
        setShowNews(true);
    } else {
        setIndex(index + 1);
    }
};

    const handleNextDay = () => {
        setShowNews(false);
        setIndex(index + 1);
        setDay(day + 1);
        setHeadlines([]);
    };

    if (index >= requests.length) {
        return <EndScreen morality={morality} obedience={obedience} />;
    }

    return (
        <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Day {day}</h1>
        {!showNews ? (
            <>
            <RequestCard request={requests[index]} />
            <DecisionButtons onDecision={handleDecision} />
            <ScoreTracker morality={morality} obedience={obedience} />
        </>
        ) : (
        <div>
            <Newspaper headlines={headlines} />
            <button
            onClick={handleNextDay}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
            Continue to Next Day
            </button>
        </div>
        )}
    </div>
);
}

export default Game; 
