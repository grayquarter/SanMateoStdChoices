/*
Script Name: InspectionScheduleAfter.js
Converted from Std Choice: InspectionScheduleAfter
*/


showDebug = false;
showMessage = false;
if (matches(currentUserID,'KHOBDAY','MNICCORE')) {
	showDebug = 1;
	}

if (capStatus == 'Issued' && isTaskActive('Ready to Issue')) {
	deactivateTask('Ready to Issue');
	activateTask('Inspections');
	}

