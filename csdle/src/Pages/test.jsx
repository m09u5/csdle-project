import skins from '../assets/skins.json'
import GuessBox from '../components/guessbox';


export function Test() {
    const selectedSkin = skins[0];
    return(
        <>
            <div>
                {
                    Object.entries(selectedSkin).map(([key, value]) => (
                        <p key = {key} >
                            <GuessBox content= {value}/>
                        </p>
                    ))
                }
            </div>
        </>
    )
}