import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editTestimonial state domain
 */

const selectEditTestimonialDomain = state =>
  state.editTestimonial || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditTestimonial
 */

const makeSelectEditTestimonial = () =>
  createSelector(
    selectEditTestimonialDomain,
    substate => substate,
  );

export default makeSelectEditTestimonial;
export { selectEditTestimonialDomain };
