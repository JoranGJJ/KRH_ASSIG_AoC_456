import ICoordinate from "./ICoordinate";

export default interface IBingoBoard {
  updateBoardAndCheckIfWinner(nr: string, coordinate: ICoordinate): boolean;

  getBoardMap(): Map<string, ICoordinate>;

  getNumbersDrawn(): Array<string>;

  getColumnRowCount(): Array<number>;

  setBoardMap(boardData: Map<string, ICoordinate>): any;

  getWinningInfo(): string;

  isBingoChamp(): boolean;
}
