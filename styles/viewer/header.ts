import styled from 'styled-components';

import { titleFontSize, subColor, defaultColor } from '..';
import { ViewerMenu } from '.';
import {
  ViewerHeaderStyleProps,
  ViewerSettingColorItemStyleProps,
} from '../../interfaces/viewer/style';

export const Container = styled(ViewerMenu)`
  height: ${(props: ViewerHeaderStyleProps): number => props.height - 10}px;
  top: 0;
`;

export const HeaderInfo = styled.div`
  max-width: 50%;
  white-space: nowrap;
  vertical-align: top;
  margin: auto auto auto 5%;
`;

export const HeaderTitle = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  font-size: ${titleFontSize};
`;

export const HeaderAuthor = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const HeaderNcx = styled.div`
  margin: auto 5% auto auto;
`;

export const HeaderSetting = styled.div`
  margin: auto 5% auto 0;
`;

export const NcxContainer = styled.div`
  position: relative;
`;

export const NcxToggleButton = styled.div`
  cursor: pointer;
`;

export const NcxNavPointItems = styled.ul`
  position: absolute;
  width: 10em;
  height: 30em;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: ${defaultColor};
`;

export const NcxNavPointItem = styled.li`
  text-align: center;
  padding: 2px;
  border-bottom: 1px solid ${subColor};
  cursor: pointer;
  margin: 0;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

export const SettingContainer = styled.div`
  position: relative;
`;

export const SettingToggleButton = styled.div`
  cursor: pointer;
`;

export const SettingItems = styled.ul`
  position: absolute;
  width: 15em;
  right: 0;
  overflow: scroll;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid ${subColor};
  background-color: ${defaultColor};
`;

export const SettingHeaderItem = styled.div`
  height: 3em;
  text-align: center;
  padding: .4em;
  border-bottom: 1px solid ${subColor};
  margin: 0;
  display: flex;
  &:nth-last-child(1) {
    border-bottom: initial;
  }
`;

export const SettingHeaderLabel = styled.div`
  margin: auto .5em auto 0;
`;

export const SettingHeaderValue = styled.div`
  margin: auto auto auto 0;
`;

export const SettingColorItems = styled.div`
  display: flex;
  margin: auto 0 auto auto;
`;

export const SettingColorItem = styled.div`
  width: 1em;
  height: 1em;
  border: 1px solid ${(props: ViewerSettingColorItemStyleProps): string => (props.isSelected ? 'black' : `${subColor}`)};  
  border-radius: 50%;
  background-color: ${(props: ViewerSettingColorItemStyleProps): string => props.color} !important;
  cursor: pointer;
  margin: 0 .2em;
`;

export const SettingCountItem = styled.div`
  display: flex;
  width: 30%;
  margin: auto 0 auto auto;
  border: 1px solid ${subColor};
  border-radius: 1em;
  padding-left: .3em;
  padding-right: .3em;
`;

export const SettingCountItemMinusButton = styled.div`
  width: 50%;
  cursor: pointer;
  border-right: 1px solid ${subColor}
`;

export const SettingCountItemPlusButton = styled.div`
  width: 50%;
  cursor: pointer;
`;
