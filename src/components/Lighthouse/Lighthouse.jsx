import * as React from 'react';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import './lighthouse.scss'; 

function Lighthouse() {
    const icon = (
        <div className='parent'>
        <div className='title'>
            Pro-Bone-O
            <hr className='underline'></hr>
        </div>
        </div>
    );
    const [checked, setChecked] = React.useState(false);
    
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        <div id="goat">
        <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
        />
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
        </div>
    );
}

export default Lighthouse;