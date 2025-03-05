import {Container, Stack, Button, Box, ColorPicker, VisuallyHidden, Space} from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import {useState} from "react";

export function Home() {

    const { ref, toggle: toggleFullscreen, fullscreen } = useFullscreen();
    const [color, setColor] = useState("#000000");

    return (
        <Container>

            <VisuallyHidden>
                <Box
                    ref={ref}
                    w={220}
                    py={"xl"}
                    bg={ color }
                    mx="auto"
                    onClick={() => toggleFullscreen()}
                >
                </Box>
            </VisuallyHidden>

            <Stack align="center">
                <ColorPicker  size="xl" format="hex"
                              value={color}
                              onChange={setColor}
                              swatches={['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff']}
                />
            </Stack>

            <Space h="md" />
            <Stack align="center">
                <Button onClick={toggleFullscreen} color={fullscreen ? 'red' : 'blue'}>
                    {fullscreen ? '' : 'FULLSCREEN'}
                </Button>
            </Stack>
        </Container>
    );
}
