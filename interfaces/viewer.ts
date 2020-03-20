export interface ViewerState {
  viewerCountList: ViewerCount[];
  selectedSpineId: string;
}

export interface ViewerCount {
  index: number;
  count: number;
}
