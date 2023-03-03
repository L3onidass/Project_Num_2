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

// *****First part - Check function*****

const checkCountry = function (country, countries) {
  for (let index = 0; index < countries.length; index++) {
    if (countries[index] === country) {
      console.log(
        `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${countries.indexOf(
          country
        )}.`
      );
      break;
    } else if (country == "" || typeof country !== "string") {
      console.log(`Zadali jste neplatný dotaz: ${country}.`);
      break;
    } else if (countries.includes(country) === false) {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
      break;
    }
  }
  return;
};

// *****Second part - Add function*****

const addCountry = function (country, countries) {
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
      countries.push(country);
      console.log(
        `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${countries.indexOf(
          country
        )}. Celkový počet krajin v seznamu je ${countries.length}`
      );
      break;
    }
  }
  return;
};

// *****Third part - Remove function *****

const removeCountry = function (country, countries) {
  for (let index = 0; index < countries.length; index++) {
    if (countries[index] !== country) {
      console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin`);
      break;
    } else if (country === "" || typeof country !== "string") {
      console.log(`Zadali jste neplatný dotaz: ${country}`);
      break;
    } else if (countries.includes(country) === true) {
      countries.splice(countries.indexOf(country), 1);

      console.log(
        `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu  ${countries.indexOf(
          country
        )}. Aktuální počet krajin v seznamu je ${countries.length}`
      );
      console.log(countries);
      break;
    }
  }
  return;
};

// ***** Extras *****

const choice = prompt(
  "Vítejte v aplikaci pro správu krajin. Vyberte si jeden z následujících pokynů: check - kontrola krajiny, add - přidání krajiny, remove - odstranit krajinu."
);

if (choice === "check") {
  let country = prompt(
    "Vybral jste příkaz Check. Zadejte krajinu kterou chcete zkontrolovat."
  );
  checkCountry(country, countries);
} else if (choice === "add") {
  let country = prompt(
    "Vybral jste příkaz add. Zadejte krajinu kterou chcete přidat."
  );
  addCountry(country, countries);
} else if (choice === "remove") {
  let country = prompt(
    "Vybral jste příkaz remove. Zadejte krajinu kterou chcete odstranit."
  );
  removeCountry(country, countries);
} else {
  console.log("Vybral jste neplatný pokyn.");
}
