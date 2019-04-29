function Spectrum(){
	//vis name
	this.name = "spectrum";
	//draw each spectrum function with various fourier.analyze() indices as arguments
	this.draw = function(){
		vis.selectedVisual.spectrum2(spectrums[0],spectrums[1],spectrums[2]);
		vis.selectedVisual.spectrum3(spectrums[10],spectrums[11],spectrums[12])
		vis.selectedVisual.spectrum1(spectrums[5],spectrums[6],spectrums[7]);
		
	};


// function to draw first spectrum
	this.spectrum1 = function(x,y,size){
	
		var spectrum = fourier.analyze();
		var volHigh = fourier.getEnergy("treble");
		var volMid = fourier.getEnergy("mid");
		var volLow = fourier.getEnergy("bass");

		push();

		strokeWeight(4);

		beginShape(POINTS);

		for(var i = 0; i < spectrum.length; i++){

			var angle = map(i, 0, spectrum.length, 0, - 360);
			var amp = spectrum[i];
			var r = amp * size;
			var x1 = x + (r * cos(angle));
			var y1 = y + (r * sin(angle));

			vertex(x1,y1);

			var a = x + (r * - cos(angle));
			var b = y + (r * - sin(angle));

			stroke(255, 255, 255);

			vertex(a,b);

			}  	
		endShape();
		pop();
	}
	//function to draw second spectrum
	this.spectrum2 = function(x,y,size){

		var spectrum = fourier.analyze();
		var volHigh = fourier.getEnergy("treble");
		var volMid = fourier.getEnergy("mid");
		var volLow = fourier.getEnergy("bass");

		push();

		noStroke();

		beginShape();

		for(var i = 0; i < spectrum.length; i++){

			fill(50,255 - volLow,volLow - 50)

			var angle = map(i, 0, spectrum.length, 0, 360);
			var amp = spectrum[i];
			var r = amp * size;
			var x1 = x + (r * cos(angle));
			var y1 = y + (r * sin(angle));

			vertex(x1,y1);

			var a = x + (r * - cos(angle));
			var b = y + (r * - sin(angle));

			vertex(a,b);

			}  	
		endShape();

		pop();
	};
	// function  to draw third wave patern 
	this.spectrum3 = function(x,y,size){
	
		var spectrum = fourier2.analyze();
        var volHigh = fourier2.getEnergy("treble");
        var volMid = fourier2.getEnergy("mid");
        var volLow = fourier2.getEnergy("bass");
		var wave = fourier2.waveform();
		var vol = volHigh;
		
		stroke(volLow,volMid,255 - volLow);
		strokeWeight(5);
		noFill();
		
		beginShape();
		
		for(var i = 0; i < wave.length; i++){
			
			var angle = map(i, 0, wave.length, 0, 360);

			var amp = map(wave[i], -1, 1, -100, 100);
			
			
			var x1 = x + (amp * cos(angle));
			var y1 = y + (amp * sin(angle));
			
			vertex(x1, y1);
		}
		endShape();
		
		// the folowing if statments draw increasingly large radial wave forms depending on the average volume frequencies in the treble range 
		if(vol > 25.5){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, -50, 150);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 51){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 0, 200);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 76.5){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 50, 250);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 102){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 100, 300);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 127.5){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 150, 350);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		if(vol > 153){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 200, 400);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol >178.5){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 250, 450);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 204){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 300, 500);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol > 229.5){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 350, 550);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		
		if(vol == 255){
			beginShape();

			for(var i = 0; i < wave.length; i++){

				var angle = map(i, 0, wave.length, 0, 360);

				var amp = map(wave[i], -1, 1, 400, 600);


				var x1 = x + (amp * cos(angle));
				var y1 = y + (amp * sin(angle));
			
				vertex(x1, y1);
			}
			endShape();
		}
		

}
};