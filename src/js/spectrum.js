export default function spectrum (p) {
  let color = 'rgb(0, 0, 0)';
  let size = 200;
  let thickness = 1;
  let bounce = 0.6;
  let morph = 1;

  console.log(p);
  
  // handle new props
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    color = props.color;
    size = props.size;
    thickness = props.thickness;
    bounce = props.bounce;
    morph = props.morph;
  };

  // audio set up
  // let audio = p.loadSound("../audio/website-audio.mp3");
  // audio.play();
  
  // let fft = new p.FFT();
  // let spectrum = fft.analyze();
  // let waveform = 0;

  // create canvas to write to - only one
   p.setup = function () {
     p.createCanvas('100%', '100%');
   };
  
  
   p.draw = function () {
    //  p.background('rgba(0,0,0,0)');
    //  p.noFill();
    //  p.stroke(color);
    //  p.strokeWeight(thickness);
    //  p.beginShape();

    // for (let i = 0; i < 360; i++){
    //   waveform = fft.waveform();
    //   let wave = p.map(waveform[i * morph] / bounce, -1, 1, 0, 150);

    //   let x1 = size * Math.sin(i * morph) + p.width / 2;
    //   let y1 = size * Math.cos(i * morph) + p.height / 2;

    //   let x_wave = wave * Math.sin(i);
    //   let y_wave = wave * Math.cos(i);

    //   let x2 = x1 + x_wave;
    //   let y2 = y1 + y_wave;
  
    //   p.curveVertex(x2, y2);
    // }

    //   p.endShape();
   };

  // getDynamicLength_ = function(i) {
  //   var waveform = song.getWaveform();
  //   return p.map(waveform[i * this.morph] / this.bounce, -1, 1, 0, 150);
  // };
  
  // getCircularX_ = function(i) {
  //   return (size * Math.sin(i * morph) + p.width / 2);
  // };
  
  // getCircularY_ = function(i) {
  //   return (size * Math.cos(i * morph) + p.height / 2);
  // };
  
  // pitchX_ = function(wave, i) {
  //   return wave * Math.sin(i);
  // };
  
  // pitchY_ = function(wave, i) {
  //   return wave * Math.cos(i);
  // };
  
 };


// export default Spectrum;

// Spectrum = function(name, color, size, thickness, bounce, morph) {
//   this.name = name;
//   this.color = color;
//   this.size = size;
//   this.thickness = thickness;
//   this.bounce = bounce;
//   this.morph = morph;
//   this.waveform = [];
//   this.addToGroup_();
//   this.draw();
// };

// Spectrum.prototype.setColor_ = function(newColor) {
//   this.color = newColor;
// };

// Spectrum.prototype.setSize_ = function(newSize) {
//     this.size = newSize;
// };

// Spectrum.prototype.setThickness_ = function(newThickness) {
//   this.thickness = newThickness;
// };

// Spectrum.prototype.setBounce_ = function(newBounce) {
//   this.bounce = newBounce;
// };

// Spectrum.prototype.setMorph_ = function(newMorph) {
//   this.morph = newMorph;
// };

// Spectrum.prototype.addToGroup_ = function() {
//   spectrums.push(this);
// };

// Spectrum.prototype.draw =  function() {
//   noFill();
//   stroke(this.color);
//   strokeWeight(this.thickness);
//   beginShape();

//   for (var i = 0; i < 360; i++){

//     var wave = this.getDynamicLength_(i);

//     var x1 = this.getCircularX_(i);
//     var y1 = this.getCircularY_(i);

//     var x_wave = this.pitchX_(wave, i);
//     var y_wave = this.pitchY_(wave, i);

//     var x2 = x1 + x_wave;
//     var y2 = y1 + y_wave;

//     curveVertex(x2, y2);
//   }
//   endShape();
// };

// Spectrum.prototype.getDynamicLength_ = function(i) {
//   var waveform = song.getWaveform();
//   return map(waveform[i * this.morph] / this.bounce, -1, 1, 0, 150);
// };

// Spectrum.prototype.getCircularX_ = function(i) {
//   return (this.size * Math.sin(i * this.morph) + width / 2);
// };

// Spectrum.prototype.getCircularY_ = function(i) {
//   return (this.size * Math.cos(i * this.morph) + height / 2);
// };

// Spectrum.prototype.pitchX_ = function(wave, i) {
//   return wave * Math.sin(i);
// };

// Spectrum.prototype.pitchY_ = function(wave, i) {
//   return wave * Math.cos(i);
// };



