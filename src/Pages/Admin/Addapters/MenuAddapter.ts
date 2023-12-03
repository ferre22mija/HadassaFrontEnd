import Menu from "../Models/Menu"

export const createAddaptedMenu = (menu:any)=>{
    const formatedMenu:Menu = {
        id:menu.id,
        nombre:menu.nombre,
        padreId:menu.padreId,
        ruta:menu.ruta,
        hijos:[]
    }
    return formatedMenu;
}