/*
Script Name: ApplicationStatusUpdateAfter.js
Converted from Std Choice: ApplicationStatusUpdateAfter
*/


showDebug = false;
showMessage = false;
if (matches(currentUserID,'KHOBDAY','MNICCORE')) {
	showDebug = true;
	}

if (appMatch('*/*/*/*') && matches(capStatus,'Void','Cancelled','Closed','Denied','Withdrawn','Project Abandoned or Suspended')) {
	include('ES_CLOSE_WORKFLOW'); /* replaced branch(ES_CLOSE_WORKFLOW) */
	}

