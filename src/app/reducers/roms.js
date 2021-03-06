import { SET_ROMS, SELECT_ROM } from 'chip8/app/actions/roms.js';


export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_ROM:
            return Object.assign({}, state, {
                current: action.index,
            });
        case SET_ROMS:
            return Object.assign({}, state, {
                list: action.roms,
            });
    }

    return state;
};