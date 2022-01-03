export interface SbEditableBlok {
  _uid: string;
  _editable?: string;
  component: string;
  [index: string]: any;
}

export interface SbEditableResult {
  "data-blok-c": string;
  "data-blok-uid": string;
}

export declare function sbEditable(blok: SbEditableBlok): SbEditableResult;
