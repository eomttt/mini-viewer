import React, { useCallback, useState } from 'react';

import Viewer from './Viewer';
import { EpubSpineItem } from '../../interfaces/books';

interface Props {
  spines: EpubSpineItem[];
  viewerSpines: string[];
}

const ViewerPage: React.FunctionComponent<Props> = ({ spines, viewerSpines }) => {
  const [nowSpineIndex, setNowSpineIndex] = useState(0);

  const setNextSpine = useCallback(() => {
    console.log('Set next spine', nowSpineIndex);
    setNowSpineIndex(nowSpineIndex + 1);
  }, [nowSpineIndex]);

  const setPrevSpine = useCallback(() => {
    console.log('Set prev spine', nowSpineIndex);
    setNowSpineIndex(nowSpineIndex - 1);
  }, [nowSpineIndex]);

  return (
    <Viewer
      nowSpineIndex={nowSpineIndex}
      spine={spines[nowSpineIndex]}
      viewerSpine={viewerSpines[nowSpineIndex]}
      setNextSpine={setNextSpine}
      setPrevSpine={setPrevSpine}
    />
  );
};

export default ViewerPage;
