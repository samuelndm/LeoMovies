import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  text-align: left;

  & > .skeleton-body {
    width: 100%;
    border-radius: 6px;
  }

  @media screen and (max-width: 586px) {
    text-align: center;
  }
`;
