import IVentMapper from "./interfaces/IVentMapper";
class VentMapper implements IVentMapper {
  private ventMap = new Map<string, number>();

  private minTwoVentPointCount = 0;
  private twoVentsCoordinates: Array<string> = [];

  public startMapping(yourGameChoice: string, data: Array<Array<string>>): void {
    data.forEach((coordinates) => {
      const mapKeys: Array<string> = this.extractCoordinatesFromPath(yourGameChoice, coordinates);
      this.updateVentMapAndCount(mapKeys);
    });
  }

  private extractCoordinatesFromPath(yourGameChoice: string, coordinates: Array<string>): Array<string> {
    const tailXY: Array<string> = coordinates[0].split(",");
    const headXY: Array<string> = coordinates[1].split(",");

    if (tailXY[0] === headXY[0]) {
      // vertical vent
      const delta = Number(tailXY[1]) - Number(headXY[1]);
      if (delta < 0) {
        // arrow down
        return this.deriveMissingCoordinates(delta, tailXY[1], tailXY[0], "v");
      } else if (delta > 0) {
        // arrow up
        return this.deriveMissingCoordinates(delta, headXY[1], headXY[0], "v");
      }
    } else if (tailXY[1] === headXY[1]) {
      // is horizontal vent
      const delta = Number(tailXY[0]) - Number(headXY[0]);
      if (delta < 0) {
        // arrow to the right
        return this.deriveMissingCoordinates(delta, tailXY[0], tailXY[1], "h");
      } else if (delta > 0) {
        // arrow to the left;
        return this.deriveMissingCoordinates(delta, headXY[0], headXY[1], "h");
      }
    } else if (yourGameChoice === "incl. diagonals") {
      // diagonal vent
      const deltaX = Number(tailXY[0]) - Number(headXY[0]);
      const deltaY = Number(tailXY[1]) - Number(headXY[1]);
      if (deltaX < 0 && deltaY < 0) {
        // down right
        return this.deriveMissingDiagonalCoordinates(deltaX, tailXY[0], tailXY[1], "dr");
      } else if (deltaX < 0 && deltaY > 0) {
        // up right
        return this.deriveMissingDiagonalCoordinates(deltaX, tailXY[0], tailXY[1], "ur");
      } else if (deltaX > 0 && deltaY < 0) {
        // up left
        return this.deriveMissingDiagonalCoordinates(deltaX, tailXY[0], tailXY[1], "dl");
      } else if (deltaX > 0 && deltaY > 0) {
        // down left
        return this.deriveMissingDiagonalCoordinates(deltaX, tailXY[0], tailXY[1], "ul");
      }
    }
    return [];
  }

  private deriveMissingDiagonalCoordinates(
    deltaX: number,
    tailX: string,
    tailY: string,
    orientation: string
  ): Array<string> {
    const coordinates: Array<string> = [];
    for (let i = 0; i < Math.abs(deltaX) + 1; i++) {
      if (orientation === "ur") {
        coordinates.push((Number(tailX) + i).toString() + "," + (Number(tailY) - i));
      } else if (orientation === "dr") {
        coordinates.push((Number(tailX) + i).toString() + "," + (Number(tailY) + i));
      } else if (orientation === "ul") {
        coordinates.push((Number(tailX) - i).toString() + "," + (Number(tailY) - i));
      } else if (orientation === "dl") {
        coordinates.push((Number(tailX) - i).toString() + "," + (Number(tailY) + i));
      }
    }
    return coordinates;
  }

  private deriveMissingCoordinates(
    delta: number,
    axisValueToIncrement: string,
    steadyAxisValue: string,
    orientation: string
  ): Array<string> {
    const keyCoordinates: Array<string> = [];
    for (let i = 0; i < Math.abs(delta) + 1; i++) {
      if (orientation === "v")
        keyCoordinates.push(steadyAxisValue + "," + (Number(axisValueToIncrement) + i).toString());
      else keyCoordinates.push((Number(axisValueToIncrement) + i).toString() + "," + steadyAxisValue);
    }
    return keyCoordinates;
  }

  private updateVentMapAndCount(keys: Array<string>) {
    keys.forEach((key) => {
      if (this.ventMap.has(key)) {
        if (this.ventMap.get(key)! === 1) {
          this.minTwoVentPointCount += 1;
          this.twoVentsCoordinates.push(key);
          this.ventMap.set(key, 2);
        } else {
          this.ventMap.set(key, this.ventMap.get(key)! + 1);
        }
      } else {
        this.ventMap.set(key, 1);
      }
    });
  }

  public printTwoVentCount(): void {
    console.log(
      `The number of ocean floor coordinates where at least two vents colide is: ${this.minTwoVentPointCount}`
    );
  }

  public printTwoVentsCoordinates(): void {
    console.log(this.twoVentsCoordinates);
  }
}

export default new VentMapper();
