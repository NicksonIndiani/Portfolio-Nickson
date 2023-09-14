import "./App.css";
import MenuLateral from "./components/menu-lateral";
import Universidade from "./components/universidade";
import Projetos from "./components/projetos";
import React, { useContext } from "react";
import VisibleMenuContext from "./contexts/VisibleMenu";

function App() {
  const { visibleMenu } = useContext(VisibleMenuContext);
  const { visibleUniversity, visibleProjects } = visibleMenu;
  console.log(visibleUniversity, visibleProjects);

  return (
    <>
      <div>
        <MenuLateral />
        {visibleUniversity && <Universidade />}
        {visibleProjects && <Projetos />}
      </div>
      <div></div>
    </>
  );
}

export default App;
