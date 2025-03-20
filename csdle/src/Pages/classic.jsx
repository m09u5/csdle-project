import skins from '../assets/skins.json'
import { useState } from 'react'
import { Table, TableBody, TableContainer, TableCell } from '@mui/material';
import { Test } from './test';

export function ClassicMode() {
    console.log(skins)
    const [playersAnswer, setPlayersAnswer] = useState("AK-47 | Redline");
    //const checkGuess = () => {
     //   if (skins.find(skin => skin.name == playersAnswer)){console.log("cool skin")} 
     //   else {console.log("not cool skin")};
   // }
   const [showAnswer, setShowAnswer] = useState(false);
    const checkGuess = (e) => {
        e.preventDefault();
        setShowAnswer(true);
    }
    console.log(playersAnswer)
    return(
        <>
            <div>
                <form onSubmit={checkGuess}>
                    <input
                    type="text"
                    value={playersAnswer}
                    onChange={(e) => setPlayersAnswer(e.target.value)}
                    placeholder="Take a guess"
                    />
                    <button type="submit">Submit</button>
                </form>
                {showAnswer &&(<TableContainer>
                    <Table>
                        <TableBody>
                            <TableCell><Test playersAnswer={playersAnswer}/></TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>)}

            </div>
        </>
    )
}
