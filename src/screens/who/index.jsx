import React from 'react'
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
    Right
} from './style'

const Who = () => {
    return (
        <Wrapper>
            <Container>
                <Left>{/* 3D Modal */}</Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Who we Are</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        a creative group of designers and developers with a passion for the
                        arts.
                    </Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Who