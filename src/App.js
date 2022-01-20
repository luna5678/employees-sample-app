import { makeServer } from "./server";
import Employees from "./components/employees-list/Employees";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div>
      <header>
        <h1>Employees</h1>
        <Employees />
      </header>
    </div>
  );
}

export default App;
