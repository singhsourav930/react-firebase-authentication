import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const DashboardBox = styled.div`
  padding: 20px 20px;
  p{
    font-size: 1rem;
  }
  h3{
    font-size: 1.3rem;
    font-weight: 400;
  }
  h4{
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const LearningStatus = styled.div`
  background: ${COLORS.grey05};
  border-radius: 10px;
  padding: 15px 20px;
  p {
    margin-bottom: 10px;
  }
  margin-bottom: 20px;
`;

export const ProgressBarBox = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-top: -3px;
  }
`;

export const ProgressBar = styled.div`
  border-radius: 30px;
  background: ${COLORS.lightBlue};
  width: 100%;
  height: 16px;
  margin-right: 15px;
`;

export const ProgressBarActiveRange = styled.div`
  border-radius: 30px;
  background: ${COLORS.blue};
  width: 100%;
  ${(props) => `width:${props.activeRange || 0}%`};
  height: 16px;
`;

export const TicketBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 25px;
  row-gap: 25px;
`;

export const Ticket = styled.div`
  display: flex;
  padding: 15px;
  /* max-width:350px; */
  ${(props) => `background:${COLORS[props.color]};`};
  border-radius: 10px;
  .left-ticket {
    padding-right: 15px;
  }
  p {
    margin-bottom: 5px;
  }
  .subData{
    font-size:12px
  }
`;

export const GraphTopBox = styled.div`
display: flex;
justify-content:space-between;
.graphtoprightbox{
  display: flex;
  gap: 20px;
}
`
export const GraphContainer = styled.div`
height:18rem;
padding-top:1rem ;
`