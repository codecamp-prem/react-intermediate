import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  // to share state using react context
  // 1. lift the state to closest parent
  // 2. create a context contexts/tasksContext.ts
  //    a. context is like truck for transporting data
  //    b. we should specify data as for transport
  // 3. wrap that context to component tree using context Provider component and data you want to share
  // 4. accest the share state in component tree component using the hook useContext(Context Name)
  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;
