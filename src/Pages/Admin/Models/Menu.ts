export default interface Menu {
    id: number,
    nombre: string,
    padreId: number | null,
    ruta: string,
    hijos: Array<number>
  }