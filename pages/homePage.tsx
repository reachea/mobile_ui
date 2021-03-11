import styled from "styled-components";

export const FashionCardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    overflow: scroll;

    scrollbar-width: none;
    scrollbar-color: transparent;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
