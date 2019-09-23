/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { Content } from 'carbon-components-react';
import { Masthead, Footer } from '@carbon/ibmdotcom-react';

const { prefix } = settings;

/**
 * DotcomShell component
 *
 * @typedef {object} navigation Object containing navigation elements
 * @param {string} User content
 * @returns {*} DotcomShell component
 */
const DotcomShell = ({
  navigation,
  footerType,
  children,
  ...mastheadProps
}) => {
  return (
    <>
      <Masthead navigation={navigation} {...mastheadProps} />
      <div className={`${prefix}--grid ${prefix}--dotcom-shell`}>
        <Content className={`${prefix}--grid ${prefix}--dotcom-shell__content`}>
          {children}
        </Content>
      </div>
      <Footer type={footerType} />
    </>
  );
};

DotcomShell.propTypes = {
  /**
   * User content
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  navigation: PropTypes.object,
  footerType: PropTypes.string,
  mastheadProps: PropTypes.object,
};

export default DotcomShell;
