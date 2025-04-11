import {Container, Stack, Button, Box, ColorPicker, Space, AspectRatio} from '@mantine/core';
import { useFullscreen, useHotkeys } from '@mantine/hooks';
import {useState, useEffect} from "react";

function IconExternalLink() {
    return null;
}

export function Home() {
    const { ref, toggle: toggleFullscreen, fullscreen } = useFullscreen();
    const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [color, setColor] = useState(colors[0]);

    useHotkeys(
        [
            ['ArrowLeft', () => {
                if (fullscreen) {
                    setCurrentColorIndex(prev => (prev - 1 + colors.length) % colors.length);
                }
            }],
            ['ArrowRight', () => {
                if (fullscreen) {
                    setCurrentColorIndex(prev => (prev + 1) % colors.length);
                }
            }]
        ],
        [],
        fullscreen
    );

    useEffect(() => {
        setColor(colors[currentColorIndex]);
    }, [currentColorIndex]);

    return (
        <Container>
            <AspectRatio ratio={16 / 9}>
                <Box
                    ref={ref}
                    mt={"5rem"}
                    bg={color}
                    mx="auto"
                    onClick={() => toggleFullscreen()}
                >
                </Box>
            </AspectRatio>

            <Stack align="center">
                <ColorPicker 
                    withPicker={false} 
                    swatchesPerRow={5}  
                    size="xl" 
                    format="hex"
                    value={color}
                    onChange={setColor}
                    swatches={colors}
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
