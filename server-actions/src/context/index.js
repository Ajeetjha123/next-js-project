const { createContext } = require("react");

export const UserContext = createContext(null);

export default UserState = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
