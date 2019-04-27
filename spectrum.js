//spectrum function
function Spectrum(){
	//vis name
	this.name = "spectrum";
	//draw each spectrum function with various fourier.analyze() indices as arguments
	this.draw = function(){
		spectrum2(spectrums[0], spectrums[1], spectrums[2]);
		spectrum3(spectrums[10], spectrums[11], spectrums[12]);
		spectrum1(spectrums[5], spectrums[6], spectrums[7]);
		
	};
};
//particle emitter function
function spectrum1(x,y,size){
	var spectrum = fourier.analyze();
	
	push();
	strokeWeight(4);
	beginShape(POINTS);//disjointed vertices
	for(var i = 0; i < spectrum.length; i++){
		var angle = map(i, 0, spectrum.length, 0, -360);
		var amp = spectrum[i];
		var r = amp * size;
		var x1 = x + (r * cos(angle));
		var y1 = y + (r * sin(angle));

		vertex(x1,y1);

		var a = x + (r * - cos(angle));
		var b = y + (r * - sin(angle));
		
		stroke(255);

		vertex(a,b);
	}  	
	endShape();
	pop();
}
//colour spectrum function
function spectrum2(x,y,size){
	var spectrum = fourier.analyze();
	var volLow = fourier.getEnergy("bass");
	
	push();
	noStroke();
	beginShape();
	for(var i = 0; i < spectrum.length; i++){
			
		fill(50, 255 - volLow, volLow - 50);
			
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
}
//wave spectrum function
function spectrum3(x,y){
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
		//the following if statements map the increase in treble to an increase in displacement (check the last two values of amp)
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