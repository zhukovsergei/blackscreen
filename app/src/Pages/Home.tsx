import { Container, Title, Text } from '@mantine/core';

export function Home() {
    return (
        <Container>
            <Title order={2}>Главная страницы</Title>
            <Text mt="md">Добро пожаловать на главную страницу!</Text>
        </Container>
    );
}
