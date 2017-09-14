class Agenda {
    //dataTransfer: DataTransfer;
    obj: JQuery = $("#dragandrophandler");
    inputFile: any = $('input[type = "file"]');

    constructor() {
        this.wireEvents();
    }

    wireEvents() {

        this.inputFile.change(event => {
            console.log(event);
            var files = this.inputFile[0].files
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

        //this.obj.on('drop', (e) => {
        //    let dataTransfer: DataTransfer;
        //    $(this).css('border', '2px dotted #0B85A1');
        //    e.preventDefault();
        
        //    var files = e.originalEvent.dataTransfer.files;
        //    //We need to send dropped files to Server
        //    //handleFileUpload(files, obj);
        //    //console.log(files);
        //    //console.log(obj);

        //});
    }

    notEventHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }

}

$(document).ready(function () {
    let agenda = new Agenda();
});