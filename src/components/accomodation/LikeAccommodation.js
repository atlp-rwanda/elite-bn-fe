import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpAltIcon />} />
      <Checkbox {...label} icon={<ThumbDownOffAltIcon />} checkedIcon={<ThumbDownAltIcon />} />
  
    </div>
  );
}
