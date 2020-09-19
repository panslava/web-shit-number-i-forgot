import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder,
  Div,
  Search, Card
} from '@vkontakte/vkui';

import Draggable from "react-draggable";
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';
import ScrollContainer from 'react-indiana-drag-scroll'
import MoodCircle from './MoodCircle'

import mapImage from '../../img/Mapsicle Map.png'
import './style.css'
import { Icon12Dropdown } from "@vkontakte/icons";

const Map = ({id, go, setCurrentSettings, setActivePanel}) => {
    const scrollContainer = useRef(null);
    const [topPosition, setTopPosition] = useState(0)
    const [leftPosition, setLeftPosition] = useState(0)
    const [isSmilesShown, setIsSmilesShown] = useState(true)
    useEffect(() => {

      setTimeout(() => {
        scrollContainer.current.getElement().scrollTo(1640 / 2 - window.innerWidth / 2, 1640 / 2 - (window.innerHeight - 80) / 2)
      }, 500)

    }, [scrollContainer.current]);


    const getMoodText = () => {
      if (scrollContainer && scrollContainer.current) {
        const element = scrollContainer.current.getElement()
        const containerHeight = element.scrollHeight
        const containerWidth = element.scrollWidth

        const windowHeight = window.innerHeight
        const windowWidth = window.innerWidth

        if (topPosition > (containerHeight - windowHeight) / 2) {
          if (leftPosition > (containerWidth - windowWidth) / 2) {
            return ['😌', 'Спокойное настроение']
          }
          else {
            return ['😴', 'Уставшее настроение']
          }
        }
        else {
          if (leftPosition > (containerWidth - windowWidth) / 2) {
            return ['😌', 'Энергетичное настроение']
          }
          else {
            return ['😐', 'Серьезное настроение']
          }
        }
      }
      else {
        return ['', '']
      }
    }

    const [currentSmile, currentText] = getMoodText()



    const throttle = (func, ms) => {

      let isThrottled = false,
        savedArgs,
        savedThis;

      function wrapper() {

        if (isThrottled) { // (2)
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
          isThrottled = false; // (3)
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
          }
        }, ms);
      }

      return wrapper;
    }


    const handleScroll = (event) => {
      setIsSmilesShown(false)
      setLeftPosition(scrollContainer.current.getElement().scrollLeft)
      setTopPosition(scrollContainer.current.getElement().scrollTop)
    }

    const handleClick = (event) => {
      // setIsSmilesShown(true)
    }

    const handleEndScroll = (event) => {
      // setIsSmilesShown(true)
    }

    const getGoFunction = (topicName) => {
      return function(event) {
        event.preventDefault()
        setCurrentSettings((prevSettings) => ({...prevSettings, topic: topicName, mood: getMoodText()[1]}))
        setActivePanel('posts')
      }
    }


    return <Panel id={id}>
      <Div className={'Map__Overlay'}>
        <ScrollContainer onEndScroll={handleEndScroll} onClick={handleClick} ref={scrollContainer} onScroll={handleScroll}
                         className={'Map__imgContainer'}>
          <div className={'Map__coordinates'}
               style={isSmilesShown ? {left: '0', top: '45%'} : {left: '-10%', top: '45%'}}>
            🙁
          </div>


          <div className={'Map__coordinates'}
               style={isSmilesShown ? {right: '0', top: '45%'} : {right: '-10%', top: '45%'}}>
            😃
          </div>

          <div className={'Map__coordinates'}
               style={isSmilesShown ? {top: '0', left: '50%', transform: 'translate(-50%, 0)'} : {
                 top: '-10%',
                 left: '50%',
                 transform: 'translate(-50%, 0)'
               }}>
            😜
          </div>

          <div className={'Map__coordinates'}
               style={isSmilesShown ? {bottom: '150px', left: '50%', transform: 'translate(-50%, 0)'} : {
                 bottom: '0',
                 left: '50%',
                 transform: 'translate(-50%, 0)'
               }}>
            😴
          </div>

          {!isSmilesShown &&
          <div className={'Map__current_mood'}><span style={{fontSize: '16px', marginRight: '8px'}}>{currentSmile}</span><span>{currentText}</span><Icon12Dropdown style={{color: '#2975CC', marginLeft: '6px'}}/></div>}
          <Div className='Map__Div'>
            <img className={'Map__img'} src={mapImage}/>


            <div onClick={getGoFunction('Карантин')} className={'Map__circle Map__circle_large Map__circle_carantine'}>
              <div className={'Map__circle__smile'}>
                😷
              </div>
              <div className={'Map__circle__text'}>
                Карантин
              </div>

            </div>

            <div onClick={getGoFunction('IT')} className={'Map__circle Map__circle_medium Map__circle_IT'}>
              <div className={'Map__circle__smile'}>
                💻
              </div>
              <div className={'Map__circle__text'}>
                IT
              </div>

            </div>

            <div onClick={getGoFunction('Музыка')} className={'Map__circle Map__circle_medium'} style={{top: '42%', left: '1180px'}}>
              <div className={'Map__circle__smile'}>
                ️🎧️️
              </div>
              <div className={'Map__circle__text'}>
                Музыка
              </div>

            </div>

            <div onClick={getGoFunction('Игры')} className={'Map__circle Map__circle_medium'} style={{top: '27%', left: '1100px'}}>
              <div className={'Map__circle__smile'}>
                ️🕹
              </div>
              <div className={'Map__circle__text'}>
                Игры
              </div>

            </div>

            <div onClick={getGoFunction('Авто')} className={'Map__circle Map__circle_small'} style={{top: '39%', left: '800px'}}>
              <div className={'Map__circle__smile'}>
                🚗
              </div>
            </div>

            <div onClick={getGoFunction('Юмор')} className={'Map__circle Map__circle_large'} style={{top: '25%', left: '950px'}}>
              <div className={'Map__circle__smile'}>
                🎭
              </div>
              <div className={'Map__circle__text'}>
                Юмор
              </div>

            </div>

            <div onClick={getGoFunction('Кино')} className={'Map__circle Map__circle_large'} style={{top: '39%', left: '1030px'}}>
              <div className={'Map__circle__smile'}>
                🍿
              </div>
              <div className={'Map__circle__text'}>
                Кино
              </div>

            </div>


            <div onClick={getGoFunction('Фото')} className={'Map__circle Map__circle_large'} style={{top: '55%', left: '950px'}}>
              <div className={'Map__circle__smile'}>
                📷
              </div>
              <div className={'Map__circle__text'}>
                Фото
              </div>

            </div>

            <div onClick={getGoFunction('Искусство')} className={'Map__circle Map__circle_large'} style={{top: '63%', left: '1030px'}}>
              <div className={'Map__circle__smile'}>
                🎨
              </div>
              <div className={'Map__circle__text'}>
                Искусство
              </div>

            </div>
          </Div>

        </ScrollContainer>
      </Div>

      <Card mode="shadow" className={'Content__overlay'}>

        <Search placeholder={'Поиск по теме и настроению'}/>
        <Div className={'Map__MoodCircles'}>
          <MoodCircle type={'😃'} icon='🎧' name={'Музыка'}/>
          <MoodCircle type={'😃'} icon='🍿' name={'Фильмы'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😌'} icon='🍂' name={'Осень'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😜'} icon='👔' name={'Работа'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😐'} icon='😷' name={'Карантин'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😐'} icon='💻' name={'IT'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😃'} icon='🚗' name={'Авто'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😜'} icon='🕹️' name={'Игры'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😌'} icon='🎨' name={'Искусство'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😜'} icon='🎭' name={'Юмор'} className={'Map__MoodCircle'}/>
          <MoodCircle type={'😌'} icon='📷' name={'Фотографии'} className={'Map__MoodCircle'}/>
        </Div>
      </Card>
    </Panel>
  }
;

Map.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Map;
