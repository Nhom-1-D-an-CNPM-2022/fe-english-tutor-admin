import React, { useState } from 'react';
import './Nav.scss';

import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FlagIcon from '@mui/icons-material/Flag';
import LogoutIcon from '@mui/icons-material/Logout';

export const Nav = () => {
  const className = 'nav';
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      sx={{
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 300,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
      className={className}
    >
      <div className={`${className}__content`}>
        <Box className={`${className}__logo`}>
          <Box className={`${className}__logo--content`}>
            <Avatar sx={{ bgcolor: deepPurple[500], fontSize: 14 }}>
              AK
            </Avatar>
            <Box className={`${className}__logo--title`}>
              <Typography variant="button" gutterBottom component="h6">
                Trang quản lý Cambly
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <List component="ul" aria-label="nav item">
          <ListItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <Box className={`${className}__nav-item`}>
              <ListItemIcon>
                <CottageIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </Box>
          </ListItem>
          <ListItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <Box className={`${className}__nav-item`}>
              <ListItemIcon>
                <AccountCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Quản lý tài khoản" />
            </Box>
          </ListItem>
          <ListItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <Box className={`${className}__nav-item`}>
              <ListItemIcon>
                <LibraryBooksIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Quản lý khóa học" />
            </Box>
          </ListItem>
          <ListItem
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <Box className={`${className}__nav-item`}>
              <ListItemIcon>
                <FlagIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Danh sách phản hồi" />
            </Box>
          </ListItem>
          <ListItem
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <Box className={`${className}__nav-item`}>
              <ListItemIcon>
                <LogoutIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </Box>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
