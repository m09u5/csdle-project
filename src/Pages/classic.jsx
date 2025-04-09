import skins from '../assets/skins.json'
import { useState, useEffect } from 'react'
import { TableObjects } from '../components/tableobjects';
import { GameWinPopup } from '../components/gamewinpopup';
import '../assets/styles.css'

export function ClassicMode() {
    const [suggestions, setSuggestions] = useState(skins.map(skin => skin.name));
    const [timedPopup, setTimedPopup] = useState(false);
    const [focused, setFocused] = useState(false);
    const [playersAnswer, setPlayersAnswer] = useState("");
    const selectedSkin = skins[0];
    const [showAnswer, setShowAnswer] = useState(false);
    const [playersAnswers, setPlayersAnswers] = useState([]);
    const newFoundSkin = (name) => {
       return skins.find(skin => skin.name === name);
    };
    const [foundSkin, setFoundSkin] = useState();
    const checkGuess = (e) => {
        e.preventDefault();
        setShowAnswer(true);
    }
    const date = new Date();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!suggestions.includes(playersAnswer)) return; 
        setFoundSkin(newFoundSkin(playersAnswer));
        checkGuess(e);
        setPlayersAnswers([...playersAnswers, newFoundSkin(playersAnswer)]);
        setSuggestions(suggestions.filter(suggestion => suggestion !== playersAnswer));
        setPlayersAnswer("");
    }
    useEffect(() => {
        if (foundSkin && foundSkin.name === selectedSkin.name) {
            localStorage.setItem(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay(), "true");
            setTimeout(() => {
                setTimedPopup(true);
            }, 3000);
        }
    }, [foundSkin]);
    useEffect(() => {        
        if (localStorage.getItem(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()) === "true") {
        setTimeout(() => {
            setTimedPopup(true);
        }, 1000);
        }
    }, []);
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={playersAnswer}
                        onChange={(e) => setPlayersAnswer(e.target.value)}
                        placeholder="Take a guess"
                        onFocus={() => setFocused(true)}
                    />
                    <button type="submit">Submit</button>
                    {focused &&
                    <ul className='list'>
                        {suggestions.map((suggestion, index) => {
                            const isMatch = suggestion.toLowerCase().indexOf(playersAnswer.toLowerCase()) > -1;
                            return <div key={index}>
                                {isMatch &&(
                                    <li className="list.item"onClick={(e) => {
                                        setFoundSkin(newFoundSkin(suggestion));
                                        checkGuess(e);
                                        setPlayersAnswers([...playersAnswers, newFoundSkin(suggestion)]);
                                        setSuggestions(suggestions.filter(s => s !== suggestion));
                                        }}>
                                    {suggestion}
                                </li>
                                )}
                            </div>
                            })} 
                    </ul>
                    }
                </form>
                {showAnswer &&
                (<table>
                        <thead>
                            <tr>
                                <th>image</th>
                                {Object.keys(selectedSkin).map(key => (
                                    <th key={key}>
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                                <TableObjects foundSkin={playersAnswers} answer={selectedSkin}/>
                        </tbody>
                    </table>)
                }
            </div>
            <GameWinPopup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h1>Congratulations!</h1>
                <p>You found the skin: {selectedSkin.name}</p>
            </GameWinPopup>
        </>
    )
}
