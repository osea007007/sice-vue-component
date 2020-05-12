// 通知react native
export function sendMessage(data) {
    // if (process.env.NODE_ENV !== 'production') {
    //     // eslint-disable-next-line no-console
    //     console.log(JSON.stringify(data));
    // }
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(data));
}