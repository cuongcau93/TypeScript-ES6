var Agenda = (function () {
    function Agenda() {
        this.obj = $("#dragandrophandler");
        this.wireEvents();
    }
    Agenda.prototype.wireEvents = function () {
        var _this = this;
        $("input").change(function (event) {
            console.log('aaa');
            console.log(_this);
            var files = $(".box__file").files;
            console.log(files);
            //handleFileUpload(files, obj);
        });
    };
    return Agenda;
}());
$(document).ready(function () {
    var agenda = new Agenda();
});
//# sourceMappingURL=uploadFile.js.map