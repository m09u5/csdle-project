import GuessBox from './guessbox';


export function TableObjects({foundSkin, answer}) {
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