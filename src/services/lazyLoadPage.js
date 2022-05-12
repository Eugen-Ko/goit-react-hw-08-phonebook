import { PropTypes } from 'prop-types';
import { lazy } from 'react';

export const lazyLoadPage = componentName => {
  return lazy(async () => {
    const module = await import(`../pages/${componentName}`);
    return {
      ...module,
      default: module[componentName],
    };
  });
};

lazyLoadPage.propTypes = {
  componentName: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
