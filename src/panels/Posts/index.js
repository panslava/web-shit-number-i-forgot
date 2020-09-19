import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder,
  PanelHeaderBack,
  Avatar,
  SimpleCell
} from '@vkontakte/vkui';

import AvatarPng from '../../img/Avatar.png'
import USAImage from '../../img/Rectangle 7.png'
import './style.css'
import {
  Icon20ViewOutline,
  Icon24CommentOutline,
  Icon24LikeOutline,
  Icon24ShareOutline,
  Icon24View
} from "@vkontakte/icons";

const Posts = ({id, go, currentSettings}) => (
  <Panel className={'Posts__Panel'} id={id}>
    <PanelHeader left={<PanelHeaderBack onClick={go} data-to='map'/>}>{currentSettings.topic}</PanelHeader>
    <div className={'Posts'}>
      <div className={'Post'}>
        <SimpleCell description={"Час назад • " + currentSettings.mood.toLowerCase()}
                    before={<Avatar size={44} src={AvatarPng}/>}><span
          style={{fontWeight: '500', fontSize: '15px'}}>Михаил</span></SimpleCell>
        <img style={{width: '100%', height: '320px', objectFit: 'cover'}} src={USAImage}/>
        <div style={{display: 'flex'}}>
          <span style={{display: 'flex', alignItems: 'center',color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24LikeOutline style={{marginRight: '4px'}}/>65</span>
          <span style={{display: 'flex', alignItems: 'center', color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24CommentOutline style={{marginRight: '4px'}}/>65</span>
          <span style={{display: 'flex', alignItems: 'center',color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24ShareOutline style={{marginRight: '4px'}}/>4</span>
          <span style={{flexGrow: '1'}}/>
          <span style={{display: 'flex', alignItems: 'center', color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24View size={20} style={{marginRight: '4px'}}/>7.2k</span>

        </div>
      </div>
      <div className={'Post'}>
        <SimpleCell description={"Час назад • " + currentSettings.mood.toLowerCase()}
                    before={<Avatar size={44} src={AvatarPng}/>}><span
          style={{fontWeight: '500', fontSize: '15px'}}>Михаил</span></SimpleCell>
        <img style={{width: '100%', height: '320px', objectFit: 'cover'}} src={USAImage}/>
        <div style={{display: 'flex'}}>
          <span style={{display: 'flex', alignItems: 'center',color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24LikeOutline style={{marginRight: '4px'}}/>65</span>
          <span style={{display: 'flex', alignItems: 'center', color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24CommentOutline style={{marginRight: '4px'}}/>65</span>
          <span style={{display: 'flex', alignItems: 'center',color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24ShareOutline style={{marginRight: '4px'}}/>4</span>
          <span style={{flexGrow: '1'}}/>
          <span style={{display: 'flex', alignItems: 'center', color: '#99A2AD', margin: '14px', fontWeight: '500'}}><Icon24View size={20} style={{marginRight: '4px'}}/>7.2k</span>

        </div>
      </div>
    </div>
  </Panel>
);

Posts.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Posts;
