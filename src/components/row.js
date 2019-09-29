import styled from 'styled-components';

const Row = styled.div`
  width: ${props => (
    props.wd === 1 && "8.33333333%" ||
    props.wd === 2 && "16.6666667%" ||
    props.wd === 3 && "25%" ||
    props.wd === 4 && "33.3333333%" ||
    props.wd === 5 && "41.6666667%" ||
    props.wd === 6 && "50%" ||
    props.wd === 7 && "58.3333333%" ||
    props.wd === 8 && "66.6666667%" ||
    props.wd === 9 && "75%" ||
    props.wd === 10 && "83.3333333%" ||
    props.wd === 11 && "91.6666667%" || "100%")};
  height: auto;
  margin-left: ${props => (props.wd ? "auto" : 0)};
  margin-right: ${props => (props.wd ? "auto" : 0)};
  flex-direction: row;
  display: flex;
  `

export default Row;
