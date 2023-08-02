import React from 'react'

import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

export default function Services() {
    return (
        <>
            <HomepageNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-4xl font-bold'>Our Services</h1>
                <h2 className='text-2xl py-3 font-medium'>Course Hosting and Delivery 📚</h2>
                <p>LearnEdge host the course content and provide a learning management system (LMS) to deliver the courses to learners. They handle the technical aspects of hosting videos, documents, quizzes, and other learning materials.</p>

                <h2 className='text-2xl py-3 font-medium'>Certification 🏅</h2>
                <p>We offer valid certificate for everyone who successfully complete their courses(requirements are different for each course). This feature helps learners showcase their achievements and enhance their professional profiles.</p>

                <h2 className='text-2xl py-3 font-medium'>Analytics and Reporting 📈</h2>
                <p>LearnEdge platform provides detailed analytics and reporting capabilities to both course creators and learners. Creators can monitor enrollment, engagement, and revenue, while learners can track their progress and performance.</p>

                <h2 className='text-2xl py-3 font-medium'>Financial Aids 🤝</h2>
                <p>LearnEdge offers a Financial Aid Program to help individuals who demonstrate financial need access their extensive catalog of online courses. This program is designed to make high-quality education available to learners worldwide, irrespective of their financial circumstance.</p>
            </div >
            <Footer />
        </>
    )
}
