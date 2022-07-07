export default interface IVentMapper {
  startMapping(yourGameChoice: string, data: Array<Array<string>>): void;

  printTwoVentCount(): void;

  printTwoVentsCoordinates(): void;
}
