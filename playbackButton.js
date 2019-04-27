//displays and handles clicks on the playback button.

function PlaybackButton(){
	
	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;

	this.draw = function(){
		
		this.x = width / 2 - 20;
		this.y = height - 60;
		this.width = 40;
		this.height = 40;

		this.fowardX = width / 2 + 40;
		this.backX = width / 2 - 40;
		//if track is playing, display stop button
		if(this.playing){
			rect(this.x, this.y, this.width/2 - 2, this.height);
			rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
		}
		//if silence, display play button
		else{	
			triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);
		}
		//fast forward
		triangle(this.fowardX, this.y, this.fowardX + this.width, 	this.y + this.height/2, this.fowardX, this.y + this.height);
		triangle(this.fowardX + 20, this.y, this.fowardX + this.width + 20, this.y + this.height/2, this.fowardX + 20, this.y + this.height);
		//REEEELOOOAAAAAD (kinda)
		triangle(this.backX, this.y, this.backX, this.y + this.height, this.backX - this.width, this.y + this.height/2);
		triangle(this.backX - 20, this.y, this.backX - 20, this.y + this.height, this.backX - this.width - 20, this.y + this.height/2);
		//display track
		textSize(20);
		v = '';
		v = parseInt(volume * 10);
		text(track[trackNum][1] + '\n' + track[trackNum][2], 20, height - 50);
		text('volume: ' + v, width - 120, 30);
		//show red when recording, white otherwise
		if(recording){
			fill(200,0,0);
			ellipse(this.x + 160, this.y + 20, 40);
			fill(255);
			rect(this.x + 200, this.y, 40, 40);
		}
		else{
			fill(255);
			ellipse(this.x + 160, this.y + 20, 40);
		}
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
			//pause sound if mouse clicks on button while music is playing
			if (sound.isPlaying()) {
    			sound.pause();
  			} else {
    			sound.loop();
			}
			//set flag to the opposite of what it was before  
  			this.playing = !this.playing;
  			return true;
		}
		
		if(mouseX > this.fowardX && mouseX < this.fowardX + this.width + 20 && mouseY > this.y && mouseY < this.y + this.height){
			//if fast forward button is hit, go to next track
			trackNum += 1;
			//if at the end of tracks, go back to first track
			if(trackNum > track.length - 1){
				trackNum = 0;
			}
			if (sound.isPlaying()) {
    			sound.pause();
			}
			this.playing = false;
			sound = loadSound(track[trackNum]);
			console.log(trackNum);
			return true;
		}
		
		if(mouseX < this.backX && mouseX > this.backX - this.width - 20 && mouseY > this.y && mouseY < this.y + this.height){
			//if back-track button is hit, go back a track
			trackNum -= 1;
			//if button is hit while at first track, go to last track
			if(trackNum < 0){
				trackNum = track.length - 1;
			}
			if (sound.isPlaying()) {
    			sound.pause();
  			}
			this.playing = false;
			sound = loadSound(track[trackNum]);
			console.log(trackNum);
			return true;
		}
		
		if(mouseX > this.x + 140 && mouseX < this.x + 180 && mouseY > this.y && mouseY < this.y + 40){
			//if record button is hit while not currently recording, start recording
			if(recording == false){
				capturer.start();
				recording = true;
			}
			return true;
		}

		if(mouseX > this.x + 200 && mouseX < this.x + 240 && mouseY > this.y && mouseY < this.y + 40){
			//if record button is hit while currently recording, stop recording
			if(recording == true){
				capturer.stop();
				capturer.save();
				recording = false;
			}
			return true;
		}	
		return false;
	};

};
