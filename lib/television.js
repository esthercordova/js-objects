'use strict';
//When we interact with a TV, there's a short list of things that we
//typically do:
//turn it on/off (toggle power)
//increase or decrease the volume
//increase or decrease the channel
//In addition, there are a number of other features of the TV that
//might interest us:

//is it a plasma/LCD/LED TV?
//what's the resolution?
//how much power does it consume?
//How could we model this in JavaScript? In your squads,
//take ten minutes and write out a JavaScript object that
//represents all of the features and behaviors of a TV listed above.


let television = {
  volume: 10,
  isOn: true,
  currentChannel: 8,
  resolutionInPixels: 1080,
  powerConsumptionInKiloWatts: 300,

  togglePower: function(){
    if(this.isOn){
      this.isOn = false;
    } else {
      this.inOn = true;
    }
  },
  changeVolume: function(upOrDown) {
    if(upOrDown === 'up'){
      this.volume +=1;
    }
    else if(upOrDown === 'down') {
      this.volume -=1;
    }
    else if(upOrDown === 'mute'){
      this.volume = 0;
    }
    else {
      console.log("That's not a valid input. Please type 'up', 'down', or mute.");
    }
  },
  changeChannel: function(channelNumber) {
    this.currentChannel = channelNumber;

  },
}
