import EnergyType from './EnergyType'
import { Button } from '@material-ui/core'
import { useNavigate} from 'react-router-dom'
import { Input } from '@material-ui/core'
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
      <Input  placeholder='Enter the Address' id ='addr' value={input} onChange = {(e) =>setInput(e.target.value)}/>
       {address.map((add) => {return <option>{add.adress}</option>})}   
    </div>
       <EnergyType/>
      <div>
      <Button variant='contained' onClick={ClickHandler}>Compare</Button>
      </div>
    </div>
  )
}

export default AddressInfo
