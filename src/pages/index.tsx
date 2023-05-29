import { useState } from 'react';
import styles from './index.module.css';
// aaa
const Home = () => {
  const [turnColor, setTurnColor] = useState(1); // 1: 黒, 2: 白
  const [board, setBoard] = useState([
    /*
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 0, -1, -1, -1],
    [-1, -1, -1, 1, 2, 0, -1, -1],
    [-1, -1, 0, 2, 1, -1, -1, -1],
    [-1, -1, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],*/

    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [1, 2, 0, -1, -1, -1, -1, -1],
    [1, 2, 0, -1, -1, -1, -1, -1],
  ]);
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));

    if (newBoard[y][x] === 0) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;

      //ひっくり返し処理
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

      // おけるマスを0にする
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
      let pass = true;
      for (let a = 0; a < 8; a++) {
        for (let b = 0; b < 8; b++) {
          let checked = false;
          if (newBoard[a][b] === 1 || newBoard[a][b] === 2) {
            //白か黒はスキップ
            //console.log(b, a, 'は白か黒');
            continue;
          }
          for (const t of direction) {
            if (
              //見た方向が→
              newBoard[a + t[0]] === undefined || //枠外ならスキップ
              newBoard[a + t[0]][b + t[1]] === undefined || //枠外ならスキップ
              newBoard[a + t[0]][b + t[1]] === -1 || //不可マスならスキップ
              newBoard[a + t[0]][b + t[1]] !== turnColor //自分の色ならスキップ
            ) {
              //console.log(b, a, t, '方向はスキップ');
              continue;
            } else if (newBoard[a + t[0]][b + t[1]] === 0) {
              //空白マスならスキップ
              pass = false;
              continue;
            } else {
              //見た方向が自分の色じゃないなら
              for (let c = 2; c < 7; c++) {
                if (
                  newBoard[a + t[0] * c] === undefined || //枠外ならスキップ
                  newBoard[a + t[0] * c][b + t[1] * c] === undefined || //枠外ならスキップ
                  newBoard[a + t[0] * c][b + t[1] * c] === 0 || //空白マスならスキップ
                  newBoard[a + t[0] * c][b + t[1] * c] === -1 //不可マスならスキップ
                ) {
                  continue;
                } else if (newBoard[a + t[0] * c][b + t[1] * c] !== turnColor) {
                  //console.log(b, a, 'は置けます');
                  newBoard[a][b] = 0;
                  pass = false;
                  checked = true;
                  break;
                }
              }
            }
          }

          if (checked === false) {
            //console.log(b, a, 'は置けません');
            newBoard[a][b] = -1;
          }
        }
        // pass
      }
      if (pass) {
        setTurnColor(3 - turnColor);
        console.log(turnColor, 'パス');
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
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.turn}>黒のターン</div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              <div
                className={styles.stone}
                style={{
                  background:
                    color === -1
                      ? 'transparent'
                      : color === 1
                      ? '#000'
                      : color === 2
                      ? '#fff'
                      : 'blue',
                  height: color === 0 ? '30%' : '80%',
                  width: color === 0 ? '30%' : '80%',
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
