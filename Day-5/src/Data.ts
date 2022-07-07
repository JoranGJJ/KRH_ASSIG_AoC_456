import path from "path";
import fs from "fs";
import IData from "./interfaces/IData";

class Data implements IData {
  private FILE_NAME: string = "input-day-5.txt";

  private data: Array<Array<string>> = [[]];

  constructor() {
    this.importData();
  }

  private importData() {
    const data = fs.readFileSync(path.join(__dirname, this.FILE_NAME), { encoding: "utf8", flag: "r" });
    const rowsArray = data.toString().replace(/\r\n/g, "\n").split("\n");
    this.data = rowsArray.map((row: string) => row.split(" -> "));
  }

  public getData(): Array<Array<string>> {
    return this.data;
  }
}

export default new Data();
