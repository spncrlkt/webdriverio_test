var assert = require('assert');
var RoutesPage = require('../pages/routesPage');

describe('make new playlist', function() {

  it('should make a new playlist', function () {
    var urlChanged = RoutesPage.makeNewPlaylist();
    assert(urlChanged, 'url changes to setlist/:new_id');
  });

  it('should make a new playlist w/ id', function () {
    RoutesPage.makeNewPlaylist();

    var url = browser.getUrl();
    console.log(url);
  });

  it('should make a new empty playlist', function () {
    RoutesPage.makeNewPlaylist();

    var text = RoutesPage.getNewPlaylistInstructions();
    assert.equal(text,
      '⚡️ Search⚡️ Add Blank Song⚡️' + '\n' +
      '🚀 Build 🎶 Playlist 🚀'
    );
  });

});
