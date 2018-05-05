import { APP_LOADING_END, APP_LOADING_START, APP_REFRESH_START, APP_REFRESH_END } from './actionTypes';
/**
 * Shared actions across the application they don't belong under any specific feature
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */


/**
 * Action which is dispatched when application is loading data
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function startLoading() {
  return { type: APP_LOADING_START };
}


/**
 * Action which is dispatched when application finished loading data
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function endLoading() {
  return { type: APP_LOADING_END };
}


/**
 * Action which is dispatched when on pull to refresh action triggered
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function startRefreshing() {
  return { type: APP_REFRESH_START };
}


/**
 * Action which is dispatched when application finishes refreshing
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function endRefreshing() {
  return { type: APP_REFRESH_END };
}
