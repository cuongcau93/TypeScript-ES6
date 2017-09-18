$(document).ready(function () {
    //var a = $('.form .form-item').length;
    //var b = $('.form .form-item')[1];
    //console.log(b);
    var ortherAttendees = new OrtherAttendees();
});
var OrtherAttendees = (function () {
    function OrtherAttendees() {
        this.txtName = $('.form .form-item .form-group .row .txt-name');
        this.wireEvents();
    }
    OrtherAttendees.prototype.wireEvents = function () {
        var _this = this;
        $('.submit').click(function () {
            s;
            _this.checkValidateInput();
        });
        //$('.form .form-item .txt-name').change(() => {
        //    console.log($('.txt-name').val());
        //})
    };
    OrtherAttendees.prototype.checkValidateInput = function () {
        var lengthFromItem = $('.form .form-item').length;
        for (var i = 0; i < lengthFromItem; i++) {
            var name_1 = $(this.txtName[i]).val().trim();
            if (this.checkName(name_1)) {
                alert(name_1);
            }
        }
    };
    OrtherAttendees.prototype.checkName = function (name) {
        if (name.length < 6) {
            return false;
        }
        return true;
    };
    OrtherAttendees.prototype.checkEmail = function (email) {
    };
    return OrtherAttendees;
}());
//# sourceMappingURL=02-08-OrtherAttendees.js.map