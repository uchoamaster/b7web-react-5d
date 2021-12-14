import * as C from './styles';
import { FaPlus } from "react-icons/fa";
import { useState , KeyboardEvent } from 'react';


type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent)  => {
        // console.log(e.code);
        if(e.code === 'Enter' && inputText !== ''){

        }
    }

    return (
    <C.Container>
        <div className="image"> <FaPlus /></div>
        <input type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container>
    );
}