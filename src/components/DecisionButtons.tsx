// Props definition 
type Props = {
  onDecision: (choice: string) => void;
}

// the user can approve, deny, or delay a request
const DecisionButtons: React.FC<Props> = ({ onDecision }: Props) => {
    return (
    <div className="flex justify-around mt-4">
        <button onClick={() => 
            onDecision("approve")} 
            className="btn"
            >
            Approve
        </button>
        <button onClick={() => 
            onDecision("deny")} 
            className="btn"
            >
            Deny
        </button>
        <button onClick={() => 
            onDecision("delay")} 
            className="btn"
            >
            Delay
        </button>
    </div>
    );
}

// Export component
export default DecisionButtons;
