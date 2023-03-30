import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <h1>Lista de Alunos EX</h1>
        </NavLink>
      </div>
      <div className="nav-actions">
        <NavLink to="/alunos"><button>Consultar Alunos</button></NavLink>
        <NavLink to="/alunos/novo"><button>Adicionar Aluno</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar;