import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

    return (
        <animated.section style={fadeIn} id="home">
            <h1>Sanjeevlu Buggargani</h1>
            <p>ATL, GA | buggargs@gmail.com | <a href="https://github.com/your-github">GitHub</a> | <a href="https://www.linkedin.com/in/your-linkedin/">LinkedIn</a> | <a href="https://your-website.com">Website</a></p>
            <h2>Full Stack Developer with 2+ years of experience</h2>
            <p>Building scalable web and mobile applications with a focus on UI/frontend and backend designs. Seeking to leverage technical skills to contribute to innovative projects.</p>
        </animated.section>
    );
};

export default Home;