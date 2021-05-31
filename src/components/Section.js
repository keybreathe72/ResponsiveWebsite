import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';



function Section({T,D,Lbtn,Rbtn,BImg}) {
    return (
        <Wrap bgImages ={BImg}>
            <Fade bottom>
            <ItemText>
                <h1>{T}</h1>
                <p>{D}</p>
            </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
            <ButtonGrp>
                <LeftButton>
                    {Lbtn}

                </LeftButton>
                <RightButton>

                    {Rbtn}

                </RightButton>
                
            </ButtonGrp>
            </Fade>
            <DownA src="/images/down-arrow.svg"/>
            </Button>


        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background: black;
background-size: cover;
object-fit: cover;
background-image: url('/images/nice.jpg');
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("images/${props.bgImages}")`};
`

const ItemText = styled.div`
padding-top: 30vh;
text-align: center;
h1, p{
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-style: bold;
    
}`

const ButtonGrp = styled.div`

display: flex;
margin-bottom: 15px;
@media (max-width: 768px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: black;
height: 40px;
width: 256px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.6;
text-transform: uppercase;
font-size: 12px;
font-weight: bold;
margin: 15px;
cursor: pointer;
color: white;
&&:hover {
    transform: scale(1.15);
    opacity: 0.9;
}
`

const RightButton = styled(LeftButton)`
background: white;
color: black;
`

const DownA = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  animation: animateUp infinite 0.8s;
  cursor: pointer;
`

const Button = styled.div`
`