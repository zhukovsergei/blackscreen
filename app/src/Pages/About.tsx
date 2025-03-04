import { Container, Title, Text } from '@mantine/core';

export function About() {
    return (
        <Container>
            <Title order={2}>О приложении</Title>
            <Text mt="md">
                Это страница «О приложении». Здесь вы можете узнать больше о целях и функциональности данного проекта.
            </Text>
        </Container>
    );
}
