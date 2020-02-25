import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.HOUSE_REDUCER.isLoading,
  isSuccess: state => state.HOUSE_REDUCER.isSuccess,
  isFailure: state => state.HOUSE_REDUCER.isFailure,
  isData: state => state.HOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectHouse: () => actions.ajaxRequestSelectHouse()
};
