import { Container, Title, Text } from '@mantine/core';

export function About() {
    return (
        <Container>
            <Title order={1}>About</Title>
            <Text mt="lg" fz={"xl"}>
                The project was created to test the screen for burnt pixels, dimming without the off button or use the monitor as a light source. Also rid the users of annoying advertisements, and to keep the fast loading speed of the project.
            </Text>
        </Container>
    );
}
