// the card UI

type Request = {
  id: number;
  name: string;
  occupation: string;
  reason: string;
  ruleViolated?: boolean;
};

export default function RequestCard({ request }: { request: Request }) {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-bold">{request.name}</h2>
      <p><strong>Occupation:</strong> {request.occupation}</p>
      <p><strong>Reason:</strong> {request.reason}</p>
      {request.ruleViolated && <p className="text-red-500">⚠️ Rule Violation Detected</p>}
    </div>
  );
}