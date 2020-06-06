import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
} from '../actions/types';

const initialState = {
  profile: null, // all our profile data, after login. Also other users viewed profile,
  profiles: [], // list profiles of developers
  repos: [], // users github repose
  loading: true, //when we make an API request, this is set to false, meaning we have finished loading
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE: // for adding the education section within the profile.
    case GET_PROFILE:
      return {
        ...state, // copy the initial state
        profile: payload, // includes whole profile, which we get from the API request made by the action in profile.js
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    case NO_REPOS:
      return {
        ...state,
        repos: [],
      };
    default:
      return state;
  }
}
