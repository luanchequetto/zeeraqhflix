import React, {useEffect, useState} from 'react';
import PageDefault from '../../PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { handleChange, values } = useForm({
        titulo: 'Nome do Vídeo',
        url: 'URL do vídeo no Youtube',
        categoria: 'Categoria do Vídeo',
    });

    useEffect(()=>{
        categoriasRepository
        .getAll()
        .then((categoriasFromServer)=>{
            setCategorias(categoriasFromServer);
        });
        
    }, [])
    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                history.push('/home');

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                .then(()=>{
                    console.log('cadastrou com suceso')
                    history.push('/');
                });
            }}>

                <FormField
                    label="Titulo do Vídeo"
                    value={values.titulo}
                    onChange={handleChange}
                    type="text"
                    name="titulo"
                />

                <FormField
                    label="URL do Vídeo"
                    value={values.url}
                    onChange={handleChange}
                    type="text"
                    name="url"
                />

                <FormField
                    label="Categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    type="text"
                    name="categoria"
                    suggestions={
                        [
                            'front end',
                            'back end',
                        ]
                    }
                />

                <Button type='submit'>
                    Cadastrar
        </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo