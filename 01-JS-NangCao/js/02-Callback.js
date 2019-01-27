function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function downloadAvatar(url, onSuccess ){
    console.log('downloading avatar');
    // tải avatar
    await sleep(3000);
    // tải xong thì update
    console.log('Finish download');
    onSuccess()
}

function updateAvatar(){
    console.log('update avartar');
}

downloadAvatar('http://....',updateAvatar);