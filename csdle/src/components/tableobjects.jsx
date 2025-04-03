import GuessBox from './guessbox';
import skins from '../assets/skins.json';
const images = import.meta.glob('../assets/images/*.png', { eager: true });


export function TableObjects({foundSkin, answer}) {
    return(
        <>
            {
                foundSkin.map((skin => {
                    const originalIndex = skins.findIndex(s => s.name === skin.name)
                    console.log(originalIndex)
                    console.log(images)
                    const imagePath = images[`../assets/images/${originalIndex}.png`]?.default;
                        console.log(imagePath)
                    const content = <img src={imagePath} alt={""} width="80" />
                    return (
                    <tr key={originalIndex}>
                        <td>
                            <GuessBox content={content}/>
                        </td>
                        {Object.entries(skin).map(([key, value]) => (
                            <td key={key}>
                                <GuessBox foundSkin={value} answer={answer[key]}/>
                            </td>
                        ))}
                    </tr>)
                }))
            }
        </>
    )
}

