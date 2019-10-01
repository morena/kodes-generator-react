import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF } from '../actions/actionTypes';
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 */
export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
  case FETCH_STUFF:
    console.log('FETCH_STUFF Action');
    return action;
  case RECEIVE_STUFF:
    newState = action.stuff;
    console.log('RECEIVE_STUFF Action');
    return newState;
  default:
    return state;
  }
}