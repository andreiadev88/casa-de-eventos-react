import styled from "styled-components";
import {Link} from 'react-router-dom'

const MenuContainer = styled.div`

`
const MenuList = styled.ul``

const MenuItem = styled.li``

const MenuLink =styled(Link)``

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