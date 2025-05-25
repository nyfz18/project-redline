// post-day news

type Props = {
    // headlines to be displayed
    headlines: string[];
}

// headlines as a string array 
const Newspaper: React.FC<Props> = ({ headlines }: Props) => {
    return (
    <div className="bg-white p-4 border rounded-lg shadow">
        <h2 className="text-2xl font-bold">
            The Crimson Times
        </h2>
        <ul className="mt-4 list-disc pl-5">
        {headlines.map((h, idx) => (
            <li key={idx}>{h}</li>
        ))}
        </ul>
    </div>
  );
}

// Export component
export default Newspaper;