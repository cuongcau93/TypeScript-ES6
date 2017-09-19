$(document).ready(function () {
    var ortherAttendees = new OrtherAttendees();
})

let label = {
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
}

interface IOrtherAttendes {
    name: string;
    position: string;
    email: string;
}

class OrtherAttendees {

    txtName: JQuery = $('.form .form-item .form-group .row .txt-name');
    txtEmail: JQuery = $('.form .form-item .form-group .row .txt-email')

    constructor() {
        this.wireEvents();
    }

    wireEvents() {

        $('.submit').on('click', () => {
            this.checkValidateInput();
        })

        $(".add-number").on('click', () => {
            this.AddForm();
        });

    }

    AddForm(): void {
        $(".form-item:last-child").clone().appendTo(".form");
        $(".form-item:last-child input").val("");
    }

    checkValidateInput() {
        var lengthFromItem: number = $('.form .form-item').length;
        for (var i = 0; i < lengthFromItem; i++) {

            let name: string = $(this.txtName[i]).val();
            let email: string = $(this.txtEmail[i]).val();

            console.log($(this.txtEmail[i]))

            if (name.length > 0 || email.length > 0) {
                if (this.checkName(name) == false || this.checkEmail(email) == false) {
                    break;
                } else {
                    // do something
                }
            } else {
                continue;
            }
        }
    }

    checkName(name: string): boolean {
        let nameRe = /^[a-zA-Z]+$/;

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
    }

    checkEmail(email: string) {

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
    }

}