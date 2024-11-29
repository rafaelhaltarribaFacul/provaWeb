import React from 'react';

const Tabela = () => {
    return (
        <div className="table-container">
            <table className="tabelinha">
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Salário</td>
                    <td>5000.00</td>
                    <td>0.00</td>
                    <td>5000.00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Aluguel</td>
                    <td>0.00</td>
                    <td>1500.00</td>
                    <td>-1500.00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Supermercado</td>
                    <td>0.00</td>
                    <td>300.00</td>
                    <td>-300.00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Internet</td>
                    <td>0.00</td>
                    <td>100.00</td>
                    <td>-100.00</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Transporte</td>
                    <td>0.00</td>
                    <td>150.00</td>
                    <td>-150.00</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Venda de produto</td>
                    <td>200.00</td>
                    <td>0.00</td>
                    <td>200.00</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Cinema</td>
                    <td>0.00</td>
                    <td>50.00</td>
                    <td>-50.00</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Manutenção do carro</td>
                    <td>0.00</td>
                    <td>400.00</td>
                    <td>-400.00</td>
                </tr>
            </table>
        </div>
    );
}

export default Tabela;