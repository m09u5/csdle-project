import skins from '../assets/skins.json'
import { useState } from 'react'
import GuessBox from '../components/guessbox';
import { Table, TableBody, TableContainer, TableCell } from '@mui/material';
import { Test } from './test';

export function ClassicMode() {
    console.log(skins)
    const [guess, setGuess] = useState();
    const checkGuess = () => {
        if (skins.find(skin => skin.name == guess)){console.log("cool skin")} 
        else {console.log("not cool skin")};
    }

    return(
        <>
            <div>
                <form onSubmit={checkGuess}>
                    <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Take a guess"
                    />
                    <button type="submit">Submit</button>
                </form>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableCell><Test/></TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
    console.log(guess)
}
