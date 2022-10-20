import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://mail.google.com/a/avla.com/?view=cm&fs=1&to=gestionriesgos@avla.com">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;