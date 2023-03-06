import React from 'react'
import Header from '../../components/navbar'
import {
    Wrapper,
    Container,
    Left,
    Title,
    WhatWeDo,
    Line,
    Subtitle,
    Desc,
    Button,
    Right,Img
} from './style'

const Hero = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we Do</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        we enjoy creating delightful, human-centered digital experiences.
                    </Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Img src="./img/moon.png"/>
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Hero