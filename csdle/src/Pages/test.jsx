import skins from '../assets/skins.json'
import GuessBox from '../components/guessbox';


export function Test({foundSkin, answer}) {
    return(
        <>
            {
                foundSkin.map(skin => (
                    <tr key={skin.id}>
                        {Object.entries(skin).map(([key, value]) => (
                            <td key={key}>
                                <GuessBox foundSkin={value} answer={answer[key]}/>
                            </td>
                        ))}
                    </tr>
                ))
            }
        </>
    )
}