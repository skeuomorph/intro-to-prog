function Spin(){
	this.name = "Spin";
	
	this.draw = function(){
		push();
		translate(width/2, height/2);
		rotate(angle)
		spin1();
		pop();

	}
	function spin1(){
		var spectrum = fourier.analyze();
		var volHigh = fourier.getEnergy("treble");
		var volMid = fourier.getEnergy("mid");
		var volLow = fourier.getEnergy("bass");
		var wave = fourier.waveform();


		strokeWeight(5);

		beginShape(POINTS);

		for(var i = 0; i < spectrum.length/2; i++){

			stroke(i / 4, i / 4, 255);
			var angle = map(i, 0, spectrum.length/2, 0, -360);

			var amp = map(spectrum[i], 0, 255, 0 + i, 200);

			var x = (amp * cos(angle));
			var y = (amp * sin(angle));	
			vertex(x, y);
		}


		for(var i = 0; i < spectrum.length/2; i++){

			stroke(255);	
			var angle = map(i, 0, spectrum.length/2, 90, -270);

			var amp = map(spectrum[i], 0, 255, 0 + i, 200);

			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}
		endShape();


		beginShape(POINTS);

		for(var i = 0; i < spectrum.length/2; i++){

			stroke(255, i / 4, i / 4);
			var angle = map(i, 0, spectrum.length/2, 180, -180);

			var amp = map(spectrum[i], 0, 255, 0 + i, 200);

			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}


		for(var i = 0; i < spectrum.length/2; i++){

			stroke(i / 4, 255, i / 4);
			var angle = map(i, 0, spectrum.length/2, 270, -90);

			var amp = map(spectrum[i], 0, 255, 0 + i, 200);

			var x = (amp * cos(angle));
			var y = (amp * sin(angle));

			vertex(x, y);
		}
			endShape();
		
		stroke(volLow,volMid,255 - volLow);
		strokeWeight(5);
//		noStroke();
		noFill()
//		fill(volLow,volMid,255 - volLow)
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);

			var amp = map(wave[i], -1, 1, -50, 150);
			
			
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));
			
			vertex(x, y);
		}
		endShape();
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);

			var amp = map(wave[i], -1, 1, -100, 100);
			
			
			var x = (amp * cos(angle));
			var y = (amp * sin(angle));
			
			vertex(x, y);
		}
		endShape();
	}
};