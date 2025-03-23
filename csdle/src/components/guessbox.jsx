import Box from '@mui/material/Box';


function GuessBox({foundSkin, answer}) {
    return (
        <Box component="span" sx={{display: "block", p: 1, width: 80, height: 80, bgcolor: foundSkin === answer ? "green" : "red" }} >
            {foundSkin}
        </Box>
 )
}
export default GuessBox;