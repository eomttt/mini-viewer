export interface BookListItem {
  fileName: string;
  coverImage: string;
  titles: string;
}

export interface EpubBookViewer extends EpubBook {
  fileName: string;
  spineViewers: string[];
  styleText: string;
}

export interface EpubBook {
  titles: string[];
  creators: EpubAuthor[];
  subjects: string[];
  description?: string;
  publisher? : string;
  contributors: EpubAuthor[];
  dates: EpubDateTime[];
  type?: string;
  format?: string;
  identifiers: EpubIdentifier[];
  source?: string;
  languages: string[];
  relation?: string;
  rights?: string;
  version: EpubVersion;
  metas: EpubMeta[];
  items: EpubItem[];
  spines: EpubSpineItem[];
  ncx?: EpubNcxItem;
  fonts: EpubFontItem[];
  cover?: EpubImageItem;
  images: EpubImageItem[];
  styles: EpubCssItem[];
  guides: EpubGuide[];
  deadItems: EpubDeadItem[];
  toRaw(): object;
}

export interface EpubAuthor {
  name?: string;
  fileAs?: string;
  role: string;
  toRaw(): {};
}

export interface EpubDateTime {
  value? : string;
  event? : string;
  toRaw(): object;
}

export interface EpubIdentifier {
  value?: string;
  scheme: string;
  toRaw(): object;
}

export interface EpubVersion {
  major: number;
  minor: number;
  patch: number;
  toString(): string;
}

export interface EpubMeta {
  name?: string;
  content?: string;
  toRaw(): object;
}

export interface EpubGuide {
  title?: string;
  type: string;
  href?: string;
  item?: EpubItem;
  toRaw(): object;
}

export interface EpubItem {
  id?: string;
  href?: string;
  mediaType?: string;
  size?: number;
  isFileExists: boolean;
  toRaw(): object;
}

export interface EpubSpineItem extends EpubItem {
  index: number;
  isLinear: boolean;
  styles?: EpubCssItem[];
  first?: EpubSpineItem;
  prev?: EpubSpineItem;
  next?: EpubSpineItem;
}

export interface EpubCssItem extends EpubItem {
  namespace: string;
}

export interface EpubNcxItem extends EpubItem {
  namespace: string;
  navPoints: EpubNavPoint[];
}

export interface EpubNavPoint {
  id: string;
  label: string;
  spine: EpubSpineItem;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EpubFontItem extends EpubItem {
  // Nothing
}

export interface EpubImageItem extends EpubItem {
  isCover: boolean;
}

export interface EpubDeadItem extends EpubItem {
  reason: string;
}
