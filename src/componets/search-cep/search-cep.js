import React from 'react';

const SeachCep = ({ 
    address,
    city,
    code,
    district,
    state,
    status,
    isFetching,
    handleSubmit
 }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='cep'></input>
            <button type='submit' disabled={isFetching}>{isFetching ? 'Buscando...' : 'Buscar endereço'}</button>
        </form>

        {status === 0 && <div>CEP Não encontrado!</div>}
        {status === 1 && (
            <table>
                <thead>
                    <tr>
                        <td>CEP</td>
                        <td>Endereço</td>
                        <td>Bairro</td>
                        <td>Cidade</td>
                        <td>Estado</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{code}</td>
                        <td>{address}</td>
                        <td>{district}</td>
                        <td>{city}</td>
                        <td>{state}</td>
                    </tr>
                </tbody>
            </table>
        )}
        
    </div>
)

export default SeachCep