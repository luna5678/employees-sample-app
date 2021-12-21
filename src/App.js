import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div>
      <header>
        <h1>Employees</h1>
      </header>
    </div>
  );
}

export default App;
