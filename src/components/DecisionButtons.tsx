export default function DecisionButtons({ onDecision }: { onDecision: (choice: string) => void }) {
  return (
    <div className="flex justify-around mt-4">
      <button onClick={() => onDecision("approve")} className="btn">Approve</button>
      <button onClick={() => onDecision("deny")} className="btn">Deny</button>
      <button onClick={() => onDecision("delay")} className="btn">Delay</button>
    </div>
  );
}
