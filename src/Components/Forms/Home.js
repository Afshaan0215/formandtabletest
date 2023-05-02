import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div class="card mt-5 mx-5">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>“Be the change that you wish to see in the world.”</p>
                        <footer class="blockquote-footer"> <cite title="Source Title">Mahatma Gandhi</cite></footer>
                    </blockquote>
                </div>
            </div>
            <div class="card mt-5 mx-5">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>“Without music, life would be a mistake.”</p>
                        <footer class="blockquote-footer"> <cite title="Source Title">Friedrich Nietzsche</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Home;