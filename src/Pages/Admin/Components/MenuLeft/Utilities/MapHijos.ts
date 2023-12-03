import MENU from "../../../../../Data/Menu";
import Menu from "../../../Models/Menu";

export default function MapHijos(){
    let newItems = new Map<number,Menu>();
    MENU.forEach((element:any)=>{
      let item:Menu = {...element,hijos:[]}
      newItems.set(item.id,item);
    })
    console.log("Map de items",newItems)
    newItems.forEach((element:any)=>{
      if(element.padreId !==null){
        newItems.get(element.padreId)?.hijos.push(element.id)
      }
    })
    console.log("nuevo Map de items", newItems)
    console.log("nuevo Map de items key",  Array.from(newItems.keys()))
    return newItems;
  }