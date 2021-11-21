import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";
// eslint-disable-next-line import/named
import { Astronaut } from "./icons";
const BgSidebar = require("./IconImage/BgSidebar.svg") as string;
interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  imgUrl: string
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  /* background-image: url(${BgSidebar}); */
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  background: ${({  theme }) =>  `linear-gradient(90deg, ${theme.colors.background}, ${theme.colors.background}, ${theme.colors.background}, ${theme.colors.backgroundGradient})` };
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <div>
      <StyledPanel isPushed={isPushed} showMenu={showMenu}>
        <Astronaut width={`${SIDEBAR_WIDTH_FULL + 160}px`}/>
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </StyledPanel>
    </div>
  );
};

export default Panel;
