var Agenda = (function () {
    function Agenda() {
        this.obj = $("#dragandrophandler");
        this.inputFile = $('input[type = "file"]');
        this.objAgenda = {
            summary: "",
            file: File
        };
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        var _this = this;
        this.inputFile.change(function (event) {
            var files = _this.inputFile[0].files;
            _this.handleFileUpload(files);
            if (_this.handleFileUpload(files)) {
                console.log(files);
            }
        });
        this.obj.on('dragenter', function (event) {
            _this.notEventHandler(event);
            $(_this.obj).css('border', '2px solid blue');
        });
        this.obj.on('dragover', function (event) {
            _this.notEventHandler(event);
        });
        this.obj.on('drop', function (event) {
            $(_this.obj).css('border', '2px dotted #0B85A1');
            event.preventDefault();
            var files = event.originalEvent.dataTransfer.files;
            _this.handleFileUpload(files);
        });
        $(document).on('dragenter', function (event) {
            _this.notEventHandler(event);
        });
        $(document).on('dragover', function (event) {
            _this.notEventHandler(event);
            $(_this.obj).css('border', '2px dotted #0B85A1');
        });
        $(document).on('drop', function (event) {
            _this.notEventHandler(event);
        });
    };
    Agenda.prototype.notEventHandler = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    Agenda.prototype.handleFileUpload = function (files) {
        var maxsize = 51200;
        var _validFileExtensions = [".xls", ".doc", ".docx", ".pdf", ".png"];
        for (var i = 0; i < files.length; i++) {
            var sFileName = files[i].name;
            console.log(files[i].size);
            if (files[i].size <= maxsize || files[i].fileSize <= maxsize) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
            else {
                alert('Allowed file size exceeded. (Max. 50 MB)');
                return false;
            }
        }
        return true;
    };
    return Agenda;
}());
$(document).ready(function () {
    var agenda = new Agenda();
});
//# sourceMappingURL=uploadFile.js.map