function calculate() {
  /*   fetch('items.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }); */
  fetch('./items.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

calculate();
