import React from 'react';
import classnames from 'classnames';
import { Button, Row, RunIcon } from '../../components';
import List from '../../components/List/List';

import './Tools.css';

function Tools() {
  return (
    <div className="tools">
      <List>
        <Row type="large" className='tools-row'>
          <p className={classnames('bold-text', 'disabled-text')}>Name verification (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled/>
          </Button>
        </Row>
        <Row type="large" className='tools-row'>
          <p className={classnames('bold-text', 'disabled-text')}>Duplication check (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled />
          </Button>
        </Row>
      </List>
    </div>
  );
}

export default Tools;
