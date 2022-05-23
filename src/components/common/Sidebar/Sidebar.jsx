import React from 'react';
import './Sidebar.scss';

import { Link } from 'react-router-dom';
import { logout } from '../../../redux/slice/userSlice';
import { updateNumber } from '../../../redux/slice/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const clasName = 'sidebar';
  const dispatch = useDispatch();
  const history = useNavigate();
  const number = useSelector((state) => state.sidebarSlice.number);
  const listTitle = [
    {
      title: 'Quản lý tài khoản',
      url: '/',
      icon: <i className="fa-solid fa-user-large"></i>,
    },
    {
      title: 'Quản lý gia sư',
      url: '/manage-tutor',
      icon: <i className="fa-solid fa-chalkboard-user"></i>,
    },
    {
      title: 'Tạo tài khoản admin',
      url: '/',
      icon: <i className="fa-solid fa-circle-plus"></i>,
    },
    {
      title: 'Quản lý tài khoản admin',
      url: '/',
      icon: <i className="fa-solid fa-a" />,
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = (index, url) => {
    dispatch(updateNumber({ number: index }));
    history(url);
  };

  return (
    <>
      <div className={`${clasName}__content`}>
        <nav className={`${clasName}__body`}>
          <ul className={`${clasName}__lists`}>
            {listTitle.length !== 0 &&
              listTitle.map((item, index) => {
                return (
                  <li className={`${clasName}__item`}>
                    <div
                      className={`${clasName}__link ${number === index ? 'sidebar__select' : ''}`}
                      onClick={() => handleClick(index, item.url)}
                    >
                      {item.icon}
                      <span className={`${clasName}__text`}>{item.title}</span>
                    </div>
                  </li>
                );
              })}
          </ul>

          <div className={`${clasName}__footer`}>
            <div className={`${clasName}__row`}>
              <div className={`${clasName}__func`}>
                <Link to="/" className={`${clasName}__link-wrap`}>
                  <i className="fa-solid fa-gear"></i>
                </Link>
              </div>
              <div className={`${clasName}__func`}>
                <Link to="/" className={`${clasName}__link-wrap`} onClick={handleLogout}>
                  <i className="fa-solid fa-power-off"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
