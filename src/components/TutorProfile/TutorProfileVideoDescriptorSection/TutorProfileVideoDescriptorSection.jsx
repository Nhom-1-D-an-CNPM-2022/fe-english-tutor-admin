import { Box, Typography } from '@mui/material';

export default function TutorProfileVideoDescriptorSection({ title, videoSrc }) {
  return (
    <Box component="section" className="tutor_profile__video_descriptor tutor_profile__section">
      <Typography className="tutor_profile__section__title">{title}</Typography>
      <Box>
        <Box
          component="video"
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: '5px',
            objectFit: 'contain',
          }}
          controls
        >
          <source src={videoSrc} type="video/mp4" />
        </Box>
      </Box>
    </Box>
  );
}
