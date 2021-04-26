import React from 'react';
import Header from './componentes/Header';
import styled from '@emotion/styled';
import Formulario from './componentes/Formulario';
const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;
function App() {
  return (  
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
      <Formulario />
      </ContenedorFormulario>
    </Contenedor> 
  );
}
 
export default App;