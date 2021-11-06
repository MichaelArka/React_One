
// selectors
export const getSearchString = state => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const SEARCH = createActionName('SEARCH');

// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, type: SEARCH });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return statePart;
  }
}

