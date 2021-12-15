import { useState , useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth , filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';



const App = () => {
// lista geral completa dos anos
  const [list, setList] = useState(items);
  //lista filtrada para pegar do mes atual
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  //tenho meu mes atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //para eu monitorar modificacoes na aplicacao eu uso useEffect
  //entao se a lista geral mudar ou o mes automaticamente eu consigo filtrar com o useEffect
  useEffect(()=>{
    setFilteredList( filterListByMonth( list, currentMonth) );
  }, [list, currentMonth]);

  return(
      <C.Container> 
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* Area de informacoes */}

          {/* Area de insercao */}

          {/* Tabela de itens */}
          <TableArea list={filteredList} />
          
        </C.Body>
      </C.Container>
  );
}

export default App;