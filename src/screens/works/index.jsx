import React, { useState } from 'react'
import { Container, Wrapper, Left, List, ListItem, Right } from './style'

import { WebDesign, ProductDesign, Development } from "./components";
const Works = () => {
    const data = [
        "Web Design",
        "Development",
        "Illustration",
        "Product Design",
        "Social Media",
    ];
    const [work, setWork] = useState("Web Design");

    return (
        <Wrapper>
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work === "Web Design" ? (
                        <WebDesign />
                    ) : work === "Development" ? (
                        <Development />
                    ) : (
                        <ProductDesign />
                    )}
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Works