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
      ? `background-color: #a47e3b;
         color: white;`
      : `background-color: transparent;
         color: #a47e3b;`}
  &:hover {
    background-color: #a47e3b;
    color: white;
  }
`;
