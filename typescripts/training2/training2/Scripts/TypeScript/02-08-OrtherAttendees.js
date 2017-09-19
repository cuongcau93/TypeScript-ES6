$(document).ready(function () {
    var ortherAttendees = new OrtherAttendees();
});
var label = {
    name: {
        lettersonly: "please enter characters only",
        required: "Enter your name, please.",
        maxlength: "'Your name must consist of at least 6 characters'",
        textContainsNoHtml: "Please enter the Name without any tags."
    },
    email: {
        required: "Please enter your email address",
        formatNotCorrect: "Please enter a valid email address"
    }
};
var OrtherAttendees = (function () {
    function OrtherAttendees() {
        this.txtName = $('.form .form-item .form-group .row .txt-name');
        this.txtEmail = $('.form .form-item .form-group .row .txt-email');
        this.wireEvents();
    }
    OrtherAttendees.prototype.wireEvents = function () {
        var _this = this;
        $('.submit').on('click', function () {
            _this.checkValidateInput();
        });
        $(".add-number").on('click', function () {
            _this.AddForm();
        });
    };
    OrtherAttendees.prototype.AddForm = function () {
        $(".form-item:last-child").clone().appendTo(".form");
        $(".form-item:last-child input").val("");
    };
    OrtherAttendees.prototype.checkValidateInput = function () {
        var lengthFromItem = $('.form .form-item').length;
        for (var i = 0; i < lengthFromItem; i++) {
            var name_1 = $(this.txtName[i]).val();
            var email = $(this.txtEmail[i]).val();
            console.log($(this.txtEmail[i]));
            if (name_1.length > 0 || email.length > 0) {
                if (this.checkName(name_1) == false || this.checkEmail(email) == false) {
                    break;
                }
                else {
                    // do something
                }
            }
            else {
                continue;
            }
        }
    };
    OrtherAttendees.prototype.checkName = function (name) {
        var nameRe = /^[a-zA-Z]+$/;
        if (!name) {
            alert(label.name.required);
            return false;
        }
        //else if (name.match(/<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/)) {
        //    alert(label.name.textContainsNoHtml);
        //    return false;
        //}
        //else if (!nameRe.test(name)) {
        //    alert(label.name.lettersonly);
        //    return false;
        //}
        //else if (name.length < 6) {
        //    alert(label.name.maxlength);
        //    return false;
        //}
        return true;
    };
    OrtherAttendees.prototype.checkEmail = function (email) {
        var emailRe = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i;
        if (!email) {
            alert(label.email.required);
            return false;
        }
        else if (emailRe.test(email) == false) {
            alert(label.email.formatNotCorrect);
            return false;
        }
        return true;
    };
    return OrtherAttendees;
}());
//# sourceMappingURL=02-08-OrtherAttendees.js.map