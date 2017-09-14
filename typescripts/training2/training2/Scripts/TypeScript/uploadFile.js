var Agenda = (function () {
    function Agenda() {
        //dataTransfer: DataTransfer;
        this.obj = $("#dragandrophandler");
        this.inputFile = $('input[type = "file"]');
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        var _this = this;
        this.inputFile.change(function (event) {
            console.log(event);
            var files = _this.inputFile[0].files;
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
        //this.obj.on('drop', (e) => {
        //    let dataTransfer: DataTransfer;
        //    $(this).css('border', '2px dotted #0B85A1');
        //    e.preventDefault();
        //    var files = e.originalEvent.dataTransfer.files;
        //    //We need to send dropped files to Server
        //    //handleFileUpload(files, obj);
        //    //console.log(files);
        //    //console.log(obj);
        //});
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