import { Box, Typography } from '@mui/material';
import './TutorProfileTextDescriptorSection.scss';

export default function TutorProfileTextDescriptorSection({ title, description }) {
  return (
    <Box component="section" className="tutor_profile__text_descriptor tutor_profile__section">
      <Typography className="tutor_profile__section__title">{title}</Typography>
      <Typography className="tutor_profile__text_descriptor__description">{description}</Typography>
    </Box>
  );
}
