function video(){	
	
	this.name = "video";
	
	//access the appropriate pixels and alter their colours based on various values (see line 30)
	this.writeColor = function(image, x, y, red, green, blue, alpha) {
    		var index = (x + y * width) * 4;
    		image.pixels[index] = red;
    		image.pixels[index + 1] = green;
    		image.pixels[index + 2] = blue;
    		image.pixels[index + 3] = alpha;
  		}
	
	this.draw = function(){
		
		var spectrum = fourier.analyze();
		var spectrum2 = fourier2.analyze();
		var volHigh = fourier2.getEnergy("treble");
		var volMid = fourier2.getEnergy("mid");
		var volLow = fourier2.getEnergy("bass");
		
		push();
		
		translate(width/2, height/2);
		
		img.loadPixels();//loads the pixels on the screen as an array
		
		var x,y;
		
		for (y = 0; y < img.height; y++) {
    		for (x = 0; x < img.width; x++) {
      			var red = volLow;//red valued correspond to bass frequencies
				var green = volMid;//green values correspond to mid frequencies
				var blue = 255 - volLow;//blue values correspond to inverse bass frequencies (causing the image to fluctuate between blue and red)
				var alpha = 255;
      			vis.selectedVisual.writeColor(img, x, y, red, green, blue, alpha);//use these values in the writeColour function
    		}
  		}
		
		
		img.updatePixels();
	
		imageMode(CENTER);
		blendMode(DIFFERENCE);
		image(vid, 0, 0, windowWidth, windowHeight);
		filter(THRESHOLD);//using the threshold filter allowed for more white pixels, which respond better to colour changes
		image(img, 0, 0, windowWidth, windowHeight);
		
		
				
				
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