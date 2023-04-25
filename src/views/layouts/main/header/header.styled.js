import styled from "styled-components";
import { COLORS } from "../../../../theme/colors";
import { FONT_SIZES } from "../../../../theme/fontSizes";
import { FONT_WEIGHTS } from "../../../../theme/fontWeights";

export const HeaderBox = styled.div`
  min-height: 64px;
  background: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 15px;
  border-bottom: 2px solid ${COLORS.grey03};
  position: fixed;
  top: 0px;
  left: 250px;
  z-index: 10;
  width: calc(100% - 249px);
  h5{
    font-size: 0.9rem; 
  }
`;

export const LeftHeaderBox = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
`;

export const RightHeaderBox = styled.div`
  display: flex;
  position: relative;
  .notification-img{
    &::after{
      content: "";
      background:${COLORS.blue};
      border-radius:100%;
      padding: 5px;
      position: absolute;
      left: 1.7rem;
    }
  }
`;

export const NotificationPannel = styled.div`
h5{
  font-weight: bolder;
  /* font-size: 1rem; */
}
span{
  font-size: small;
}
p{
  font-size: small;
  margin: 5px 0px;
  font-weight: bolder;
}
display: flex;
flex-direction:column;
  position:absolute;
  background: white;
  top:2.3rem;
  right: 8rem;
  padding: 10px;
  padding-top:20px;
  border-radius:8px;
  min-width: 300px;
  overflow-y: scroll;
  max-height: 80vh;
  box-shadow: 3px 12px 24px rgba(125, 106, 166, 0.50);
  &::before{
    content: '';
    padding:5px;
    background: white;
    position: absolute;
    transform: rotate(45deg);
    top: -5px;
  right: 4.5rem;
  }
`;

export const NotificationCard = styled.div` 
.msg{
  font-weight: bolder;
  font-size:0.8rem;
}
position: relative;
margin-top: 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
padding: 0.5rem;
font-size: 0.9rem;
cursor: pointer;
border-radius: 5px;
.dot{
position: absolute;
padding: 3px;
background:${COLORS.blue};
border-radius: 50%;
top: 5px;
right: 5px;
}
&:hover{
background: #f9f9f9;
}
`

export const NotificationBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    height: 24px;
  }
  margin-right: 20px;
  .headerNotificationPoint {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    background: ${COLORS.blue};
    top: 8px;
    right: 3px;
  }
`;

export const ThemeBox = styled.div`
  background: ${COLORS.grey04};
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  img {
    height: 24px;
    cursor: pointer;
  }
  .headerLine {
    width: 2px;
    height: 80%;
    background: ${COLORS.grey03};
    border-radius: 6px;
    margin: 0px 7px;
  }
`;

export const CoinBox = styled.div`
  margin-left: 10px;
  background: ${COLORS.lightBlue2};
  color: ${COLORS.blue};
  padding: 4px 9px;
  border-radius: 14px;
  font-weight: ${FONT_WEIGHTS[600]};
  font-size: ${FONT_SIZES.BODY_SMALL_2};
`;
