import initialState from './initialState';
import { SELECT_BEAD, SELECT_PAINT_MODE } from '../actions/actionTypes';
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 */
export default function necklace(state = initialState.beadId, action) {
  let newState;
  switch (action.type) {
  case SELECT_PAINT_MODE:
    newState = ...state, { paintMode: action.paintMode };
    console.log('SELECT_PAINT_MODE Action');
    return newState;
  case SELECT_BEAD:
    newState = ...state, { selectedBead: action.selectedBead };
    console.log('SELECT_BEAD Action');
    return newState;
  default:
    return state;
  }
}