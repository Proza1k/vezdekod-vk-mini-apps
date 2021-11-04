import React from 'react';
import bridge from '@vkontakte/vk-bridge';

import cx from 'classnames'
import css from './App.module.scss'

import { Button } from './components/Button/Button'
import { ReactComponent as IconsQr } from './components/Icons/qr.svg'
import { getScannerQrVk } from './helpers/bridge.helper'

const App = () => {
  bridge.subscribe((e) => console.log(e));
  bridge.send("VKWebAppInit", {});

  const getVkStorage = () => {
    bridge.send("VKWebAppStorageGetKeys", {"count": 20, "offset": 0}).then((data) => console.log(data))
  }

  return (
    <div className={cx(css.app)}>
      <Button className={cx(css.qr_button)} onClick={getVkStorage}><IconsQr /></Button>
    </div>
  );
}

export default App
