class Agenda {

    obj: JQuery = $("#dragandrophandler");
    inputFile: any = $('input[type = "file"]');

    constructor() {
        this.wireEvents();
    }

    wireEvents() {

        this.inputFile.change(event => {
            var files = this.inputFile[0].files
            console.log(files);
        });

        $("#dragandrophandler").on('dragenter', event => {
            event.stopPropagation();
            event.preventDefault();
            $(this).css('border', '2px solid blue');
        });

    }
}

$(document).ready(function () {
    let agenda = new Agenda();
});