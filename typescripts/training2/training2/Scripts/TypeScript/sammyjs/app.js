var IRMeetingRequest;
(function (IRMeetingRequest) {
    'use strict';
    IRMeetingRequest.appMain = Sammy('#content', function () {
        this.use('Mustache', 'ms');
        var context = this;
        context.get('#/', function (context) {
            //context.appMain.swap('aaaa');
            context.render('template/template.ms', { aaa: 'aaaas' }).appendTo(context.$element());
        });
        //context.get('#/filme', function (context) {
        //    context.render('template/template.ms', {}).appendTo(context.$element());
        //});
    });
    $(function () {
        // start the app with home route
        IRMeetingRequest.appMain.run('#/');
    });
    //let IRMeetingRequestApp: Sammy.Application = Sammy('#content');
    //IRMeetingRequestApp.use('Mustache');
    //$(function () {
    //    appMain.run('#/');
    //});
})(IRMeetingRequest || (IRMeetingRequest = {}));
//# sourceMappingURL=app.js.map