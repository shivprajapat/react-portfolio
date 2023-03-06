import React, { useState } from 'react'
import { Container, Wrapper, Left, List, ListItem,Right } from './style'

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
                <Right></Right>
            </Container>
        </Wrapper>
    )
}

export default Works