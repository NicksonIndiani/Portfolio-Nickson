import './formacao-complementar.css';

const FormacaoComplementar = () => {
  return (
    <div className="fcomplementar">
      <h1>Formação Complementar</h1>
      <nav className='gds'>
        <img src="./image/gds.jpg" alt="GDS" />
        <h3>Green Digital Skill</h3>
        <h4>INSTITUIÇÃO: INCO ACADEMY</h4>
        <p>Desenvolvimento sustentável</p>
      </nav>

      <nav className='crs'>
        <img src="./image/coursera.jpg" alt="crs" />
        <h3>Certificado Profissional em Análise de Dados</h3>
        <h4>INSTITUIÇÃO: COURSERA</h4>
        <p>Analise e manipulação de database</p>
      </nav>

      <nav className='enapes'>
        <img src="./image/enap-es.jpg" alt="enapes" />
        <h3>Estratégia Produtiva</h3>
        <h4>INSTITUIÇÃO: ENAP</h4>
        <p>Clareza, propósito e priorização de tarefas</p>
      </nav>

      <nav className='enapbd'>
        <img src="./image/enap-bd.jpg" alt="enapbd" />
        <h3>BIG DATA e Tomada de decisões</h3>
        <h4>INSTITUIÇÃO: ENAP</h4>
        <p>Gestão de dados em Big Data</p>
      </nav>
    </div>
  );
};

export default FormacaoComplementar;
