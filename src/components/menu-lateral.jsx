import React, { useState } from "react";
import "./menu-lateral.css";
import VisibleMenuContext from "../contexts/VisibleMenu";

const MenuLateral = () => {
  const [showExperienciaProfissional, setShowExperienciaProfissional] =
    useState(false);
  const [showFormacaoComplementar, setShowFormacaoComplementar] =
    useState(false);
  const [showFormacaoAcademica, setShowFormacaoAcademica] = useState(false);
  const [showAtividadeComplementar, setShowAtividadeComplementar] =
    useState(false);
  const [showProjetos, setShowProjetos] = useState(false);

  const { setVisibleMenu } = React.useContext(VisibleMenuContext);

  const handleExperienciaProfissionalClick = () => {
    setShowExperienciaProfissional(!showExperienciaProfissional);
  };

  const handleFormacaoComplementarClick = () => {
    setShowFormacaoComplementar(!showFormacaoComplementar);
  };

  const handleFormacaoAcademicaClick = () => {
    setVisibleMenu({ visibleUniversity: true, visibleProjects: false });
    // setShowFormacaoAcademica(!showFormacaoAcademica);
  };

  const handleAtividadeComplementarClick = () => {
    setShowAtividadeComplementar(!showAtividadeComplementar);
  };

  const handleProjetosClick = () => {
    setVisibleMenu({ visibleProjects: true, visibleUniversity: false });
    // setShowProjetos(!showProjetos);
  };

  return (
    <div className="menu-lateral">
      <img src="./image/perfil.jpg" alt="Sua imagem" />
      <h3>Nickson Indiani</h3>
      <ul>
        <li>
          <a href="#" onClick={handleFormacaoAcademicaClick}>
            Formação Academica
          </a>
        </li>
      </ul>
      <li>
        <a href="#" onClick={handleFormacaoComplementarClick}>
          Formação complementar
        </a>
        {showFormacaoComplementar && (
          <ul>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Palestras</a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" onClick={handleExperienciaProfissionalClick}>
          Experiencia Profissional
        </a>
        {showExperienciaProfissional && (
          <ul>
            <li>
              <a href="#">2023</a>
            </li>
            <li>
              <a href="#">2022</a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" onClick={handleAtividadeComplementarClick}>
          Atividade Complementar
        </a>
        {showAtividadeComplementar && (
          <ul>
            <li>
              <a href="#">Freelancers</a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="#" onClick={handleProjetosClick}>
          Projetos
        </a>
        {/* {showProjetos && (
                    <ul>
                        <li>
                            <a href="#">HTML</a>
                        </li>
                        <li>
                            <a href="info">React</a>
                        </li>
                    </ul>
                )} */}
      </li>
    </div>
  );
};
export default MenuLateral;
