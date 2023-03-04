const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

const popPercentage = function (population, populationTotal) {
  let cal = (population / populationTotal) * 100;
  return cal.toFixed(2);
};

const copyCountries = countriesPopulation.slice();
copyCountries.sort(function (x, y) {
  return x.population - y.population;
});

copyCountries.forEach(function (item, index) {
  item.id = item.country.substring(0, 3) + index;
  item.percentage = popPercentage(item.population, populationTotal);
});

console.log(copyCountries);

const filteredCountries = copyCountries.filter(
  (item) =>
    item.country.length > 4 &&
    item.country.length <= 8 &&
    item.percentage > 1.5 &&
    item.percentage < 10
);

console.log(filteredCountries);
