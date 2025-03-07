import { useState, useEffect } from 'react';
import { Anchor, Box, Container, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const mainLinks = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
];

export function AppHeader() {
    // const [opened, { toggle }] = useDisclosure(false);
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
                <Box ml="auto" className={classes.links} >
                    <Group justify="flex-end" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </Box>
            </Container>
        </header>
    );
}
