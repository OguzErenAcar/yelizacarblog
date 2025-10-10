type LocalizationId = string | number;

export interface Infos {
  id:number;
  documentId: string,
  ImgHeight: string;
  ImgWidth: string;
  Header: string;
  Description: string;
  UserId: number;
  isActive: boolean;
  ProfileImage:Image |null;
  locale: string;
  localizations: LocalizationId[];
}

export interface Logo {
  documentId: string,
  id:number;
  Height: string;
  Width: string;
  isActive: boolean;
  UserId: number;
  rowOfNumber: number;
  Logo: Image|null;
  locale: string;
  localizations: LocalizationId[];
}

export interface LinkItem {
  documentId: string,
  id:number;
  FontName:string;
  Name: string;
  LinkUrl: string;
  FontUrl: string;
  isActive: boolean;
  UserId: number;
  rowOfNumber: number;
  locale: string;
  localizations: LocalizationId[];
}

export interface Project {
  documentId: string,
  id:number;
  Title: string;
  Description: string;
  isActive: boolean;
  isMain: boolean;
  rowOfNumber: number;
  ProjectImages: Image[]|null;
  locale: string;
  localizations: LocalizationId[];
}

export interface InfoTimeLine {
  documentId: string,
  id:number;
  Header: string;
  isActive: boolean;
  rowOfNumber: number;
  Description: string;
  locale: string;
  localizations: LocalizationId[];
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
