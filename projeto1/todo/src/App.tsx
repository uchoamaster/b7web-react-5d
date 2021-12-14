import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea }  from './components/AddArea';


const App = () => {
//aqui eu falo que vou ter um array de item e o typescritp aceita
const [list, setList] = useState<Item[]>([
  {id: 1, name: 'Comprar pão na padaria', done: false},
  {id: 2, name: 'Comprar um bolo na padaria', done: false},
]);

  return(

    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        
        <AddArea />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
 

  );
  
}
export default App;