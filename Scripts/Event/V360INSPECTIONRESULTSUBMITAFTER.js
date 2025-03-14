/*
Script Name: V360InspectionResultSubmitAfter.js
Converted from Std Choice: V360InspectionResultSubmitAfter
*/


showDebug = false;
showMessage = false;
if (matches(currentUserID,'KHOBDAY','MNICCORE')) {
	showDebug = 1;
	}

if (appMatch('Building/*/*/*') && !appMatch('Building/Residential/*/*')) {
	include('ES_BLD_INSPECTIONRESULTSUBMITAFTER'); /* replaced branch(ES_BLD_InspectionResultSubmitAfter) */
	}

if (appMatch('PublicWorks/*/*/*')) {
	include('ES_PWIRSA'); /* replaced branch(ES_PWIRSA) */
	}

