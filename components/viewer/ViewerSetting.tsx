import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import { subColor } from '../../styles';

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled.div`
  cursor: pointer;
`;

const SettingItems = styled.ul`
  position: absolute;
  width: 10em;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: white;
`;

const SettingItem = styled.li`
  text-align: center;
  padding: 2px;
  border-bottom: 1px solid ${subColor};
  cursor: pointer;
  margin: 0;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

const SETTING_ITEMS = [
  {
    id: 1,
    label: '글자크기',
  }, {
    id: 2,
    label: '문단 너비',
  }, {
    id: 3,
    label: '줄 간격',
  }, {
    id: 4,
    label: '배경색',
  },
];

const ViewerSetting: React.FunctionComponent = () => {
  const [isShowSetting, setIsShowSetting] = useState(false);

  const toggleShowNcs = useCallback(() => {
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);

  return (
    <Container>
      <ToggleButton onClick={toggleShowNcs}>
        설정
      </ToggleButton>
      {
        isShowSetting
        && (
        <SettingItems>
          {
            SETTING_ITEMS.map((settingItem) => (
              <SettingItem
                key={settingItem.id}
              >
                {settingItem.label}
              </SettingItem>
            ))
          }
        </SettingItems>
        )
      }
    </Container>
  );
};

export default ViewerSetting;
