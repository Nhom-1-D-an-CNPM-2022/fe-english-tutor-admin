import React from 'react';
import './Sidebar.scss';

import { Link } from 'react-router-dom';
import { logout } from '../../../redux/slice/userSlice';
import { useDispatch } from 'react-redux';

export const Sidebar = () => {
  const clasName = 'sidebar';
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={`${clasName}__content`}>
        <nav className={`${clasName}__body`}>
          <ul className={`${clasName}__lists`}>
            <li className={`${clasName}__item`}>
              <Link to="/" className={`${clasName}__link ${clasName}__select`}>
                <i className="fa-solid fa-user-large"></i>
                <span className={`${clasName}__text`}>Quản lý tài khoản</span>
              </Link>
            </li>
            <li className={`${clasName}__item`}>
              <Link to="/" className={`${clasName}__link`}>
                <i className="fa-solid fa-circle-plus"></i>
                <span className={`${clasName}__text`}>Tạo tài khoản admin</span>
              </Link>
            </li>
            <li className={`${clasName}__item`}>
              <Link to="/" className={`${clasName}__link`}>
                <i className="fa-solid fa-a" />
                <span className={`${clasName}__text`}>Quản lý tài khoản admin</span>
              </Link>
            </li>
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
