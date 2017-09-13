var Agenda = (function () {
    function Agenda() {
        this.obj = $("#dragandrophandler");
        this.a = $('input[type = "file"]');
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        $('input[type = "file"]').change(function (event) {
            //var a = $('input');
            //var files = a.files;
            console.log($('#file').files);
            console.log($('input[type = "file"]'));
            console.log($('input[type = "file"]'[0]).files);
            console.log($('input[type = "file"]').files);
            //handleFileUpload(files, obj);
        });
    };
    return Agenda;
}());
$(document).ready(function () {
    var agenda = new Agenda();
});
//# sourceMappingURL=uploadFile.js.map