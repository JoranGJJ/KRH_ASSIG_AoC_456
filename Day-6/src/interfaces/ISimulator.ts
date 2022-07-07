export default interface ISimulator {
  prepareDataStructures(inputData: Array<number>): void;

  startSimulation(days: number): void;

  printResult(): void;
}
