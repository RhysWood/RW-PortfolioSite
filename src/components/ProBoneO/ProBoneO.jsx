import * as React from 'react';
import { InView } from 'react-intersection-observer'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../ProBoneO/proboneo.css'; 


function ProBoneO() {
    const icon = (
        <div className='parent'>
        <div className='title'>
            Pro-Bone-O
            <hr className='underline'></hr>
        </div>
        </div>
    );
    const [checked, setChecked] = React.useState(false);
    const [inView, setInView] = React.useState(false)

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        <>
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

        </>
    );
}

export default ProBoneO;