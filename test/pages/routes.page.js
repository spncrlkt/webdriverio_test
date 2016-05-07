var page = require('./page')

var routesPage = Object.create(page, {
    /**
     * define elements
     */
    myPlaylistLink:  { get: function () { return browser.elements('#MyPlaylist'); } },

    open: { value: function() {
        page.open.call(this, '');
    } }

});

module.exports = routesPage
