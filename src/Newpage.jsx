import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import dogImage from './assets/dog.jpg/';
import Header from './Header.jsx';
import './css/Newpage.css';

const stories = [
    { id: 1, title: 'Story 1 Title', content: 'This is the content of story 1' },
    { id: 2, title: 'Story 2 Title', content: 'This is the content of story 2' },
    { id: 1, title: 'Story 1 Title', content: 'This is the content of story 1' },
    { id: 2, title: 'Story 2 Title', content: 'This is the content of story 2' }, { id: 1, title: 'Story 1 Title', content: 'This is the content of story 1' },
    { id: 2, title: 'Story 2 Title', content: 'This is the content of story 2' }, { id: 1, title: 'Story 1 Title', content: 'This is the content of story 1' },
    { id: 2, title: 'Story 2 Title', content: 'This is the content of story 2' }, { id: 1, title: 'Story 1 Title', content: 'This is the content of story 1' },
    { id: 2, title: 'Story 2 Title', content: 'This is the content of story 2' },];

function Newpage() {
    const [selectedStoryId, setSelectedStoryId] = useState(null);

    const handleStoryClick = (storyId) => {
        setSelectedStoryId(storyId);
    };

    const closePopup = () => {
        setSelectedStoryId(null);
    };

    return (
        <>
            <motion.div className='content-story'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
            >
                <Header />
                <div className="mainbody">
                    {stories.map((story) => (
                        <div className="gridcontainer" key={story.id}>
                            <a href="#" onClick={() => handleStoryClick(story.id)}>
                                <div className="imagegrid">
                                    <img src={dogImage} alt="Placeholder image" className="" />
                                </div>
                                <div className="textgrid">{story.title}</div>
                            </a>
                        </div>
                    ))}
                </div>

                {selectedStoryId && (
                    <div className="story-popup">
                        <button onClick={closePopup}>&times;</button>
                        <h2>{stories.find((story) => story.id === selectedStoryId)?.title}</h2>
                        <p>{stories.find((story) => story.id === selectedStoryId)?.content}</p>
                    </div>
                )}

                {selectedStoryId && ( // Apply blur effect when popup is open
                    <div className="popup-overlay" onClick={closePopup}></div>
                )}
            </motion.div>
        </>
    );
}

export default Newpage;