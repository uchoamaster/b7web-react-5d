import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

//fun��o para filtrar baseado em uma lista
export const filterListByMonth  = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');
//o ano do item tem de bater com o ano que quero filtrar e o m�s do item tem de bater com o m�s que eu quero filtrar
    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}