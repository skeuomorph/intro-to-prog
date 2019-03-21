function video(){	
	
	this.name = "video";
	
	this.draw = function(){
		
		var spectrum = fourier.analyze();
		var volHigh = fourier.getEnergy("treble");
		var volMid = fourier.getEnergy("mid");
		var volLow = fourier.getEnergy("bass");
		
		push();
		
		translate(width/2, height/2);
	
		imageMode(CENTER);
		image(capture, 0, 0, windowWidth, windowHeight);
		filter(THRESHOLD);
		
//		capture.loadPixels();
//		loadPixels();
//		
//		for(var i = 0; i < width; i++){
//			for(var j = 0; j < height; j++){
//				
//				var index = (i + j * width) * 4;
//				
//				if(pixels[index] == 255){
//					pixels[index];
//					pixels[index + 1] -= volLow;
//					pixels[index + 2] -= volLow;	
//				}
				
				
///////////////////////////////////////////////////////////////			
	
//				var r = capture.pixels[index];
//				var g = capture.pixels[index + 1];
//				var b = capture.pixels[index + 2];
				
//				pixels[index] = r;
//				pixels[index + 1] = g;
//				pixels[index + 2] = b;
				
//				var BandW = (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3;
//				
//				if(BandW >= 127){
//					pixels[index] = 255;
//					pixels[index + 1] = 255;
//					pixels[index + 2] = 255;
//				}
//				else{
//					pixels[index] = 0;
//					pixels[index + 1] = 0;
//					pixels[index + 2] = 0;
//				}
//			}
//		}
//		
//		updatePixels();
		
		pop();

	};
};