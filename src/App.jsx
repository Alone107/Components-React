import "./App.css";
import { Counter } from "./components/Counter";
import { List } from "./components/List/List";
import { Modal } from "./components/Modal";
import { Quiz } from "./components/Quiz";
import { ReactComponents } from "./components/ReactComponents";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-full">
      <ReactComponents />
      <Counter />
      <Modal />
      <Quiz />
      <List />
    </div>
  );
}

export default App;
