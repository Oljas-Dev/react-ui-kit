import styled from "styled-components";
import TagsAndButton from "./TagsAndButton";
const StyledInfo = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 65%;
  padding: var(--main-margin);
`;
export default function ProfileInfo({ firstname, lastname, title, summary, }) {
    const fullName = `${firstname} ${lastname}`;
    return (<StyledInfo>
      <h1>{fullName}</h1>
      <h2>{title}</h2>
      <p>{summary}</p>
      <TagsAndButton />
    </StyledInfo>);
}
