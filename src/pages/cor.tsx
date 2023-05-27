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

    /*[-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 0, -1, -1, -1],
    [-1, -1, -1, 1, 2, 0, -1, -1],
    [-1, -1, 0, 2, 2, -1, -1, -1],
    [-1, -1, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],*/
  ]);
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));

    if (newBoard[y][x] === 0) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;

      const direction = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
      ];

      for (const t of direction) {
        for (let dis = 1; dis < 8; dis++) {
          if (
            newBoard[y + t[0] * dis] === undefined ||
            newBoard[y + t[0] * dis][x + t[1] * dis] === undefined
          ) {
            break;
          } else if (newBoard[y + t[0] * dis][x + t[1] * dis] === 0) {
            break;
          } else if (newBoard[y + t[0] * dis][x + t[1] * dis] === turnColor) {
            for (let i = dis; i >= 0; i--) {
              newBoard[y + t[0] * i][x + t[1] * i] = turnColor;
            }
            break;
          } else if (newBoard[y + t[0] * dis][x + t[1] * dis] === 3 - turnColor) {
            //
          }
        }
      }
    }

    setBoard(newBoard);

    // .turnクラスの文字を変更する
    if (turnColor === 1) {
      setTurnColor(2);
      document.getElementsByClassName(styles.turn)[0].innerHTML = '白のターン';
    }
    if (turnColor === 2) {
      setTurnColor(1);
      document.getElementsByClassName(styles.turn)[0].innerHTML = '黒のターン';
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.turn}>黒のターン</div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  //style={{ background: color === 1 ? '#000' : '#fff' }}
                  //-1 なら黄色 1 なら黒 2 なら白
                  style={{ background: color === -1 ? '#ff0000' : color === 1 ? '#000' : '#fff' }}
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
