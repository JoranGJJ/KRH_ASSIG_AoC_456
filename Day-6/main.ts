import Data from "./src/Data";
import Simulator from "./src/Simulator";

const inputData: Array<number> = Data.getData();

const simulationTimeInDays = 256;

Simulator.prepareDataStructures(inputData);
Simulator.startSimulation(simulationTimeInDays);
Simulator.printResult();
