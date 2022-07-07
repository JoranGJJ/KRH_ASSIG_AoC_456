import IGame from "./interfaces/IGame";
import IDataStructures from "./interfaces/IDataStructures";
import IBingoBoard from "./interfaces/IBingoBoard";

class Game implements IGame {
  public playGame(yourGameChoice: string, dataStructures: IDataStructures) {
    let isWinner = false;
    let drawCount = 0;
    let lastNr: string;
    let lastBoard: IBingoBoard;
    let lastDrawCount = 0;

    dataStructures.getInputSequence().every((nr) => {
      drawCount += 1;
      if (isWinner) return false;

      dataStructures.getBingoBoards().every((board) => {
        if (isWinner) return false;
        const coordinates = board.getBoardMap().get(nr);

        if (board.isBingoChamp() === false && coordinates?.getCoordinate() !== undefined) {
          if (board.updateBoardAndCheckIfWinner(nr, coordinates.getCoordinate())) {
            if (yourGameChoice === "last win") {
              lastNr = nr;
              lastBoard = board;
              lastDrawCount = drawCount;
            } else {
              this.announceWinner(drawCount, nr, board);
              isWinner = true;
            }
          }
        }
        return true;
      });
      return true;
    });

    if (yourGameChoice === "last win") {
      this.announceWinner(lastDrawCount, lastNr!, lastBoard!);
    }
  }

  private announceWinner(drawCount: number, nr: string, board: IBingoBoard) {
    console.log(`### We have a winner at draw ${drawCount} with # ${nr}.###`);
    console.log(board.getWinningInfo());
    const score = this.getScore(nr, board);
    console.log(`Score: ${score}\n`);
  }

  private getScore(nr: string, board: IBingoBoard): number {
    let undrawnNumbersSum = 0;
    let count = 0;
    let tempArray: Array<string> = [];
    let counterrr = 0;
    Array.from(board.getBoardMap().keys(), (k) => {
      counterrr += 1;
      if (count < 5) {
        tempArray.push(k);
        count += 1;
      } else {
        console.log(tempArray);
        tempArray = [];
        tempArray.push(k);
        count = 1;
      }
      if (this.isUndrawnNumber(board, k)) {
        undrawnNumbersSum += Number(k);
      }
    });
    console.log(tempArray, "\n");
    return undrawnNumbersSum * Number(nr);
  }

  private isUndrawnNumber(board: IBingoBoard, k: string): boolean {
    return board.getNumbersDrawn().indexOf(k) === -1;
  }
}

export default Game;
