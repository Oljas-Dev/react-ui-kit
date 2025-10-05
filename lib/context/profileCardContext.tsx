import { createContext, useContext, useState } from "react";
import { profileData } from "../types";

interface ProfileCardContextType {
  profileData: profileData["profileData"];
  setProfileData: React.Dispatch<
    React.SetStateAction<ProfileCardContextType["profileData"]>
  >;
}

const profileCardContext = createContext<ProfileCardContextType>(
  {} as ProfileCardContextType
);

export function ProfileCardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profileData, setProfileData] =
    useState<ProfileCardContextType["profileData"]>();

  return (
    <profileCardContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </profileCardContext.Provider>
  );
}

export default function useProfileCard() {
  const context = useContext(profileCardContext);

  if (context === undefined) {
    throw new Error("useProfileCard must be used within a ProfileCardProvider");
  }

  return context;
}
