var TRACK_DURATION = 277.565;
var current_track;
var oblivion;
var noivilbo;


function reverse_oblivion(){
  var last_track = current_track;
  var new_time = TRACK_DURATION - last_track.currentTime;
  if (current_track == oblivion){
    current_track = noivilbo;
  } else {
    current_track = oblivion;
  }
  current_track.currentTime = new_time;
  current_track.play();
  last_track.pause();
}

function hide_modal(){
  $('#modal-cover').fadeOut(4000);
  oblivion.play();
}

$(document).ready(function(){
  var s = skrollr.init();
  
  oblivion = $('#oblivion').get(0);
  noivilbo = $('#reverse').get(0);
  current_track = oblivion;

  oblivion.volume = 0.4; //it is a loud song
  noivilbo.volume = 0.4; //it is a loud song

  $('button').on('mousedown', function(){
    hide_modal();
  })

})