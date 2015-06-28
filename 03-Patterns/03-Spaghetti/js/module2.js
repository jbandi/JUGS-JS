var MODULE_PREFIX = "module2_"

initSettings();
//loadSettings();

function initSettings(){
    sessionStorage.setItem(MODULE_PREFIX + 'val1', new Date().toDateString());
    sessionStorage.setItem(MODULE_PREFIX + 'val2', new Date().toTimeString());
}

function loadSettings() {
    var val1 = sessionStorage.getItem(MODULE_PREFIX + 'val1');
    var val2 = sessionStorage.getItem(MODULE_PREFIX + 'val2');

    console.log("Loaded setting. Val1:" + val1 + ", Val2:" + val2);
    return [val1, val2];
}

$('#LoadButton2').click(function () {
    $('#txtValue3').val('');
    $('#txtValue4').val('');
    var settings = loadSettings();
    $('#txtValue3').val(settings[0]);
    $('#txtValue4').val(settings[1]);
});