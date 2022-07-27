const endpoint = "https://nekos.best/api/v2";

function getNekos(category, amount = 5) {
  return fetch(`${endpoint}/${category}?amount=${amount}`, {
    mode: "cors",
  })
    .then((result) => result.json())
    .then((result) => result.results);
}

export { getNekos };
