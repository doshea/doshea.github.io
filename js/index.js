function hide_modal(){
  $('#modal-cover').fadeOut(4000);
  oblivion.play();
}

$(document).ready(function(){
  var oblivion = $('#oblivion').get(0);

  $('button').on('mousedown', function(){
    hide_modal();
  })

})