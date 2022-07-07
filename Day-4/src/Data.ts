import path from "path";
import fs from "fs";
import IData from "./interfaces/IData";

class Data implements IData {
  private FILE_NAME: string = "input-day-4.txt";

  private stringArray: Array<string> = new Array();

  constructor() {
    this.importData();
  }

  private importData() {
    const data = fs.readFileSync(path.join(__dirname, this.FILE_NAME), { encoding: "utf8", flag: "r" });
    this.stringArray = data.toString().replace(/\r\n/g, "\n").split("\n");
  }

  public getData(): Array<string> {
    return this.stringArray;
  }
}

export default new Data();
