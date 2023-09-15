import './App.css';
import MenuLateral from './components/menu-lateral';
import Universidade from './components/universidade';
import FormacaoComplementar from './components/formacao-complementar';
import ExperienciaProfissional from './components/experiencia-profissional';
import AtividadeComplementar from './components/atividade-complementar';
import NicksonIndiani from './components/nickson-indiani';
import Projetos from './components/projetos';
import { useContext } from 'react';
import VisibleMenuContext from './contexts/VisibleMenu';

function App() {
  const { visibleMenu } = useContext(VisibleMenuContext);
  const {
    visibleUniversity,
    visibleProjects,
    visibleFormacaocomplementar,
    visibleAtividadecomplementar,
    visibleExperienciaprofissional,
    visibleNicksonindiani,
  } = visibleMenu;
  console.log(
    visibleUniversity,
    visibleProjects,
    visibleFormacaocomplementar,
    visibleAtividadecomplementar,
    visibleExperienciaprofissional,
    visibleNicksonindiani,
  );

  return (
    <>
      <div>
        <MenuLateral />
        {visibleUniversity && <Universidade />}
        {visibleProjects && <Projetos />}
        {visibleFormacaocomplementar && <FormacaoComplementar />}
        {visibleAtividadecomplementar && <AtividadeComplementar />}
        {visibleExperienciaprofissional && <ExperienciaProfissional />}
        {visibleNicksonindiani && <NicksonIndiani />}
      </div>
      <div></div>
    </>
  );
}

export default App;
