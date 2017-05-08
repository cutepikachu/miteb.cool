/* miteb.cool main JS code
   it probably sucks, I don't use JS that much
   (c) FuckWorld LLC 2017 */

function getRandom(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var mite = document.getElementById("mite");
var num = getRandom(1, 2);
if (num == 1){
    mite.src = "dan_mite.jpg"
}
else {
    mite.src = "sd.jpg"
}