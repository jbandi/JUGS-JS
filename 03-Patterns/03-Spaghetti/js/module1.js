var MODULE_PREFIX = "module1_"


loadSettings();
$('#LoadButton').click(function () {
    $('#txtValue1').val('');
    $('#txtValue2').val('');
    var settings = loadSettings();
    $('#txtValue1').val(settings[0]);
    $('#txtValue2').val(settings[1]);
});
$('#SubmitButton').click(function () {
    storeSettings();
});
$('#ClearButton').click(function () {
    localStorage.clear();
    loadSettings();
});

function loadSettings() {
    var val1 = localStorage.getItem(MODULE_PREFIX + 'val1');
    var val2 = localStorage.getItem(MODULE_PREFIX + 'val2');

    return [val1, val2];
}

function storeSettings() {
    try {
        localStorage.setItem(MODULE_PREFIX + 'val1', $('#txtValue1').val());
        localStorage.setItem(MODULE_PREFIX + 'val2', $('#txtValue2').val());
        $('#OutputSpan').html('Settings Saved!');
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Storage quota exceeded');
        }
    }
}