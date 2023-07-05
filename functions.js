const superheros = [
  {
    name: "IronMan",
    date: "03/01/1963",
  },
  {
    name: "SpiderMan",
    date: "03/07/1961",
  },
  {
    name: "Captain America",
    date: "03/08/1941",
  },
  {
    name: "Doctor Strange",
    date: "07/20/1963",
  },
  {
    name: "Shang-Chi",
    date: "12/05/1973",
  },
];

function getSortedSuperheros(heros) {
  // your code goes here
  heros.sort((a, b) => {
    const firstDate = new Date(a.date).valueOf();
    const secondDate = new Date(b.date).valueOf();

    return firstDate - secondDate;
  });

  return heros;
}

console.log(getSortedSuperheros(superheros));

function specialLogs(interval) {
  // your code goes here
  function specialLogs(interval) {
    let count = 0;
    const intervalCounter = setInterval(() => {
      count++;
      console.log(count);

      if (count === 10) {
        clearInterval(intervalCounter);
      }
    }, interval);
  }
}
