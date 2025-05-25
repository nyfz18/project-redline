// the card UI

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

// Request details of a citizen
type Request = {
    // Unique Citizen ID 
    id: number;
    // Citizen's name
    name: string;
    // Citizen's occupation
    occupation: string;
    // Reason for the request
    reason: string;
    // Whether the request violates any rules
    ruleViolated?: boolean;
};

type Props = {
    // Request object containing details of the citizen's request
    request: Request;
}

const RequestCard: React.FC<Props> = ({ request }: Props) => {
    return (
        <div className="border rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-bold">
                {request.name}
            </h2>
            <p>
                <strong>Occupation:</strong> 
                {request.occupation}
            </p>
            <p>
                <strong>Reason:</strong> 
                {request.reason}
            </p>
            {request.ruleViolated && 
                <p className="text-red-500">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    Rule Violation Detected
                </p>}
        </div>
    );
}

// Export component
export default RequestCard;