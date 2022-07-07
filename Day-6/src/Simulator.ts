import ISimulator from "./interfaces/ISimulator";

class Simulator implements ISimulator {
  private days = 0;
  private amountOfFish = 0;
  private currentState: Array<number> = new Array(9).fill(0);
  private nextDayState: Array<number> = new Array(9).fill(0);

  public prepareDataStructures(inputData: Array<number>): void {
    inputData.forEach((fishDays) => (this.currentState[fishDays] += 1));
  }

  public startSimulation(timeInDays: number) {
    this.days = timeInDays;
    for (let i = 0; i < this.days; i++) {
      for (let j = 0; j < this.currentState.length; j++) {
        if (j === 0) {
          this.nextDayState[6] = this.nextDayState[6] + this.currentState[j];
          this.nextDayState[8] = this.nextDayState[8] + this.currentState[j];
        } else {
          this.nextDayState[j - 1] = this.nextDayState[j - 1] + this.currentState[j];
        }
      }
      this.currentState = this.nextDayState;
      this.nextDayState = new Array(9).fill(0);
    }
    this.calculateAmountOfFish();
  }

  private calculateAmountOfFish(): void {
    this.currentState.forEach((numberOfFish) => {
      this.amountOfFish += numberOfFish;
    });
  }

  public printResult(): void {
    console.log(`The amount of lanternfish after ${this.days} days is: ${this.amountOfFish}`);
  }
}

export default new Simulator();
