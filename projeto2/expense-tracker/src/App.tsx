import { useState , useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth , filterListByMonth } from './helpers/dateFilter';




const App = () => {
// lista geral completa dos anos
  const [list, setList] = useState(items);
  //lista filtrada para pegar do mês atual
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  //tenho meu mês atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //para eu monitorar modificações na aplicação eu uso useEffect
  //entao se a lista geral mudar ou o mês automaticamente eu consigo filtrar com o useEffect
  useEffect(()=>{
    setFilteredList( filterListByMonth( list, currentMonth) );
  }, [list, currentMonth])

  return(
      <C.Container> 
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* Área de informações */}

          {/* Área de inserção */}

          {/* Tabela de itens */}
          
        </C.Body>
      </C.Container>
  );
}

export default App;