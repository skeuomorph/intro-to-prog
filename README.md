PLEASE RUN THE PROGRAM VIA A LOCAL SERVER HOST (Brackets being the easiest)


# intro-to-prog
1st year Final Project

    Markela Zeneli
    
    Taylor Millin-Reade


# Starting point:

The completed code for Case Study 2.


# Possible ideas/ build-ons:

Fully integrated controls and interaction.

Altering spectrum.js to add another layer of visualisation, and allow both layers to move around each other through user input.

Within wavepattern.js, having multiple waves that react to different frequencies, as well as the original one which only responds to amplitude (through fourier.waveform() ).

A webcam feed that changes colour/ shape respective to the changes in frequency.


# Build-on no.1

Particles and a spiral spectrum added onto spectrum.js, under the functions spectrum1 and spectrum2 respectively. They are both centred at the middle of the screen.

Using image() and loadPixels(), the image from the webcam feed is turned into an array of pixels. After applying            filter(THRESHOLD), each pixel with RGB value 255 is transformed into a pixel with less green and blue. The method of changing the values of green and blue is to access the properties of each pixel (i.e pixels[index + 1] to access the 'green' value), and to subtract that property by the value of the bass energy level at any given time. 


# Build-on no.2

The code for the following is in controlsAndInput.js.

The functions spectrum1 and spectrum2 are able to have their centres moved depending on where the mouse is clicked.

Buttons added to skip tracks.

Fullscreen function added (hit "f" to activate).


# Build-on no.3

Volume control with up/down arrow keys added.

Volume display and current track on bottom left.

Angles on needles.js changed from radians to degrees (to be consistent with the angleMode we chose previously for spectrum.js).

    
    ## N.B for peer review - areas for improvement
   
    - Fix blurry labels on the readers in needles.js
    
    - Amend video.js to turn red when the majority of frequencies are in the bass range, green when the majority are in the mid         range, and blue when the majority are in the treble range
    
    - Add more waves to wavepattern.js. The initial function gathers data through waveform(), which returns the current amplitude. Ideally, we would also like to represent bass frequencies, mid frequencies, and treble frequencies as waves. 
    





