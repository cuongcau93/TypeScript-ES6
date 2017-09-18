
namespace IRMTypeOfMeeting {


    $(document).ready(function () {
        var typeOfMeeting = new TypeOfMeeting();
    });


    interface ITypeOfMeeting {

        $videoConference: JQuery;
        $teleconference: JQuery;
        $faceToFace: JQuery;
        $noteFaceToFace: JQuery;
        $noteVideoConference: JQuery;
        $noteTeleconference: JQuery;

        wireEvents(faceToFaceButton: JQuery, videoConferenceButton: JQuery, teleconferenceButton: JQuery): void;
        faceToFace(): void;
        videoConference(): void;
        teleconference(): void;

    }

    class TypeOfMeeting implements ITypeOfMeeting {

        $videoConference: JQuery = $('.video-conference');
        $teleconference: JQuery = $('.teleconference');
        $faceToFace: JQuery = $('.face-to-face');
        $noteFaceToFace: JQuery = $('.note-faceToFace');
        $noteVideoConference: JQuery = $('.note-videoConference');
        $noteTeleconference: JQuery = $('.note-teleconference');

        private textActive: string = 'text-active';

        constructor() {
            //this.wireEvents(this.$faceToFace, this.$videoConference, this.$teleconference);
            this.MeetingType();
        }

        MeetingType(): void {
            $('.meeting-type').on('click', event => {
                var $target = $(event.target);

                if ($target.hasClass('face-to-face')) {
                    this.faceToFace();
                }

                if ($target.hasClass('video-conference')) {
                    this.videoConference();
                }

                if ($target.hasClass('teleconference')) {
                    this.teleconference();
                }
            });
        }

        wireEvents(faceToFaceButton, videoConferenceButton, teleconferenceButton): void {

            faceToFaceButton.click(event => {
                this.faceToFace();
            });

            videoConferenceButton.click(event => {
                this.videoConference();
            });

            teleconferenceButton.click(event => {
                this.teleconference();
            });

        }

        faceToFace() {
            $('.button-type button').removeClass(this.textActive);
            this.$faceToFace.addClass(this.textActive);

            this.$noteFaceToFace.show();
            this.$noteVideoConference.hide();
            this.$noteTeleconference.hide();
        }

        videoConference() {
            $('.button-type button').removeClass(this.textActive);
            this.$videoConference.addClass(this.textActive);

            this.$noteFaceToFace.hide();
            this.$noteVideoConference.show();
            this.$noteTeleconference.hide();
        }

        teleconference() {
            $('.button-type button').removeClass(this.textActive);
            this.$teleconference.addClass(this.textActive);

            this.$noteFaceToFace.hide();
            this.$noteVideoConference.hide();
            this.$noteTeleconference.show();
        }

    }
}

$(document).ready(function () {
    console.log(this.files);
});