import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => (props.wd ? `${props.wd}%` : "100%")};
  height: 100%;
  margin-left: ${props => (props.wd ? "auto" : 0)};
  margin-right: ${props => (props.wd ? "auto" : 0)};
`;

export const StepContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 412px;
`

