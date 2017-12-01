'use strict';

module.exports = function (oAppData) {
	var App = require('%PathToCoreWebclientModule%/js/App.js');
	
	if (App.getUserRole() === Enums.UserRole.NormalUser)
	{
		var Settings = require('modules/%ModuleName%/js/Settings.js');

		Settings.init(oAppData);

		return {
			getChangePasswordPopup: function () {
				return require('modules/%ModuleName%/js/popups/ChangePasswordPopup.js');
			},
			getResetPasswordView: function () {
				return require('modules/%ModuleName%/js/views/ResetPasswordView.js');
			}
		};
	}
	
	return null;
};
