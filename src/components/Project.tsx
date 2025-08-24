import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                        <h2>Smart Crop Recommendation System</h2>
                    </a>
                    <p>
                        Built an intelligent crop recommendation system using Machine Learning models and Flask backend,
                        integrated with a React frontend. The system suggests optimal crops for farmers based on soil,
                        weather, and environmental data, helping to increase yield and sustainability.
                    </p>
                </div>

                <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer">
                        <h2>AI Powered Chatbot</h2>
                    </a>
                    <p>
                        Developed a conversational AI chatbot leveraging Natural Language Processing (NLP)
                        and deep learning models. The chatbot can handle real-time queries, provide contextual
                        responses, and support customer engagement across multiple platforms.
                    </p>
                </div>

                <div className="project">
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer">
                        <h2>Company Performance Prediction System</h2>
                    </a>
                    <p>
                        Created a predictive analytics system that uses historical financial data
                        and machine learning algorithms to forecast company performance and growth trends.
                        This project helps in decision-making for investors and businesses.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer">
                        <h2>Visitor Management System</h2>
                    </a>
                    <p>
                        Designed and deployed a full-stack visitor management system that allows organizations
                        to register, track, and manage guest entries efficiently. Built with a secure backend
                        (Flask + PostgreSQL) and a responsive frontend (React), improving workplace security and
                        visitor experience.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://github.com/yujisatojr/submeowrine"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a
                        href="https://github.com/yujisatojr/submeowrine"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Android Smart Garbage Management System</h2>
                    </a>
                    <p>
                        Designed and developed an Android-based smart waste management application
                        using Java and Android Studio. The system leverages real-time monitoring
                        and efficient route planning to improve urban waste collection and management.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;