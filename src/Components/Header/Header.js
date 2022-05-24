import styled from 'styled-components'
import logoMenu from '../../Assets/Images/logoMenu.png'
import profile from '../../Assets/Images/perfil.png'

function Header({ header, setHeader }) {

    return (
        <>
            <Top header={header}>
                <img src={logoMenu} alt='' />
                <img src={profile} alt='' />
            </Top>
        </>
    )
}


const Top = styled.header`
display: ${props => props.header};
box-sizing: border-box;
align-items:center;
justify-content: space-between;
height: 70px;
background-color:#126BA5;
padding: 10px 20px;

img{
    height: 50px;
}
`

export default Header;