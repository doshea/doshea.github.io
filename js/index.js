function hide_modal(){
  $('#modal-cover').fadeOut(4000);
  oblivion.play();
}

$(document).ready(function(){
  var oblivion = $('#oblivion').get(0);
  oblivion.volume = 0.4; //it is a loud song

  $('button').on('mousedown', function(){
    hide_modal();
  })

})