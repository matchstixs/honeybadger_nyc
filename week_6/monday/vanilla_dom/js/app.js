window.onload = function(){
  const title = document.getElementsByTagName('title');
  //* Access the page title

  const awesomeList = document.getElementById('awesome-list');
  //* Access the list

  const newLi = document.createElement('li');
  newLi.classList.add('awesome-list-item');
  newLi.innerHTML = 'Hi';
  awesomeList.appendChild(newLi);
  //* Add a fourth item to the list

  const image = document.getElementById('image-container');
  image.remove();
  document.body.appendChild(image);
  //* Move the image to after the list
  //
  title.classList.add('red');
  red.style.color = 'red';
  //* Make the page title red (by adding a class to the page title)

  awesomeList.style.color = 'blue';
  //* Make the list items blue (add classes to each list item, not to the ul element)

  document.getElementById('description').style.color = 'green';
  //* Make the description green


  const page-footer = document.createElement('id')
  page-footer.style.color = 'red'
  //* Add a red footer paragraph to the page with the id "page-footer"
}
