// Skeleton Component
// --------------------------------------------------------

import React from 'react';
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

// styles
import './styles.scss';

const Skeleton = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="a-placeholder">
          <RectShape />
        </div>
        <div className="a-placeholder">
          <RectShape />
        </div>
        <div className="a-placeholder">
          <RectShape />
        </div>
        <div className="a-placeholder">
          <RectShape />
        </div>
        <div className="a-placeholder">
          <RectShape />
        </div>
      </div>
    </div>
  </>
);
export default Skeleton;
