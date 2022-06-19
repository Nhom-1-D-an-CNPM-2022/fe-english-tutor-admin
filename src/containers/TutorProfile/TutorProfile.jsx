import { Box, Chip, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import tutorProfileApi from '../../services/tutorProfileApi';
import {
  TutorProfileBasicInfoSection,
  TutorProfileOtherPlatformsSection,
  TutorProfileTextDescriptorSection,
  TutorProfileVideoDescriptorSection,
  TutorProfileDecisionSection,
  TutorProfileDevelopmentDescriptorSection,
} from '../../components/TutorProfile';
import './TutorProfile.scss';

export function TutorProfile() {
  const [profile, setProfile] = useState();
  const [status, setStatus] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await tutorProfileApi.getProfile(id);
        setProfile(response.data);
        setStatus(response.data.status);
      } catch (error) {
        toast.error(error, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    fetchProfile();
  }, [id]);

  const handleOpenCertificate = (index) => {
    window.open(profile.certificates[index].url, '_blank');
  };

  const handleApproveProfile = async () => {
    const result = await tutorProfileApi.approveProfile(profile.userId._id);

    if (result.status === 200) {
      toast.success('Approve tutor profile successfully!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setStatus('approved');
    } else {
      toast.success('Approve tutor profile unsuccessfully!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleRejectProfile = async () => {
    const result = await tutorProfileApi.rejectProfile(profile.userId._id);

    if (result.status === 200) {
      toast.success('Reject tutor profile successfully!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setStatus('rejected');
    } else {
      toast.success('Reject tutor profile unsuccessfully!!!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return profile ? (
    <Box className="tutor_profile__container">
      <Box component="main" className="tutor_profile__main bd_container">
        <Box className="tutor_profile__main__left">
          {/* BASIC INFO */}
          <TutorProfileBasicInfoSection
            profilePictureSrc={profile.profilePicture}
            displayName={profile.displayName}
            hometown={profile.hometown}
            dateOfBirth={profile.dateOfBirth}
            email={profile.userId.email}
          />
          {/* ABOUT ME */}
          <TutorProfileTextDescriptorSection title="About me" description={profile.aboutMe} />
          {/* MOTIVATION */}
          <TutorProfileTextDescriptorSection title="Motivation" description={profile.motivation} />
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
          <TutorProfileTextDescriptorSection title="Reference" description={profile.source} />
          {/* OTHER PLATFORMS */}
          <TutorProfileOtherPlatformsSection data={profile.otherPlatforms} />
          {/* DECISION  */}
          {status === 'reviewed' && (
            <TutorProfileDecisionSection
              handleApproveProfile={handleApproveProfile}
              handleRejectProfile={handleRejectProfile}
            />
          )}
          {status === 'approved' && (
            <Box width="200px" marginX="auto">
              <img src="/assets/images/tutor-profile/approved-stamp.png" />
            </Box>
          )}
          {status === 'rejected' && (
            <Box width="200px" marginX="auto">
              <img src="/assets/images/tutor-profile/rejected-stamp.png" />
            </Box>
          )}
        </Box>
        <Box className="tutor_profile__main__right">
          {/* INTRODUCTION */}
          <TutorProfileVideoDescriptorSection
            title="Introduction"
            videoSrc={profile.videoIntroduction}
          />
          {/* TEACHING STYLE */}
          <TutorProfileTextDescriptorSection
            title="Teaching style"
            description={profile.teachingStyles}
          />
          {/* DEMO LESSON */}
          <TutorProfileVideoDescriptorSection title="Demo lesson" videoSrc={profile.demoLesson} />
          {/* EDUCATION */}
          {profile.education.length > 0 && (
            <TutorProfileDevelopmentDescriptorSection title="Education" data={profile.education} />
          )}
          {/* EXPERIENCE */}
          {profile.experience.length > 0 && (
            <TutorProfileDevelopmentDescriptorSection
              title="Experience"
              data={profile.experience}
            />
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
