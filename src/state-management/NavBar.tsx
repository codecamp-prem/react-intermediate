import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TasksContext from "./contexts/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext); // we don't know dispatch, so we are just grabbing tasks
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
