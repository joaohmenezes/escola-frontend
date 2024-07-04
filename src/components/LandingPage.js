import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  return (
    <div>
        <meta name="description" content="O Instituto Por do Sol oferece educação de qualidade para o Ensino Fundamental e Médio desde 1995. Conheça nossa história, missão e valores." />
        <meta name="keywords" content="Instituto Por do Sol, escola, ensino fundamental, ensino médio, educação de qualidade, São Paulo" />
    
      {/* Hero section with cover image */}
      <div className="hero-section position-relative">
        <img
        src="https://escoladainteligencia.com.br/wp-content/uploads/2022/08/6-razoes-para-promover-a-educacao-criativa-com-as-criancas.jpg"
          alt="Escola"
          className="img-fluid w-100"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold">Instituto Por do Sol</h1>
          <p className="lead">Educação de qualidade para o Ensino Fundamental e Médio</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Bem-vindo ao Instituto Por do Sol</h2>
            <p>
              O Instituto Por do Sol é uma escola de excelência dedicada ao Ensino Fundamental e Médio. 
              Nosso compromisso é proporcionar uma educação de qualidade, formando cidadãos 
              conscientes e preparados para os desafios do futuro.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Matrículas Abertas</h5>
                <p className="card-text">Garanta já a vaga do seu filho em nossa escola!</p>
                <a href="#" className="btn btn-primary">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="row mt-5">
          <div className="col-md-4">
            <h3>Ensino Fundamental</h3>
            <p>Do 1º ao 9º ano, oferecemos uma base sólida para o aprendizado.</p>
          </div>
          <div className="col-md-4">
            <h3>Ensino Médio</h3>
            <p>Preparamos nossos alunos para os desafios do vestibular e da vida.</p>
          </div>
          <div className="col-md-4">
            <h3>Atividades Extracurriculares</h3>
            <p>Diversas opções para complementar a formação dos nossos estudantes.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light mt-5 py-3">
        <div className="container text-center">
          <p>&copy; 2024 Instituto Por do Sol. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;