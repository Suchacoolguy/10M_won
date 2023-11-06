import * as fs from "fs";
const fn = "./localSetting.json";

export function saveSetting(content, path = fn) {
  for (let i in content) {
    var data = readSetting();
    data[i] = content[i];
    fs.writeFileSync(path, JSON.stringify(data));
  }
  console.log(data);
}

export function readSetting() {
  try {
    setting = JSON.parse(fs.readFileSync(fn, "utf8"));
  } catch {
    let defaultSetting = {
      timezone: "seoul",
      category: "most",
      keyword: "-",
      user: "student",
    };
    fs.writeFileSync(fn, JSON.stringify(defaultSetting));
    setting = JSON.parse(fs.readFileSync(fn, "utf8"));
  }
  return setting;
}
