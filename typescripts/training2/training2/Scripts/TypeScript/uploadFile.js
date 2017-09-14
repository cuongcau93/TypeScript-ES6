var Agenda = (function () {
    function Agenda() {
        this.obj = $("#dragandrophandler");
        this.inputFile = $('input[type = "file"]');
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        var _this = this;
        this.inputFile.change(function (event) {
            var files = _this.inputFile[0].files;
            console.log(files);
        });
        $("#dragandrophandler").on('dragenter', function (event) {
            event.stopPropagation();
            event.preventDefault();
            $(_this).css('border', '2px solid blue');
        });
    };
    return Agenda;
}());
$(document).ready(function () {
    var agenda = new Agenda();
});
//# sourceMappingURL=uploadFile.js.map