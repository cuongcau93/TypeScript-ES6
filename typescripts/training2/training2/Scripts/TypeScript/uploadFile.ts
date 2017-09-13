class Agenda {

    obj: JQuery = $("#dragandrophandler");
    a: JQuery = $('input[type = "file"]');

    constructor() {
        this.wireEvents();
    }

    wireEvents() {
        $('input[type = "file"]').change(event => {
            //var a = $('input');
            //var files = a.files;
            console.log($('#file').files);
            console.log($('input[type = "file"]'));
            console.log($('input[type = "file"]'[0]).files);
            console.log($('input[type = "file"]').files);
            //handleFileUpload(files, obj);
        });
    }

}

$(document).ready(function () {
    let agenda = new Agenda();
});