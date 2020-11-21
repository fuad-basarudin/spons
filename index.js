
const axios = require("axios")
const urls = ["https://fuad8.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Bos siap" + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
