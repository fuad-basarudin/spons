
const axios = require("axios")
const urls = ["https://hip-brainy-tiger.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Bos siap" + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
