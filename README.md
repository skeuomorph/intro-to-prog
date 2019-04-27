PLEASE RUN THE PROGRAM VIA A LOCAL SERVER HOST (Brackets being the easiest)

# intro-to-prog
1st year Final Project

    Markela Zeneli
    
    Taylor Millin-Reade

# Controls

Menu: enter key ↵

Select visualiser: number keys 0 - 9

Fullscreen: f key

Play/Pause: space bar or button on screen

Track select: left and right arrow keys ← → or skip buttons on screen

Volume: up and down arrow keys ↑ ↓

Start recording: r key

Stop recording: s key

# Starting point:

The completed code for Case Study 2.


# Possible ideas/ build-ons:

Fully integrated controls and interaction.

Altering spectrum.js to add another layer of visualisation, and allow both layers to move around each other through user input.

Within wavepattern.js, having multiple waves that react to different frequencies, as well as the original one which only responds to amplitude (through fourier.waveform() ).

A webcam feed that changes colour/ shape respective to the changes in frequency.


# Build-on no.1

Particles and a spiral spectrum added onto spectrum.js, under the functions spectrum1 and spectrum2 respectively. They are both centred at the middle of the screen.

Using image() and loadPixels(), the image from the webcam feed is turned into an array of pixels. After applying filter(THRESHOLD), each pixel with RGB value 255 is transformed into a pixel with less green and blue. The method of changing the values of green and blue is to access the properties of each pixel (i.e pixels[index + 1] to access the 'green' value), and to subtract that property by the value of the bass energy level at any given time. 


# Build-on no.2

The code for the following is in controlsAndInput.js.

The functions spectrum1 and spectrum2 are able to have their centres moved depending on where the mouse is clicked. and move across the screen at a random speed

Buttons added to skip tracks.

Fullscreen function added (hit "f" to activate).


# Build-on no.3

Volume control with up/down arrow keys added.

Volume display and current track on bottom left.

Angles on needles.js changed from radians to degrees (to be consistent with the angleMode we chose previously for spectrum.js).

    
    ## N.B for peer review - areas for improvement
    
    - Amend video.js to turn red when the majority of frequencies are in the bass range, green when the majority are in the mid         range, and blue when the majority are in the treble range
    
    - Add more waves to wavepattern.js. The initial function gathers data through waveform(), which returns the current amplitude. Ideally, we would also like to represent bass frequencies, mid frequencies, and treble frequencies as waves. 
    
# Final build-ons

video.js altered to become more red when there are more bass frequencies, green when there are more mid frequencies, and blue when there are less bass frequencies (i.e more high frequencies).

Radial waves were added to wavepattern.js, the colours of which depend on treble, mid and bass frequencies. NOTE: attempting to combine fourier.waveform and fourier.getEnergy to generate one wave proved to be fairly difficult. It was understood that the ordering of these functions does matter, but more time was needed to fully understand Fourier functions.

spin.js added, a function which produces spirals based on amplitude.

ccapture function added, which allows the user to record the screen at any given time and save their recording. 

    ## General notes:
    
    Modularity has been implemented throughout the code. Each visualisation option is its own file, and each part of the visualisation is its own function. An effort has been made to keep variables at the top, and to introduce variables and functions in a chronological and sensible manner. 
    
    Improvements:
    
    We really wanted to add some beat tracking, but this was very tricky to do in Javascript. Combining beat tracking with fourier.getEnergy values would have been interesting. 






