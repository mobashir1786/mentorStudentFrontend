import React from 'react';
import './landing.css';
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className='landing'>
            <div className="landingLeft">
            </div>
            <div className="landingRight">
                <h1>About Us....</h1>
                <div>MentorStudents.org is a FREE service for high-schools, colleges, mentors and students.</div>
                <div>We are FERPA compliant and we ensure privacy of students & mentors. The conferencing system makes outbound calls and everyone gets our number. No contact info is exchanged.</div>
                <div>NO RESOURCES from high schools or Universities are needed. Mentor Students Tab can be added to a site by copying & pasting one line of the code. All of the underlying technology regarding tabs, featuring mentors, scheduling and conferences is handled by us.</div>
                <div>Students don't dial in. Our system calls them on their phone or computer, which ensures attendance. Multiple students can be on the same call with one mentor. Students take turns asking questions of a mentor just like in a classNameroom setting. Research shows students learn best in groups and gain insights from peer's questions.</div>
                <div className="loginsignupbtn">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
