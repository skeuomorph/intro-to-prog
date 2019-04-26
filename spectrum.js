function Spectrum(){
	
	this.name = "spectrum";
	
	this.draw = function(){
		
		spectrum2(spectrums[0],spectrums[1],spectrums[2]);
		
		spectrum1(spectrums[5],spectrums[6],spectrums[8]);
		
	};

};

function spectrum1(x,y,size){
	
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

function spectrum2(x,y,size){
	
	
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