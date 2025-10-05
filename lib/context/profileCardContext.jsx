import { createContext, useContext, useState } from "react";
const profileCardContext = createContext({});
function ProfileCardProvider({ children }) {
    const [profileData, setProfileData] = useState();
    return (<profileCardContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </profileCardContext.Provider>);
}
function useProfileCard() {
    const context = useContext(profileCardContext);
    if (context === undefined) {
        throw new Error("useProfileCard must be used within a ProfileCardProvider");
    }
    return context;
}
export { ProfileCardProvider, useProfileCard };
