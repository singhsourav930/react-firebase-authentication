import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const UserBox = styled.div`
  padding: 20px 15px 0px 15px;
  .editSvg{
    height:2rem;
    cursor:pointer;
    &:hover {
  path[stroke] {
    stroke: ${COLORS.darkBlue};
  }
}
  }
`;

export const SearchBox = styled.div`
padding: 5px 10px;
display:flex;
gap:20px;
align-items:center;
justify-content:end;
`

export const FilterOptionsBox = styled.div`
display: flex;
gap:20px;
`