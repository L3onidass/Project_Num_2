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

let checkCountry = function (country, countries) {
  if (country == "" || typeof country !== "string") {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
  } else if (countries.indexOf(country) !== -1) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${countries.indexOf(
        country
      )}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }

  return;
};

// *****Second part - Add function*****

let addCountry = function (country, countries) {
  if (country == "" || typeof country !== "string") {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
  } else if (countries.indexOf(country) === -1) {
    countries.push(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Celkový počet krajin v seznamu je ${countries.length}`
    );
  } else {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${countries.indexOf(
        country
      )}`
    );
  }

  return;
};

// *****Third part - Remove function *****

let removeCountry = function (country, countries) {
  if (country == "" || typeof country !== "string") {
    console.log(`Zadali jste neplatný dotaz: ${country}.`);
  } else if (countries.indexOf(country) !== -1) {
    countries.splice(countries.indexOf(country), 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu  ${countries.indexOf(
        country
      )}. Aktuální počet krajin v seznamu je ${countries.length}`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
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
