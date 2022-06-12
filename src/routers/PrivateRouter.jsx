import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getInfo } from '../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const PrivateRouter = ({
  component: Component,
  layout: Layout,
  header: Header,
  footer: Footer,
  sidebar: Sidebar,
  page: Page,
  title,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isFetch, setIsFetch] = useState(false);
  const isAccount = useSelector((state) => state.authSlice.isAccount);

  useEffect(() => {
    const fetchInfo = async () => {
      const check = (await dispatch(getInfo())).payload;

      if (
        check === true ||
        check === false ||
        String(typeof check) === 'object' ||
        check === undefined
      ) {
        setIsFetch(true);
      }
    };

    fetchInfo();
    return;
  }, [location, dispatch]);

  const render = () => {
    if (isAccount === false) {
      return navigate('/login');
    }

    return isFetch === false ? (
      <CircularProgress color="secondary" />
    ) : isAccount ? (
      <Layout
        sidebar={<Sidebar />}
        header={<Header />}
        children={<Component />}
        footer={<Footer />}
        page={<Page title={title} />}
      />
    ) : (
      navigate('/')
    );
  };

  return render();
};
