'use strict';

var
	_ = require('underscore'),
	
	Types = require('%PathToCoreWebclientModule%/js/utils/Types.js')
;

module.exports = {
	// If true and there is only one mail account show change password button in common settings, not in mail account properties screen.
	ShowSingleMailChangePasswordInCommonSettings: false,
	AuthTokenCookieExpireTime: 30,
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var 
			oAppDataSection = oAppData['%ModuleName%'],
			oAppDataCoreSection = oAppData['Core']
		;
		
		if (!_.isEmpty(oAppDataSection))
		{
			this.ShowSingleMailChangePasswordInCommonSettings = Types.pBool(oAppDataSection.ShowSingleMailChangePasswordInCommonSettings, this.ShowSingleMailChangePasswordInCommonSettings);
		}
		this.AuthTokenCookieExpireTime = Types.pInt(oAppDataCoreSection.AuthTokenCookieExpireTime, this.AuthTokenCookieExpireTime);

	}
};
