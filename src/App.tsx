import Header from "./components/header";
import Dashboard from "./pages/dashboard";
import TodoWrapper from "./todo-context";

import "./global.css";

function App() {
  return (
    <TodoWrapper>
      <div>
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
    </TodoWrapper>
  );
}

export default App;
