
var timeSnapshot = (function(){
    var date = new Date();

    var getTime = function() {
        return date.toTimeString();
    }

    return {
        getTime : getTime
    }
})();


$("#cTime1").html(timeSnapshot.getTime());

window.setTimeout(function () {
    $("#cTime2").html(timeSnapshot.getTime());
}, 3000);


