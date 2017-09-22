/// <reference path="../app.ts" />

module TypeofMeeting {

    IRMeetingRequest.appMain.get('#/filme', function (context) {
        context.render('template/template.ms', { cuong: 'cuong' }).appendTo(context.$element());
    });


} 
