import * as C from './styles';
import { FaPlus } from "react-icons/fa";

export const AddArea = () => {
    return (
    <C.Container>
        <div className="image"> <FaPlus /></div>
        <input type="text"
        placeholder="Adicione uma tarefa"
        />
    </C.Container>
    );
}