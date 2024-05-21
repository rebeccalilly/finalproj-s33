import "./style.css";
import { DefaultSidebar } from "./sidebar.tsx";
import { ListWithIcon } from "./checklist.tsx";

function App() {
  return (
    <div class="flex flex-row">
      <div class="flex-[0.3]">{DefaultSidebar()}</div>
      <div class="relative h-32 w-32">
        <div>{ListWithIcon()}</div>
      </div>
    </div>
  );
}

export default App;
