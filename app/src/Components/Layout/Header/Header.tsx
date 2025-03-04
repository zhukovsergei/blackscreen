import { useState, useEffect } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const mainLinks = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
];

export function AppHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const location = useLocation();
    const [active, setActive] = useState(0);

    useEffect(() => {
        const currentIndex = mainLinks.findIndex(item => item.link === location.pathname);
        setActive(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname]);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor
            component={Link}
            to={item.link}
            key={item.label}
            className={classes.mainLink}
            data-active={index === active || undefined}
            onClick={() => setActive(index)}
        >
            {item.label}
        </Anchor>
    ));

    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
                <Box className={classes.links} visibleFrom="sm">
                    <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </Box>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                    hiddenFrom="sm"
                />
            </Container>
        </header>
    );
}
