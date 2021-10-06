import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import { Planet } from "../Menu/icons";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background-size: contain;
  height: 100vh;
  background-repeat: no-repeat;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {

  }
`;

const ModalHeader = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  // border-bottom: 1px solid #e9eaeb;
  padding: 12px 24px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;
const Logo = styled.div`
  position: absolute;
  right: 0;
  // width: 50%;
  // height: 100vh;
  z-index: -1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <Logo>
      <Planet />
    </Logo>
    <ModalHeader>
      {/* <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle> */}
      {!hideCloseButton && (
        // <IconButton variant="text"  aria-label="Close the dialog">
          <CloseIcon color="primary" onClick={onDismiss}/>
        // </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding} style={{ position: 'absolute',right: '0px',top: '50%',transform: 'translateY(-50%)'}} >
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
