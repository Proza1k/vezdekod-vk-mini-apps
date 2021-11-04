import { Group, Header, Panel, PanelHeaderBack, SimpleCell, Avatar, IconButton, PanelHeader, ScreenSpinner } from '@vkontakte/vkui'
import { Icon28RssFeedOutline } from '@vkontakte/icons';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const Friends = ({ id, friendsData, go }) => (
    <Panel id={id}>
        <PanelHeader id="header" left={<PanelHeaderBack onClick={go} data-to="home" />}>Вибраника</PanelHeader>
        <Group header={<Header mode="secondary">Список друзей</Header>}>
            {friendsData && friendsData.items.map(user => { <SimpleCell before={<Avatar size={48} src={user.photo_50} />} after={<IconButton><Icon28RssFeedOutline /></IconButton>} description="Команда ВКонтакте">{user.first_name} {user.last_name}</SimpleCell> })}
        </Group>
    </Panel>
)

Friends.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Friends
