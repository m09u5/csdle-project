import Box from '@mui/material/Box';
import skins from '../assets/skins.json'

function GuessBox({content}) {
    return (
        <Box component="div" sx={{ p: 1, border: 1, width: 80, height: 80, borderColor: 'primary.main', borderRadius: 1, bgcolor: 'background.paper' }} >
            <p> 
                {content}
            </p>
        </Box>
 )
}
export default GuessBox;