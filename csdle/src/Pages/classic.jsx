import skins from '../assets/skins.json'
import { useState } from 'react'
import { Table, TableBody, TableContainer, TableCell, TableRow } from '@mui/material';
import { TableObjects } from '../components/tableobjects';

export function ClassicMode() {
    const suggetions = skins.map(skin => skin.name);
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
                        onFocus={() => setFocused(true)}
                    />
                    <button type="submit">Submit</button>
                    {focused &&
                    <ul className='list'>
                        {suggetions.map((suggetion, index) => {
                            const isMatch = suggetion.toLowerCase().indexOf(playersAnswer.toLowerCase()) > -1;
                            return <div key={index}>
                                {isMatch &&(
                                    <li className="list.item"onClick={(e) => {
                                        setFoundSkin(newFoundSkin(suggetion));
                                        checkGuess(e);
                                        setPlayersAnswers([...playersAnswers, newFoundSkin(suggetion)]);
                                        }}>
                                    {suggetion}
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
        </>
    )
}
