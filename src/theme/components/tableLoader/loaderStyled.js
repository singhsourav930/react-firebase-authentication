import styled from "styled-components";
import { COLORS } from "../../colors";
export const LoaderBox = styled.div`
  width: 100%;
  height: 100%;
  /* position: fixed; */
  left: 0px;
  top: 0px;
  z-index: 9999;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
.card{  
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 20px #ddd;
}
.card .header{
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
}
.header .img{
  height: 75px;
  width: 75px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.header .details{
  width: 100%;
  display: flex;
  gap:10px;
  justify-content:space-between;
}
.details span{
  display: block;
  background: #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.details .name{
  height: 40px;
  width: 100px;
}
.details .about{
  height: 13px;
  width: 150px;
  margin-top: 10px;
}
.card .description{
  margin: 25px 0;
}
.description .line{
  background: #d9d9d9;
  border-radius: 10px;
  height: 13px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;
}
.description .line-1{
  width: calc(100% - 0%);
  height: 80px;
}
.description .line-2{
  width: calc(100% - 0%);
  height: 300px;
}
.card .btns{
  display: flex;
}
.card .btns .btn{
  height: 300px;
  width: 100%;
  background: #d9d9d9;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.header .img::before,
.details span::before,
.description .line::before,
.btns .btn::before{
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #d9d9d9 0%, rgba(0,0,0,0.07) 20%, #d9d9d9 40%, #d9d9d9 100%);
  background-repeat: no-repeat;
  background-size: 450px 400px;
  animation: shimmer 1.8s linear infinite;
}
.header .img::before{
  background-size: 650px 600px;
}
.details span::before{
  animation-delay: 0.5s;
}
.btns .btn-2::before{
  animation-delay: 0.22s;
}
@keyframes shimmer {
  0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
  }
}
`;

export const LoaderInnerBox = styled.div``;
