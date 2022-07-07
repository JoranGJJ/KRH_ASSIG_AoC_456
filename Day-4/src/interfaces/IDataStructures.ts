import IBingoBoard from "./IBingoBoard";

export default interface IDataStructures {
  setupDataStructures(data: Array<string>): void;

  getInputSequence(): Array<string>;

  getBingoBoards(): Array<IBingoBoard>;
}
