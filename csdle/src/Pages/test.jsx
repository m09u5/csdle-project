import skins from '../assets/skins.json'
import GuessBox from '../components/guessbox';


export function Test() {
    const randomValue = Math.floor(Math.random() * 3);
    console.log(randomValue);
    const selectedSkin = skins[randomValue];
    return(
        <>
            <tr>
                {
                    Object.entries(selectedSkin).map(([key, value]) => (
                        <td key = {key} >
                            <GuessBox content= {value}/>
                        </td>
                    ))
                }
            </tr>
        </>
    )
}