const endpoint = "https://nekos.best/api/v2";

function getNekos(category, amount = 10) {
  return fetch(`${endpoint}/${category}?amount=${amount}`, {
    mode: "cors",
  })
    .then((result) => result.json())
    .then((result) => result.results);
}

function searchNekos(query, imageFormat = 1, amount = 10) {
  return fetch(
    `${endpoint}/search?query=${query}&type=${imageFormat}&amount=${amount}`,
    {
      mode: "cors",
    }
  )
    .then((result) => result.json())
    .then((result) => result.results)
    .catch((error) => console.log(error));
}

export { getNekos, searchNekos };
