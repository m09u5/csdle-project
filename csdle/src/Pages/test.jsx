import skins from '../assets/skins.json'
import GuessBox from '../components/guessbox';


export function Test({playersAnswer}) {
    const selectedSkin = skins[0];
    return(
        <>
            <tr>
                {
                    Object.entries(selectedSkin).map(([key, value]) => (
                        <td key = {key} >
                            <GuessBox playersAnswer={playersAnswer} answer={value}/>
                        </td>
                    ))
                }
            </tr>
        </>
    )
}