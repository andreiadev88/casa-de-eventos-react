import styled from "styled-components";
import { Link } from 'react-router-dom'

const MenuContainer = styled.div`
  width: calc(100% - 250px);
  heigth: 120px;
  display: flex;
  justify-content: right;
  aline-itens: center;
`
const MenuList = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  list-style-type: none;
`

const MenuLink = styled(Link)`
  color: #FEFAE0;
  text-decoration: none;
  padding: 0 15px;
  &:hover{
    color: #B99470;
  }
`

function Menu() {
    return (
        <MenuContainer>
            <MenuList>
                <MenuItem>
                    <MenuLink to="/homepage">Homepage</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/contato">Contato</MenuLink>
                </MenuItem>
            </MenuList>
        </MenuContainer>

    )
}
export default Menu