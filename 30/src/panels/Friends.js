import { Group, Panel, SimpleCell, Avatar, IconButton, PanelHeader, ScreenSpinner } from '@vkontakte/vkui'
import { Icon28RssFeedOutline } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

const renderingFriendsList = (friendsList) => {
    if (friendsList !== null) {
        return friendsList.users.map(user => {<SimpleCell before={<Avatar size={48} src={user.photo_200} />} after={<IconButton><Icon28RssFeedOutline /></IconButton>} description="Команда ВКонтакте">{user.first_name} {user.last_name}</SimpleCell>})
    } else {
        return (
            <ScreenSpinner />
        )
    }
}

const Friends = ({ id, go }) => {
    const [friendsData, setFriendsData] = useState(null)
    const [FriendsList, setFriendsList] = useState(renderingFriendsList(friendsData))
    useEffect(() => {
        const getFriends = async () => {
            const friends = await bridge.send("VKWebAppGetFriends", {});
            setFriendsData(friends)
            setFriendsList(renderingFriendsList(friends))
        }

        getFriends()
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader id="header">Вибраника</PanelHeader>
            <Group header={<Header mode="secondary">Список друзей</Header>}>
                <FriendsList />
            </Group>
        </Panel>
    )
}

Friends.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Friends
