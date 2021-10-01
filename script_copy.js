function calculate() {
  /*   fetch('https://spathcors.herokuapp.com/items.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: 6, text: 'Item Six' }),
  }); */
  fetch('./items.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

calculate();
