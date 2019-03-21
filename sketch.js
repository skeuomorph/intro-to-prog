//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var capture;

var track = [['assets/VeryHigh.mp3','Shit and Shine','You Were Very High'],['assets/Rain.mp3','Solange','Sound of Rain'],['assets/BeThankful.mp3','William DeVaughn','Be Thankful for What You Got']];

var trackNum = 0;

var spectrums = [];

var volume = 1;

function preload(){
	sound = loadSound(track[trackNum][0]);
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
	fourier = new p5.FFT(0.9);

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

	if(spectrums.length >= 3){
		for(var i = 0; i < spectrums.length; i += 5){
			spectrums[i] += spectrums[i + 3];
			spectrums[i + 1] += spectrums[i + 4];
		}
	}
}

function mouseClicked(){
	controls.mousePressed(mouseX,mouseY,random(1,7),random(-2,2),random(-2,2));
	console.log(spectrums);
	
	
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

function mouseMoved(){
	
}


//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
