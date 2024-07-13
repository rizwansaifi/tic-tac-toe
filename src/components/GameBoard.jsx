export default function GameBoard({ onSelectSquare, turns, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li className={rowIndex} key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li className={colIndex} key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
