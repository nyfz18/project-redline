// Shows the end screen of the game with the final stats and ending message

/*------------------------------------------------------------------------*/
/* -------------------------------- Types ------------------------------- */
/*------------------------------------------------------------------------*/

// Props definition
type Props = {
    morality: number;
    obedience: number;
    corruption?: number;
    onRestart: () => void;
};

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/
const EndScreen: React.FC<Props> = (props) => {
/*------------------------------------------------------------------------*/
/* -------------------------------- Setup ------------------------------- */
/*------------------------------------------------------------------------*/

  /* -------------- Props ------------- */

  // Destructure all props
    const {
        morality,
        obedience,
        corruption = 0,
        onRestart,
    } = props;

    let ending = "";

    // Determine the ending based on morality, obedience, and corruption
    if (obedience > 10 && morality < 5) {
        ending = "You rose through the ranks and became a high-ranking enforcer of the regime.";
    } else if (obedience > morality && obedience < 10) {
        ending = "Congratulations. You got promoted. The regime trusts you.";
    }  else if (morality > obedience && obedience < 5) {
        ending = "You joined the rebellion. A revolution is on the horizon. You have been banished by the regime.";
    } else if (corruption >= 5) {
        ending = "Your greed led to your downfall. Executed for corruption.";
    } else {
        ending = "You tried to balance both worlds. Neither side fully trusts you.";
    }

    return (
        <div className="p-8 bg-white shadow-lg rounded">
            <h2 className="text-2xl font-bold mb-4">Game Over</h2>
            <p><strong>Morality:</strong> {morality}</p>
            <p><strong>Obedience:</strong> {obedience}</p>
            <p><strong>Corruption:</strong> {corruption}</p>
            <div className="mt-6">
                <p className="text-lg">{ending}</p>
            </div>
            <div className="mt-8 text-center">
                <button
                    onClick={onRestart}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                Restart Game
                </button>
            </div>
        </div>
  );
}

// export EndScreen component
export default EndScreen;