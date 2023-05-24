import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='container mt-5'>
            <h2 align='center'>Welcome to the Page</h2>
            <h5 align='center' className='mt-4'>Here are somethings you shoud know about our company.</h5>
            <p className='mt-4'>We are a blockchain development company that is entirely self-funded. The goal of Brugu is to help blockchain and cryptocurrency start-ups develop ground-breaking software solutions that improve society. Brugu team is made up of experienced programmers and tech experts with numerous years of experience in Digital Ledger technology services. For clients in various industries, our team specialises in creating business blockchain solutions.</p>
            <p>Blockchain technology is revolutionizing the way business is done and could well be growing faster than the internet. Cutting across sectors, pioneering companies are scrambling to adopt and implement the distributed ledger technology.</p>
            <p>We are a software development company that leverages our programmers' extensive knowledge of regulations, core standards, and configuration change best practices to provide your organization with state-of-the-art software and data solutions.</p>
        </div>
    )
}

export default Home;