const csv = require("csvtojson");
const path = require("path");
// const csvFilePath = "yield.csv";
const csvFilePath = "swaptionvolmtx.csv";

const swapoptionTitle = (() => {
  let maturity = "";
  let volatility = "";
  for (let i = 0; i < 22; i++) {
    maturity += `,Volatilities.${i}.Maturity`;
    volatility += `,Volatilities.${i}.Volatility`;
  }

  return `${maturity}${volatility}`;
})();

csv()
  .preRawData((csvRawData) => {
    const newData = csvRawData.replace(",Maturity,Volatility", swapoptionTitle);
    console.log("csvRawData =>", newData);
    return newData;
  })
  .fromFile(path.resolve(__dirname, csvFilePath))
  .then((jsonObj) => {
    console.log(JSON.stringify(jsonObj, null, 2));
  });
