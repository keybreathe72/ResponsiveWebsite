import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
             T = "Never Look Back"
             D = "Let it go."
             BImg = "nice6.jpg"
             Lbtn = "Take a gift"
             Rbtn = "Get info"/>
            
            <Section
            T = "Your success and happiness lie in you"
            D = "Be yourself."
            BImg = "nice1.jpg"
            Lbtn = "Take a gift"
            Rbtn = "Get info"/>

            <Section
            T = "Your are good enough just as you are."
            D = "Believe in yourself."
            BImg = "nice5.jpg"
            Lbtn = "Take a gift"
            Rbtn = "Get info"/>

            <Section
            T = "Happiness is not by chance, but by choice."
            D = "You can make the decision."
            BImg = "nice7.jpg"
            Lbtn = "Take a gift"
            Rbtn = "Get info"/>

            <Section
            T = "Every day is a new opportunity to change your life."
            D = "Stop hesitating."
            BImg = "nice9.jpg"
            Lbtn = "Take a gift"
            Rbtn = "Get info"/>

        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100%;`