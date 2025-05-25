import { 
  useState 
} from "react";

import startIcon from "./assets/start.png";

import Game from "./pages/Game";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-6">
      {!started ? (
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Redline</h1>
          <p className="text-lg">Make decisions. Face consequences.</p>
          <img onClick={() => 
            setStarted(true)} 
            src={startIcon} 
            alt="start" 
            style={{ width: "100px", height: "100px", objectFit: "contain" }} 
          />
        </div>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
