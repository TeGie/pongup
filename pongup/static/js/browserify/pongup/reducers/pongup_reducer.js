import * as constants from '../constants'

const initialState = {
    active_tab: 'home',
    is_loading: true,
    // unread_count: '...',
    user_profile: {}/*,*/
    // venues_and_events: {}
}


const pongup_reducer = (state = initialState, action) => {
    console.log('state')
    console.log(state)
    console.log('action')
    console.log(action)
    switch (action.type) {
        case constants.UPDATE_TAB:
            return Object.assign({}, state, {
                active_tab: action.active_tab
            })
        case constants.USER_DATA_LOADED:
            return Object.assign({}, state, {
                user_profile: action.user_data.user_profile,
                // venues_and_events: action.user_data.venues_and_events,
                is_loading: action.user_data.is_loading
            })
        // case constants.UPDATE_UNREAD_ON_TAB:
        //     return Object.assign({}, state, {
        //         unread_count: action.unread_count
        //     })
        default:
            return state;
    }
}

export default pongup_reducer;