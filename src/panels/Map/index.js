import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder
} from '@vkontakte/vkui';

import Draggable from "react-draggable";
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import mapImage from '../../img/Mapsicle Map.png'
import './style.css'

const Home = ({id, go}) => (
  <Panel className={'Map'} id={id} centered>
    <Draggable bounds={{left: -430, right: 430, top: -818, bottom: 0}}>
      <img style={{cursor: 'grab'}} className={'Map__img'} src={mapImage}/>
    </Draggable>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Home;
