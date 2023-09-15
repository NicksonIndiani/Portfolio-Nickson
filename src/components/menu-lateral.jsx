import React from 'react';
import './menu-lateral.css';
import VisibleMenuContext from '../contexts/VisibleMenu';

const MenuLateral = () => {
  // const [showExperienciaProfissional, setShowExperienciaProfissional] =
  //   useState(false);
  // const [showFormacaoComplementar, setShowFormacaocomplementar] =
  //   useState(false);
  // const [showFormacaoAcademica, setShowFormacaoAcademica] = useState(false);
  // const [showAtividadeComplementar, setShowAtividadeComplementar] =
  //   useState(false);
  // const [showProjetos, setShowProjetos] = useState(false);

  const { setVisibleMenu } = React.useContext(VisibleMenuContext);

  const handleExperienciaProfissionalClick = () => {
    setVisibleMenu({
      visibleProjects: false,
      visibleUniversity: false,
      visibleFormacaocomplementar: false,
      visibleAtividadecomplementar: false,
      visibleExperienciaprofissional: true,
      visibleNicksonindiani: false,
    });
    // setShowExperienciaProfissional(!showExperienciaProfissional);
  };

  const handleFormacaoAcademicaClick = () => {
    setVisibleMenu({
      visibleUniversity: true,
      visibleProjects: false,
      visibleFormacaocomplementar: false,
      visibleAtividadecomplementar: false,
      visibleExperienciaprofissional: false,
      visibleNicksonindiani: false,
    });
    // setShowFormacaoAcademica(!showFormacaoAcademica);
  };

  const handleFormacaoComplementarClick = () => {
    setVisibleMenu({
      visibleFormacaocomplementar: true,
      visibleUniversity: false,
      visibleProjects: false,
      visibleAtividadecomplementar: false,
      visibleExperienciaprofissional: false,
      visibleNicksonindiani: false,
    });
    // setShowFormacaoComplementar(!showFormacaoComplementar);
  };

  const handleAtividadeComplementarClick = () => {
    setVisibleMenu({
      visibleProjects: false,
      visibleUniversity: false,
      visibleFormacaocomplementar: false,
      visibleAtividadecomplementar: true,
      visibleExperienciaprofissional: false,
      visibleNicksonindiani: false,
    });
    //setShowAtividadeComplementar(!showAtividadeComplementar);
  };

  const handleProjetosClick = () => {
    setVisibleMenu({
      visibleProjects: true,
      visibleUniversity: false,
      visibleFormacaocomplementar: false,
      visibleAtividadecomplementar: false,
      visibleExperienciaprofissional: false,
      visibleNicksonindiani: false,
    });
    // setShowProjetos(!showProjetos);
  };

  const handleNicksonIndianiClick = () => {
    setVisibleMenu({
      visibleFormacaocomplementar: false,
      visibleUniversity: false,
      visibleProjects: false,
      visibleAtividadecomplementar: false,
      visibleExperienciaprofissional: false,
      visibleNicksonindiani: true,
    });
    // setShowFormacaoComplementar(!showFormacaoComplementar);
  };

  return (
    <div className="menu-lateral">
      <img src="./image/perfil.jpg" alt="Sua imagem" />

      <ul>
        <li>
          <a href="#" onClick={handleNicksonIndianiClick}>
            Nickson Indiani
          </a>
        </li>
      </ul>

      <a href="#" onClick={handleFormacaoAcademicaClick}>
        Formação Academica
      </a>

      <a href="#" onClick={handleFormacaoComplementarClick}>
        Formação Complementar
      </a>

      <a href="#" onClick={handleExperienciaProfissionalClick}>
        Experiencia Profissional
      </a>

      <a href="#" onClick={handleAtividadeComplementarClick}>
        Atividade Complementar
      </a>

      <a href="#" onClick={handleProjetosClick}>
        Projetos
      </a>
    </div>
  );
};
export default MenuLateral;
