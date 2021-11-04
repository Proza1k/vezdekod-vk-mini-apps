import { Group, Panel, SimpleCell, Avatar, IconButton, View, ScreenSpinner } from '@vkontakte/vkui'
import { Icon28RssFeedOutline } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const renderingFriendsList = (friendsList) => {
    if (friendsList !== null) {
        return (
            <Group>
                {friendsList.users.map(user => {
                    <SimpleCell before={<Avatar size={48} src={user.photo_200} />} after={<IconButton><Icon28RssFeedOutline /></IconButton>} description="Команда ВКонтакте">{user.first_name} {user.last_name}</SimpleCell>
                })}
            </Group>
        )
    } else {
        return (
            <ScreenSpinner />
        )
    }
}

const FriendsList = () => {
    const [friendsData, setFriendsData] = useState(null)
    const [friendsList, setFriendsList] = useState(renderingFriendsList(friendsData))
    useEffect(() => {
        const getFriends = async () => {
            const friends = await bridge.send("VKWebAppGetFriends", {});
            setFriendsData(friends)
            setFriendsList(renderingFriendsList(friends))
        }

        getFriends()
    }, [])

    return (
        <View activePanel="header">
            <Panel id="header">Вибраника</Panel>
            {friendsList}
        </View>
    )
}

FriendsList.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default FriendsList
