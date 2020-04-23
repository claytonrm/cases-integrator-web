import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default class Case extends Component {
    state = {
        legalCase: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/v1/cases/${id}`);
        this.setState({legalCase: response.data})
    }

    render() {
        const { legalCase } = this.state;
        return (
            <div className="case-detail">
                <h1>{legalCase.title}</h1>
                <p><b>Pasta:</b> {legalCase.folder}</p>
                <p><b>Cliente:</b> {legalCase.customer}</p>
                <p><b>Etiquetas:</b> {legalCase.labels}</p>
                <p><b>Descrição:</b> {legalCase.description}</p>
                <p><b>Observação:</b> {legalCase.notes}</p>
                <p><b>Responsável:</b> {legalCase.inChargeOf}</p>
                <p><b>Acesso:</b> {legalCase.accessType}</p>
                <p><b>Data da Criação:</b> {new Date(legalCase.createdAtInstant).toLocaleDateString()}</p>
            </div>
        )
    }
}
