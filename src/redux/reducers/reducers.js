import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_SELECTED,
  USER_SEARCH,
} from '../actionTypes';

const initialState = {
  users: [],
  error: false,
  fetching: false,
  personSelected: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_REQUESTED: {
      return {
        ...state,
        fetching: true,
      };
    }
    case USER_FETCH_FAILED: {
      const { message } = action.payload;
      return {
        ...state,
        fetching: false,
        error: message,
      };
    }
    case USER_FETCH_SUCCEEDED: {
      const { results } = action.people.data;
      return {
        ...state,
        users: results,
        fetching: false,
      };
    }
    case USER_SELECTED: {
      const { index } = action.payload;
      return {
        ...state,
        personSelected: state.users[index],
      };
    }
    case USER_SEARCH: {
      const { payload } = action;
      const users = state.users.map(item => {
        item.hidden = ![item.name.first, item.name.last]
          .map(item => item.toLowerCase())
          .some(word => word.includes(payload.toLowerCase()));
        return item;
      });
      return {
        ...state,
        users,
      };
    }
    default:
      return state;
  }
}
