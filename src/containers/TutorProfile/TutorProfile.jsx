import { Box, Checkbox, Chip, FormControlLabel, FormGroup, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CakeIcon from '@mui/icons-material/Cake';
import './TutorProfile.scss';

export function TutorProfile() {
  return (
    <Box className="tutor_profile__container">
      <Box component="main" className="tutor_profile__main bd_container">
        <Box className="tutor_profile__main__left">
          {/* HOME */}
          <Box component="section" className="tutor_profile__home">
            <Box className="tutor_profile__home__container tutor_profile__section bd_grid">
              <Box className="tutor_profile__home__data bd_grid">
                <img
                  src="https://mui.com/static/images/cards/paella.jpg"
                  alt=""
                  className="tutor_profile__home__img"
                />
                <Typography className="tutor_profile__home__title">
                  SMITH <b>MATHEW</b>
                </Typography>
              </Box>

              <Box className="tutor_profile__home__address bd_grid">
                <span className="tutor_profile__home__information">
                  <LocationOnIcon className="tutor_profile__home__information__icon" /> a
                </span>
                <span className="tutor_profile__home__information">
                  <CakeIcon className="tutor_profile__home__information__icon" /> c
                </span>
                <span className="tutor_profile__home__information">
                  <MailIcon className="tutor_profile__home__information__icon" /> b
                </span>
              </Box>
            </Box>
          </Box>
          {/* ABOUT ME */}
          <Box component="section" className="tutor_profile__about_me tutor_profile__section">
            <Typography className="tutor_profile__section__title">About me</Typography>
            <Typography className="tutor_profile__about_me__description">abcd</Typography>
          </Box>
          {/* MOTIVATION */}
          <Box component="section" className="tutor_profile__motivation tutor_profile__section">
            <Typography className="tutor_profile__section__title">Motivation</Typography>
            <Typography className="tutor_profile__motivation__description">abcd</Typography>
          </Box>
          {/* LANGUAGES */}
          <Box component="section" className="tutor_profile__languages tutor_profile__section">
            <Typography className="tutor_profile__section__title">Languages</Typography>
            <Box className="tutor_profile__languages__content">
              <Chip label="Chip" />
              <Chip label="Chip" />
              <Chip label="Chip" />
              <Chip label="Chip Outlined" />
            </Box>
          </Box>
          {/* CERTIFICATES */}
          <Box component="section" className="tutor_profile__certificates tutor_profile__section">
            <Typography className="tutor_profile__section__title">certificates</Typography>
            <Box className="tutor_profile__certificates__content">
              <ul className="tutor_profile__certificates__data bd_grid">
                <li className="tutor_profile__certificates__name">
                  <span className="tutor_profile__certificates__circle" />
                  <a href="/">Other</a>
                </li>
                <li className="tutor_profile__certificates__name">
                  <span className="tutor_profile__certificates__circle" />
                  <a href="/">TEFL</a>
                </li>
                <li className="tutor_profile__certificates__name">
                  <span className="tutor_profile__certificates__circle" />
                  <a href="/">TYLEC</a>
                </li>
                <li className="tutor_profile__certificates__name">
                  <span className="tutor_profile__certificates__circle" />
                  <a href="/">TESL</a>
                </li>
                <li className="tutor_profile__certificates__name">
                  <span className="tutor_profile__certificates__circle" />
                  <a href="/">IBET</a>
                </li>
              </ul>
            </Box>
          </Box>
          <Box component="section" className="tutor_profile__reference tutor_profile__section">
            <Typography className="tutor_profile__section__title">Reference</Typography>
            <Typography className="tutor_profile__reference__description">abcd</Typography>
          </Box>
          <Box
            component="section"
            className="tutor_profile__other_platforms tutor_profile__section"
          >
            <Typography className="tutor_profile__section__title">Other platforms</Typography>
            <FormGroup className="tutor_profile__other_platforms__content bd_grid">
              <FormControlLabel
                className="tutor_profile__other_platforms__data"
                disabled
                control={<Checkbox defaultChecked />}
                label="VIPKid"
              />
              <FormControlLabel
                className="tutor_profile__other_platforms__data"
                disabled
                control={<Checkbox />}
                label="GoGokid"
              />
              <FormControlLabel
                className="tutor_profile__other_platforms__data"
                disabled
                control={<Checkbox defaultChecked />}
                label="ByteDance"
              />
              <FormControlLabel
                className="tutor_profile__other_platforms__data"
                disabled
                control={<Checkbox />}
                label="Other"
              />
            </FormGroup>
          </Box>
        </Box>
        {/* INTRODUCTION */}
        <Box className="tutor_profile__main__right">
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
                <source
                  src="https://res.cloudinary.com/djanbxthf/video/upload/v1653634359/debeef9f-c0c0-4c3d-b21e-fef4ee56082b.mp4"
                  type="video/mp4"
                />
              </Box>
            </Box>
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
                <source
                  src="https://res.cloudinary.com/djanbxthf/video/upload/v1653634359/debeef9f-c0c0-4c3d-b21e-fef4ee56082b.mp4"
                  type="video/mp4"
                />
              </Box>
            </Box>
          </Box>
          {/* EDUCATION */}
          <Box component="section" className="tutor_profile__education tutor_profile__section">
            <Typography className="tutor_profile__section__title">Education</Typography>
            <Box className="tutor_profile__education__container bd_grid">
              <Box className="tutor_profile__education__content">
                <Box>
                  <Typography className="tutor_profile__education__title">A</Typography>
                </Box>

                <Box className="tutor_profile__education__data">
                  <Box className="tutor_profile__education__time">
                    <span className="tutor_profile__education__rounder" />
                    <span className="tutor_profile__education__line" />
                  </Box>
                  <Box>
                    <Typography className="tutor_profile__education__tags">A &bull; B</Typography>
                    <Typography className="tutor_profile__education__description">abcd</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="tutor_profile__education__content">
                <Box>
                  <Typography className="tutor_profile__education__title">A</Typography>
                </Box>

                <Box className="tutor_profile__education__data">
                  <Box className="tutor_profile__education__time">
                    <span className="tutor_profile__education__rounder" />
                  </Box>
                  <Box>
                    <Typography className="tutor_profile__education__tags">A &bull; B</Typography>
                    <Typography className="tutor_profile__education__description">abcd</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* EXPERIENCE */}
          <Box component="section" className="tutor_profile__experience tutor_profile__section">
            <Typography className="tutor_profile__section__title">experience</Typography>
            <Box className="tutor_profile__experience__container bd_grid">
              <Box className="tutor_profile__experience__content">
                <Box>
                  <Typography className="tutor_profile__experience__title">A</Typography>
                </Box>

                <Box className="tutor_profile__experience__data">
                  <Box className="tutor_profile__experience__time">
                    <span className="tutor_profile__experience__rounder" />
                    <span className="tutor_profile__experience__line" />
                  </Box>
                  <Box>
                    <Typography className="tutor_profile__experience__tags">A &bull; B</Typography>
                    <Typography className="tutor_profile__experience__description">abcd</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="tutor_profile__experience__content">
                <Box>
                  <Typography className="tutor_profile__experience__title">A</Typography>
                </Box>

                <Box className="tutor_profile__experience__data">
                  <Box className="tutor_profile__experience__time">
                    <span className="tutor_profile__experience__rounder" />
                  </Box>
                  <Box>
                    <Typography className="tutor_profile__experience__tags">A &bull; B</Typography>
                    <Typography className="tutor_profile__experience__description">abcd</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
