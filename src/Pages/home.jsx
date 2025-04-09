import { Link } from "react-router-dom";
import "../assets/styles.css";

const items = [
	{ id: 1, name: "Classic Mode" },
	{ id: 2, name: "Freeplay" },
	{ id: 3, name: "Skinbook" },
];
innerHeight;
export function HomePage() {
	return (
		<>
			{items.map(({ id, name }) => (
				<div class="homepagelinks" key={id}>
					<img src="src/assets/noimage.png" alt="" />
					<Link to="/classic">{name}</Link>
				</div>
			))}
		</>
	);
}
