import styled from 'styled-components';

export const CardOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:180px;
  height:250px;
  border:1px solid rgb(220, 220, 220);
  border-radius:5px;
  margin-bottom: 20px;

`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  width:70%;
  height:70%;
  animation: shine 3s ease-in-out infinite;
  -webkit-animation: shine 3s ease-in-out infinite;

  @keyframes shine {
    0% {background-color: var(--lightgrey);width:71%;height:71%;}
    15% {background-color: rgb(220, 220, 220);width:70%;height:70%;}
    30% {background-color: rgb(200, 200, 200);width:69%;height:69%;}
    45% {background-color: rgb(180, 180, 180);width:68%;height:68%;}
    60% {background-color: rgb(170, 170, 170);width:66%;height:66%;}
    75% {background-color: rgb(180, 180, 180);width:68%;height:68%;}
    90% {background-color: rgb(190, 190, 190);width:69%;height:69%;}
    100% {background-color: rgb(210, 210, 210);width:70%;height:70%;}
  }
  @-webkit-keyframes shine {
    0% {background-color: var(--lightgrey);width:71%;height:71%;}
    15% {background-color: rgb(220, 220, 220);width:70%;height:70%;}
    30% {background-color: rgb(200, 200, 200);width:69%;height:69%;}
    45% {background-color: rgb(180, 180, 180);width:68%;height:68%;}
    60% {background-color: rgb(170, 170, 170);width:66%;height:66%;}
    75% {background-color: rgb(180, 180, 180);width:68%;height:68%;}
    90% {background-color: rgb(190, 190, 190);width:69%;height:69%;}
    100% {background-color: rgb(210, 210, 210);width:70%;height:70%;}
  }
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:50%;
  height:50%;
  background-color:red;
  animation: shine 3s ease-in-out infinite;
  -webkit-animation: shine 3s ease-in-out infinite;

  @keyframes shine2 {
    0% {background-color: rgb(230, 230, 230);}
    15% {background-color: var(--lightgrey);}
    30% {background-color: rgb(220, 220, 220);}
    45% {background-color: var(--lightgrey);}
    60% {background-color: rgb(210, 210, 210);}
    75% {background-color: var(--lightgrey);}
    90% {background-color: rgb(200, 200, 200);}
    100% {background-color: var(--lightgrey);}
  }
  @-webkit-keyframes shine2 {
    0% {background-color: rgb(230, 230, 230);}
    15% {background-color: var(--lightgrey);}
    30% {background-color: rgb(220, 220, 220);}
    45% {background-color: var(--lightgrey);}
    60% {background-color: rgb(210, 210, 210);}
    75% {background-color: var(--lightgrey);}
    90% {background-color: rgb(200, 200, 200);}
    100% {background-color: var(--lightgrey);}
  }
`;