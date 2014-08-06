var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "deface",
  icon: {
    "16": "./favicon.ico",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.facebook.com/");
  contentScriptFile: self.data.url("deface.js");
  contentStyleFile: self.data.url("deface.css");
}

// pageMod.PageMod({
//   include: "*",
//   contentScriptFile: self.data.url("deface.js")
// });
//
// pageMod.PageMod({
//   include: "*",
//   contentStyleFile: self.data.url("deface.css")
// });
