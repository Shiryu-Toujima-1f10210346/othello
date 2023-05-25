import { useState } from 'react';
import styles from './index.module.css';
// aaa
const Home = () => {
  const [turnColor, setTurnColor] = useState(1); // 1: 黒, 2: 白
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));

    if (newBoard[y][x] === 0) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    }
    setBoard(newBoard);
    for (let i = 1; i < 8; i++) {
      if (y - i >= 0 && x - i >= 0) {
        if (newBoard[y - i][x - i] === turnColor) {
          break;
        } else if (newBoard[y - i][x - i] !== turnColor) {
          for (let j = 2; j < 7; j++) {
            if (y - j >= 0 && x - j >= 0 && newBoard[y - j][x - j] === turnColor) {
              console.log(`${j}LT`);
              for (let k = j; 1 < k; k--) {
                newBoard[y - k + 1][x - k + 1] = turnColor;
              }
            }
          }
          break;
        }
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
