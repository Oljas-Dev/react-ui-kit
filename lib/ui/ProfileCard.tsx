import styled from "styled-components";
import { imagePlaceholder } from "../helpers";
import ProfileInfo from "./ProfileInfo";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 36rem;
  height: 21rem;
  background-color: #231f20;

  border-top: 0.2rem solid var(--primary-color);
`;

interface ImageProps {
  $img?: string;
}

const StyledImage = styled.span<ImageProps>`
  width: 35%;
  background-image: url(${(props) => props.$img || imagePlaceholder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function ProfileCard({
  imgUrl,
  firstname,
  lastname,
  title,
  summary,
}: {
  imgUrl?: string;
  firstname?: string;
  lastname?: string;
  title?: string;
  summary?: string;
}) {
  return (
    <StyledCard>
      <StyledImage $img={imgUrl} />
      <ProfileInfo
        firstname={firstname || "Tim"}
        lastname={lastname || "Skywalker"}
        title={title || "IT Specialist"}
        summary={
          summary ||
          "Here comes clear and professional summary that reflects your expertise, achievements, and the value you bring in your field."
        }
      />
    </StyledCard>
  );
}

export { ProfileCard };
