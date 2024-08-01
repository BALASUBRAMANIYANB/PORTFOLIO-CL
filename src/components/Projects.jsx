import React from 'react';
import Footer from './Footer'; // Assuming the Footer component file is available

import selenium from '../assets/selenium.png';
import steghide from '../assets/steghide.png';
import burp from '../assets/burpsuite.png';
import portfolio from '../assets/vpn.png'; // Ensure this path is correct

// ProjectCard component
const ProjectCard = ({ title, description, git, technologies, image }) => {
    return (
        <div className="project-card bg-white rounded-lg shadow-md p-4 m-4">
            <img src={image} alt={`${title} image`} className="project-image w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
            <p className="text-blue-500 mt-2">GitHub: <a href={git} target="_blank" rel="noopener noreferrer">{git}</a></p>
            <p className="text-gray-600 mt-2">Technologies: {technologies.join(', ')}</p>
        </div>
    );
}

// Projects component
export const Projects = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                        image={item.image}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

// Project data
export const project = [
    {
        title: 'Selenium web testing',
        description: 'This web testing is done using the Selenium tools for automated testing for a web application.',
        image: selenium,
        git: 'https://github.com/BALASUBRAMANIYANB/SELENIUM-WEB-TESTING',
        technologies: ['Selenium WebDriver', 'Python']
    },
    {
        title: 'Steganography using steghide',
        description: 'This is the process of hiding data or information inside an image file.',
        image: steghide,
        git: 'https://github.com/BALASUBRAMANIYANB/Steganography-using-steghide',
        technologies: ['Steghide', 'Autopsy']
    },
    {
        title: 'Packet capturing using BURPSUITE',
        description: 'Packet capturing using Burp Suite to intercept the network and listen to the packets traversing over the network.',
        image: burp,
        git: 'https://github.com/BALASUBRAMANIYANB/SECURITY-LOG-ANALYSER-FOR-IT-SYSTEMS-',
        technologies: ['Bash', 'Python']
    },
    {
        title: 'Portfolio',
        description: 'Portfolio',
        image: portfolio,
        git: 'https://github.com/BALASUBRAMANIYANB/Portfolio',
        technologies: ['HTML', 'CSS', 'JS']
    }
]

export default Projects;
