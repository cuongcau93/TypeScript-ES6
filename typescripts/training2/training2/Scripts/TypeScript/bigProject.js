/// <reference path="../typings/jquery/jquery.d.ts" />
var IRMTypeOfMeeting;
(function (IRMTypeOfMeeting) {
    var TypeOfMeeting = (function () {
        function TypeOfMeeting() {
            this.$videoConference = $('.video-conference');
            this.$teleconference = $('.teleconference');
            this.$faceToFace = $('.face-to-face');
            this.$noteFaceToFace = $('.note-faceToFace');
            this.$noteVideoConference = $('.note-videoConference');
            this.$noteTeleconference = $('.note-teleconference');
            this.textActive = 'text-active';
            this.wireEvents(this.$faceToFace, this.$videoConference, this.$teleconference);
        }
        TypeOfMeeting.prototype.wireEvents = function (faceToFaceButton, videoConferenceButton, teleconferenceButton) {
            var _this = this;
            faceToFaceButton.click(function (event) {
                _this.faceToFace();
            });
            videoConferenceButton.click(function (event) {
                _this.videoConference();
            });
            teleconferenceButton.click(function (event) {
                _this.teleconference();
            });
        };
        TypeOfMeeting.prototype.faceToFace = function () {
            $('.button-type button').removeClass(this.textActive);
            this.$faceToFace.addClass(this.textActive);
            this.$noteFaceToFace.show();
            this.$noteVideoConference.hide();
            this.$noteTeleconference.hide();
        };
        TypeOfMeeting.prototype.videoConference = function () {
            $('.button-type button').removeClass(this.textActive);
            this.$videoConference.addClass(this.textActive);
            this.$noteFaceToFace.hide();
            this.$noteVideoConference.show();
            this.$noteTeleconference.hide();
        };
        TypeOfMeeting.prototype.teleconference = function () {
            $('.button-type button').removeClass(this.textActive);
            this.$teleconference.addClass(this.textActive);
            this.$noteFaceToFace.hide();
            this.$noteVideoConference.hide();
            this.$noteTeleconference.show();
        };
        return TypeOfMeeting;
    }());
    IRMTypeOfMeeting.TypeOfMeeting = TypeOfMeeting;
})(IRMTypeOfMeeting || (IRMTypeOfMeeting = {}));
$(document).ready(function () {
    var typeOfMeeting = new IRMTypeOfMeeting.TypeOfMeeting();
    $(".add-number").live('click', function () {
        alert();
        var $tr = $(this).closest('.tr_clone');
        var $clone = $tr.clone();
        $clone.find(':text').val('');
        $tr.after($clone);
    });
});
//# sourceMappingURL=bigProject.js.map