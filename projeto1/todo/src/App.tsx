import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
const App = () => {
//aqui eu falo que vou ter um array de item e o typescritp aceita
const [list, setList] = useState<Item[]>([
  {id: 1, name: 'Comprar p�o na padaria', done: false},
  {id: 2, name: 'Comprar um bolo na padaria', done: false},
]);

  return(

    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
      </C.Area>
    </C.Container>
 

  );
  
}
export default App;