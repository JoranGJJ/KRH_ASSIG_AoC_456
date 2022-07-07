import ICoordinate from "./interfaces/ICoordinate";

class Coordinate implements ICoordinate {
  private x: number = 0;
  private y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getCoordinate = (): ICoordinate => {
    return new Coordinate(this.x, this.y);
  };

  public getXCoordinate = (): number => {
    return this.x;
  };

  public getYCoordinate(): number {
    return this.y;
  }
}

export default Coordinate;
