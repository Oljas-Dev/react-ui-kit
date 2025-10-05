import styled from "styled-components";

interface TagProps {
  $color?: string;
}

const StyledTag = styled.li<TagProps>`
  display: block;
  background-color: ${(props) => `var(--tag-bg-color-${props.$color})`};
  font-weight: 800;
  color: var(--sec-bg-color);

  height: 2rem;
  padding: 0.1rem 1.3rem;
  position: relative;
  // cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 2rem;
    background-color: inherit;
    left: -0.9rem;
    top: 0;
    clip-path: polygon(80% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
}

    &:not(:last-child):after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 2rem;
      background-color: inherit;
      right: -0.9rem;
      top: 0;
      clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 100% 0%, 10% 100%, 0% 0%);
    }
  }
`;

export default function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <>
      <StyledTag $color={color}>{children}</StyledTag>
    </>
  );
}
