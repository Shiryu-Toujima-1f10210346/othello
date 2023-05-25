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
      /*ここから左上 */
      for (let i = 1; i < 8; i++) {
        if (y - i >= 0 && x - i >= 0) {
          if (newBoard[y - i][x - i] === turnColor || newBoard[y - i][x - i] === 0) {
            break;
          } else if (newBoard[y - i][x - i] !== turnColor && newBoard[y - i][x - i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y - j >= 0 && x - j >= 0) {
                if (newBoard[y - j][x - j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y - j][x - j] === turnColor) {
                  console.log('${j}LT');
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y - k][x - k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで左上 */
      /*ここから上 */
      for (let i = 1; i < 8; i++) {
        if (y - i >= 0) {
          if (newBoard[y - i][x] === turnColor || newBoard[y - i][x] === 0) {
            break;
          } else if (newBoard[y - i][x] !== turnColor && newBoard[y - i][x] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y - j >= 0) {
                if (newBoard[y - j][x] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y - j][x] === turnColor) {
                  console.log(`${j}T`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y - k][x] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで上 */

      /*ここから右上 */
      for (let i = 1; i < 8; i++) {
        if (y - i >= 0 && x + i <= 7) {
          if (newBoard[y - i][x + i] === turnColor || newBoard[y - i][x + i] === 0) {
            break;
          } else if (newBoard[y - i][x + i] !== turnColor && newBoard[y - i][x + i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y - j >= 0 && x + j <= 7) {
                if (newBoard[y - j][x + j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y - j][x + j] === turnColor) {
                  console.log(`${j}RT`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y - k][x + k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで右上 */

      /*ここから左 */
      for (let i = 1; i < 8; i++) {
        if (x - i >= 0) {
          if (newBoard[y][x - i] === turnColor || newBoard[y][x - i] === 0) {
            break;
          } else if (newBoard[y][x - i] !== turnColor && newBoard[y][x - i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (x - j >= 0) {
                if (newBoard[y][x - j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y][x - j] === turnColor) {
                  console.log(`${j}L`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y][x - k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで左 */

      /*ここから右 */
      for (let i = 1; i < 8; i++) {
        if (x + i <= 7) {
          if (newBoard[y][x + i] === turnColor || newBoard[y][x + i] === 0) {
            break;
          } else if (newBoard[y][x + i] !== turnColor && newBoard[y][x + i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (x + j <= 7) {
                if (newBoard[y][x + j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y][x + j] === turnColor) {
                  console.log(`${j}R`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y][x + k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで右 */

      /*ここから左下 */
      for (let i = 1; i < 8; i++) {
        if (y + i <= 7 && x - i >= 0) {
          if (newBoard[y + i][x - i] === turnColor || newBoard[y + i][x - i] === 0) {
            break;
          } else if (newBoard[y + i][x - i] !== turnColor && newBoard[y + i][x - i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y + j <= 7 && x - j >= 0) {
                if (newBoard[y + j][x - j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y + j][x - j] === turnColor) {
                  console.log(`${j}LB`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y + k][x - k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで左下 */

      /*ここから下 */
      for (let i = 1; i < 8; i++) {
        if (y + i <= 7) {
          if (newBoard[y + i][x] === turnColor || newBoard[y + i][x] === 0) {
            break;
          } else if (newBoard[y + i][x] !== turnColor && newBoard[y + i][x] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y + j <= 7) {
                if (newBoard[y + j][x] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y + j][x] === turnColor) {
                  console.log(`${j}B`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y + k][x] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで下 */

      /*ここから右下 */
      for (let i = 1; i < 8; i++) {
        if (y + i <= 7 && x + i <= 7) {
          if (newBoard[y + i][x + i] === turnColor || newBoard[y + i][x + i] === 0) {
            break;
          } else if (newBoard[y + i][x + i] !== turnColor && newBoard[y + i][x + i] !== 0) {
            let isValidMove = true;
            for (let j = 2; j < 7; j++) {
              if (y + j <= 7 && x + j <= 7) {
                if (newBoard[y + j][x + j] === 0) {
                  isValidMove = false;
                  break;
                } else if (newBoard[y + j][x + j] === turnColor) {
                  console.log(`${j}RB`);
                  for (let k = j - 1; k > 0; k--) {
                    newBoard[y + k][x + k] = turnColor;
                  }
                  break;
                }
              }
            }
            if (isValidMove) {
              break;
            }
          }
        }
      }
      /*ここまで右下 */

      setBoard(newBoard);
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
