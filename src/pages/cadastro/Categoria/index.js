/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import Formfield from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'
function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm }= useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  
  useEffect(()=>{
    const URL_TOP = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://zeeraqhflix.herokuapp.com/categorias';
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
        {values.titulo}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >

        <Formfield
          label="Nome da Categoria"
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
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
            {categoria.titulo}
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
