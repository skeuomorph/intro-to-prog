//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	
	this.playbackButton = new PlaybackButton();

	this.mousePressed = function(x,y,size,moveX,moveY){
		if(!this.playbackButton.hitCheck() && vis.selectedVisual.name === "spectrum"){
			spectrums.push(x,y,size,moveX,moveY);
			if(spectrums.length > 15){
				spectrums.splice(0,5);
			}
		}
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		//enter key to show/hide menu
		if(keycode == 13){
			this.menuDisplayed = !this.menuDisplayed;
		}
		//select track with numberz
		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
		//space to start/stop
		if(keyCode == 32){
			if (sound.isPlaying()) {
    			sound.pause();
  			} else {
    			sound.loop();
  			}
  			this.playbackButton.playing = !this.playbackButton.playing;
		}
		//f for fullscreen
		if(keycode == 70){
			var fs = fullscreen();
			fullscreen(!fs);
		}
		//up arrow key to PUMP UP THE VOLUME
		if(keycode == 38){
			if(volume < 1){
				volume += 0.1;
				sound.setVolume(volume);
				console.log(volume);	
			}
		}
		// 1.3877787807814457e-16 ?????????? is a very special number
		//down arrow key to turn dat sh*te down
		if(keycode == 40){
			if(volume > 0.1){
				volume -= 0.1;
				sound.setVolume(volume);
				console.log(volume);	
			}
		}
		//right arrow key to skip track
		if(keycode == 39){
			trackNum += 1;
			if(trackNum > track.length - 1){
				trackNum = 0;
			}
			if (sound.isPlaying()) {
    			sound.pause();
			}
			this.playbackButton.playing = false;
			sound = loadSound(track[trackNum]);
		}
		//left arrow key to back-track
		if(keycode == 37){
			trackNum -= 1;
			if(trackNum < 0){
				trackNum = track.length - 1;
			}
			if (sound.isPlaying()) {
    			sound.pause();
  			}
			this.playbackButton.playing = false;
			sound = loadSound(track[trackNum]);
		}
		//hit "r" to start recording
		if(keycode == 82){
			capturer.start();
			recording = true;
		}
		//hit "s" to stop recording
		if(keycode == 83){
			capturer.stop();
  			capturer.save();
			recording = false;
		}
		   console.log(keycode);
	}


	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 10, 30);
			this.menu();
		}	
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		for(var i = 0; i < vis.visuals.length; i++){
			var yLoc = 70 + i*40;
			text((i+1) + ":  " +vis.visuals[i].name, 10, yLoc);
		}
	};
}