import styled from 'styled-components';

const Col = styled.div`
  width: ${props => (
    props.c === 1 && "8.33333333%" ||
    props.c === 2 && "16.6666667%" ||
    props.c === 3 && "25%" ||
    props.c === 4 && "33.3333333%" ||
    props.c === 5 && "41.6666667%" ||
    props.c === 6 && "50%" ||
    props.c === 7 && "58.3333333%" ||
    props.c === 8 && "66.6666667%" ||
    props.c === 9 && "75%" ||
    props.c === 10 && "83.3333333%" ||
    props.c === 11 && "91.6666667%" || "100%"
    )};
  float: ${props => (props.float ? props.float : "left")};
  height: auto;
  `;

export default Col;
