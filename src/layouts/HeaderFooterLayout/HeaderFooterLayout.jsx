import React from 'react';
import './HeaderFooterLayout.scss';

import { Box } from '@mui/material';

export const HeaderFooterLayout = ({ nav, header, children, footer }) => {
  return (
    <div className="header-footer">
      <div className="nav-layout">{nav}</div>
      <Box className='box-layout'>
        <div className="header-layout">{header}</div>
        <div className="children-layout">{children}</div>
        <div className="footer-layout">{footer}</div>
      </Box>
    </div>
  );
};
