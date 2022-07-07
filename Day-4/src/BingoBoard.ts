import ICoordinate from "./interfaces/ICoordinate";
import IBingoBoard from "./interfaces/IBingoBoard";

class BingoBoard implements IBingoBoard {
  private boardMap: Map<string, ICoordinate> = new Map<string, ICoordinate>();

  private columnRowCount: Array<number> = new Array(10).fill(0);

  private numbersDrawn: Array<string> = new Array();

  private winningInfo!: string;

  private bingoChamp: boolean = false;

  public updateBoardAndCheckIfWinner(nr: string, coordinate: ICoordinate): boolean {
    const x: number = coordinate.getXCoordinate();
    const y: number = coordinate.getYCoordinate();
    this.numbersDrawn.push(nr);

    if (this.isWinner(x, y)) {
      this.updateColumnRowCount(x, y);
      return true;
    }
    this.updateColumnRowCount(x, y);
    return false;
  }

  private updateColumnRowCount(x: number, y: number) {
    this.columnRowCount[x] += 1;
    this.columnRowCount[y + 5] += 1;
  }

  private isWinner(x: number, y: number): boolean {
    if (this.columnRowCount[x] === 4 && this.columnRowCount[y + 5] === 4) {
      this.winningInfo = `\n### Won by horizontal: index ${y}, and vertical column index: ${x} ####`;
      this.bingoChamp = true;
      return true;
    } else if (this.columnRowCount[y + 5] === 4) {
      this.winningInfo = `\n### Won by horizontal: index ${y} ###`;
      this.bingoChamp = true;
      return true;
    } else if (this.columnRowCount[x] === 4) {
      this.winningInfo = `\n### Won by vertical: index ${x} ###\n`;
      this.bingoChamp = true;
      return true;
    }
    return false;
  }

  public getBoardMap(): Map<string, ICoordinate> {
    return this.boardMap;
  }

  public getNumbersDrawn(): Array<string> {
    return this.numbersDrawn;
  }

  public getColumnRowCount(): Array<number> {
    return this.columnRowCount;
  }

  public setBoardMap(boardData: Map<string, ICoordinate>) {
    this.boardMap = boardData;
  }

  public getWinningInfo(): string {
    return this.winningInfo;
  }

  public isBingoChamp(): boolean {
    return this.bingoChamp;
  }
}

export default BingoBoard;
