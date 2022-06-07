import {
  Box,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CakeIcon from '@mui/icons-material/Cake';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import tutorProfileApi from '../../services/tutorProfileApi';
import './TutorProfile.scss';

export function TutorProfile() {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await tutorProfileApi.getProfile(id);
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleOpenCertificate = (index) => {
    window.open(profile.certificates[index].url, '_blank');
  };

  return profile ? (
    <Box className="tutor_profile__container">
      <Box component="main" className="tutor_profile__main bd_container">
        <Box className="tutor_profile__main__left">
          {/* HOME */}
          <Box component="section" className="tutor_profile__home">
            <Box className="tutor_profile__home__container tutor_profile__section bd_grid">
              <Box className="tutor_profile__home__data bd_grid">
                <img
                  src={
                    profile.profilePicture
                      ? profile.profilePicture
                      : '/assets/images/tutor-profile/avatar2.png'
                  }
                  alt="profile"
                  className="tutor_profile__home__img"
                />
                <Typography className="tutor_profile__home__title">
                  {profile.displayName}
                </Typography>
              </Box>

              <Box className="tutor_profile__home__address bd_grid">
                <span className="tutor_profile__home__information">
                  <LocationOnIcon className="tutor_profile__home__information__icon" />{' '}
                  {profile.hometown}
                </span>
                <span className="tutor_profile__home__information">
                  <CakeIcon className="tutor_profile__home__information__icon" />{' '}
                  {moment(profile.dateOfBirth).format('YYYY-MM-DD')}
                </span>
                <span className="tutor_profile__home__information">
                  <MailIcon className="tutor_profile__home__information__icon" />{' '}
                  {profile.userId.email}
                </span>
              </Box>
            </Box>
          </Box>
          {/* ABOUT ME */}
          <Box component="section" className="tutor_profile__about_me tutor_profile__section">
            <Typography className="tutor_profile__section__title">About me</Typography>
            <Typography className="tutor_profile__about_me__description">
              {profile.aboutMe}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, {'\n'} sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </Box>
          {/* MOTIVATION */}
          <Box component="section" className="tutor_profile__motivation tutor_profile__section">
            <Typography className="tutor_profile__section__title">Motivation</Typography>
            <Typography className="tutor_profile__motivation__description">
              {profile.motivation}
            </Typography>
          </Box>
          {/* LANGUAGES */}
          <Box component="section" className="tutor_profile__languages tutor_profile__section">
            <Typography className="tutor_profile__section__title">Languages</Typography>
            <Box className="tutor_profile__languages__content">
              {profile.languages.map((language, index) => (
                <Chip
                  key={index}
                  label={`${language.language} (${language.dialect})`}
                  className="tutor_profile__languages__data"
                />
              ))}
            </Box>
          </Box>
          {/* CERTIFICATES */}
          {profile.certificates.length > 0 && (
            <Box component="section" className="tutor_profile__certificates tutor_profile__section">
              <Typography className="tutor_profile__section__title">certificates</Typography>
              <Box className="tutor_profile__certificates__content">
                {profile.certificates.map((certificate, index) => (
                  <Chip
                    key={certificate.type}
                    label={certificate.type}
                    variant="outlined"
                    onClick={() => handleOpenCertificate(index)}
                    clickable
                  />
                ))}
              </Box>
            </Box>
          )}
          {/* REFERENCE */}
          <Box component="section" className="tutor_profile__reference tutor_profile__section">
            <Typography className="tutor_profile__section__title">Reference</Typography>
            <Typography className="tutor_profile__reference__description">
              {profile.source}
            </Typography>
          </Box>
          {/* OTHER PLATFORMS */}
          <Box
            component="section"
            className="tutor_profile__other_platforms tutor_profile__section"
          >
            <Typography className="tutor_profile__section__title">Other platforms</Typography>
            <FormGroup className="tutor_profile__other_platforms__content bd_grid">
              {Object.keys(profile.otherPlatforms).map((platform) => (
                <FormControlLabel
                  key={platform}
                  className="tutor_profile__other_platforms__data"
                  control={<Checkbox checked={profile.otherPlatforms[platform]} disabled />}
                  label={platform}
                />
              ))}
            </FormGroup>
          </Box>
          {/* APPROVE & DECLINE  */}
        </Box>
        <Box className="tutor_profile__main__right">
          {/* INTRODUCTION */}
          <Box component="section" className="tutor_profile__introduction tutor_profile__section">
            <Typography className="tutor_profile__section__title">Introduction</Typography>
            <Box>
              <Box
                component="video"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                controls
              >
                <source src={profile.videoIntroduction} type="video/mp4" />
              </Box>
            </Box>
          </Box>
          {/* TEACHING STYLE */}
          <Box component="section" className="tutor_profile__teaching_style tutor_profile__section">
            <Typography className="tutor_profile__section__title">Teaching style</Typography>
            <Typography className="tutor_profile__teaching_style__description">
              {profile.teachingStyles}
            </Typography>
          </Box>
          {/* DEMO LESSON */}
          <Box component="section" className="tutor_profile__demo_lesson tutor_profile__section">
            <Typography className="tutor_profile__section__title">Demo Lesson</Typography>
            <Box>
              <Box
                component="video"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                controls
              >
                <source src={profile.demoLesson} type="video/mp4" />
              </Box>
            </Box>
          </Box>
          {/* EDUCATION */}
          {profile.education.length > 0 && (
            <Box component="section" className="tutor_profile__education tutor_profile__section">
              <Typography className="tutor_profile__section__title">Education</Typography>
              <Box className="tutor_profile__education__container bd_grid">
                {profile.education.map((item, index) => (
                  <Box key={index} className="tutor_profile__education__content">
                    <Box>
                      <Typography className="tutor_profile__education__title">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="tutor_profile__education__data">
                      <Box className="tutor_profile__education__time">
                        <span className="tutor_profile__education__rounder" />
                        {index < profile.education.length - 1 && (
                          <span className="tutor_profile__education__line" />
                        )}
                      </Box>
                      <Box>
                        <Typography className="tutor_profile__education__tags">
                          {item.tags.join(' • ')}
                        </Typography>
                        <Typography className="tutor_profile__education__description">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          {/* EXPERIENCE */}
          {profile.experience.length > 0 && (
            <Box component="section" className="tutor_profile__experience tutor_profile__section">
              <Typography className="tutor_profile__section__title">experience</Typography>
              <Box className="tutor_profile__experience__container bd_grid">
                {profile.experience.map((item, index) => (
                  <Box key={index} className="tutor_profile__experience__content">
                    <Box>
                      <Typography className="tutor_profile__experience__title">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box className="tutor_profile__experience__data">
                      <Box className="tutor_profile__experience__time">
                        <span className="tutor_profile__experience__rounder" />
                        {index < profile.education.length - 1 && (
                          <span className="tutor_profile__experience__line" />
                        )}
                      </Box>
                      <Box>
                        <Typography className="tutor_profile__experience__tags">
                          {item.tags.join(' • ')}
                        </Typography>
                        <Typography className="tutor_profile__experience__description">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
