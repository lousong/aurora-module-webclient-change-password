<?php

class ChangePasswordWebclientModule extends AApiModule
{
	public function GetAppData()
	{
		\CApi::checkUserRoleIsAtLeast(\EUserRole::Anonymous);
		
		return array(
			'PasswordMinLength' => 0, // AppData.App.PasswordMinLength
			'PasswordMustBeComplex' => false // AppData.App.PasswordMustBeComplex
		);
	}
}
