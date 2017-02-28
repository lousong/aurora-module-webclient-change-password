<?php

namespace Aurora\Modules;

class ChangePasswordWebclientModule extends \Aurora\System\AbstractModule
{
	/***** public functions might be called with web API *****/
	/**
	 * Obtains list of module settings for authenticated user.
	 * 
	 * @return array
	 */
	public function GetSettings()
	{
		\Aurora\System\Api::checkUserRoleIsAtLeast(\EUserRole::Anonymous);
		
		return array(
			'PasswordMinLength' => 0, // AppData.App.PasswordMinLength
			'PasswordMustBeComplex' => false // AppData.App.PasswordMustBeComplex
		);
	}
	/***** public functions might be called with web API *****/
}
