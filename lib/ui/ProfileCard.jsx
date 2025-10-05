import { useEffect } from "react";
import styled from "styled-components";
import { useProfileCard } from "../context/profileCardContext";
import ProfileInfo from "./ProfileInfo";
import { imagePlaceholder } from "../helpers";
const StyledCard = styled.div `
  display: flex;
  flex-direction: row;
  max-width: 40rem;
  min-height: 23.4rem;
  background-color: var(--sec-bg-color);

  border-top: 0.2rem solid var(--primary-color);
`;
const StyledImage = styled.span `
  width: 35%;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function ProfileCard({ profileData }) {
    const { profileData: data, setProfileData } = useProfileCard();
    const { firstname, lastname, title, summary, imgUrl } = data || {};
    useEffect(() => {
        if (profileData) {
            setProfileData(profileData);
        }
    }, [profileData]);
    return (<StyledCard>
      <StyledImage $img={imgUrl ? imgUrl : imagePlaceholder}/>
      <ProfileInfo firstname={firstname || "Tim"} lastname={lastname || "Skywalker"} title={title || "IT Specialist"} summary={summary ||
            "Here comes clear and professional summary that reflects your expertise, achievements, and the value you bring in your field."}/>
    </StyledCard>);
}
export { ProfileCard };
