import path from "path";
import fs from "fs";
import IData from "./interfaces/IData";
class Data implements IData {
  private FILE_NAME: string = "input-day-6.txt";

  private data: Array<number> = [];

  constructor() {
    this.importData();
  }

  private importData() {
    const fileData = fs.readFileSync(path.join(__dirname, this.FILE_NAME), { encoding: "utf8", flag: "r" });
    const arrayWithStrings = fileData.toString().split(",");
    this.data = arrayWithStrings.map(Number);
  }

  public getData(): Array<number> {
    return this.data;
  }
}

export default new Data();
