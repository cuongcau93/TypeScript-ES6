var Agenda = (function () {
    function Agenda() {
        this.obj = $("#dragandrophandler");
        this.inputFile = $('input[type = "file"]');
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        var _this = this;
        this.inputFile.change(function (event) {
            console.log(event);
            var files = _this.inputFile[0].files;
            console.log(typeof (files));
            console.log(files.name);
            _this.checkFormatFileUpload(files);
            console.log(files);
        });
        this.obj.on('dragenter', function (event) {
            _this.notEventHandler(event);
            $(_this.obj).css('border', '2px solid blue');
        });
        this.obj.on('dragover', function (event) {
            _this.notEventHandler(event);
        });
        this.obj.on('drop', function (event) {
            $(_this).css('border', '2px dotted #0B85A1');
            event.preventDefault();
            var transfer = event.dataTransfer;
            var files = event.originalEvent.dataTransfer.files;
            console.log(files);
        });
    };
    Agenda.prototype.checkFormatFileUpload = function (file) {
        var _validFileExtensions = [".xls", ".doc", ".docx", ".pdf", ".png"];
        var blnValid = false;
        var sFileName = file.name;
        for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                blnValid = true;
                break;
            }
            if (!blnValid) {
                alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                return false;
            }
        }
    };
    Agenda.prototype.notEventHandler = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return Agenda;
}());
$(document).ready(function () {
    var agenda = new Agenda();
});
//# sourceMappingURL=uploadFile.js.map