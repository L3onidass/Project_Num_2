// L3van
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];
const country = "Egypt";

const checkCountry = function (country, countries) {
  for (let index = 0; index < countries.length; index++) {
    if (countries[index] === country) {
      console.log(
        `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${countries.indexOf(
          country
        )}`
      );
      break;
    } else if (country == "" || typeof country !== "string") {
      console.log(`Zadali jste neplatný dotaz: ${country}`);
      break;
    } else if (countries.includes(country) === false) {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin`);
      break;
    }
  }
  return;
};

checkCountry(country, countries);
