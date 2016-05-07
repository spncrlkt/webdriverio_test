var assert = require('assert');

describe('make new playlist', function() {

  it('should make a new playlist', function () {
    browser.url(process.env.HOST);
    browser.click('*=My Playlist');
    var text = browser.getText('#NewPlaylistInstructions');
    assert.equal(text,
      '⚡️ Search⚡️ Add Blank Song⚡️' + '\n' +
      '🚀 Build 🎶 Playlist 🚀'
    );
  });

  it('should make a new empty playlist', function () {
    // browser.url(process.env.HOST);
  });

});
