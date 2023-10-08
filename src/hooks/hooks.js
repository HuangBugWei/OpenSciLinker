import * as React from "react";
import { useLocation } from "react-router-dom";

const UseBarContext = React.createContext({
  location: null,
  auth: false,
  setAuth: () => {},
  projects: [],
  setProjects: () => {},
  email: "",
  setEmail: () => {},
  user: "",
  setUser: () => {},
});

const UseBarProvider = (props) => {
  const location = useLocation();
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    // if ahth is true, get project list
    if (auth) {
      console.log("auth", auth);
    }
  }, [auth]);

  return (
    <UseBarContext.Provider
      value={{
        location,
        auth,
        setAuth,
        projects,
        setProjects,
        email,
        setEmail,
        user,
        setUser,
      }}
      {...props}
    ></UseBarContext.Provider>
  );
};

const useBar = () => React.useContext(UseBarContext);

export { UseBarProvider, useBar };
