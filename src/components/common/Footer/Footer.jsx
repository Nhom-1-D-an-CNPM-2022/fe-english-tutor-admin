import React from 'react';
import './Footer.scss';

import { Box, Typography } from '@mui/material';

export const Footer = () => {
  const className = 'footer';

  return (
    <Box className={className}>
      <Box className={`${className}__left`}>
        <Typography variant="subtitle2" gutterBottom component="div">
          @2022 Cambly - Nhóm 01 - Đồ án công nghệ phần mềm
        </Typography>
      </Box>
      <Box className={`${className}__right`} component="ul">
        <Box className={`${className}__right--item`} component="li">Liên Hệ</Box>
        <Box className={`${className}__right--item`} component="li">Thông Tin</Box>
      </Box>
    </Box>
  );
};
