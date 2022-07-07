import IDataStructures from "./IDataStructures";

export default interface IGame {
  playGame(yourGameChoice: string, dataStructures: IDataStructures): void;
}
