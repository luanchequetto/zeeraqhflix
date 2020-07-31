import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain/index'
import Carousel from '../../components/Carousel/index'
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../PageDefault';


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  //http://localhost:8080/categorias?_embed=videos

  return (
      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}


        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return(
              <div key={categoria.id}>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={"O que é Front-end? Trabalhando na área"}
          />
          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
            />
            </div>
            );  
          }
          return(
            <Carousel
            key={categoria.id}
            category={categoria}
            />
          );
        })}
  
      </PageDefault>
  );
}

export default Home;
