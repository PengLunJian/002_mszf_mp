import * as actions from '../../../store/actions';

export const STATES = {
  isImage: state => state.INSERT_IMAGE_REDUCER.data,
  isLayout: state => state.SELECT_LAYOUT_REDUCER.data
};

export const ACTIONS = {
  insertLayoutReplace: params => actions.insertLayoutReplace(params),
  updateLayoutReplace: params => actions.updateLayoutReplace(params),
  removeImageReplace: actions.removeImageReplace
};
