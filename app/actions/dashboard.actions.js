import { map, round } from 'lodash';
import * as types from './actionTypes';
import { endLoading, endRefreshing } from './shared';
import { signedOut } from './auth';
import isTokenExpired from '../util/auth';

/**
 * Action to update overview overall summary state
 * @function
 * @param {Object} overallSummary - Overall overview summary
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateOverview(overallSummary) {
  return { type: types.UPDATE_OVERVIEW_SUMMARY, payload: overallSummary };
}


/**
 * Action to update state for total service requests per jurisdiction
 * @function
 * @param {Array} serviceRequests - Total Service Requests per Jurisdiction
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateTotalServiceRequestsPerJurisdiction(serviceRequests) {
  return {
    type: types.UPDATE_TOTAL_SERVICE_REQUESTS_PER_JURISDICTION,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for total service requests per service category
 * @function
 * @param {Array} serviceRequests - Total Service Requests per service category
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateTotalServiceRequestsPerServiceCategory(serviceRequests) {
  return {
    type: types.UPDATE_TOTAL_SERVICE_REQUESTS_PER_SERVICE_CATEGORY,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for total service requests per service group
 * @function
 * @param {Array} serviceRequests - Total Service Requests per service group
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateTotalServiceRequestsPerServiceGroup(serviceRequests) {
  return {
    type: types.UPDATE_TOTAL_SERVICE_REQUESTS_PER_SERVICE_GROUP,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for total service requests per workspace
 * @function
 * @param {Array} serviceRequests - Total Service Requests per workspace
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateTotalServiceRequestsPerWorkspace(serviceRequests) {
  return {
    type: types.UPDATE_TOTAL_SERVICE_REQUESTS_PER_WORKSPACE,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for total service requests per reporting method
 * @function
 * @param {Array} serviceRequests - Total Service Requests per method
 * @returns {Object} actionObject - type of action and payload
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateTotalServiceRequestsPerMethod(serviceRequests) {
  return {
    type: types.UPDATE_TOTAL_SERVICE_REQUESTS_PER_METHOD,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for pending service requests per jurisdiction
 * @function
 * @param {Array} serviceRequests - Pending Service Requests per Jurisdiction
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePendingServiceRequestsPerJurisdiction(serviceRequests) {
  return {
    type: types.UPDATE_PENDING_SERVICE_REQUESTS_PER_JURISDICTION,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for pending service requests per service category
 * @function
 * @param {Array} serviceRequests - Pending Service Requests per service category
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePendingServiceRequestsPerServiceCategory(serviceRequests) {
  return {
    type: types.UPDATE_PENDING_SERVICE_REQUESTS_PER_SERVICE_CATEGORY,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for pending service requests per service group
 * @function
 * @param {Array} serviceRequests - Pending Service Requests per service group
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePendingServiceRequestsPerServiceGroup(serviceRequests) {
  return {
    type: types.UPDATE_PENDING_SERVICE_REQUESTS_PER_SERVICE_GROUP,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for pending service requests per workspace
 * @function
 * @param {Array} serviceRequests - Pending Service Requests per workspace
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePendingServiceRequestsPerWorkspace(serviceRequests) {
  return {
    type: types.UPDATE_PENDING_SERVICE_REQUESTS_PER_WORKSPACE,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for pending service requests per reporting method
 * @function
 * @param {Array} serviceRequests - Pending Service Requests per reporting method
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updatePendingServiceRequestsPerMethod(serviceRequests) {
  return {
    type: types.UPDATE_PENDING_SERVICE_REQUESTS_PER_METHOD,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for resolved service requests per jurisdiction
 * @function
 * @param {Array} serviceRequests - Resolved Service Requests per reporting method
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateResolvedServiceRequestsPerJurisdiction(serviceRequests) {
  return {
    type: types.UPDATE_RESOLVED_SERVICE_REQUESTS_PER_JURISDICTION,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for resolved service requests per service category
 * @function
 * @param {Array} serviceRequests - Resolved Service Requests per service category
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateResolvedServiceRequestsPerServiceCategory(serviceRequests) {
  return {
    type: types.UPDATE_RESOLVED_SERVICE_REQUESTS_PER_SERVICE_CATEGORY,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for resolved service requests per service group
 * @function
 * @param {Array} serviceRequests - Resolved Service Requests per service group
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateResolvedServiceRequestsPerServiceGroup(serviceRequests) {
  return {
    type: types.UPDATE_RESOLVED_SERVICE_REQUESTS_PER_SERVICE_GROUP,
    payload: serviceRequests,
  };
}

/**
 * Action to update state for resolved service requests per workspace
 * @function
 * @param {Array} serviceRequests - Resolved Service Requests per workspace
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateResolvedServiceRequestsPerWorkspace(serviceRequests) {
  return {
    type: types.UPDATE_RESOLVED_SERVICE_REQUESTS_PER_WORKSPACE,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for resolved service requests per reporting method
 * @function
 * @param {Array} serviceRequests - Resolved Service Requests per reporting method
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateResolvedServiceRequestsPerMethod(serviceRequests) {
  return {
    type: types.UPDATE_RESOLVED_SERVICE_REQUESTS_PER_METHOD,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for late service requests per jurisdiction
 * @function
 * @param {Array} serviceRequests - Late Service Requests per reporting method
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateLateServiceRequestsPerJurisdiction(serviceRequests) {
  return {
    type: types.UPDATE_LATE_SERVICE_REQUESTS_PER_JURISDICTION,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for late service requests per service category
 * @function
 * @param {Array} serviceRequests - Late Service Requests per service category
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateLateServiceRequestsPerServiceCategory(serviceRequests) {
  return {
    type: types.UPDATE_LATE_SERVICE_REQUESTS_PER_SERVICE_CATEGORY,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for late service requests per service group
 * @function
 * @param {Array} serviceRequests - Late Service Requests per service group
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateLateServiceRequestsPerServiceGroup(serviceRequests) {
  return {
    type: types.UPDATE_LATE_SERVICE_REQUESTS_PER_SERVICE_GROUP,
    payload: serviceRequests,
  };
}

/**
 * Action to update state for late service requests per workspace
 * @function
 * @param {Array} serviceRequests - Late Service Requests per workspace
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateLateServiceRequestsPerWorkspace(serviceRequests) {
  return {
    type: types.UPDATE_LATE_SERVICE_REQUESTS_PER_WORKSPACE,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for late service requests per reporting method
 * @function
 * @param {Array} serviceRequests - Late Service Requests per reporting method
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateLateServiceRequestsPerMethod(serviceRequests) {
  return {
    type: types.UPDATE_LATE_SERVICE_REQUESTS_PER_METHOD,
    payload: serviceRequests,
  };
}


/**
 * Action to update state for average resolve time for service requests for jurisdictions
 * @function
 * @param {Array} AverageResolveTimes - average resolve time for service requests for jurisdictions
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageResolveTimePerJurisdictions(averageResolveTimes) {
  return {
    type: types.UPDATE_AVERAGE_RESOLVE_TIME_PER_JURISDICTIONS,
    payload: averageResolveTimes,
  };
}


/**
 * Action to update state for average resolve time for service requests for service categories
 * @function
 * @param {Array} AverageResolveTimes - average resolve time for service requests for
 *  service categories
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageResolveTimePerServiceCategories(averageResolveTimes) {
  return {
    type: types.UPDATE_AVERAGE_RESOLVE_TIME_PER_SERVICE_CATEGORIES,
    payload: averageResolveTimes,
  };
}


/**
 * Action to update state for average resolve time for service requests for service groups
 * @function
 * @param {Array} AverageResolveTimes - average resolve time for service requests for service groups
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageResolveTimePerServiceGroups(averageResolveTimes) {
  return {
    type: types.UPDATE_AVERAGE_RESOLVE_TIME_PER_SERVICE_GROUPS,
    payload: averageResolveTimes,
  };
}


/**
 * Action to update state for average resolve time for service requests for workspaces
 * @function
 * @param {Array} AverageResolveTimes - average resolve time for service requests for workspaces
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageResolveTimePerWorkspaces(averageResolveTimes) {
  return {
    type: types.UPDATE_AVERAGE_RESOLVE_TIME_PER_WORKSPACES,
    payload: averageResolveTimes,
  };
}


/**
 * Action to update state for average resolve time for service requests for reporting methods
 * @function
 * @param {Array} AverageResolveTimes - average resolve time for service requests for
 *  reporting methods
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageResolveTimePerMethods(averageResolveTimes) {
  return {
    type: types.UPDATE_AVERAGE_RESOLVE_TIME_PER_METHODS,
    payload: averageResolveTimes,
  };
}


/**
 * Action to update state for average attend time of service requests for jurisdictions
 * @function
 * @param {Array} AverageResolveTimes - average attend time of  service requests for jurisdictions
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageAttendTimePerJurisdictions(averageAttendTimes) {
  return {
    type: types.UPDATE_AVERAGE_ATTEND_TIME_PER_JURISDICTIONS,
    payload: averageAttendTimes,
  };
}


/**
 * Action to update state for average attend time of service requests for service categories
 * @function
 * @param {Array} AverageResolveTimes - average attend time of  service requests
 * for service categories
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageAttendTimePerServiceCategories(averageAttendTimes) {
  return {
    type: types.UPDATE_AVERAGE_ATTEND_TIME_PER_SERVICE_CATEGORIES,
    payload: averageAttendTimes,
  };
}


/**
 * Action to update state for average attend time of service requests for service groups
 * @function
 * @param {Array} AverageResolveTimes - average attend time of  service requests for
 * service groups
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageAttendTimePerServiceGroups(averageAttendTimes) {
  return {
    type: types.UPDATE_AVERAGE_ATTEND_TIME_PER_SERVICE_GROUPS,
    payload: averageAttendTimes,
  };
}


/**
 * Action to update state for average attend time of service requests for workspaces
 * @function
 * @param {Array} AverageResolveTimes - average attend time of  service requests for workspaces
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageAttendTimePerWorkspaces(averageAttendTimes) {
  return {
    type: types.UPDATE_AVERAGE_ATTEND_TIME_PER_WORKSPACES,
    payload: averageAttendTimes,
  };
}


/**
 * Action to update state for average attend time of service requests for reporting methods
 * @function
 * @param {Array} AverageResolveTimes - average attend time of  service requests for
 * reporting methods
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function updateAverageAttendTimePerMethods(averageAttendTimes) {
  return {
    type: types.UPDATE_AVERAGE_ATTEND_TIME_PER_METHODS,
    payload: averageAttendTimes,
  };
}


/**
 * Shape overview summary object by adding late,pending, resolved, unattended percentages
 * @param {Object} data - Overview summary from api
 * @returns {Object} overview Summary - with percentage in it
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
function prepareOverviewSummary(data) {
  return {
    ...data,
    percentagePending: round((data.pending / data.count) * 100, 1),
    percentageResolved: round((data.resolved / data.count) * 100, 1),
    percentageLate: round((data.late / data.count) * 100, 1),
    percentageUnattended: round((data.unattended / data.count) * 100, 1),
  };
}

/**
 * Shape the Service Requests data per respective group by stripping down unwanted fields
 * @param {Array} collection - Collection of response data from the api i.e jurisdictions,
 *  services e.t.c
 * @param {String} field - which field to extract count of service requests from the data object
 * @param {Number} total - total number of service requests from overall summary
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
function prepareStatusBreakdown(collection, field, total = false) {
  return map(collection, data => ({
    name: data.name,
    count: data[field],
    percentage: total ? round((data[field] / total) * 100, 1) : 0,
  }));
}


/**
 * Shape the Service Requests data per respective group by stripping down unwanted fields
 * @param {Array} collection - Collection of response data from the api i.e jurisdictions,
 *  services e.t.c
 * @param {String} field - which field to extract average time of service requests
 * from the data object
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
function prepareAverageTimeBreakdown(collection, field) {
  return map(collection, data => ({
    name: data.name,
    days: data[field].days,
    hours: data[field].hours,
    minutes: data[field].minutes,
  }));
}


/**
 * Perform asynchronous fetch of overview data from the api
 * @name asyncFetchOverview
 * @function
 * @async
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function asyncFetchOverview() {
  return (dispatch, getState) => {
    const { token } = getState();

    // if token is expired redirect to login page
    if (isTokenExpired(token)) {
      return dispatch(signedOut());
    }

    return fetch('https://dawasco.herokuapp.com/reports/overviews', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        const overviewSummary = prepareOverviewSummary(data.overall);

        const TOTAL = data.overall.count;
        const PENDING = data.overall.pending;
        const RESOLVED = data.overall.resolved;

        const totalPerJurisdiction =
          prepareStatusBreakdown(data.jurisdictions, 'count', TOTAL);

        const totalPerService =
          prepareStatusBreakdown(data.services, 'count', TOTAL);

        const totalPerGroup =
          prepareStatusBreakdown(data.groups, 'count', TOTAL);

        const totalPerWorkspace =
          prepareStatusBreakdown(data.workspaces, 'count', TOTAL);

        const totalPerMethod =
          prepareStatusBreakdown(data.methods, 'count', TOTAL);

        const pendingPerJurisdiction =
          prepareStatusBreakdown(data.jurisdictions, 'pending', PENDING);

        const pendingPerService = prepareStatusBreakdown(data.services, 'pending', PENDING);

        const pendingPerGroup = prepareStatusBreakdown(data.groups, 'pending', PENDING);

        const pendingPerWorkspace = prepareStatusBreakdown(data.workspaces, 'count', PENDING); // TODO update api to return pending per workspace

        const pendingPerMethod = prepareStatusBreakdown(data.methods, 'count', PENDING); // Todo update api to return pending per method

        const resolvedPerJurisdiction = prepareStatusBreakdown(data.jurisdictions, 'resolved', RESOLVED);

        const resolvedPerService = prepareStatusBreakdown(data.services, 'resolved', RESOLVED);

        const resolvedPerGroup = prepareStatusBreakdown(data.groups, 'resolved', RESOLVED);

        const resolvedPerWorkspace = prepareStatusBreakdown(data.workspaces, 'count'); // todo update this once the api support it

        const resolvedPerMethod = prepareStatusBreakdown(data.methods, 'count'); // todo update this once the api support it

        const latePerJurisdiction = prepareStatusBreakdown(data.jurisdictions, 'late');

        const latePerService = prepareStatusBreakdown(data.services, 'late');

        const latePerGroup = prepareStatusBreakdown(data.groups, 'late');

        const latePerWorkspace = prepareStatusBreakdown(data.workspaces, 'count'); // todo update this once api support it

        const latePerMethod = prepareStatusBreakdown(data.methods, 'count'); // todo update this once api support it

        const averageResolveTimePerJurisdictions =
          prepareAverageTimeBreakdown(data.jurisdictions, 'averageResolveTime');

        const averageResolveTimePerServices =
          prepareAverageTimeBreakdown(data.services, 'averageResolveTime');

        const averageResolveTimePerGroups =
          prepareAverageTimeBreakdown(data.groups, 'averageResolveTime');

        const averageAttendTimePerJurisdictions =
          prepareAverageTimeBreakdown(data.jurisdictions, 'averageAttendTime');

        const averageAttendTimePerServices =
          prepareAverageTimeBreakdown(data.services, 'averageAttendTime');

        const averageAttendTimePerGroups =
          prepareAverageTimeBreakdown(data.groups, 'averageAttendTime');

        dispatch(updateOverview(overviewSummary));

        dispatch(updateTotalServiceRequestsPerJurisdiction(totalPerJurisdiction));

        dispatch(updateTotalServiceRequestsPerServiceCategory(totalPerService));

        dispatch(updateTotalServiceRequestsPerServiceGroup(totalPerGroup));

        dispatch(updateTotalServiceRequestsPerWorkspace(totalPerWorkspace));

        dispatch(updateTotalServiceRequestsPerMethod(totalPerMethod));

        dispatch(updatePendingServiceRequestsPerJurisdiction(pendingPerJurisdiction));

        dispatch(updatePendingServiceRequestsPerServiceCategory(pendingPerService));

        dispatch(updatePendingServiceRequestsPerServiceGroup(pendingPerGroup));

        dispatch(updatePendingServiceRequestsPerWorkspace(pendingPerWorkspace));

        dispatch(updatePendingServiceRequestsPerMethod(pendingPerMethod));

        dispatch(updateResolvedServiceRequestsPerJurisdiction(resolvedPerJurisdiction));

        dispatch(updateResolvedServiceRequestsPerServiceCategory(resolvedPerService));

        dispatch(updateResolvedServiceRequestsPerServiceGroup(resolvedPerGroup));

        dispatch(updateResolvedServiceRequestsPerWorkspace(resolvedPerWorkspace));

        dispatch(updateResolvedServiceRequestsPerMethod(resolvedPerMethod));

        dispatch(updateLateServiceRequestsPerJurisdiction(latePerJurisdiction));

        dispatch(updateLateServiceRequestsPerServiceCategory(latePerService));

        dispatch(updateLateServiceRequestsPerServiceGroup(latePerGroup));

        dispatch(updateLateServiceRequestsPerWorkspace(latePerWorkspace));

        dispatch(updateLateServiceRequestsPerMethod(latePerMethod));

        dispatch(updateAverageResolveTimePerJurisdictions(averageResolveTimePerJurisdictions));

        dispatch(updateAverageResolveTimePerServiceCategories(averageResolveTimePerServices));

        dispatch(updateAverageResolveTimePerServiceGroups(averageResolveTimePerGroups));

        dispatch(updateAverageAttendTimePerJurisdictions(averageAttendTimePerJurisdictions));

        dispatch(updateAverageAttendTimePerServiceCategories(averageAttendTimePerServices));

        dispatch(updateAverageAttendTimePerServiceGroups(averageAttendTimePerGroups));

        dispatch(endLoading());

        dispatch(endRefreshing());
      });
  };
}
