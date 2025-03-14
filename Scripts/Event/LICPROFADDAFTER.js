/*
Script Name: LicProfAddAfter.js
Converted from Std Choice: LicProfAddAfter
*/


showMessage = false;
showDebug = false;
if (matches(currentUserID,'KHOBDAY','ADMINTEST','MNICCORE')) {
	showDebug = 1;
	}

if (appMatch('Building/*/*/*') && !appMatch('Building/Residential/*/*')) {
	include('ES_CSLB_AFTER'); /* replaced branch(ES_CSLB_AFTER) */
	}

