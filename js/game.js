/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
    "use strict";
	    
    //unified access to css selectors & classes (used mainly wihtin 'mg.elements')
    mg.cssMap = {
    	//object selectors:
        "main": ".monopoly",
        "notifications": ".notifications",
        "close": ".close",
        "logo": ".logo-bg",
        "send": ".send",
        "roll": ".roll",
        "log": ".log",
        "chat": ".chat",
        "dieA": ".dice-1",
        "dieB": ".dice-2",

        //visual effects classes (no '.' or '#' in front of the selector)
        "fadeIn": "fade-in",
        "fadeOut": "fade-out",
        "rotate": "rotate",
        "bounceIn":"animated bounceIn",
        "fadeOutDown":"animated fadeOutDown",
        "shake":"animated shake"
	};

	mg.duration = {
		"rotate":"1500"
	};

	mg.ui = {
		fadeOut: function (el) {
			el.removeClass(mg.cssMap.fadeIn);
			el.addClass(mg.cssMap.fadeOut);
		},

		fadeIn: function (el) {
			el.removeClass(mg.cssMap.fadeOut);
			el.addClass(mg.cssMap.fadeIn);
		},

		rollDice: function (dieA, dieB) {
			this.setTemporaryClass(dieA.add(dieB), mg.cssMap.rotate, mg.duration.rotate);
		},

		setTemporaryClass: function (el, cssClass, duration) {
			el.addClass(cssClass);
			setTimeout(function() {
				el.removeClass(cssClass);
			}, duration);
		},

		//from animate.css:
		bounceIn: function (el) {
			this.setTemporaryClass(el, mg.cssMap.bounceIn, mg.duration.rotate);
		},

		fadeOutDown: function (el) {
			this.setTemporaryClass(el, mg.cssMap.fadeOutDown, mg.duration.rotate);
		},

		shake: function (el) {
			this.setTemporaryClass(el, mg.cssMap.fadeOutDown, mg.duration.rotate);
		}
	};

    //stuff to execute only after DOM is ready
	$(function (){
		//easy access to game elements (DOM)
		mg.elements = {
			main: $(mg.cssMap.main),
			notifications: $(mg.cssMap.notifications),
			close: $(mg.cssMap.close),
			logo: $(mg.cssMap.logo),
			send: $(mg.cssMap.send),
			roll: $(mg.cssMap.roll),
			log: $(mg.cssMap.log),
			chat: $(mg.cssMap.chat),
			dieA: $(mg.cssMap.dieA),
			dieB: $(mg.cssMap.dieB)
		};

	    mg.game = {   
	        init: function () {
	            //bind events
				mg.elements.close.click(function(){mg.ui.fadeOutDown(mg.elements.notifications);});
				mg.elements.send.click(function(){mg.ui.bounceIn(mg.elements.notifications);});				
				mg.elements.roll.click(function(){mg.ui.rollDice(mg.elements.dieA, mg.elements.dieB);});
				//mg.elements.log.click(function(){mg.ui.bounceIn(mg.elements.log);});
				//mg.elements.chat.click(function(){mg.ui.fadeOutDown(mg.elements.chat);});
	        }
	    };

	    //init the game 
		mg.game.init();
	});

}());



