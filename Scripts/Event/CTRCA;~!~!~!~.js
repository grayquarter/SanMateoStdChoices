/*
Script Name: ConvertToRealCAPAfter.js
Converted from Std Choice: ConvertToRealCAPAfter
 */

if (appMatch('Building/*/*/*') && !appMatch('Building/Signs and Awnings/*/*') && !appMatch('Building/Residential/*/*') && !appMatch('Building/Commercial/*/*') && !appMatch('Building/Revision/*/*') && !appMatch('Building/Auto Issue/*/*')) {
    include('ES_SEND_APPLICATION_RECEIVED_EMAIL'); /* replaced branch(ES_SEND_APPLICATION_RECEIVED_EMAIL) */
}

if (appMatch('*/*/Sewer Line/*') && AInfo['Public Right of Way'] == 'CHECKED') {
    scheduleInspection('Final by Public Works', 365, null, null, 'Scheduled by Script');
}

if (appMatch('*/*/Sewer Line/*') && AInfo['City Cleanout'] == 'CHECKED') {
    scheduleInspection('Final by Sewer', 365, null, null, 'Scheduled by Script');
}

if (appMatch('WasteMgmt/*/*/*')) {
    include('ES_WM_PARENT'); /* replaced branch(ES_WM_PARENT) */
    include('ES_WM_CAPID'); /* replaced branch(ES_WM_CAPID) */
    include('ES_WM_APPLICATION_RECEIVED_EMAIL'); /* replaced branch(ES_WM_APPLICATION_RECEIVED_EMAIL) */
    include('ES_WM_FINAL_UPD_ASI'); /* replaced branch(ES_WM_FINAL_UPD_ASI) */
}

if (appMatch('Building/*/*/*') && !appMatch('Building/Residential/*/*') && !appMatch('Building/Commercial/*/*') && !appMatch('Building/Revision/*/*')) {
    include('ES_BLD_UPD_ASI'); /* replaced branch(ES_BLD_UPD_ASI) */
}
