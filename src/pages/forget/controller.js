import * as actions from '../../store/actions';

export const STATES = {

};

export const ACTIONS = {
  ajaxSelectVcode: params => actions.ajaxRequestSelectVcode(params),
  ajaxUpdateForget: params => actions.ajaxRequestUpdateForget(params)
};
