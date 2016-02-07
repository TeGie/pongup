import * as constants  from '../pongup/constants'
import axios from 'axios'
import { LoginClient } from './login_client'

export function loadUser() {

	return (dispatch) => {
		var client = new LoginClient()
		client.fetch_User()
			.then( axios.spread( (ladders_data) => {
				dispatch({
					type: constants.LOGIN_ACTIVE,
					ladder_data: {
						// user_info: user_info,
						ladders: ladders_data.data,
						// venues_and_events: venues_and_events.data,
						is_loading: false
					}
				})
			}))
			.then( () => {
				dispatch({
					type: constants.UPDATE_TAB,
					active_tab: 'login',
					is_loading: false
				})
			})
	}
}

export function saveToProps(new_props) {
	return (dispatch, getState) => {
		var new_state = Object.assign({}, getState().login_reducer.new_user, new_props)
		// return Object.assign({}, getState().login_reducer, new_props)
		console.log('%csaveToProps', 'background-color:orange')
		console.log(getState().login_reducer.new_user)
		console.log(new_state)
		console.log(new_props)
		dispatch({
			type: constants.SAVE_STATE,
			new_props
		})
	}
}

export function saveToLoginProps(new_props) {
	return (dispatch, getState) => {
		var new_state = Object.assign({}, getState().login_reducer.login_info, new_props)
		// return Object.assign({}, getState().login_reducer, new_props)
		console.log('%csaveToProps', 'background-color:orange')
		console.log(getState().login_reducer.new_user)
		console.log(new_state)
		console.log(new_props)
		dispatch({
			type: constants.SAVE_STATE,
			new_props
		})
	}
}

export function createUser(new_user) {
	console.log('%ccreateUser', 'background-color:blue;color:yellow')
	console.log('new_user')
	console.log(new_user)
	console.log(new_user.new_user)
	return (dispatch, getState) => {
		var current_state = Object.assign({}, getState().login_reducer, new_user)
		console.log('current_state')
		console.log(current_state)
		var client = new LoginClient()
		client.create_user(current_state)
	}
}

export function loginUser(login_info) {
	console.log('%ccreateUser', 'background-color:blue;color:yellow')
	console.log('login_info')
	console.log(login_info)
	// console.log(login_info.login_info)
	return (dispatch, getState) => {
		var current_state = Object.assign({}, getState().login_reducer, login_info)
		console.log('current_state')
		console.log(current_state)
		var client = new LoginClient()
		client.login_user(current_state)
	}
}
