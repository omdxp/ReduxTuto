import {ADD_ITEM} from '../constants';

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
