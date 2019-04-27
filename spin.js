//spin function
function Spin(){
	//vis name
	this.name = "spin";
	
	this.draw = function(){
		push();
		translate(width/2, height/2);
		rotate(angle)
		spin1();
		pop();

	}
	function spin1(){
        var volHigh2 = fourier2.getEnergy("treble");
        var volMid2 = fourier2.getEnergy("mid");
        var volLow2 = fourier2.getEnergy("bass");
		var spectrum = fourier.analyze();
		var wave = fourier.waveform();

		stroke(volLow2, volMid2, 255 - volLow2);//colour based on low and mid frequencies
		if(!controls.playbackButton.playing){
			stroke(200,100,200);//colour remains purple when there is no music playing
		}

		strokeWeight(5);
		//draw several spiral shapes for various angles
		beginShape(POINTS);
		for(var i = 0; i < spectrum.length/2; i++){
			var angle = map(i, 0, spectrum.length/2, 0, -360);//between -360 and 0 degrees
			var amp = map(spectrum[i], 0, 255, 0 + i, 200);
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));	
			
			vertex(x, y);
		}
		for(var i = 0; i < spectrum.length/2; i++){	
			var angle = map(i, 0, spectrum.length/2, 90, -270);//between -270 and 90 degrees
			var amp = map(spectrum[i], 0, 255, 0 + i, 200);
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}
		endShape();


		beginShape(POINTS);
		for(var i = 0; i < spectrum.length/2; i++){
			var angle = map(i, 0, spectrum.length/2, 180, -180);//between -180 and 180
			var amp = map(spectrum[i], 0, 255, 0 + i, 200);
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}
		for(var i = 0; i < spectrum.length/2; i++){
			var angle = map(i, 0, spectrum.length/2, 270, -90);//between -90 and 270
			var amp = map(spectrum[i], 0, 255, 0 + i, 200);
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}
		endShape();
		
////////////////////////////////////////////////////////////////////////
		
		
		strokeWeight(5);
		noFill();
		
		beginShape();
		for(var i = 0; i < wave.length; i++){
			var angle = map(i, 0, wave.length, 0, 360);
			var amp = map(wave[i], -1, 1, -100, 100);
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));
			
			vertex(x, y);
		}
		endShape();
		
		if(volHigh2 > 25.5){
			beginShape();//draw shape when a sufficient amount of high frequencies is reached
			for(var i = 0; i < wave.length; i++){
				var angle = map(i, 0, wave.length, 0, 360);
				var amp = map(wave[i], -1, 1, -50, 150);
				var x = (amp * cos(angle));
				var y = (amp * sin(angle));

				vertex(x, y);
			}
			endShape();
		}	
	}
};