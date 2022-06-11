import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import './TutorProfileOtherPlatformsSection.scss';

export default function TutorProfileOtherPlatformsSection({ data }) {
  return (
    <Box component="section" className="tutor_profile__other_platforms tutor_profile__section">
      <Typography className="tutor_profile__section__title">Other platforms</Typography>
      <FormGroup className="tutor_profile__other_platforms__content bd_grid">
        {Object.keys(data).map((platform) => (
          <FormControlLabel
            key={platform}
            className="tutor_profile__other_platforms__data"
            control={<Checkbox checked={data[platform]} disabled />}
            label={platform}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
