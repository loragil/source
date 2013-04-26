/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";

	//helper functions
	mg.data = {
		//helps clear input from unsafe chars before sending it to the server
		escapeHtml: function (stringToEvalate) {
			var entityMap = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': '&quot;',
				"'": '&#39;',
				"/": '&#x2F;'
			};
			return String(stringToEvalate).replace(/[&<>"'\/]/g, function (s) {
				return mg.data.entityMap[s];
			});
		}
	};

	//info to supply to server (client-side initiated)
	mg.data.send = {
		chatMsg: function(msg){
			if(msg !== ''){
				console.log(mg.data.escapeHtml(msg));
			}
		}
	};

	//info to request from server (client-side initiated)
	mg.data.get = {
		dieRoll: function(){
			return 1 + Math.floor(Math.random() * 6);
		}
	};
}());