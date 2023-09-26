import styled from 'styled-components'


const topPosition = ({data}) => {
  return data.offsetTop
  }

const findSidePosition = ({sidePosition}) => {
  return sidePosition === 'Rightside' ? 'right: 0;' : 'left: 0;'
  }
const findPadding = ({sidePosition}) => {
  return sidePosition === 'Rightside' 
  ? 'padding: 0 20px 20px 20px;' : 'padding: 0 0 20px 20px;'
  }
const findDisplay = ({url, place}) => {
  console.log(url, place)
  const Path = url.split("/")[1]
  return place === 'Rightside' && url !== "/"
  ? 'display: none;' 
  : (Path === "checkout" || Path === "auth")
  ? 'display: none;'
  : 'display: grid;'
}
export const SideContentStyle = styled.aside`
  ${findDisplay};
  position: fixed;
  background-color: var(--white); //var(--brown3);
  top: ${topPosition}px;
  ${findSidePosition};
  ${findPadding};
  width: 25%;
  @media screen and (max-width:540px){
    // position: unset;
    // width: auto;
    display:none;
  } 
  // .side-content-wrap{ 
  //   display: grid;
  // }
`;
