// ==UserScript==
// @name         tinyverse dermo
// @namespace    http://tampermonkey.net/
// @version      1
// @description  хазард уебище
// @author       анархия
// @match        https://app.tonverse.app/*
// @icon         https://avatars.fastly.steamstatic.com/ebd6dd7e90d02d5193e83bde0165326dfb84fab6_full.jpg
// @updateURL    https://github.com/LH-5/Jopa/raw/main/tinyverse%20dermo-1.user.js
// @downloadURL  https://github.com/LH-5/Jopa/raw/main/tinyverse%20dermo-1.user.js
// ==/UserScript==

setInterval(function()
            {
    document.querySelector("#ui-bottom > a:nth-child(2)").click()
}, 5000 + (Math.random() * 3000))


setTimeout(function()
            {
    document.querySelector("#space").remove()
}, 15000 + (Math.random() * 5000))
