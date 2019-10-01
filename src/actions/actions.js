import * as types from './actionTypes';

export function pickBead(beadId) {
  return { type: types.PICK_BEAD, payload: beadId};
}
export function pickPaintMode(paintMode) {
  return { type: types.PICK_PAINT_MODE, payload: paintMode };
}

export function updateNeklacePattern(necklacePattern) {
  return { type: types.UPDATE_NECKLACE_PATTERN, payload: necklacePattern };
}

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return { type: types.RECEIVE_STUFF, stuff: json.stuff };
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveStuff(json)));
  };
}