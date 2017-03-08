import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import HuskyTable from '../components/huskyTable/huskyTable';

function IndexPage() {
  return (
    <HuskyTable></HuskyTable>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
