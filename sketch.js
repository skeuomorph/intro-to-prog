//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var capture;

var track = ['assets/Rain.mp3','assets/VeryHigh.mp3','assets/Breaks.mp3'];

var trackNum = 0;

var spectrums = [];

var volume = 1;

function preload(){
	sound = loadSound(track[trackNum]);
	sound.setVolume(volume);
}

function setup(){
	
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	
	capture = createCapture(VIDEO);
	capture.hide();
	
	angleMode(DEGREES);
	
	controls = new ControlsAndInput();

	 //instantiate the fft object
	fourier = new p5.FFT();

	 //create a new visualisation container and add visualisations
	vis = new Visualisations();
	vis.add(new Spectrum());
	vis.add(new WavePattern());
	vis.add(new Needles());
	vis.add(new video());
	

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
	
}

function mouseClicked(){
	controls.mousePressed(mouseX,mouseY,random(1,7));
//	console.log(mouseX,mouseY);
	
	
}

function keyPressed(){
	controls.keyPressed(keyCode);
}


//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
