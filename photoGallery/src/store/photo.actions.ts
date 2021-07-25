import { Action } from '@ngrx/store';
import * as Interface from '../models/interfaces';

export enum someActions {
  ADD_IN_MEDIA_ARRAY = '[addInMediaArray - photo or gallery]',
  ADD_IN_OPTIONS_ARRAY = '[addInOptionsArray - some operations with array]',
  CLEAR_OPTIONS_ARRAY = '[clearOptionsArray]',
  CHANGE_TYPE = '[image or gallery type]',
  DELETE_MEDIA_FROM_ARRAY = '[deleteFromMediaArray] - delete for index element',
  DELETE_MEDIA = '[deleteMedia - delete media from media array]',
  SET_IMAGE_FOR_BORDER = '[setImageForBorder - set image in other component for additing a border]',
  SHOW_LANGUAGE = '[show/hide language component]',
  ADD_BORDER_MEDIA = '[addBorderMediaAction - border-image to image]',
  CHANGE_LANGUAGE = '[change language from list]',
  SHOW_BORDER = '[show change border from image]',
  SHOW_FORM = '[show/hide form component]',
  SHOW_CHOOSE = '[show/hide choose component]',
  SHOW_INFORMATION = '[show/hide information component]',
  SHOW_CHANGE = '[show/hide change component]',
  SHOW_OPTIONS = '[show/hide options component]',
  SHOW_QUESTION = '[show/hide question component]',
  SHOW_NOTIFICATION = '[show/hide notification component]',
  CHANGE_THEME = '[light/dark themes]',
  IMAGE = '[set image to photo/album and save that]',
  BLEND_MODE = '[set blendMode and save that property]',
  RADIUS_IMAGE = '[set radiusImage and save that property]',
  ROTATE_IMAGE = '[set rotateImage and save that property]',
  ZOOM_IMAGE = '[set zoomImage and save that property]',
}

// export enum border_action {
//   SIZE_BORDER = '[sizeImage and save that property]',
//   INTENSIVE_BORDER = '[intensiveBorder and save that property]',
// }

export class addInMediaAction implements Action {
  readonly type = someActions.ADD_IN_MEDIA_ARRAY;

  constructor(public payload: Interface.mediaItem) {}
}

export class addInOptionsAction implements Action {
  readonly type = someActions.ADD_IN_OPTIONS_ARRAY;

  constructor(public payload: Interface.mediaItem) {}
}

export class clearOptionsAction implements Action {
  readonly type = someActions.CLEAR_OPTIONS_ARRAY;
}

export class deleteMediaAction implements Action {
  readonly type = someActions.DELETE_MEDIA;

  constructor(public payload: number) {}
}

export class addMediaBorderAction implements Action {
  readonly type = someActions.ADD_BORDER_MEDIA;

  constructor(public payload: object) {}
}

export class showLanguageAction implements Action {
  readonly type = someActions.SHOW_LANGUAGE;

  constructor(public payload: Interface.b) {}
}

export class show_notification_action implements Action {
  readonly type = someActions.SHOW_NOTIFICATION;

  constructor(public payload: Interface.b) {}
}

export class changeTypeAction implements Action {
  readonly type = someActions.CHANGE_TYPE;

  constructor(public payload: Interface.b) {}
}

export class changeLanguageAction implements Action {
  readonly type = someActions.CHANGE_LANGUAGE;

  constructor(public payload: any) {} //timestamp
}

export class changeRotateAction implements Action {
  readonly type = someActions.ROTATE_IMAGE;

  constructor(public payload: number) {}
}

export class showFormAction implements Action {
  readonly type = someActions.SHOW_FORM;

  constructor(public payload: Interface.b) {}
}

export class showChangeAction implements Action {
  readonly type = someActions.SHOW_CHANGE;

  constructor(public payload: Interface.b) {}
}

export class showChangeBorderAction implements Action {
  readonly type = someActions.SHOW_BORDER;

  constructor(public payload: Interface.b) {}
}

export class showChooseAction implements Action {
  readonly type = someActions.SHOW_CHOOSE;

  constructor(public payload: Interface.b) {}
}

export class showOptionsAction implements Action {
  readonly type = someActions.SHOW_OPTIONS;

  constructor(public payload: Interface.b) {}
}

export class setImageForBorder implements Action {
  readonly type = someActions.SET_IMAGE_FOR_BORDER;

  constructor(public payload: Interface.img) {}
}

export class set_zoom_action implements Action {
  readonly type = someActions.ZOOM_IMAGE;

  constructor(public payload: Interface.img) {}
}

export class set_rotate_action implements Action {
  readonly type = someActions.ROTATE_IMAGE;

  constructor(public payload: Interface.img) {}
}

export class set_blend_mode_action implements Action {
  readonly type = someActions.BLEND_MODE;

  constructor(public payload: Interface.img) {}
}

export class set_radius_action implements Action {
  readonly type = someActions.RADIUS_IMAGE;

  constructor(public payload: Interface.img) {}
}

export class showInformationAction implements Action {
  readonly type = someActions.SHOW_INFORMATION;

  constructor(public payload: Interface.b) {}
}

export class showQuestionAction implements Action {
  readonly type = someActions.SHOW_QUESTION;

  constructor(public payload: Interface.b) {}
}

export class changeThemeAction implements Action {
  readonly type = someActions.CHANGE_THEME;

  constructor(public payload: string) {}
}

export type photoAction =
  | addInMediaAction
  | addInOptionsAction
  | clearOptionsAction
  | deleteMediaAction
  | showLanguageAction
  | changeLanguageAction
  | changeTypeAction
  | showFormAction
  | showChooseAction
  | showChangeBorderAction
  | set_blend_mode_action
  | set_radius_action
  | set_rotate_action
  | set_zoom_action
  | show_notification_action
  | showChangeAction
  | showOptionsAction
  | showInformationAction
  | showQuestionAction
  | changeRotateAction
  | changeThemeAction
  | addMediaBorderAction
  | setImageForBorder;
