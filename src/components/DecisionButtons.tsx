import approveIcon from "../assets/approve.png";
import denyIcon from "../assets/deny.png";

// Props definition 
type Props = {
  onDecision: (choice: string) => void;
}

// the user can approve, deny, or delay a request
const DecisionButtons: React.FC<Props> = ({ onDecision }: Props) => {
    return (
    <div className="flex justify-around mt-4">
        <img onClick={() => 
            onDecision("approve")} 
            src={approveIcon} 
            alt="Approve" 
            style={{ width: "100px", height: "100px", objectFit: "contain" }} 
        />
        <img onClick={() => 
            onDecision("deny")} 
            src={denyIcon} 
            alt="Deny"
            style={{ width: "100px", height: "100px", objectFit: "contain" }} 
        />
    </div>
    );
}

// Export component
export default DecisionButtons;
