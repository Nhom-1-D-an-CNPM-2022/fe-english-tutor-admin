import React from 'react';
import './HeaderFooterLayout.scss';

export const HeaderFooterLayout = ({ nav, header, children, footer }) => {
  return (
    <div className="header-footer">
      <div className="nav-layout">{nav}</div>
      <div className="body-layout">
        <div className="header-layout">{header}</div>
        <div className="children-layout">{children}</div>
        <div className="footer-layout">{footer}</div>
      </div>
    </div>
  );
};
