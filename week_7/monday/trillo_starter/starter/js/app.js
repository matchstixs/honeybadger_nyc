$(function() {

  $('.card').on('click', '.delete', removeCard);

  function removeCard () {
    $(this).parent().remove();
  }
// I want cards in the done column to disappear when I click them, so I can keep my done column compact.

  $('card').on('click', '.finish', moveCard);

  function moveCard() {
    const $fam = $this.parent()
    $fam.prependTo('#done-column .card-list');
    $(this).remove();
  }
// I want cards in the to do column to move to the done column when I click them, so I can keep track of my progress




// I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list

});
