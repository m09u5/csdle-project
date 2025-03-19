import Box from '@mui/material/Box';

function GuessBox({content}) {
    return (
        <Box component="div" sx={{ p: 1, border: 1, width: 80, height: 80, borderColor: 'primary.main', borderRadius: 1, bgcolor: "#FF00FF" }} >
            <p> 
                {content}
            </p>
        </Box>
 )
}
export default GuessBox;