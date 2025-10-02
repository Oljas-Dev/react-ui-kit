import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 65%;
  padding: 1.6rem;
`;

export default function ProfileInfo({
  firstname,
  lastname,
  title,
  summary,
}: {
  firstname: string;
  lastname: string;
  title: string;
  summary: string;
}) {
  const fullName = `${firstname} ${lastname}`;
  return (
    <StyledInfo>
      <h1>{fullName}</h1>
      <h2>{title}</h2>
      <p>{summary}</p>
    </StyledInfo>
  );
}
