import { makeServer } from "./server";
import Employees from "./components/employees/Employees";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div>
      <header>
        <h1 style={{textAlign: 'center'}}>Employees</h1>
      </header>
      <Employees />
    </div>
  );
}

export default App;
