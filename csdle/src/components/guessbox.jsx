import Box from '@mui/material/Box';


function GuessBox({foundSkin, answer, content}) {
    const isCorrect = foundSkin === answer;
    const backgroundColor = content ? "black" : isCorrect ? "green" : "red";
    return (
        <Box component="span" sx={{display: "block", p: 1, width: 80, height: 80, bgcolor: backgroundColor }} >
            {content ?? foundSkin}
        </Box>
 )
}
export default GuessBox;