window.onload = function() {
  console.log("Loaded, bro.");
  const container = document.getElementById('container')

// --i need 2 for loops-
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const row = document.createElement('div');
      row.classList.add('pixel');
      container.appendChild(row);
    }
  }

}
