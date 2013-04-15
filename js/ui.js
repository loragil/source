/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";

    mg.ui = {
        fadeOut: function (el) {
            el.removeClass(mg.cssMap.fadeIn);
            el.addClass(mg.cssMap.fadeOut);
            el.hide();
        },

        fadeIn: function (el) {
            el.removeClass(mg.cssMap.fadeOut);
            el.addClass(mg.cssMap.fadeIn);
            el.show();
        },

        rollDice: function (dieA, dieB) {
            this.setTemporaryClass(dieA.add(dieB), mg.cssMap.rotate, mg.duration.rotatePlusDelay);
        },

        setTemporaryClass: function (el, cssClass, duration, callback) {
            el.addClass(cssClass);
            setTimeout(function() {
                if(callback){callback();}
                el.removeClass(cssClass);
            }, duration);
        },

        //from animate.css:
        bounceIn: function (el) {
            this.setTemporaryClass(el, mg.cssMap.bounceIn, mg.duration.rotate);
            el.show();
        },

        fadeOutDown: function (el) {
            this.setTemporaryClass(el, mg.cssMap.fadeOutDown, mg.duration.rotate,function(){el.hide();});
        },

        shake: function (die) {
            this.setTemporaryClass(die, mg.cssMap.shake, mg.duration.rotate);
        }
    };    
}());