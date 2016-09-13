'use strict';

module.exports = function (oAppData) {

	var
		Settings = require('modules/%ModuleName%/js/Settings.js'),
		oSettings = oAppData['%ModuleName%'] || {}
	;
	
	Settings.init(oSettings);
	
	return {
		isAvailable: function (iUserRole, bPublic) {
			return !bPublic && iUserRole === Enums.UserRole.NormalUser;
		},
		getChangePasswordPopup: function () {
			return require('modules/%ModuleName%/js/popups/ChangePasswordPopup.js');
		},
		getResetPasswordView: function () {
			return require('modules/%ModuleName%/js/views/ResetPasswordView.js');
		}
	};
};