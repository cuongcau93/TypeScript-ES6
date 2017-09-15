class Agenda {

    obj: JQuery = $("#dragandrophandler");
    inputFile: any = $('input[type = "file"]');

    constructor() {
        this.wireEvents();
    }

    wireEvents() {

        this.inputFile.change(event => {
            console.log(event);
            var files = this.inputFile[0].files;

            console.log(typeof (files));
            console.log(files.name);
            this.checkFormatFileUpload(files)
            console.log(files);
        });

        this.obj.on('dragenter', event => {
            this.notEventHandler(event);
            $(this.obj).css('border', '2px solid blue');
        });

        this.obj.on('dragover', event => {
            this.notEventHandler(event);
        });

        this.obj.on('drop', (event: any) => {

            $(this).css('border', '2px dotted #0B85A1');
            event.preventDefault();
            let transfer = event.dataTransfer;
            var files = event.originalEvent.dataTransfer.files;
            console.log(files);

        });

    }

    checkFormatFileUpload(file: any) {
        var _validFileExtensions = [".xls", ".doc", ".docx", ".pdf", ".png"];
            var blnValid = false;
            var sFileName = file.name;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }

                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
    }

    notEventHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }

}

$(document).ready(function () {
    let agenda = new Agenda();
});