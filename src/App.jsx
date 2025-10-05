import styled from "styled-components";
import { ProfileCardProvider } from "../lib/context/profileCardContext";
import { Toaster } from "react-hot-toast";
import { ProfileCard } from "../lib/main.ts";

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
            firstname: "Oljas",
            lastname: "Medetbaev",
            title: "Junior React Developer",
            tags: ["React", "js", "CSS", "HTML"],
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
