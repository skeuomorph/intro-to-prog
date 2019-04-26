//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var vid;

var track = [['assets/VeryHigh.mp3','Shit and Shine','You Were Very High'],['assets/Rain.mp3','Solange','Sound of Rain'],['assets/BeThankful.mp3','William DeVaughn','Be Thankful for What You Got'],['assets/OnlyHuman.mp3','KH aka Four Tet','Only Human']];

var trackNum = 0;

var spectrums = [];

var volume = 1;

var img;

var recording = false;

// Ccapture
var capturer = new CCapture({ format: 'webm', framerate: 15});
// Ccapture
var canvas;

var angle = 0;

function preload(){
	sound = loadSound(track[trackNum][0]);
	sound.setVolume(volume);
}

function setup(){
	// Ccapture
	var p5canvas = createCanvas(windowWidth, windowHeight);
	canvas = p5canvas.canvas;
	
	pixelDensity(1);
	
	vid = createCapture(VIDEO);
	vid.hide();
	
	img = createImage(windowWidth, windowHeight);
	
	angleMode(DEGREES);
	
	frameRate(15);
	
	controls = new ControlsAndInput();

	 //instantiate the fft object
	fourier = new p5.FFT(0.7);

	 //create a new visualisation container and add visualisations
	vis = new Visualisations();
	vis.add(new Spectrum());
	vis.add(new WavePattern());
	vis.add(new video());
	vis.add(new Spin());
	vis.add(new Needles());
	

}

function draw(){
	background(0);
	angle++;
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
	// Ccapture
	capturer.capture(canvas);

}

function mouseClicked(){
	controls.mousePressed(mouseX,mouseY,random(1,7),random(-2,2),random(-2,2));
	console.log(spectrums);
	
	
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