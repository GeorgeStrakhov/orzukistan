//vars
var omuz = {};
omuz.ready = false;
omuz.maxVolume = 1;

omuz.sounds = {
  'bass': {
      fileName: 'bass.ogg',
      isLoaded: false,
      zoomLevel: 3,
    },
  'piano1': {
      fileName: 'piano1.ogg',
      isLoaded: false,
      zoomLevel: 1,
    },
  'piano2': {
      fileName: 'piano2.ogg',
      isLoaded: false,
      zoomLevel: 3,
    },
  'dudka': {
      fileName: 'dudka.ogg',
      isLoaded: false,
      zoomLevel: 5,
    },
  'pad': {
      fileName: 'pad.ogg',
      isLoaded: false,
      zoomLevel: 0,
    },
  'guitar1': {
      fileName: 'guitar1.ogg',
      isLoaded: false,
      zoomLevel: 5,
    },
  'guitar2': {
      fileName: 'guitar2.ogg',
      isLoaded: false,
      zoomLevel: 4,
    },
  'drums': {
      fileName: 'drums.ogg',
      isLoaded: false,
      zoomLevel: 4,
    }
};

//init
$(document).ready(function(){
  console.log('doc ready. crancking up!');
  loadSounds();
});

//loaded listener
var startIfAllSoundsReady = function() {
  var ready = true;
  _.forEach(omuz.sounds, function(sval, sname) {
    if(!sval.isLoaded) {
      ready = false;
    };
  }); //end forEach
  if(ready) {
    omuz.ready = true;
    initPlayback();
  }
};

//load sounds
var loadSounds = function() {
  _.forEach(omuz.sounds, function(sval, sname) {
    omuz.sounds[sname].howl = new Howl({
      src: ['muz/'+sval.fileName],
      loop: true,
      onload: function() {
        omuz.sounds[sname].isLoaded = true;
        console.log('Loaded: '+sname);
        startIfAllSoundsReady();
      }
    }); //end Howl
  }); //end forEach
};

//start playback
var initPlayback = function() {
  console.log('playback started!');
  _.forEach(omuz.sounds, function(sval, sname) {
    omuz.sounds[sname].howl.volume(0); //start everything muted
    omuz.sounds[sname].howl.play();
  });//end forEach
};

//mute all
omuz.stopMusic = function() {
  _.forEach(omuz.sounds, function(sval, sname) {
    omuz.sounds[sname].howl.volume(0); //start everything muted
  });//end forEach
};

//update music based on map frame
omuz.updateMusic = function(w) {
  _.forEach(omuz.sounds, function(sval, sname) {
    if(sval.zoomLevel <= w.zoom) {
      omuz.sounds[sname].howl.fade(omuz.sounds[sname].howl.volume(), omuz.maxVolume, 1000);
    } else {
      omuz.sounds[sname].howl.fade(omuz.sounds[sname].howl.volume(), 0.0, 1000);
    }
  }); //end forEach
};
