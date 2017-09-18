var IRMTypeOfMeeting;
(function (IRMTypeOfMeeting) {
    $(document).ready(function () {
        var typeOfMeeting = new TypeOfMeeting();
    });
    var TypeOfMeeting = (function () {
        function TypeOfMeeting() {
            this.$videoConference = $('.video-conference');
            this.$teleconference = $('.teleconference');
            this.$faceToFace = $('.face-to-face');
            this.$noteFaceToFace = $('.note-faceToFace');
            this.$noteVideoConference = $('.note-videoConference');
            this.$noteTeleconference = $('.note-teleconference');
            this.textActive = 'text-active';
            //this.wireEvents(this.$faceToFace, this.$videoConference, this.$teleconference);
            this.MeetingType();
        }
        TypeOfMeeting.prototype.MeetingType = function () {
            var _this = this;
            $('.meeting-type').on('click', function (event) {
                var $target = $(event.target);
                if ($target.hasClass('face-to-face')) {
                    _this.faceToFace();
                }
                if ($target.hasClass('video-conference')) {
                    _this.videoConference();
                }
                if ($target.hasClass('teleconference')) {
                    _this.teleconference();
                }
            });
        };
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
})(IRMTypeOfMeeting || (IRMTypeOfMeeting = {}));
$(document).ready(function () {
    console.log(this.files);
});
//# sourceMappingURL=bigProject.js.map