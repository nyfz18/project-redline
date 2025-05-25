import { 
  useState 
} from "react";

// assets
import startIcon from "./assets/start.png";
// import titleIcon from "./assets/title.png";

import Game from "./pages/Game";

import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      {!started ? (
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            {/* <img 
              src={titleIcon} 
              alt="title" 
              style={{ width: "300px", height: "50px", objectFit: "contain" }} 
            /> */}
            Project Redline
          </h1>
          <p className="text-lg">Make decisions. Face consequences.</p>
          <p> 
              Your duty is to ensure your country's borders are safe. 
              Only let those who are safe in or out. 
          </p>
          <img onClick={() => 
            setStarted(true)} 
            src={startIcon} 
            alt="start" 
            style={{ width: "100px", height: "100px", objectFit: "contain", cursor: "pointer" }}
          />
        </div>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
