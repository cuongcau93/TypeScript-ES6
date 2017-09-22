define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IRMeetingRequest;
    (function (IRMeetingRequest) {
        'use strict';
        IRMeetingRequest.appMain = Sammy('#content', function () {
            //this.use('Mustache', 'ms');
            var context = this;
            context.get('#/', function (context) {
                //context.appMain.swap('aaaa');
                //context.render('template/template.ms', {}).appendTo(context.$element());
            });
            context.get('#/filme', function (context) {
                context.render('template/template.ms', {}).appendTo(context.$element());
            });
        });
        var aaaaaaaaaaaa = (function () {
            function aaaaaaaaaaaa() {
                console.log('ssss');
            }
            return aaaaaaaaaaaa;
        }());
        IRMeetingRequest.aaaaaaaaaaaa = aaaaaaaaaaaa;
        $(function () {
            // start the app with home route
            IRMeetingRequest.appMain.run('#/');
        });
    })(IRMeetingRequest = exports.IRMeetingRequest || (exports.IRMeetingRequest = {}));
});
//# sourceMappingURL=app.js.map