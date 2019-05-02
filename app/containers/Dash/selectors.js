import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dash state domain
 */

const selectDashDomain = state => state.dash || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dash
 */

const makeSelectDash = () =>
  createSelector(
    selectDashDomain,
    substate => substate,
  );

export default makeSelectDash;
export { selectDashDomain };
