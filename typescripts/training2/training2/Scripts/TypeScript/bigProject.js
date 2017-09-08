$(document).ready(function () {
    var typeOfMeeting = new TypeOfMeeting();
});
var TypeOfMeeting = (function () {
    function TypeOfMeeting() {
        //this.wireEvents('','','');
    }
    TypeOfMeeting.prototype.wireEvents = function (faceToFaceButton, videoConferenceButton, teleconferenceButton) {
        $(faceToFaceButton).
            addEventListener("click", this.faceToFace, false);
        $(videoConferenceButton).
            addEventListener("click", this.videoConference, false);
        document.getElementById(teleconferenceButton).
            addEventListener("click", this.teleconference, false);
    };
    TypeOfMeeting.prototype.faceToFace = function () {
        $('.face-to-face').addClass('text-active');
        $('.video-conference').removeClass('text-active');
        $('.teleconference').removeClass('text-active');
        $('.note-faceToFace').show();
        $('.note-videoConference').hide();
        $('.note-teleconference').hide();
    };
    TypeOfMeeting.prototype.videoConference = function () {
        $('.video-conference').addClass('text-active');
        $('.face-to-face').removeClass('text-active');
        $('.teleconference').removeClass('text-active');
        $('.note-faceToFace').hide();
        $('.note-videoConference').show();
        $('.note-teleconference').hide();
    };
    TypeOfMeeting.prototype.teleconference = function () {
        $('.teleconference').addClass('text-active');
        $('.face-to-face').removeclass('text-active');
        $('.video-conference').removeclass('text-active');
        $('.note-facetoface').hide();
        $('.note-videoconference').hide();
        $('.note-teleconference').show();
    };
    return TypeOfMeeting;
}());
//# sourceMappingURL=bigProject.js.map