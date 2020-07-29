import React, { useState } from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';
import Formfield from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, value) {
        setValues({
            ...values,
            [chave]: value,

        })

    }

    function handleChange(e) {
        // const { getAttribute, value } = e.target;
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
                setValues(valoresIniciais);
            }}>

                <Formfield
                    label='Nome da Categoria'
                    value={values.nome}
                    onChange={handleChange}
                    type='text'
                    name='nome'
                />

                <label>
                    Descrição:
                        <textarea type="text"
                        name='descricao'
                        value={values.descricao}
                        onChange={handleChange}
                    />
                </label>

                <Formfield
                    label="Cor"
                    value={values.nome}
                    onChange={handleChange}
                    type='color'
                    name='cor'
                />


                <button>
                    Cadastrar
                    </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir Para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria