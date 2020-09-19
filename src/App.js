import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Map from './panels/Map'
import Posts from './panels/Posts'
import Home from './panels/Home/index.js'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [currentSettings, setCurrentSettings] = useState({topic: 'Фото', mood: 'Спокойное настроение'})

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' go={go} currentSettings={currentSettings} setActivePanel={setActivePanel}/>
			<Map id='map' go={go} setCurrentSettings={setCurrentSettings} setActivePanel={setActivePanel}/>
			<Posts id='posts' go={go} currentSettings={currentSettings}/>
		</View>
	);
}

export default App;

