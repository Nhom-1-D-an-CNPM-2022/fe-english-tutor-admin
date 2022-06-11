import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CakeIcon from '@mui/icons-material/Cake';
import moment from 'moment';
import './TutorProfileBasicInfoSection.scss';

export default function TutorProfileBasicInfoSection({
  profilePictureSrc,
  displayName,
  hometown,
  dateOfBirth,
  email,
}) {
  return (
    <Box component="section" className="tutor_profile__basic_info">
      <Box className="tutor_profile__basic_info__container tutor_profile__section bd_grid">
        <Box className="tutor_profile__basic_info__data bd_grid">
          <img
            src={profilePictureSrc ? profilePictureSrc : '/assets/images/tutor-profile/avatar2.png'}
            alt="profile"
            className="tutor_profile__basic_info__img"
          />
          <Typography className="tutor_profile__basic_info__title">{displayName}</Typography>
        </Box>
        <Box className="tutor_profile__basic_info__address bd_grid">
          <span className="tutor_profile__basic_info__information">
            <LocationOnIcon className="tutor_profile__basic_info__information__icon" /> {hometown}
          </span>
          <span className="tutor_profile__basic_info__information">
            <CakeIcon className="tutor_profile__basic_info__information__icon" />{' '}
            {moment(dateOfBirth).format('YYYY-MM-DD')}
          </span>
          <span className="tutor_profile__basic_info__information">
            <MailIcon className="tutor_profile__basic_info__information__icon" /> {email}
          </span>
        </Box>
      </Box>
    </Box>
  );
}
