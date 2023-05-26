

let StartButton=({onClick,disabled})=>{

    return (
        <button className='resetButton'
            disabled={disabled}
            onClick={onClick}
        >
            Start
        </button>
    );
}

export default StartButton;