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
        "shake":"animated shake",

        //state classes
        "show":"show"
    };

    mg.duration = {
    	"rotate":"1500",
    	"rotatePlusDelay":"1750"
    };

    
}());