import React from 'react';
import './Header.scss';

import { Paper, Toolbar, Box, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
  const className = 'header';

  return (
    <Paper elevation={4} className={className}>
      <Toolbar className={`${className}__content`}>
        <Box className={`${className}__left`}>
          <Box className={`${className}__left--body`}>
            <Typography variant="h6" gutterBottom component="div">
              Trang chủ
            </Typography>
          </Box>
        </Box>
        <Box className={`${className}__right`}>
          <Box className={`${className}__right--body`}>
            <div className={`${className}__search`}>
              <div className={`${className}__search--icon`}>
                <SearchIcon />
              </div>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Tìm kiếm"
                inputProps={{ 'aria-label': 'search google maps' }}
                className={`${className}__search--content`}
              />
            </div>
          </Box>
        </Box>
      </Toolbar>
    </Paper>
  );
};
