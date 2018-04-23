window.onload = function() {

  const finishButton = document.querySelectorAll('.finish');
  for (let i = 0; i < finishButton.length; i++) {
    addfinishButtonLister(finishButton[i]);

  function addfinishButtonLister(node) {
    node.addEventListener('click', function() {
      const parentNode = this.parentNode;
      // this.remove();
      parentNode.remove();
      parentNode.classList.remove('todo');
      parentNode.classList.add('.card.done');
    })
  }
}
// console.log(parentNode.children[2])

  const removeList = document.querySelectorAll('.delete');
  for (let i = 0; i < removeList.length; i++) {
    addRemoveListerner(removeList[i]);
  }

  function addRemoveListerner(node) {
    node.addEventListener('click', function() {
      this.parentNode.remove();
    })
  }

  const addCardButton = document.querySelector('#new-card-button');
  const newLi = document.createElement('li');
    addCardListener(addCardButton);

  function addCardListener(node) {
    const addCardButton = document.querySelector('#new-card-button');
    const text = document.getElementById('new-card-text');
    const newLi = document.createElement('li');
    node.addEventListener('click', function() {      
      const parentNode = document.getElementById('todo-column');
      const value = document.querySelector('#new-card-text').value;
      newLi.innerHTML = value;
      parentNode.children[1].appendChild(newLi)
    // new li needs to take the value of input   
      newLi.classList.add('todo');
      newLi.classList.add('card');     
        // //adds li to todo classList
      const checkList1 = document.createElement('span');
      checkList1.innerText = "X"
      checkList1.classList.add('delete');  
      
      // //new li needs to be added to completed span
      const checkList2 = document.createElement('span');
      checkList2.innerText = 'Finish';
      checkList2.classList.add('finish');
      // //new li needs to be added to finish span
      newLi.appendChild(checkList1);
      newLi.appendChild(checkList2)

      })
  }

}
