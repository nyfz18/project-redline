// Helper for Morality/Obedience score tracking

type Props = {
    morality: number;
    obedience: number;
    corruption?: number;
};

/*------------------------------------------------------------------------*/
/* ------------------------------ Component ----------------------------- */
/*------------------------------------------------------------------------*/
const ScoreTracker: React.FC<Props> = (props) => {
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
        {/* {corruption !== undefined && (
            <p>
            <strong>Corruption:</strong> 
            {corruption}
            </p>
        )} */}
        </div>
  );
}

// Export ScoreTracker component
export default ScoreTracker;