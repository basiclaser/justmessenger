//Apply CSS
// document.body.classList.add("deface");
//Apply title
var titler = function(){document.title="deFACE"}
setTimeout(titler,5000)

//Apply message
// document.body.insertAdjacentHTML('afterend','<h1 style="position:absolute;left:40px;top:0;padding:5px 10px;color:#333;font-size:2em;">Be careful. Facebook monitors your conversations.</h1>');


// Add message about surveillance WORKING TOO WELL - INJECTS ALL OVER THE PLACE
// document.body.insertAdjacentHTML('afterend','<div style="width:20px; height:20px; background:#999; border-radius:100%;position:absolute;left:0;top:0;padding:10px;z-index:999;" onclick="document.body.classList.remove(\'deface\');"></div>');



//toggle css classes BROKEN
// document.body.insertAdjacentHTML('afterend','<script type="text/javascript">cssSwitcher = function(){document.body.classList.remove(\'deface\')};</script>');

// if(body.className.indexOf("deface") < 0){document.body.classList.add("deface");}else{document.body.classList.remove("deface");}

// Untype and Retype title BROKEN

// for(var char in document.title.length)
// {document.title = document.title.substring(0, document.title.length-1);}
// var newName = "deface";
// for (var char in newName)
//   {document.title[char] = newName[char];setTimeout(1000);}

// Change favicon BROKEN
// (function() {
//     var link = document.createElement('link');
//     link.type = 'image/x-icon';
//     link.rel = 'shortcut icon';
//     link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oFFAADATTAuQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAEklEQVQ4y2NgGAWjYBSMAggAAAQQAAGFP6pyAAAAAElFTkSuQmCC';
//     document.getElementsByTagName('head')[0].appendChild(link);
// }());