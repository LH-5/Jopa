// ==UserScript==
// @name         tinyverse dermo
// @namespace    http://tampermonkey.net/
// @version      1
// @description  хазард уебище
// @author       анархия
// @match        https://app.tonverse.app/*
// @icon         https://avatars.fastly.steamstatic.com/ebd6dd7e90d02d5193e83bde0165326dfb84fab6_full.jpg
// @grant        none
// ==/UserScript==

setInterval(function()
            {
    document.querySelector("#ui-bottom > a:nth-child(2)").click()
}, 500000 + (Math.random() * 300000))


setTimeout(function()
            {
    document.querySelector("#space").remove()
}, 15000 + (Math.random() * 5000))