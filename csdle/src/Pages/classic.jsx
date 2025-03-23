import skins from '../assets/skins.json'
import { useState } from 'react'
import { Table, TableBody, TableContainer, TableCell, TableRow } from '@mui/material';
import { Test } from './test';

export function ClassicMode() {
    const [playersAnswer, setPlayersAnswer] = useState("AK-47 | Redline");
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
    return(
        <>
            <div>
                <form onSubmit={(e) => {
                    setFoundSkin(newFoundSkin(playersAnswer));
                    checkGuess(e);
                    setPlayersAnswers([...playersAnswers, newFoundSkin(playersAnswer)]);

                    }}>
                    <input
                    type="text"
                    value={playersAnswer}
                    onChange={(e) => setPlayersAnswer(e.target.value)}
                    placeholder="Take a guess"
                    />
                    <button type="submit">Submit</button>
                </form>
                {showAnswer &&
                (<table>
                        <tbody>
                                <Test foundSkin={playersAnswers} answer={selectedSkin}/>
                        </tbody>
                    </table>)
                }
            </div>
        </>
    )
}
