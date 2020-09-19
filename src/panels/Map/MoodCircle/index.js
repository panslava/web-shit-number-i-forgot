import React from 'react';

import './style.css'
import { Caption } from "@vkontakte/vkui";

const MoodCircle = (props) => (

  <div className={`MoodCircle ${props.className}`}>
    <div className={'MoodCircle__type'}>
      <div style={{fontSize: '16px', lineHeight: '14px'}}>{props.type}</div>
    </div>
    <div className={'MoodCircle__circle'}>
      {props.icon}
    </div>
    <Caption level={'2'} className={'MoodCircle__caption'}>
      {props.name}
    </Caption>
  </div>
);

export default MoodCircle;
