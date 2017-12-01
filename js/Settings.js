'use strict';

var
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js'),
	UrlUtils = require('%PathToCoreWebclientModule%/js/utils/Url.js')
;

module.exports = {
	PasswordMinLength: 0,
	PasswordMustBeComplex: false,
	ResetPassHash: UrlUtils.getRequestParam('reset-pass') || '',
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var oAppDataSection = oAppData['%ModuleName%'];
		
		if (!_.isEmpty(oAppDataSection))
		{
			this.PasswordMinLength = Types.pNonNegativeInt(oAppDataSection.PasswordMinLength, this.PasswordMinLength);
			this.PasswordMustBeComplex = Types.pBool(oAppDataSection.PasswordMustBeComplex, this.PasswordMustBeComplex);
		}
	}
};
