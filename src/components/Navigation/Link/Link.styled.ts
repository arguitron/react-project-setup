import styled from "styled-components";

export const Link = styled.li`
  list-style: none;
`;
export const Anchor = styled.button<{ anchorColor: string; isActive: boolean }>`
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.isActive
      ? `background-color: ${props.anchorColor};
         color: white;`
      : `background-color: transparent;
         color: ${props.anchorColor};`}
  &:hover {
    background-color: ${(props) => props.anchorColor};
    color: white;
  }
`;
