$(document).ready(function () {
    //var a = $('.form .form-item').length;
    //var b = $('.form .form-item')[1];
    //console.log(b);
    var ortherAttendees = new OrtherAttendees();
})

class OrtherAttendees {

    txtName: any = $('.form .form-item .form-group .row .txt-name');

    constructor() {
        this.wireEvents();
    }

    wireEvents() {
        $('.submit').click(() => {s
            this.checkValidateInput();

        })

        //$('.form .form-item .txt-name').change(() => {
        //    console.log($('.txt-name').val());
        //})

    }

    checkValidateInput() {
        var lengthFromItem: number = $('.form .form-item').length;
        for (var i = 0; i < lengthFromItem; i++) {
            let name: string = $(this.txtName[i]).val().trim();
            if (this.checkName(name)) {
                alert(name);
            }
        }
    }

    checkName(name: string): boolean {
        if (name.length < 6) {
            return false
        }
        return true;
    }

    checkEmail(email: string) {

    }

}