import React from "react";
import { ReactComponent as IconsQr } from "../../components/Icons/qr.svg";
import { Button } from "../../components/Button/Button";

import cx from "classnames";
import css from "./Home.module.scss";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import bridge, { CodeReaderOutput } from "@vkontakte/vk-bridge";

class HomePage extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = []
  }

  tick() {
    bridge.send("VKWebAppStorageGet", { "keys": ["QR_DATA"]}).then((data) => {
        this.setState({state: data})
    })
  }

  getScannerQrVk = async (): Promise<void> => {
    await bridge
      .send("VKWebAppOpenCodeReader")
      .then(async (data: CodeReaderOutput) => {
        await bridge.send("VKWebAppStorageSet", {
          key: "QR_DATA",
          value: data.code_data,
        });
      });
  };

  render() {
    return (
      <div id="home">
        <Header>
          <Button className={cx(css.qr_button)} onClick={this.getScannerQrVk}>
            <IconsQr />
          </Button>
        </Header>
        <div className={cx(css.home_body)}>
          <Container>
              {this.state}
          </Container>
        </div>
      </div>
    );
  }
}

export default HomePage