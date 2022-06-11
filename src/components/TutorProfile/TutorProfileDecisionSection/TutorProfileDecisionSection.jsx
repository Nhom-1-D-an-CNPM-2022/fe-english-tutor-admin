import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function TutorProfileDecisionSection({ handleApproveProfile, handleRejectProfile }) {
  return (
    <Box component="section" className="tutor_profile__decision tutor_profile__section">
      <Typography className="tutor_profile__decision tutor_profile__section__title">
        Decision
      </Typography>
      <Box className="tutor_profile__decision__content">
        <Box>
          <button className="tutor_profile__button" onClick={() => handleApproveProfile()}>
            <CheckIcon /> Approve
          </button>
        </Box>
        <Box>
          <button className="tutor_profile__button" onClick={() => handleRejectProfile()}>
            <ClearIcon /> Reject
          </button>
        </Box>
      </Box>
    </Box>
  );
}
