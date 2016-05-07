var assert = require('assert');
var RoutesPage = require('../pages/routes.page');

describe('make new playlist', function() {

  it('should make a new playlist', function () {
    RoutesPage.open();
    console.log(JSON.stringify(RoutesPage.myPlaylistLink));
    // RoutesPage.myPlaylistLink.waitForExist();
    // RoutesPage.myPlaylistLink.click();
    assert.equal(RoutesPage.myPlaylistLink.isSelected(), false);
    RoutesPage.myPlaylistLink.click();
    return;
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
