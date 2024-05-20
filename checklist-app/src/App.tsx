import { useState } from "react";
import "./style.css";
import { ListWithIcon } from "./checklist";
import Profile from "./Profile";
import Authentication from "./authentication";
import Checklistcard from "./Checklistcard";
import { Button } from "@material-tailwind/react";

function App() {
  const [whichPage, setWhichPage] = useState(1);

  return (
    <div className="h-lvh w-auto grid place-content-center">
      <div className="flex flex-row space-x-4">
        {whichPage === 0 ? (
          <>
            <Authentication setWhichPage={setWhichPage} />
          </>
        ) : whichPage === 1 ? (
          <>
            <Button onClick={() => setWhichPage(2)}>Go to Note card</Button>
            <Button onClick={() => setWhichPage(0)}>Logout</Button>

            <br></br>

            <ListWithIcon></ListWithIcon>
          </>
        ) : (
          <>
            <Button onClick={() => setWhichPage(1)}>Go to Checklist</Button>
            <Button onClick={() => setWhichPage(0)}>Logout</Button>

            <br></br>

            <Checklistcard />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
