import { Group, Panel, SimpleCell, Avatar, IconButton, View } from '@vkontakte/vkui'
import { Icon28RssFeedOutline } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState(null)
    useEffect(() => {
        const getFriends = async () => {
            const friends = await bridge.send("VKWebAppGetFriends", {});
            setFriendsList(friends)
        }

        getFriends()
    }, [])

    return (
        <View activePanel="header">
            <Panel id="header">Вибраника</Panel>
            <Group>
                {friendsList.users.map(user => {
                    <SimpleCell before={<Avatar size={48} src={user.photo_200} />} after={<IconButton><Icon28RssFeedOutline /></IconButton>} description="Команда ВКонтакте">{user.first_name} {user.last_name}</SimpleCell>
                })}
            </Group>
        </View>
    )
}

FriendsList.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default FriendsList