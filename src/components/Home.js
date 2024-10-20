import React from 'react';
import { Typography, Box, IconButton, Button, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring';
import { Typewriter } from 'react-simple-typewriter';
import { Link as RouterLink } from 'react-router-dom'; // For navigation

// Animated box using react-spring and MUI's Box
const AnimatedBox = animated(Box);

const Home = () => {
    // Animations using react-spring
    const headerSpring = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-50px)' } });
    const sectionSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

    return (
        <Container
            maxWidth={false} // Full width
            disableGutters // Remove extra padding
            sx={{
                bgcolor: '#1e1e1e', // Background color for full screen
                color: '#dcdcdc',
                padding: '20px',
                fontFamily: 'monospace',
                minHeight: '100vh', // Full screen height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw', // Full width
                overflow: 'hidden', // Prevent scrolling horizontally
                position: 'relative',
            }}
        >
            {/* Social Icons in Top-Right Corner */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    display: 'flex',
                    gap: '10px',
                    '@media (max-width: 600px)': { // Mobile size adjustments
                        top: '10px',
                        right: '10px',
                        gap: '5px',
                    },
                }}
            >
                <IconButton
                    href="https://www.linkedin.com/in/omri-rachmani-083106228/"
                    target="_blank"
                    sx={{
                        color: '#61dafb',
                        '&:hover': { color: '#35a3da' },
                    }}
                >
                    <LinkedInIcon sx={{ fontSize: { xs: 25, sm: 30 } }} /> {/* Adjusting size for mobile */}
                </IconButton>
                <IconButton
                    href="https://github.com/omri1001"
                    target="_blank"
                    sx={{
                        color: '#dcdcdc',
                        '&:hover': { color: '#ffffff' },
                    }}
                >
                    <GitHubIcon sx={{ fontSize: { xs: 25, sm: 30 } }} /> {/* Adjusting size for mobile */}
                </IconButton>
            </Box>

            {/* Header with Typing Animation */}
            <AnimatedBox style={headerSpring} mb={2} sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        color: '#569cd6',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Responsive font size
                    }}
                >
                    const OmriRachmani = () => {'{'}
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#ce9178',
                        fontFamily: 'monospace',
                        fontSize: { xs: '1rem', sm: '1.5rem' },
                        margin: '10px 0',
                    }}
                >
                    <Typewriter
                        words={['"Software Engineer"', '"Full-Stack Developer"', '"Game Developer"', '"AI Integration Expert"']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>
            </AnimatedBox>

            {/* Centered Buttons for Projects and Contact */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    mt: 2,
                    '@media (max-width: 600px)': { // Mobile adjustments for buttons
                        flexDirection: 'column',
                        gap: '10px',
                    },
                }}
            >
                <Button
                    variant="outlined"
                    component={RouterLink}
                    to="/projects"
                    sx={{
                        color: '#61dafb',
                        borderColor: '#61dafb',
                        '&:hover': { borderColor: '#35a3da', color: '#35a3da' },
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        padding: { xs: '5px 10px', sm: '10px 20px' },
                    }}
                >
                    Projects
                </Button>
                <Button
                    variant="outlined"
                    component={RouterLink}
                    to="/contact"
                    sx={{
                        color: '#dcdcdc',
                        borderColor: '#dcdcdc',
                        '&:hover': { borderColor: '#ffffff', color: '#ffffff' },
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        padding: { xs: '5px 10px', sm: '10px 20px' },
                    }}
                >
                    Contact
                </Button>
            </Box>

            {/* Description */}
            <Box sx={{ display: 'flex', mt: 4, width: '100%' }}>
                <Box
                    sx={{
                        width: '50px',
                        backgroundColor: '#2d2d2d',
                        padding: '10px',
                        color: '#858585',
                        textAlign: 'right',
                        fontFamily: 'monospace',
                        userSelect: 'none',
                        '@media (max-width: 600px)': {
                            fontSize: '0.7rem', // Adjust font size on mobile
                        },
                    }}
                >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((line) => (
                        <Typography key={line} sx={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                            {line}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 1, paddingLeft: '20px', '@media (max-width: 600px)': { paddingLeft: '10px' } }}>
                    <AnimatedBox style={sectionSpring}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                color: '#6a9955',
                                fontStyle: 'italic',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                marginLeft: '20px',
                            }}
                        >
                            // B.Sc. in Computer Science from HIT Holon Institute of Technology, specializing in software engineering and AI integration.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: '#dcdcdc', marginLeft: '20px', fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            expertise.fullstack = {'{'} frontend: ['React', 'TypeScript', 'JavaScript'], backend: ['Flask', 'Node.js'], databases: ['MongoDB', 'NoSQL'], tools: ['Git', 'Docker', 'AWS'], {'}'};
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: '#dcdcdc', marginLeft: '20px', fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            simulation.experience = {'"Unreal Engine", "C++", "C#", "Real-world mission design"'};
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: '#6a9955', fontStyle: 'italic', marginLeft: '20px', fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            // Leadership: Former squad commander in the Golani Brigade, bringing discipline and teamwork to tech projects.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ color: '#dcdcdc', marginLeft: '20px', fontSize: { xs: '0.9rem', sm: '1rem' } }}
                        >
                            currentFocus = {'"AI integration", "real-time simulation development", "scalable solutions in defense and startups"'};
                        </Typography>
                    </AnimatedBox>

                    {/* Closing Bracket */}
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: '#569cd6',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            marginLeft: '20px',
                            fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Responsive font size
                        }}
                    >
                        {'}'};
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
