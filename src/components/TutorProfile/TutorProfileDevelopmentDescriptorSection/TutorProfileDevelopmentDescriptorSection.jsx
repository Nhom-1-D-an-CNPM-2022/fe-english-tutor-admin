import { Box, Typography } from '@mui/material';
import './TutorProfileDevelopmentDescriptorSection.scss';

export default function TutorProfileDevelopmentDescriptorSection({ title, data }) {
  return (
    <Box component="section" className="tutor_profile__development tutor_profile__section">
      <Typography className="tutor_profile__section__title">{title}</Typography>
      <Box className="tutor_profile__development__container bd_grid">
        {data.map((item, index) => (
          <Box key={index} className="tutor_profile__development__content">
            <Box>
              <Typography className="tutor_profile__development__title">{item.title}</Typography>
            </Box>
            <Box className="tutor_profile__development__data">
              <Box className="tutor_profile__development__time">
                <span className="tutor_profile__development__rounder" />
                {index < data.length - 1 && <span className="tutor_profile__development__line" />}
              </Box>
              <Box>
                <Typography className="tutor_profile__development__tags">
                  {item.tags.join(' • ')}
                </Typography>
                <Typography className="tutor_profile__development__description">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
