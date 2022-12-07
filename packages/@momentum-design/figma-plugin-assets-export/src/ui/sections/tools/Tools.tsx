import React from 'react';
import classnames from 'classnames';
import { Button, Row, RunIcon } from '../../components';
import List from '../../components/List/List';

import './Tools.css';

function Tools() {
  return (
    <div className="tools">
      <List>
        <Row className="larger-row">
          <p className="bold-text">Name verification</p>
          <Button className="right-aligned-button">
            <RunIcon />
          </Button>
        </Row>
        <Row className="larger-row">
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
