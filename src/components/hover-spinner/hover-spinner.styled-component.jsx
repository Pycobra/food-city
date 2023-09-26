import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const elementWidth = ({width}) => {
    return width ? width : '50px'
}
const elementHeight = ({height}) => {
    return height ? height : '50px'
}
export const SpinnerContainer = styled.div`
  display: inline-block;
  border: 3px solid var(--default);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border-top-color: var(--green);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
