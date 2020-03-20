import React, {
  useCallback, useState, useEffect, useMemo,
} from 'react';
import { useSelector } from 'react-redux';

import Viewer from './Viewer';
import ViewerCount from './ViewerCount';

import { ViewerContainer } from '../../styles/viewer';

import { ReducerState } from '../../interfaces';
import { EpubSpineItem } from '../../interfaces/books';

import { VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO } from '../../constants/viewer';


interface Props {
  spines: EpubSpineItem[];
  viewerSpines: string[];
}

const ViewerPage: React.FunctionComponent<Props> = ({ spines, viewerSpines }) => {
  const [viewerWidth, setViewerWidth] = useState(0);
  const [viewerHeight, setViewerHeight] = useState(0);
  const [nowSpineIndex, setNowSpineIndex] = useState(0);

  const { viewerCountList } = useSelector((state: ReducerState) => state.viewer);

  const isAnalizedSpine = useMemo(() => viewerCountList.length === viewerSpines.length, [viewerCountList, viewerSpines]);

  useEffect(() => {
    setViewerWidth(Math.floor(window.innerWidth * (VIEWER_WIDTH_RATIO / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (VIEWER_HEIGHT_RATIO / 100)));
  }, []);

  const setNextSpine = useCallback(() => {
    console.log('Set next spine', nowSpineIndex);
    setNowSpineIndex(nowSpineIndex + 1);
  }, [nowSpineIndex]);

  const setPrevSpine = useCallback(() => {
    console.log('Set prev spine', nowSpineIndex);
    setNowSpineIndex(nowSpineIndex - 1);
  }, [nowSpineIndex]);

  return (
    <ViewerContainer
      styleProps={{
        height: viewerHeight,
      }}
    >
      {
        isAnalizedSpine
        && (
        <Viewer
          viewerWidth={viewerWidth}
          viewerHeight={viewerHeight}
          wholeColumnCount={viewerCountList[nowSpineIndex].count}
          spine={spines[nowSpineIndex]}
          viewerSpine={viewerSpines[nowSpineIndex]}
          setNextSpine={setNextSpine}
          setPrevSpine={setPrevSpine}
        />
        )
      }
      <section>
        {
          viewerSpines.map((viewerSpine, index) => (
            <ViewerCount
              key={viewerSpine}
              viewerWidth={viewerWidth}
              viewerHeight={viewerHeight}
              viewerSpine={viewerSpine}
              viewerSpineIndex={index}
            />
          ))
        }
      </section>
      {/* <Viewer
        viewerWidth={viewerWidth}
        viewerHeight={viewerHeight}
        wholeColumnCount={3}
        spine={spines[1]}
        viewerSpine={viewerSpines[1]}
        setNextSpine={setNextSpine}
        setPrevSpine={setPrevSpine}
      />
      <section>
        <ViewerCount
          key={viewerSpines[0]}
          viewerWidth={viewerWidth}
          viewerHeight={viewerHeight}
          viewerSpine={viewerSpines[1]}
          viewerSpineIndex={4}
        />
      </section> */}
    </ViewerContainer>
  );
};

export default ViewerPage;
