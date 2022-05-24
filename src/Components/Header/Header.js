import styled from 'styled-components'
import logoMenu from '../../Assets/Images/logoMenu.png'

function Header({ header, infos }) {

    return (
        <>
            <Top header={header}>
                <img src={logoMenu} alt='' />
                <Profile>
                    {infos.map((info, index) => { return (<img key={index} src={info.image} alt='' />) })}
                </Profile>
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
    height: 30px;
}
`

const Profile = styled.div`

img{
    height: 50px;
    width: 50px;
    border-radius:50%;
    object-fit: cover;
}
`

export default Header;