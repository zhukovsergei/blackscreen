import { useState, useEffect } from 'react';
import { Anchor, Box, Container, Group, ActionIcon } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconBrandGithub } from '@tabler/icons-react';
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
        if (location.pathname === '/') {
            setActive(-1);
        } else {
            const currentIndex = mainLinks.findIndex(item => item.link === location.pathname);
            setActive(currentIndex);
        }
    }, [location.pathname]);

    const visibleLinks =
        location.pathname === '/' ? mainLinks.filter(item => item.link !== '/') : mainLinks;


    const mainItems = visibleLinks.map((item, index) => (
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
                <Box className={classes.links}>
                    <Group justify="flex-start" className={classes.mainLinks}>
                        <ActionIcon 
                            component="a" 
                            href="https://github.com/zhukovsergei/blackscreen" 
                            target="_blank" 
                            variant="subtle"
                            size="lg"
                        >
                            <IconBrandGithub size={24} />
                        </ActionIcon>
                    </Group>
                </Box>
                <Box ml="auto" className={classes.links}>
                    <Group justify="flex-end" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </Box>
            </Container>
        </header>
    );
}
