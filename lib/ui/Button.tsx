import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: var(--primary-color);
  font-size: 1.2rem;
  color: var(--sec-bg-color);
  font-weight: 800;
  width: fit-content;
  height: 2rem;
  align-self: flex-end;

  outline: none;
  border: none;
  padding: 0.1rem 1.2rem;
  position: relative;
  transition: all 1s var(--spring-easing);
  cursor: pointer;

  &:hover {
    padding: 0.1rem 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 2rem;
    background-color: inherit;
    left: -0.9rem;
    top: 0;
    clip-path: polygon(80% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
  }
`;

export default function Button({ children }: { children: React.ReactNode }) {
  return <StyledBtn>{children}</StyledBtn>;
}
