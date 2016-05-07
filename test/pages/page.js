function Page () {
}

Page.prototype.open = function (path) {
  var cleanPath = path ? path : '';
  browser.url(process.env.HOST + '/' + cleanPath)
}

module.exports = new Page()
