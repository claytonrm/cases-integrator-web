import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        cases: [],
        page: 1,
        pages: 0
    }

    componentDidMount() {
        this.loadCases();
    }

    loadCases = async (page = 1) => {
        const response = await api.get(`/v1/cases?page=${page}&limit=${50}`);
        this.setState({cases: response.data, page, pages: response.data.length});
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        this.loadCases(page - 1)
    }

    nextPage = () => {
        const { page, pages } = this.state;
        if (page === pages) return;
        this.loadCases(page + 1);
    }

    filter = async(e) => {
        // const value = e.target.value;
        // const response = await api.get(`/v1/cases?title=${value}`);
        // console.log(response.data)
        // this.setState({cases: response.data})
    }

    render() {
        const { cases, page, pages } = this.state;
        return (
            <div className="cases-list">
                {/* <div className="filter"><input type="text" onKeyDownCapture={this.filter}></input></div> */}
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Cliente</th>
                            <th>Pasta</th>
                            <th>Etiquetas</th>
                            <th>Responsável</th>
                            <th>Acesso</th>
                            <th>Data da Criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases.map(c => (
                            <tr key={c.id}>
                                <td>{c.title}</td>
                                <td>{c.customer}</td>
                                <td>{c.folder}</td>
                                <td>{c.labels}</td>
                                <td>{c.inChargeOf}</td>
                                <td>{c.accessType}</td>
                                <td><p>{new Date(c.createdAtInstant).toLocaleDateString()}</p></td>
                                <Link to={`/v1/cases/${c.id}`}>Detalhes</Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}
