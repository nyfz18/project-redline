// post-day news
export default function Newspaper({ headlines }: { headlines: string[] }) {
  return (
    <div className="bg-white p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold">The Daily State</h2>
      <ul className="mt-4 list-disc pl-5">
        {headlines.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
