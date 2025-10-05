import styled from "styled-components";
import { ProfileCardProvider } from "../lib/context/profileCardContext";
import { Toaster } from "react-hot-toast";
import { ProfileCard } from "../lib/ui/ProfileCard";
import { imagePlaceholder } from "../lib/helpers";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <ProfileCardProvider>
      <StyledApp>
        <ProfileCard
          profileData={{
            firstname: "John",
            lastname: "Mustermann",
            title: "Software Engineer",
            summary:
              "Passionate developer with 5 years of experience in web development.",
            imgUrl: imagePlaceholder,
            tags: ["JavaScript", "React", "Node.js"],
          }}
        />
        <Toaster
          toastOptions={{
            style: {
              color: "var(--primary-color)",
            },
            success: { style: { background: "var(--sec-bg-color)" } },
            error: { style: { background: "var(--sec-bg-color)" } },
          }}
        />
      </StyledApp>
    </ProfileCardProvider>
  );
}

export default App;
