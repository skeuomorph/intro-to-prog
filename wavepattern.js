//draw the waveform to the screen
function WavePattern(){
	//vis name
	this.name = "wavepattern";

	//draw the wave form to the screen
	this.draw = function(){
		
		var spectrum = fourier.analyze();
		var volHigh = fourier.getEnergy("treble");
		var volMid = fourier.getEnergy("mid");
		var volLow = fourier.getEnergy("bass");
		var wave = fourier.waveform();
		
		push();
		noFill();
		stroke(spectrum[6], spectrum[1], spectrum[6]);//use spectrum values to alter the colours of each wave
		strokeWeight(2);

		beginShape();
		//calculate the waveform from the fft.
		for (var i = 0; i < wave.length; i++){
			//for each element of the waveform map it to screen 
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);//create a vertex for the shape using the newly mapped points
		}
		endShape();
		
		stroke(spectrum[30], 0, 255 - spectrum[30]);
		
		beginShape();
		
		//calculate the waveform from the fft.
		for (var i = 0; i < wave.length; i++){
			//for each element of the waveform map it to screen 
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height/2);

			vertex(x, y);
		}
		endShape();
		
		stroke(spectrum[30] , 0, 255 - spectrum[30]);
		
		beginShape();
		//calculate the waveform from the fft.
		for (var i = 0; i < wave.length; i++){
			//for each element of the waveform map it to screen 
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, height/2, height);

			vertex(x, y);
		}
		endShape();
		
		pop();
		push();
		noFill();
		translate(width/2,height/2);
		stroke(255 - spectrum[40], 0, spectrum[40]);
		strokeWeight(2);
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);//each value of the waveform is mapped to each angle within the circle

			var amp = map(wave[i], -1, 1, -100, 100);
			
			
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));//use sine and cosine to determine the x and y values from the angle
			
			vertex(x, y);
		}
		endShape();
		
		stroke(255,0,0);
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);

			var amp = map(wave[i], -1, 1, 100, 300);
			
			
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));
			
			vertex(x, y);
		}
		endShape();
		
		stroke(0,0,255);
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);

			var amp = map(wave[i], -1, 1, 300, 500);
			
			
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));
			
			vertex(x, y);
		}
		endShape();
		
		pop();
		
	}
};
