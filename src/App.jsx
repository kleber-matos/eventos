import { useState } from "react";

// Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo

const App = () => {

  const [count, setCount] = useState(0);

  //------------------ onChange   ------------------
  // é utilizado para que seja realizada determinada ação após alguma mudança
  const [valor, setValor] = useState("");
  function captura(evento) {
    setValor(evento.target.value);
  }

  //-------------------onFocus   ------------------
  function foco() {
    console.log("Este componente esta no foco!");
  }

  const semfoco = () => {
    console.log("O elemento perdeu o foco");
    // Aqui você pode executar qualquer ação desejada
  };

  //----------------- onKeyPress  ------------------
  const tecla = (event) => {
    // Aqui você pode acessar informações sobre a tecla pressionada
    console.log("Tecla pressionada:", event.key);
  
      if (event.key == "c") {
        alert("ok");
      }
    };
  
  return(
    <>
    {/* Evento de clique */}
    <h2>{count}</h2>
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>

    {/* O evento onChange é disparado sempre que o valor do campo de entrada é alterado */}
    <h1>{valor}</h1>
    <input type="text" onChange={captura} />


    {/* Envento */}
    <input type="text" onFocus={foco} />

    <input type="text" onBlur={semfoco} placeholder="Clique fora para acionar o evento"/>

    {/* Evento de teclas */}
    <input type="text" onKeyPress={tecla} placeholder="Pressione uma tecla"/>

    {/* Ao passar o mouse em cima */}
    <button onMouseMove={() => alert("ola")}>passe o mouse</button>
    </>
  )
}

export default App;