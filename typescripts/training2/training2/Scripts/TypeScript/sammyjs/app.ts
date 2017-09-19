//(function ($) {
//    var app = $.sammy('#content', function () {
//        /* load mustache plugin */
//        this.use('Mustache', 'ms');

//        var app = $.sammy('#content');

//        app.get('#/filme', function (context) {

//            this.load('filme.json')
//                .then(function (items) {

//                    $.each(items, function (i, item) {
//                        context.render('template.ms', { id: item.id, name: item.name, genre: item.genre, year: item.year }).appendTo(context.$element());
//                    });
//                });
//            //alert('aaaa');
//        });
//    });

//    $(function () {
//        app.run('#/');
//    });

//    //$('.next').on('click', function () {
//    //    url = '#/filme';
//    //    console.log(url);
//    //    window.location = url;

//    })


//})(jQuery);
class App {

    constructor() {
        this.sammyApp().run('#/');
    }

    sammyApp(): any {
        $.sammy('#content', function () {
        /* load mustache plugin */
        this.use('Mustache', 'ms');

        var app = $.sammy('#content');

        app.get('#/filme', function (context) {
            alert('aaaa');
            this.load('Api/filme.json')
                .then(function (items) {

                    $.each(items, function (i, item) {
                        context.render('View/template/template.ms', { id: item.id, name: item.name, genre: item.genre, year: item.year }).appendTo(context.$element());
                    });
                });
        });
    });
    }
}

$(document).ready(() => {
    var app = new App();
    $('.next').on('click', function () {
        var url: string = '#/filme';
        console.log(url);
    })
})