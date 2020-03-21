export interface ViewerState {
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
}

export interface ViewerCount {
  index: number;
  count: number;
  spineId: string;
}
