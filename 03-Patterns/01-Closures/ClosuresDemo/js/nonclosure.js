
function getTime(){
    return new Date().toTimeString();
}

$("#ncTime1").html(getTime());

setTimeout(function () {
    $("#ncTime2").html(getTime());
}, 3000);



