import React from 'react';
import './PageBreadcrumb.scss';

import { Link } from 'react-router-dom';

export const PageBreadcrumb = ({ title }) => {
  const className = 'page-breadcrumb';

  return (
    <div className={className}>
      <div className={`${className}__col`}>
        <h3 className={`${className}__title`}>{title}</h3>
        <div className={`${className}__content`}>
          <nav>
            <ol className={`${className}__breadcrumb`}>
              <li className={`${className}__item`}>
                <Link to="/" className={`${className}__link`}>
                  Trang chủ
                </Link>
              </li>
              <li className={`${className}__link ${className}__active`}>{title}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};
