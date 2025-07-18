import { type DisplayState, formatTime } from "./helpers";
import { FaPlay, FaPause, FaUndo } from "react-icons/fa";

interface DisplayProps {
  displayState: DisplayState;
  reset: () => void;
  startStop: (displayState: DisplayState) => void;
}

const Display: React.FC<DisplayProps> = ({
  displayState,
  reset,
  startStop,
}) => {
  return (
    <div className="display">
      <h4 id="timer-label">{displayState.timeType}</h4>
      <span
        id="time-left"
        style={{ color: displayState.timerRunning ? "red" : "white" }}
      >
        {formatTime(displayState.time)}
      </span>
      <div className="controls">
        <button 
          id="start_stop" 
          onClick={() => startStop(displayState)}
          aria-label={displayState.timerRunning ? "Pause" : "Start"}
        >
          {displayState.timerRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button 
          id="reset" 
          onClick={reset}
          aria-label="Reset"
        >
          <FaUndo />
        </button>
      </div>
    </div>
  );
};

export default Display;