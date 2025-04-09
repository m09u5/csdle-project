import Box from "@mui/material/Box";

function GuessBox({ foundSkin, answer, children }) {
	const isCorrect = foundSkin === answer;
	const backgroundColor = children ? "black" : isCorrect ? "green" : "red";
	return (
		<Box component="span" sx={{ display: "block", p: 1, width: 80, height: 80, bgcolor: backgroundColor }}>
			{children ?? foundSkin}
		</Box>
	);
}
export default GuessBox;
