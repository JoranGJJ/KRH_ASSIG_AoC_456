export default interface ICoordinate {
  getXCoordinate(): number;

  getYCoordinate(): number;

  getCoordinate(): ICoordinate;
}
