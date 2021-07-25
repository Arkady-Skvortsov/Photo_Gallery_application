import { photoAction, someActions } from './photo.actions';
import * as Interface from '../models/interfaces';

export let MediaReducer = (
  state: Interface.mediaItem[],
  action: photoAction
) => {
  switch (action.type) {
    case someActions.ADD_IN_MEDIA_ARRAY:
      return [
        ...state,
        state.includes(action.payload) ? false : state.push(action.payload),
      ];
    case someActions.DELETE_MEDIA:
      return [...state, state.splice(action.payload, 1)];
    default:
      return state;
  }
};

export let OptionsReducer = (
  state: Interface.mediaItem[],
  action: photoAction
) => {
  switch (action.type) {
    case someActions.ADD_IN_OPTIONS_ARRAY:
      return [
        ...state,
        state.includes(action.payload) ? false : state.push(action.payload),
      ];
    case someActions.CLEAR_OPTIONS_ARRAY:
      return [...state, state.splice(0, state.length - 1)];
    default:
      return state;
  }
};

export let LanguageReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_LANGUAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export let FormReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_FORM:
      return (state = action.payload);
    default:
      return state;
  }
};

export let ChangeBorderReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_BORDER:
      return (state = action.payload);
    default:
      return state;
  }
};

export let ChangeTypeReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.CHANGE_TYPE:
      return (state = action.payload);
    default:
      return state;
  }
};

export let ChangeReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_CHANGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export let notification_reducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_NOTIFICATION:
      return (state = action.payload);
    default:
      return state;
  }
};

export let ChooseReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_CHOOSE:
      return (state = action.payload);
    default:
      return state;
  }
};

export let setImageReducer = (state: Object, action: photoAction) => {
  switch (action.type) {
    case someActions.SET_IMAGE_FOR_BORDER:
      return (state = { image: action.payload });
    case someActions.RADIUS_IMAGE:
      return (state = { radius: action.payload });
    case someActions.ROTATE_IMAGE:
      return (state = { rotate: action.payload });
    case someActions.ZOOM_IMAGE:
      return (state = { zoom: action.payload });
    case someActions.BLEND_MODE:
      return (state = { blend_mode: action.payload });
    default:
      return state;
  }
};

export let set_zoom_reducer = (state: number, action: photoAction) => {
  switch (action.type) {
    case someActions.ZOOM_IMAGE:
      return;
    default:
      return state;
  }
};

export let setBorderForImageReducer = (state: Object, action: photoAction) => {
  switch (action.type) {
    case someActions.ADD_BORDER_MEDIA:
      return (state = action.payload);
    default:
      return state;
  }
};

export let setRotateValueReducer = (state: any, action: photoAction) => {
  //timestamp state
  switch (action.type) {
    case someActions.ROTATE_IMAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export let InformationReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_INFORMATION:
      return (state = action.payload);
    default:
      return state;
  }
};

export let showOptionReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_OPTIONS:
      return (state = action.payload);
    default:
      return state;
  }
};

export let QuestionReducer = (state: Interface.b, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_QUESTION:
      return (state = action.payload);
    default:
      return state;
  }
};

export let ThemeReducer = (state: Interface.theme, action: photoAction) => {
  switch (action.type) {
    case someActions.SHOW_OPTIONS:
      return state ? (state = 'dark') : (state = 'light');
    default:
      return state;
  }
};
