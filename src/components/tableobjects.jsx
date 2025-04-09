import GuessBox from "./guessbox";
import skins from "../assets/skins.json";
const images = import.meta.glob("../assets/images/*.png", { eager: true });

export function TableObjects({ foundSkin, answer }) {
	const transformedSkins = foundSkin.map((skin) => {
		const originalIndex = skins.findIndex((s) => s.name === skin.name);

		return {
			id: originalIndex,
			imagePath: images[`../assets/images/${originalIndex}.png`]?.default,
			...skin,
		};
	});

	return (
		<>
			{transformedSkins.map(({ id, imagePath, ...skin }) => (
				<tr key={id}>
					<td>
						<GuessBox>
							<img src={imagePath} alt={""} width="80" />
						</GuessBox>
					</td>
					{Object.entries(skin).map(([key, value]) => (
						<td key={key}>
							<GuessBox foundSkin={value} answer={answer[key]} />
						</td>
					))}
				</tr>
			))}
		</>
	);
}
