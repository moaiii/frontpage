function draw() {
  clear();
  background('rgba(255, 255, 255, 0)');

  Moai.song.setWaveform();

  for(var j = 0; j < Moai.spectrums.length; j++) {
    Moai.spectrums[j].draw();
  }
}
