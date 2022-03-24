import EnergyType from './EnergyType'
import { Button } from '@material-ui/core'
import { useNavigate} from 'react-router-dom'
import { Input } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

const AddressInfo = ({address,input,setInput}) => {
    const histry = useNavigate();
    const ClickHandler = (e) =>{
          e.preventDefault();
        histry('/property');
        console.log(histry)
    }
      return (
    <div>
    <div>
      <h1>It contains Australian Address</h1>
       <Autocomplete
      id="addr"
      sx={{ width: 300 }}
      options={address}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
           {option.adress}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    </div>
       <EnergyType/>
      <div>
      <Button variant='contained' onClick={ClickHandler}>Compare</Button>
      </div>
    </div>
  )
}

export default AddressInfo
