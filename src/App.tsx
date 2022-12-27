import TodoWrapper from "./components/context/todo-context";
import Header from "./components/header";
import "./global.css";
import Dashboard from "./pages/dashboard";

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
