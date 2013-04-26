/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";    

    //stuff to execute only after DOM is ready
    $(function (){
		//provides easy access to game elements (DOM)
		mg.elements = {
			"main": $(mg.setup.cssMap.main),
			"notifications": $(mg.setup.cssMap.notifications),
			"close": $(mg.setup.cssMap.close),
			"logo": $(mg.setup.cssMap.logo),
			"send": $(mg.setup.cssMap.send),
			"roll": $(mg.setup.cssMap.roll),
			"log": $(mg.setup.cssMap.log),
			"chat": $(mg.setup.cssMap.chat),
			"input": $(mg.setup.cssMap.input),
			"dieA": $(mg.setup.cssMap.dieA),
			"dieB": $(mg.setup.cssMap.dieB)
		};

		mg.game = {   
			//isRolling: false,

			init: function () {
				mg.game.bindEvents();
			},

			//events binding to game UI elements
			bindEvents: function () {
	            mg.elements.close.click(function(){mg.ui.effects.fadeOutDown(mg.elements.notifications);});
	            mg.elements.send.click(mg.game.send);
	            mg.elements.roll.click(mg.game.roll);
				mg.elements.log.click(function(){mg.api.notify("This is a new notification <br/> from the server!");});//dumy test. should be trggered from server
				//mg.elements.chat.click(function(){mg.ui.effects.fadeOutDown(mg.elements.chat);});
			},	

			roll: function(){
				mg.ui.render.diceRoll();
			},

			send: function(){
				mg.data.send.chatMsg(mg.elements.input.val());
				//dummy broadcast test
				mg.api.addChatMsg("Gil", mg.elements.input.val());
			}
		};

	    //init the game 
	    mg.game.init();
	});

}());



