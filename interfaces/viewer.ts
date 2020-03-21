export interface ViewerState {
  viewerSpineId: string;
  viewerCountList: ViewerCount[];
  viewerPageCount: number;
}

export interface ViewerCount {
  index: number;
  count: number;
}
