import styled from "styled-components";
import { ProfileCard } from "../lib/ui/ProfileCard";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <ProfileCard />
    </StyledApp>
  );
}

export default App;
