
$(document).ready(function () {
    var typeOfMeeting = new TypeOfMeeting();
});

interface ITypeOfMeeting {
    wireEvents(startButton, pauseButton, clearButton): void;
}

class TypeOfMeeting implements ITypeOfMeeting {

    constructor() {
        //this.wireEvents('','','');
    }

    wireEvents(faceToFaceButton, videoConferenceButton, teleconferenceButton): void {

        $(faceToFaceButton).
            addEventListener("click", this.faceToFace, false);
        $(videoConferenceButton).
            addEventListener("click", this.videoConference, false);
        document.getElementById(teleconferenceButton).
            addEventListener("click", this.teleconference, false);
    }

    faceToFace(): void {
        $('.face-to-face').addClass('text-active');
        $('.video-conference').removeClass('text-active');
        $('.teleconference').removeClass('text-active');

        $('.note-faceToFace').show();
        $('.note-videoConference').hide();
        $('.note-teleconference').hide();
    }

    videoConference(): void {
        $('.video-conference').addClass('text-active');
        $('.face-to-face').removeClass('text-active');
        $('.teleconference').removeClass('text-active');

        $('.note-faceToFace').hide();
        $('.note-videoConference').show();
        $('.note-teleconference').hide();
    }

    teleconference(): void {
        $('.teleconference').addClass('text-active');
        $('.face-to-face').removeclass('text-active');
        $('.video-conference').removeclass('text-active');

        $('.note-facetoface').hide();
        $('.note-videoconference').hide();
        $('.note-teleconference').show();
    }

}