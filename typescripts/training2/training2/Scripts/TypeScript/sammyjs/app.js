var IRMeetingRequest;
(function (IRMeetingRequest) {
    'use strict';
    var appMain = Sammy('#main', function () {
        this.use('Mustache', 'ms');
        var context = this;
        this.get('#/', function () {
            var context = this.context;
            this.swap('Loaded content successfully!!!');
        });
        appMain.get('#/filme', function (context) {
            context.render('template.ms', {}, function (output) {
                $('#content').append(output);
            });
        });
    });
    $(function () {
        // start the app with home route
        appMain.run('#/');
    });
})(IRMeetingRequest || (IRMeetingRequest = {}));
//# sourceMappingURL=app.js.map