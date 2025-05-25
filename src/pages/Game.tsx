// main game screen

import { 
    useState, 
    useEffect,
} from "react";

// Components
import RequestCard from "../components/RequestCard";
import DecisionButtons from "../components/DecisionButtons";
import Newspaper from "../components/Newspaper";
import ScoreTracker from "../utils/scoreTracker";
import EndScreen from "./EndScreen";

// Utils
import RequestGenerator, { 
    CitizenRequest,
} from "../utils/requestGenerator";

const REQUESTS_PER_DAY = 5;
const MAX_DAYS = 7;

const Game: React.FC = () => {
    const [day, setDay] = useState(1);
    const [index, setIndex] = useState(0);
    const [showNews, setShowNews] = useState(false);

    const [morality, setMorality] = useState(0);
    const [obedience, setObedience] = useState(0);
    const [headlines, setHeadlines] = useState<string[]>([]);

    const [requests, setRequests] = useState<CitizenRequest[]>([]);

    // Generate initial requests
    useEffect(() => {
        setRequests(RequestGenerator.generateRequestBatch(REQUESTS_PER_DAY));
    }, []);

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

        if ((index + 1) % REQUESTS_PER_DAY === 0) {
            setShowNews(true);
        } else {
            setIndex(index + 1);
        }
    };

    const handleNextDay = () => {
        setShowNews(false);
        setIndex(0);
        setDay(day + 1);
        setHeadlines([]);
        setRequests(RequestGenerator.generateRequestBatch(REQUESTS_PER_DAY)); // New batch each day
    };

    if (day > MAX_DAYS && !showNews) {
        return <EndScreen morality={morality} obedience={obedience} />;
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Day {day}</h1>
            {!showNews ? (
        <>
        {requests[index] ? (
            <>
                <RequestCard request={requests[index]} />
                <DecisionButtons onDecision={handleDecision} />
            </>
            ) : (
        <p>Loading request...</p>
        )}
        <ScoreTracker morality={morality} obedience={obedience} />
        </>
        ) : (
            <div>
                <Newspaper morality={morality} obedience={obedience} />
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
};

export default Game;
