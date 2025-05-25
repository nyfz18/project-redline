// Helper for Morality/Obedience score tracking

type Props = {
    morality: number;
    obedience: number;
    corruption?: number;
};

export default function ScoreTracker({
    morality,
    obedience,
    corruption,
}: Props) {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
    <p>
        <strong>Morality:</strong> 
        {morality}
    </p>
    <p>
        <strong>Obedience:</strong> 
        {obedience}
    </p>
    {corruption !== undefined && (
        <p>
            <strong>Corruption:</strong> 
            {corruption}
        </p>
    )}
    </div>
  );
}
