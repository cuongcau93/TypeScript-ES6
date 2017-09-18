class Agenda {

    obj: JQuery = $("#dragandrophandler");
    inputFile: any = $('input[type = "file"]');
    objAgenda: object = {
        summary: "",
        file: File
    }

    constructor() {
        this.wireEvents();
    }

    wireEvents() {

        this.inputFile.change(event => {

            var files = this.inputFile[0].files;
            this.handleFileUpload(files);
            if (this.handleFileUpload(files)) {
                console.log(files);
            }

        });

        this.obj.on('dragenter', event => {
            this.notEventHandler(event);
            $(this.obj).css('border', '2px solid blue');
        });

        this.obj.on('dragover', event => {
            this.notEventHandler(event);
        });

        this.obj.on('drop', (event: any) => {
            $(this.obj).css('border', '2px dotted #0B85A1');
            event.preventDefault();
            var files = event.originalEvent.dataTransfer.files;
            this.handleFileUpload(files);
        });

        $(document).on('dragenter', event => {
            this.notEventHandler(event);
        });

        $(document).on('dragover', event => {
            this.notEventHandler(event);
            $(this.obj).css('border', '2px dotted #0B85A1');
        });

        $(document).on('drop', event => {
            this.notEventHandler(event);
        });

    }

    notEventHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    handleFileUpload(files): Boolean {
        let maxsize: number = 51200;
        var _validFileExtensions = [".xls", ".doc", ".docx", ".pdf", ".png"];
        for (var i = 0; i < files.length; i++) {

            var sFileName = files[i].name;
            console.log(files[i].size);

            if (files[i].size <= maxsize || files[i].fileSize <= maxsize) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }

            }
            else {
                alert('Allowed file size exceeded. (Max. 50 MB)');
                return false;
            }
        }

        return true;
    }

}

$(document).ready(function () {
    let agenda = new Agenda();
});