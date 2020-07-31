/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import Formfield from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, value) {
    setValues({
      ...values,
      [chave]: value,

    });
  }

  function handleChange(e) {
    // const { getAttribute, value } = e.target;
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(()=>{
    console.log('alo alo brasil')
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
    .then(async (respostaDoServidor) =>{
      const resposta  = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, [
    values.descricao
  ])

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <Formfield
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />

        <Formfield
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <Formfield
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      
      <div>

      </div>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir Para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
