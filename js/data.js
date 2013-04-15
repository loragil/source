/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict";

	mg.data = {
		getDieRoll: function(die){
			var rnd = 1 + Math.floor(Math.random() * 6);
			die.find('DIV > DIV').removeClass(mg.cssMap.show);
			mg.ui.shake(die);
			die.find('.side-' + rnd).addClass(mg.cssMap.show);
		},
		
		//helps clear input from unsafe chars before sending it to the server
		escapeHtml: function (string) {
			var entityMap = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': '&quot;',
				"'": '&#39;',
				"/": '&#x2F;'
			};
			return String(string).replace(/[&<>"'\/]/g, function (s) {
				return mg.data.entityMap[s];
			});
		}
	};
}());