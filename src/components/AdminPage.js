import React, { useState, useEffect } from 'react';
import axios from 'axios';

//const API_BASE_URL = 'http://localhost:3001';
const API_BASE_URL = 'https://escola-backend.vercel.app';

function AdminPage() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [indice, setIndice] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    carregarAlunos();
  }, []);

  const carregarAlunos = async () => {
    try {
      const resposta = await axios.get(`${API_BASE_URL}/alunos`);
      console.log(resposta.data); // Log the response data
      setAlunos(resposta.data);
    } catch (erro) {
      console.error('Erro ao carregar alunos:', erro);
    }
  };

  const salvarAluno = async (e) => {
    e.preventDefault();
    if (!nome || !dataNascimento || !indice) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const aluno = { nome, data_nascimento: dataNascimento, indice };
    try {
      if (editandoId) {
        await axios.put(`${API_BASE_URL}/alunos/${editandoId}`, aluno);
      } else {
        await axios.post(`${API_BASE_URL}/alunos`, aluno);
      }
      limparFormulario();
      carregarAlunos();
    } catch (erro) {
      console.error('Erro ao salvar aluno:', erro);
      alert("Erro ao salvar aluno. Por favor, tente novamente.");
    }
  };

  const editarAluno = (aluno) => {
    setNome(aluno.nome);
    setDataNascimento(aluno.data_nascimento);
    setIndice(aluno.indice);
    setEditandoId(aluno.id);
  };

  const excluirAluno = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/alunos/${id}`);
      carregarAlunos();
    } catch (erro) {
      console.error('Erro ao excluir aluno:', erro);
    }
  };

  const limparFormulario = () => {
    setNome('');
    setDataNascimento('');
    setIndice('');
    setEditandoId(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="container mt-5">
      <h2>Administração de Alunos</h2>
      <form onSubmit={salvarAluno}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
          <input type="date" className="form-control" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="indice" className="form-label">Índice</label>
          <input type="number" className="form-control" id="indice" value={indice} onChange={(e) => setIndice(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">{editandoId ? 'Atualizar' : 'Cadastrar'}</button>
        {editandoId && <button type="button" className="btn btn-secondary ms-2" onClick={limparFormulario}>Cancelar</button>}
      </form>
      <h3 className="mt-4">Lista de Alunos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Índice</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.data_nascimento}</td> {/* Format the date */}
              <td>{aluno.indice}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => editarAluno(aluno)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => excluirAluno(aluno.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
