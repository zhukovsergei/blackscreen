import {Container, Stack, Button, Box, ColorPicker, Space} from '@mantine/core';
import { useFullscreen } from '@mantine/hooks';
import {useState} from "react";

function IconExternalLink() {
    return null;
}

export function Home() {

    const { ref, toggle: toggleFullscreen, fullscreen } = useFullscreen();
    const [color, setColor] = useState("#000000");

    return (
        <Container>

                <Box
                    ref={ref}
                    w={520}
                    h={520}
                    mt={"5rem"}
                    bg={ color }
                    mx="auto"
                    onClick={() => toggleFullscreen()}
                >
                </Box>

            <Stack align="center">
                <ColorPicker withPicker={false} swatchesPerRow={5}  size="xl" format="hex"
                              value={color}
                              onChange={setColor}
                              swatches={['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff']}
                />
            </Stack>

            <Space h="md" />
            <Stack align="center">
                <Button onClick={toggleFullscreen} color={fullscreen ? 'red' : 'blue'}>
                    {fullscreen ? '' : 'FULLSCREEN'} <IconExternalLink />
                </Button>
            </Stack>
        </Container>
    );
}
