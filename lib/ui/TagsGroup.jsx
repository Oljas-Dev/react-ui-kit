import styled from "styled-components";
import Tag from "./Tag";
import toast from "react-hot-toast";
import { useProfileCard } from "../context/profileCardContext";
const StyledTagsGroup = styled.ul `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;

  align-self: flex-end;
`;
export default function TagsGroup() {
    const { profileData } = useProfileCard();
    const tags = profileData?.tags;
    const tagsHolder = tags ? tags : ["tag1", "tag2", "tag3"];
    if (tagsHolder.length > 4) {
        toast.error("UI hint: It is best if you choose up to four most relevant tags✅", {
            duration: 10000,
        });
    }
    function getColor(index) {
        const colors = ["0", "1", "2"];
        return colors[index % colors.length];
    }
    return (<StyledTagsGroup>
      {tagsHolder.map((tag, i) => (<Tag key={tag} color={getColor(i)}>
          {tag}
        </Tag>))}
    </StyledTagsGroup>);
}
