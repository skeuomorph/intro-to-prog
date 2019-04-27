//waveform function
function WavePattern(){
	//vis name
	this.name = "wavepattern";

	//draw the waveform to the screen
	this.draw = function(){
		
		var spectrum = fourier.analyze();
		var wave = fourier.waveform();
		
		push();
		noFill();
		stroke(spectrum[6], spectrum[1], spectrum[6]);//use spectrum values to alter the colours of each wave
		strokeWeight(2);

		beginShape();
		for (var i = 0; i < wave.length; i++){
			var x = map(i, 0, wave.length, 0, width);//for each element of the waveform, map it to the screen's dimensions
			var y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);//create a vertex for the shape using the newly mapped points
		}
		endShape();
		
		stroke(spectrum[30], 0, 255 - spectrum[30]);
		
		beginShape();
		for (var i = 0; i < wave.length; i++){
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height/2);

			vertex(x, y);
		}
		endShape();
		
		stroke(spectrum[30] , 0, 255 - spectrum[30]);
		
		beginShape();
		for (var i = 0; i < wave.length; i++){
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, height/2, height);

			vertex(x, y);
		}
		endShape();
		pop();
		
		push();
		noFill();
		translate(width / 2, height / 2);
		stroke(255 - spectrum[40], 0, spectrum[40]);
		strokeWeight(2);
		
		beginShape();
		for(var i = 0; i < wave.length; i++){
			var angle = map(i, 0, wave.length, 0, 360);//each value of the waveform is mapped to each angle within the circle
			var amp = map(wave[i], -1, 1, -100, 100);
			var x = (amp * cos(angle));//use sine and cosine to determine the x and y values from the angle
			var y = (amp * sin(angle));
			
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
}
