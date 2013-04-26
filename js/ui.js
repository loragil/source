/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";
    
    mg.ui = {
        effects: {
            fadeOut: function (el) {
                el.removeClass(mg.setup.cssMap.fadeIn);
                el.addClass(mg.setup.cssMap.fadeOut);
                el.hide();
            },

            fadeIn: function (el) {
                el.removeClass(mg.setup.cssMap.fadeOut);
                el.addClass(mg.setup.cssMap.fadeIn);
                el.show();
            },

            rollDice: function (dieA, dieB) {
                this.setTemporaryClass(dieA.add(dieB), mg.setup.cssMap.rotate, mg.setup.duration.rotatePlusDelay);
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
                this.setTemporaryClass(el, mg.setup.cssMap.bounceIn, mg.setup.duration.rotate);
                el.show();
            },

            fadeOutDown: function (el) {
                this.setTemporaryClass(el, mg.setup.cssMap.fadeOutDown, mg.setup.duration.rotate,function(){el.hide();});
            },

            shake: function (die) {
                this.setTemporaryClass(die, mg.setup.cssMap.shake, mg.setup.duration.rotate);
            }
        },

        render: {
            diceRoll: function(){       
                mg.elements.dieA.add(mg.elements.dieB).each(function(){
                    $(this).find(mg.setup.cssMap.dieVisibleSide).removeClass(mg.setup.cssMap.show);
                    mg.ui.effects.shake($(this));
                    $(this).find(mg.setup.cssMap.dieSpecificSide + mg.data.get.dieRoll()).addClass(mg.setup.cssMap.show);
                });
            },

            notification: function (msg){
                mg.elements.notifications.find(mg.setup.cssMap.message).html(msg);
                mg.ui.effects.bounceIn(mg.elements.notifications);  
            },

            newChatMsg: function (user, msg){
                var playerColorClass = mg.setup.cssMap.playerA;
                mg.elements.chat.find(mg.setup.cssMap.chatter).append('<br/><span><em class='+ playerColorClass +'>'+ user +': </em>'+ msg +'</span>');
                mg.elements.input.val('');
            }
        }
    };
       
}());