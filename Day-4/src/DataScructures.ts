import IDataStructures from "./interfaces/IDataStructures";
import BingoBoard from "./BingoBoard";
import ICoordinate from "./interfaces/ICoordinate";
import Coordinate from "./Coordinate";
import IBingoBoard from "./interfaces/IBingoBoard";

class DataStructures implements IDataStructures {
  private inputSequence: Array<string> = [];

  private bingoBoards: Array<IBingoBoard> = [];

  public setupDataStructures(data: Array<string>) {
    this.setupInputSequence(data);
    this.setupBingoBoardsMap(data);
  }

  private setupInputSequence(data: Array<string>) {
    const inputString: string = data[0];
    this.inputSequence = inputString.trim().split(",");
  }

  private setupBingoBoardsMap(data: Array<string>) {
    let bingoBoard = new BingoBoard();
    let boardMap = new Map<string, ICoordinate>();
    let yCounter = 0;
    for (let i = 2; i < data.length; i++) {
      if (data[i] !== "") {
        let tempArray = data[i].trim().split(/\s+/);
        for (let x = 0; x < tempArray.length; x++) {
          const coordinate = new Coordinate(x, yCounter);
          boardMap.set(tempArray[x], coordinate);
        }
        yCounter += 1;
      } else {
        this.addToBoardAndBoards(bingoBoard, boardMap);
        boardMap = new Map<string, ICoordinate>();
        bingoBoard = new BingoBoard();
        yCounter = 0;
      }
      if (i === data.length - 1) {
        this.addToBoardAndBoards(bingoBoard, boardMap);
      }
    }
  }

  private addToBoardAndBoards(bingoBoard: IBingoBoard, boardMap: Map<string, ICoordinate>) {
    bingoBoard.setBoardMap(boardMap);
    this.bingoBoards.push(bingoBoard);
  }

  public getInputSequence(): Array<string> {
    return this.inputSequence;
  }

  public getBingoBoards(): Array<IBingoBoard> {
    return this.bingoBoards;
  }
}

export default new DataStructures();
