import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const[Bstatus, setBstatus] = useState(false);
    return (
        <Container>
            <a href="/">
            <img src="/images/ModenX-white.png" alt=""></img>
            </a>
            <Menu>
                
                <a href="'/'">
                    About us
                </a>
                

                
                <a href="'/'">
                    Solution
                </a>
               
                <a href="'/'">
                    Success Stories
                </a>

                <a href="'/'">
                    News
                </a>

            </Menu>

            <RightMenu>
                <a href="'/'">
                    Contact Us
                </a>
                


            </RightMenu>


            <CustomIcon onClick={() => setBstatus(true)}>
            <MenuIcon>
                </MenuIcon>
        </CustomIcon>
        <BNav show={Bstatus}>
            <CloseWrap>
            <CustomeClose onClick={() => setBstatus(false)}>
                <CloseIcon/>
            </CustomeClose>
            </CloseWrap>
            <li><a href="#"></a>About Us</li>
            <li><a href="#"></a>Solution</li>
            <li><a href="#"></a>Success Stories</li>
            <li><a href="#"></a>News</li>
        </BNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
position: fixed;
min-height: 60px;
display: flex;
align-items: center;
padding: 0 20px;
justify-content: space-between;
top: 0;
left: 0;
right: 0;
z-index: 1;
img{ 
    max-width: 80px;
    opacity: 0.8;

}
`


const Menu = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
a{
   font-weight: 600;
   text-transform: uppercase;
   padding: 0 30px;
}
@media (max-width: 900px){
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    text-transform: uppercase;
    font-weight: 800;
    margin-right:20px;
}`

const CustomIcon = styled(MenuIcon)`
cursor: pointer;
color: white;
`
const BNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
opacity: 0.6;
width: 200px;
z-index: 16;
list-style: none;
padding: 20px;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.5s ease-in-out;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
   

}`

const CustomeClose = styled(CloseIcon)`
cursor: pointer;
color: white;`


const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
`