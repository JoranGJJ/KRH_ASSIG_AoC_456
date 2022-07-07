import Data from "./src/Data";
import DataStructures from "./src/DataScructures";
import Game from "./src/Game";

const gameVersions = {
  A: "first win",
  B: "last win",
};

const yourGameChoice = gameVersions.B;

const inputData: Array<string> = Data.getData();
DataStructures.setupDataStructures(inputData);
new Game().playGame(yourGameChoice, DataStructures);
