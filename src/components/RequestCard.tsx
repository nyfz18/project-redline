// the card UI

// Import React
import { useEffect, useState } from 'react';


/*------------------------------------------------------------------------*/
/* -------------------------------- Types ------------------------------- */
/*------------------------------------------------------------------------*/


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

// Props definition
type Props = {
    // Request object containing details of the citizen's request
    request: Request;
}

// CSS for the flash effect
const style = `
@keyframes flashRed {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
    }
    .flash-once {
    animation: flashRed 0.5s ease-in-out 3;
    }
`;

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/
const RequestCard: React.FC<Props> = ({ request }: Props) => {

    const [flash, setFlash] = useState(false);

    // Flash effect for rule violations
    /*----------------------------------------*/
    useEffect(() => {
        if (request.ruleViolated) {
        setFlash(true);
        const timer = setTimeout(() => setFlash(false), 1500);
        return () => clearTimeout(timer);
        }
    }, [request]);
    /*----------------------------------------*/
    /* --------------- Main UI -------------- */
    /*----------------------------------------*/
    return (
    <>
        <style>{style}</style>

        <div className="border rounded-xl p-4 shadow-md">
        <h2 className="text-xl font-bold">{request.name}</h2>
        <p><strong>Occupation:</strong> {request.occupation}</p>
        <p><strong>Reason:</strong> {request.reason}</p>

        {request.ruleViolated && 
            <p 
                style={{ color: 'red', fontWeight: 'bold' }}
                className={flash ? 'flash-once' : ''}
            >
                Rule Violation Detected
            </p>
        }
        </div>
    </>
  );
};

// Export component
export default RequestCard;