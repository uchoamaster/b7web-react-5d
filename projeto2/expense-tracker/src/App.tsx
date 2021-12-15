import { useState  } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';




const App = () => {
// lista completa dos anos
  const [list, setList] = useState(items);
  //tenho meu m�s atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return(
      <C.Container> 
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/* �rea de informa��es */}

          {/* �rea de inser��o */}

          {/* Tabela de itens */}
          
        </C.Body>
      </C.Container>
  );
}

export default App;