var routesPage = {
    /**
     * define selectors
     */
    _myPlaylistLink:  '#MyPlaylist',

    /**
     *
     */
    makeNewPlaylist: function() {
      browser.url(process.env.HOST);
      browser.click(this._myPlaylistLink);

      var currentUrl = browser.getUrl()
      return browser.waitUntil(function() {
        return browser.getUrl().then(function (url) {
          return url !== currentUrl;
        });
      })
    },

    getNewPlaylistInstructions: function() {
      return browser.getText('#NewPlaylistInstructions');
    },

};

module.exports = routesPage;
