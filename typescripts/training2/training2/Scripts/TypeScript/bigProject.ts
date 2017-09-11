/// <reference path="../typings/jquery/jquery.d.ts" />

namespace IRMTypeOfMeeting {

    interface ITypeOfMeeting {

        $videoConference: JQuery;
        $teleconference: JQuery;
        $faceToFace: JQuery;
        $noteFaceToFace: JQuery;
        $noteVideoConference: JQuery;
        $noteTeleconference: JQuery;

        wireEvents(faceToFaceButton, videoConferenceButton, teleconferenceButton): void;
        faceToFace(): void;
        videoConference(): void;
        teleconference(): void;

    }

    export class TypeOfMeeting implements ITypeOfMeeting {

        $videoConference: JQuery = $('.video-conference');
        $teleconference: JQuery = $('.teleconference');
        $faceToFace: JQuery = $('.face-to-face');
        $noteFaceToFace: JQuery = $('.note-faceToFace');
        $noteVideoConference: JQuery = $('.note-videoConference');
        $noteTeleconference: JQuery = $('.note-teleconference');

        private textActive: string = 'text-active';

        constructor() {

            this.wireEvents(this.$faceToFace, this.$videoConference, this.$teleconference);

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
    var typeOfMeeting = new IRMTypeOfMeeting.TypeOfMeeting();

    $(".add-number").live('click', function () {
        alert()
        var $tr = $(this).closest('.tr_clone');
        var $clone = $tr.clone();
        $clone.find(':text').val('');
        $tr.after($clone);
    });

});