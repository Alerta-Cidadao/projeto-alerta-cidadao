import { StyledHeader } from './style'
import logoImg from '../../assets/logo-header.svg'
import { NavUnlogged } from '../NavUnlogged'
import { NavLogged } from '../NavLogged'
import { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { useNavigate } from 'react-router-dom'
export const Header = () => {

  const {user} =  useContext(UserContext)
  const navigate = useNavigate()

  const goToHome = ()=>{
    navigate('/')
  }

  return (
    <StyledHeader>
        <img src={logoImg} alt="" onClick={()=>{goToHome()}}/>
        {
          user ?
          <NavLogged/>
          :
          <NavUnlogged/>
        }
    </StyledHeader>
  )
}

