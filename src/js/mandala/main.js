var Moai = {
  debug: true,
  spectrums: [],
  song: null,
  bpms: {
    one: 110,
    two: 120,
    three: 120,
    four: 140,
    five: 150
  }
};

Moai.App = function() {
  this.initApp();
};

Moai.App.prototype.initApp = function() {
  new Moai.Spectrum('small', 'rgb(225, 75, 212)', 200, 1, 0.6, 20);  // color, size, thickness, bounce, morph
};

window.onload = function() {
  Moai.app = new Moai.App();
};
