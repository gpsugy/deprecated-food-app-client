import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  fetchLocationError,
  fetchLocationRequest,
  fetchLocationSuccess,
} from '../actions';
import { user } from './index';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Reducer) User', () => {
	it('return user object on FETCH_LOCATION_SUCCESS', () => {
		let loc = {
		    "latitude": 51.0,
		    "longitude": -0.1
		};
		expect(
			user({}, fetchLocationSuccess(loc))
		).toEqual(
			{
				location: {
					latitude: loc.latitude,
					longitude: loc.longitude,
					fetching: false
				}
			}
		);
	})
});

describe('(Reducer) User', () => {
	it('return user object with null location on FETCH_LOCATION_ERROR', () => {
		let loc = {
		    "latitude": 15.9,
		    "longitude": -0.3
		};
		expect(
			user({}, fetchLocationError(loc))
		).toEqual(
			{
				location: {
					latitude: null,
					longitude: null,
					fetching: false
				}
			}
		);
	})
});

describe('(Reducer) User', () => {
	it('return user object with on fetching = true on FETCH_LOCATION_REQUEST', () => {
		expect(
			user({}, fetchLocationRequest())
		).toEqual(
			{
				location: {
					latitude: null,
					longitude: null,
					fetching: true
				}
			}
		);
	})
});

// describe('(Reducer) User', () => {
// 	it('creates FETCH_LOCATION_SUCCESS when fetching location has been done', () => {
// 		let api_key = 'AIzaSyAAhPjB4nv3GV-alzYp6NlGN2dpnjSxHWI';
// 		let get = '/geolocation/v1/geolocate?key=' + api_key;
// 		nock('https://www.googleapis.com/')
// 			.get(get)
// 			.reply(200, { body: { }});

// 		const expectedActions = [
// 			{
// 				type: FETCH_LOCATION_SUCCESS
// 			}
// 		];
// 		const store = mockStore({ user: [] });

// 		return store.dispatch(fetchUserLocation())
// 			.then(() => {
// 				expect(store.getActions()).toEqual(expectedActions)
// 			})
// 	})
// });

