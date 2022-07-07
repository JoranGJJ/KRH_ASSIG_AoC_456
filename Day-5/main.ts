import Data from "./src/Data";
import VentMapper from "./src/VentMapper";

const inputData: Array<Array<string>> = Data.getData();

const gameVersions = {
  A: "excl. diagonals",
  B: "incl. diagonals",
};

const yourGameChoice = gameVersions.B;

VentMapper.startMapping(yourGameChoice, inputData);
VentMapper.printTwoVentCount();
// VentMapper.printTwoVentsCoordinates();
