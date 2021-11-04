import bridge from '@vkontakte/vk-bridge'

export const getScannerQrVk = (): void => {
    bridge.send("VKWebAppOpenCodeReader").then((data) => console.log(data))
}