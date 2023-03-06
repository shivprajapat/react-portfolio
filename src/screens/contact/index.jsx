import React, { useRef, useState } from 'react'
import { Map } from '../../components';
import { Wrapper, Container, Left, Form, Title, Input, TextArea, Button, Right } from './style'

const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Wrapper>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Us</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea
                            placeholder="Write your message"
                            name="message"
                            rows={10}
                        />
                        <Button type="submit">Send</Button>
                        {success &&
                            "Your message has been sent. We'll get back to you soon :)"}
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Contact