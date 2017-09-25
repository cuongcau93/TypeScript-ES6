import * as $ from 'jquery';
import * as Sammy from 'sammy';
import * as Mustache from 'mustache';


let appMain = Sammy('body', function () {

        this.use('Mustache', 'html');
        let context = this;

        context.get('#/', function (context: any) {
            //context.appMain.swap('aaaa');
            context.render('./template/template.html', {cuong:'aaaas'}).appendTo(context.$element());
        });

    });

$(function () {
        // start the app with home route
        appMain.run('#/')
})