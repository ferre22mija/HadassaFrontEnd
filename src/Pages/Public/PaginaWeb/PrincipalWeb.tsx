import { Outlet } from "react-router-dom"
import { MenuTop } from "./Components"

function PrincipalWeb() {
  return (
    <>
      <MenuTop/>
      <Outlet />
    </>
  )
}
export default PrincipalWeb