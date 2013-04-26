/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";

	//unified access to css selectors & classes (used mainly wihtin 'mg.elements')
    mg.setup = {
        cssMap: {
        	//object (& other DOM elements) selectors:
        	"main": ".monopoly",
            "notifications": ".notifications",
            "message": ".message",//notification area
            "chatter": ".chatter",//chat area
            "close": ".close",
            "logo": ".logo-bg",
            "send": ".send",
            "roll": ".roll",
            "log": ".log",
            "chat": ".chat",
            "input": ".write",
            "dieA": ".dice-1",
            "dieB": ".dice-2",
            "dieVisibleSide": "DIV > DIV",
            "dieSpecificSide": ".side-",

            //visual effects classes (no '.' or '#' in front of the selector)
            "fadeIn": "fade-in",
            "fadeOut": "fade-out",
            "rotate": "rotate",
            "bounceIn":"animated bounceIn",
            "fadeOutDown":"animated fadeOutDown",
            "shake":"animated shake",
            "playerA": "player-a",
            "playerB": "player-b",
            "playerC": "player-c",
            "playerD": "player-d",

            //state classes
            "show":"show"
        },

        duration: {
        	"rotate":"1500",
        	"rotatePlusDelay":"1750"
        },

        templates: {
            "chatMsg":"<span><em></em></span>"
        }
    };

}());