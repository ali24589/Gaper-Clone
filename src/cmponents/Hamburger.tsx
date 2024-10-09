import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { RxHamburgerMenu } from "react-icons/rx";

type Anchor = 'right';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'right' ? 250 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <div>
        <ul className="flex flex-col space-y-4 text-lg">
          <li className="hover:text-[#0693e3] hover:cursor-pointer p-[12px]">Assets</li>
          <li className="hover:text-[#0693e3] hover:cursor-pointer p-[12px]">Jobs</li>
          <li className='bg-[#0693e3] py-[12px] text-center'>
            <button className="rounded  font-semibold py-[4px]   text-white">
              Hire Engineers
            </button>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><RxHamburgerMenu className='text-black
       w-[40px] h-[40px]'/></Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </div>
  );
}
