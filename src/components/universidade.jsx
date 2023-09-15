import './universidade.css';

const Universidade = () => {
  return (
    <div className="universidade">
      <h1>Formação Acadêmica</h1>
      <div className="boxfor">
        <img
          className="lgunivesp"
          src="./image/univesp.jpg"
          alt="Logo Univesp"
        />
        <nav className="univesp">
          <h2>Universidade Virtual do Estado de São Paulo - UNIVESP</h2>
          <h2>Graduação: Engenharia da Computação</h2>
          <h3>Início: 2023 / Término: 2028</h3>
        </nav>
      </div>

      <div className="boxfor">
        <img className="lgvesper" src="./image/vesper.jpg" alt="Logo Vesper" />
        <nav className="vesper">
          <h2>Colégio Técnico - VespeR</h2>
          <h2>Técnico: Mecatrônica</h2>
          <h3>Início: 2020 / Término: 2021</h3>
        </nav>
      </div>
    </div>
  );
};

export default Universidade;
