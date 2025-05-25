// Shows the end screen of the game with the final stats and ending message

/*------------------------------------------------------------------------*/
/* -------------------------------- Types ------------------------------- */
/*------------------------------------------------------------------------*/

// Props definition
type Props = {
  morality: number;
  obedience: number;
  corruption?: number;
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
    } = props;

    let ending = "";

    if (obedience >= 15 && morality < 5) {
        ending = "You rose through the ranks and became a high-ranking enforcer of the regime.";
    } else if (morality >= 10 && obedience < 5) {
        ending = "You joined the rebellion. A revolution is on the horizon.";
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
    </div>
  );
}

// export EndScreen component
export default EndScreen;