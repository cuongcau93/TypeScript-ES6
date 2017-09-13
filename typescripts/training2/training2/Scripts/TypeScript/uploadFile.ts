class Agenda {

    obj: JQuery = $("#dragandrophandler");
    files: any;

    constructor() {
        this.wireEvents();
    }

    wireEvents() {
        $("input").change(event => {
            console.log('aaa');
            console.log(this);
            var files = $(".box__file").files;
            console.log(files);
            //handleFileUpload(files, obj);
        });
    }

}

$(document).ready(function () {
    let agenda = new Agenda();
});