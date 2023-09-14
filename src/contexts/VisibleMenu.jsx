import React from "react";

const VisibleMenuContext = React.createContext();

export const VisibleMenuProvider = ({ children }) => {
  const [visibleMenu, setVisibleMenu] = React.useState({
    visibleUniversity: true,
    visibleProjects: false,
    visibleFormacaocomplementar: false, 
    visibleExperienciaprofissional: false, 
    visibleAtividadecomplementar: false,
    visibleNicksonindiani: false,
  });

  return (
    <VisibleMenuContext.Provider value={{ visibleMenu, setVisibleMenu }}>
      {children}
    </VisibleMenuContext.Provider>
  );
};

export default VisibleMenuContext;
