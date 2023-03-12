
import { ScrollMenu,  } from 'react-horizontal-scrolling-menu';
import { Box  } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data,setBodyParts, bodyPart }) =>
(
  <ScrollMenu >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} setBodyParts={setBodyParts} bodyPart={bodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;