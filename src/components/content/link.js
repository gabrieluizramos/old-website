import React from 'react';

const targetExtraProps = {
    _blank: {
        rel: 'noopener noreferrer'
    }
};

export const Link = ({ href, target, children }) => (
    <a href={href} {...targetExtraProps[target]}>{children}</a>
);

export default Link;
