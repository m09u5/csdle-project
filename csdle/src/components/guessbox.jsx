import Box from '@mui/material/Box';


function GuessBox({playersAnswer, answer}) {
    return (
        <Box component="div" sx={{ p: 1, border: 1, width: 80, height: 80, borderColor: 'primary.main', borderRadius: 1, bgcolor: playersAnswer === answer ? "green" : "red" }} >
            <p> 
                {playersAnswer}
            </p>
        </Box>
 )
}
export default GuessBox;