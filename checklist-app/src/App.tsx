import { useState } from "react";
import "./style.css";
import { ListWithIcon } from "./checklist";
import Profile from "./Profile";
import Authentication from "./authentication";
import Checklistcard from "./Checklistcard";
import { Button } from "@material-tailwind/react";
import { getAuth, signOut } from "firebase/auth";

function App() {
  const [whichPage, setWhichPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSetCurrentUser = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        console.log("logged out sucessfully");
        setWhichPage(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-lvh w-auto grid place-content-center">
      <div className="flex flex-row space-x-4">
        {currentUser === null ? (
          <>
            <Authentication
              setWhichPage={setWhichPage}
              setCurrentUser={handleSetCurrentUser}
            />
          </>
        ) : whichPage === 1 ? (
          <>
            <Button onClick={() => setWhichPage(2)}>Go to Note card</Button>
            <Button onClick={handleLogout}>Logout</Button>

            <br></br>

            <ListWithIcon></ListWithIcon>
          </>
        ) : (
          <>
            <Button onClick={() => setWhichPage(1)}>Go to Checklist</Button>
            <Button onClick={handleLogout}>Logout</Button>

            <br></br>

            <Checklistcard />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

