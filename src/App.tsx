import { 
  useState 
} from "react";
import Game from "./pages/Game";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-6">
      {!started ? (
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Redline</h1>
          <p className="text-lg">Make decisions. Face consequences.</p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded"
            onClick={() => setStarted(true)}
          >
            Start Game.
          </button>
        </div>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
