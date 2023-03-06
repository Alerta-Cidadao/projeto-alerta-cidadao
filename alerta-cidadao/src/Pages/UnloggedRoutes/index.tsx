import { Outlet } from 'react-router-dom'
import { StyledUnloggedRoutes } from './style'

export const UnloggedRoutes = () => {

  console.log( 'estou no unloggedroutes ')
  return (
    <StyledUnloggedRoutes>
        <Outlet/>
    </StyledUnloggedRoutes>
  )
}

