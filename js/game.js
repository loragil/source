/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";    

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
			//isRolling: false,

			init: function () {
				mg.game.bindEvents();
			},

			bindEvents: function () {
	            //bind events
	            mg.elements.close.click(function(){mg.ui.fadeOutDown(mg.elements.notifications);});
	            mg.elements.send.click(function(){mg.ui.bounceIn(mg.elements.notifications);});
	            mg.elements.roll.click(function(){mg.game.rollDice();});
				//mg.elements.log.click(function(){mg.ui.bounceIn(mg.elements.log);});
				//mg.elements.chat.click(function(){mg.ui.fadeOutDown(mg.elements.chat);});
			},

			rollDice: function(){		
            	mg.data.getDieRoll(mg.elements.dieA);
            	mg.data.getDieRoll(mg.elements.dieB);
			}
		};

	    //init the game 
	    mg.game.init();
	});

}());



