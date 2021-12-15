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
  //lista filtrada para pegar do m�s atual
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  //tenho meu m�s atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //para eu monitorar modifica��es na aplica��o eu uso useEffect
  //entao se a lista geral mudar ou o m�s automaticamente eu consigo filtrar com o useEffect
  useEffect(()=>{
    setFilteredList( filterListByMonth( list, currentMonth) );
  }, [list, currentMonth])

  return(
      <C.Container> 
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* �rea de informa��es */}

          {/* �rea de inser��o */}

          {/* Tabela de itens */}
          <TableArea />
          
        </C.Body>
      </C.Container>
  );
}

export default App;