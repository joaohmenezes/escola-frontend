import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SobrePage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sobre o Instituto Por do Sol</h1>
      
      <div className="row">
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
            alt="Instituto Por do Sol" 
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-6">
          <h3>Nossa História</h3>
          <p>
            Fundado em 1995, o Instituto Por do Sol nasceu com a missão de oferecer educação de qualidade 
            para crianças e jovens. Ao longo dos anos, nos estabelecemos como uma instituição de referência 
            no ensino fundamental e médio em nossa região.
          </p>
          <p>
            Nosso nome, "Por do Sol", simboliza o ciclo diário de aprendizado e renovação que buscamos 
            proporcionar aos nossos alunos, preparando-os para um futuro brilhante.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3>Nossa Missão</h3>
          <p>
            No Instituto Por do Sol, nossa missão é formar cidadãos conscientes, críticos e preparados para 
            os desafios do século XXI. Buscamos não apenas a excelência acadêmica, mas também o 
            desenvolvimento integral de nossos alunos, incluindo aspectos éticos, sociais e emocionais.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Nossos Valores</h3>
          <ul>
            <li>Excelência acadêmica</li>
            <li>Respeito à diversidade</li>
            <li>Inovação pedagógica</li>
            <li>Responsabilidade social</li>
            <li>Integridade e ética</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Diferenciais</h3>
          <ul>
            <li>Corpo docente altamente qualificado</li>
            <li>Infraestrutura moderna e acolhedora</li>
            <li>Metodologias ativas de aprendizagem</li>
            <li>Atividades extracurriculares diversificadas</li>
            <li>Preparação para o ENEM e vestibulares</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3>Entre em Contato</h3>
          <p>
            Estamos sempre abertos para responder suas dúvidas e fornecer mais informações sobre nossa escola. 
            Entre em contato conosco pelos seguintes meios:
          </p>
          <ul>
            <li>Telefone: (XX) XXXX-XXXX</li>
            <li>E-mail: contato@institutoposdosol.edu.br</li>
            <li>Endereço: Rua das Flores, 123 - Bairro Solar - Cidade - Estado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobrePage;