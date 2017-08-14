(function (window, document, undefined) {
    'use strict';
    var symbol = function (el) {
        return document.querySelector(el);
    };
    var symbols = function (el) {
        return document.querySelectorAll(el);
    };

    var main = {
        // DOM Elements
        exitBtn: symbol('.exit')

        // Timeline(s)
        // tl: new TimelineLite()
    };

    main.animation = function () {
    };

    window.onload = function () {
        return main.animation();
    };
}(window, document));
