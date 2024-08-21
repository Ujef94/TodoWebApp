import React from "react";
import "./about.css";
const About = () => {
    return (
        <div className="about justify-content-center align-items-center">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1>About Us</h1>
                </div>
                <div className="p-3 mb-2 bg-light text-dark">
                    <section>
                        <h4> Who We Are:</h4>
                        <p> Welcome to my ToDo web-application. Here, I have created a website where you simplifies task management and productivity. Whether you're a student
                            to balancing an assignments or an Employee to managing professional projects, and simply organizing your daily tasks, this website is designed to make
                            your life easier.
                        </p>
                    </section>
                    <section>
                        <h4>What We Offer:</h4>
                        <ul>
                            <li><strong>User-Friendly Interface:</strong> Our application is designed with simplicity and ease of use in mind. Whether you're a tech-savvy individual or someone who prefers straightforward tools, our interface will meet your needs.</li>
                            &nbsp;
                            <li><strong>Efficient Task Organization:</strong> Easily organize your tasks with features like categorization, tagging, and prioritization to keep everything in order and accessible.</li>
                            &nbsp;
                            <li><strong>Personalization:</strong> Customize your ToDo lists to suit your unique needs, whether it's work-related, personal goals, or collaborative projects.</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Our Mission:</h4>
                        Our mission is to provide users with a seamless and intuitive platform to manage their tasks and boost productivity. We aim to help individuals and teams
                        streamline their workflow, prioritize their to-dos, and achieve their goals without hassle.
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
