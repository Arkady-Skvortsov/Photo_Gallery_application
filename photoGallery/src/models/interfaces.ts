export type b = boolean;
export type theme = 'light' | 'dark';
export type mediaType = 'Фото' | 'Галлерея'; //fix
export type creational = 'create' | 'change' | 'delete';

export type img = {
  rotate: number;
  blend_mode: string;
  image: ArrayBuffer;
  radius: number;
  zoom: number;
};

export type border = {
  width: string;
  intensive: string;
};

export interface notification {
  txt: string;
  img: ArrayBuffer | string;
}

export interface form {
  type: mediaType;
  icon: string;
}

export interface mediaItem {
  icon: string;
  img: img;
  name: string;
  about: string;
  type: mediaType;
  border_settings: border;
  tag: [string];
  emojies: [string];
  length?: number;
  link?: string;
}

export interface AppState {
  mediaItem: mediaItem[];
  mediaArray: mediaItem[];
  optionsArray: mediaItem[];
  showChange: b;
  showInformation: b;
  showChangeBorder: any;
  showForm: b;
  showChoose: b;
  show_notification: b;
  rotate_image: number;
  setImage: ArrayBuffer;
  showLanguage: b;
  showOptions: b;
  showQuestion: b;
  showTheme: theme;
}

export interface InputsChecker {
  photo: Blob;
  name: string;
  opisanie: string;
  tag: string;
  emojies: string;
  length: number;
  border: {
    is_border: boolean;
    size: number;
    intensive: number;
  };
}
