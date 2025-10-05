import styled from "styled-components";
import Button from "./Button";
import TagsGroup from "./TagsGroup";

const StyledTagsAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: auto;
  margin-right: calc(var(--main-margin) * -1);
`;

export default function TagsAndButton() {
  return (
    <StyledTagsAndButton>
      <Button>get in touch</Button>
      <TagsGroup tags={["java", "c++", "web", "js"]} />
    </StyledTagsAndButton>
  );
}
