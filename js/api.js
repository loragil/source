/*jslint indent: 4, white: true, debug: true */
/*global $, console, alert, setTimeout */

var mg = mg || {};//namespace declaration ('mg' stands for 'Monopoly Game').

//provide code encapsulation to avoid global scope
(function () {
	"use strict"; 

	//acions triggered from server (server-side initiated)
	mg.api = {
		notify: function (msg) {
			mg.ui.render.notification(msg);
		},

		addChatMsg: function (user, msg) {
			mg.ui.render.newChatMsg(user, msg);
		}
	};
}());