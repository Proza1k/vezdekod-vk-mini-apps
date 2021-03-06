import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Friends from './panels/Friends';

const renderingFriendsList = (friendsList) => {
    if (friendsList !== null) {
        return (
            friendsList.users.map(user => {<SimpleCell before={<Avatar size={48} src={user.photo_200} />} after={<IconButton><Icon28RssFeedOutline /></IconButton>} description="Команда ВКонтакте">{user.first_name} {user.last_name}</SimpleCell>})
        )
    } else {
        return (
            <ScreenSpinner />
        )
    }
}

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [friendsData, setFriendsData] = useState(null)
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function getUser() {
			const userData = await bridge.send('VKWebAppGetUserInfo').then(async (user) => {
				setUser(user);
				setPopout(null);
				const friends = await bridge.send("VKWebAppCallAPIMethod", {"method": "friends.get", "params": {"v":"5.131", "access_token": "32f5043b32f5043b32f5043b6f328cf2e4332f532f5043b5376e588f7413606c42c0332", "user_id": user.id, "fields": "nickname,photo_50"}}).then((userFriends) => {
					setFriendsData(userFriends.response)
					console.log(userFriends.response)
				});
			});
		}

		getUser();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Friends id="friends-list" friendsData={friendsData} go={go} />
					<Persik id='persik' go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
