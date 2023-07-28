import React, { useEffect, useState } from 'react';
import LayoutContainer from '../layouts/LayoutContainer'
import axios from 'axios'
import ModalRegister from '../components/Modal/ModalRegister';
import ModalVictory from '../components/Modal/ModalVictory';
import ConfettiGenerator from "confetti-js";
import { compile } from 'sass';

const Dashboard = () => {
    const [user, setUser] = useState({})
    const [articles, setArticles] = useState([]);
    const [animated, setAnimated] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [countCorrect, setCountCorrect] = useState(0)
    const [countError, setCountError] = useState(0)
    const [previewState, setPreviewState] = useState(false)
    const [showModal, setShowModal] = useState(true);
    const [showModalVictory, setShowModalVictory] = useState(false);

    useEffect(() => {
        userValid()
        getArticles();
    }, [])


    const userValid = () => {
        const userObj = JSON.parse(localStorage.getItem('user'))

        if (userObj) {
            setShowModal(false)
            setUser(userObj);
        }
    }

    const orderRandomItems = item => {
        for (let i = item.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [item[i], item[j]] = [item[j], item[i]];
        }
        return item
    }

    const pushConfetti = () => {
        const confettiSettings = { target: 'canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => {
            confetti.clear();
        }, 3000)
    }

    const getArticles = async () => {
        const { REACT_APP_API_ENDPOINT } = process.env;
        
        try {
            const result = await axios(REACT_APP_API_ENDPOINT+`content/spaces/animals/types/game/entries`, {
                per_page: 5
            });
            const { entries } = result.data

            const newEntries = orderRandomItems([...entries, ...entries])
            setArticles(newEntries.map((item, i) => ({
                id: i,
                flip: false,
                name: item.meta.name,
                ...item
            })))
            setPreviewState(true)

        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                setPreviewState(false)
            }, 4000)
        }
    }

    const handleClick = article => {
        const articleFlip = { ...article, flip: true };
        const articlesCopy = [...articles];

        articlesCopy.splice(article.id, 1, articleFlip);
        setArticles(articlesCopy)

        if (selectedArticle === null) {
            setSelectedArticle(article)
        } else if (selectedArticle.name === article.name) {
            setSelectedArticle(null)
            setCountCorrect(countCorrect + 1)
            if (countCorrect + 1 === articles.length / 2) {
                pushConfetti()
                setTimeout(() => {
                    setShowModalVictory(true)
                }, 1000);
            }
        } else {
            setAnimated(true)
            setCountError(countError + 1)
            setTimeout(() => {
                articlesCopy.splice(article.id, 1, article)
                articlesCopy.splice(selectedArticle.id, 1, selectedArticle)
                setArticles(articlesCopy);
                setSelectedArticle(null);
                setAnimated(false)
            }, 1000)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('user', JSON.stringify({ name: user }))
        window.location.reload();
    }

    return (
        <>
            <div className='canvas'>
                <canvas id="canvas"></canvas>
            </div>
            <LayoutContainer user={user} articles={articles} animated={animated} handleClick={handleClick} countCorrect={countCorrect} countError={countError} previewState={previewState} />
            <ModalRegister showModal={showModal} handleSubmit={handleSubmit} handleChange={(e) => setUser(e.target.value)} />
            <ModalVictory user={user} countCorrect={countCorrect} countError={countError} showModalVictory={showModalVictory} handleClose={() => setShowModalVictory(false)} handleNewGame={() => { window.location.reload() }} />
        </>
    )
}
export default Dashboard;