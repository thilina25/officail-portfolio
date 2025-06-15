import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRightCircle } from "react-icons/bs";
import headerImg from "../assets/img/header-img.svg"; // Adjust the path as necessary
import './MainBanner.css'; // Assuming you have a CSS file for styling

export const MainBanner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack Developer", "Web Developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 100);
    const period = 2000; // Time in milliseconds for each rotation

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta); // Adjust the speed of typing effect

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); // Reset typing speed after deletion
        }
    }

    return (
        <section className="main-banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Thilina`} <span className="wrap"> {text}</span></h1>
                    <p>
                        I am a Full-Stack Developer with a passion for creating dynamic and responsive web applications.
                        I specialize in both front-end and back-end technologies, including React, Node.js, and MongoDB.
                        I have experience in both front-end and back-end development, and I love to learn new technologies.
                    </p>
                    <button onClick={() => console.log('connect')}>Let's Connect <BsArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header-img" />                     
                    </Col>
                </Row>
            </Container>
        </section>
    );
}