// ==UserScript==
// @name         HotClaim
// @namespace    Tampermonkey
// @version      1
// @description  Claim Hot
// @match        https://tgapp.herewallet.app/*
// @icon         https://github.com/LH-5/Jopa/raw/main/Hot.jpg
// @updateURL    https://github.com/LH-5/Jopa/raw/main/HotClaim-1.user.js
// @downloadURL  https://github.com/LH-5/Jopa/raw/main/HotClaim-1.user.js
// ==/UserScript==

(function() {
    'use strict';

    function ClickElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.click();
        }
    }

    function ClickStorage() {
        const StorageButtonSelector = 'h4.sc-elDIKY.gsWjgi';
        ClickElement(StorageButtonSelector);
    }

    function ClaimHot() {
        const ClaimButtonSelector = 'button.sc-fLVwEd.hsStJj';
        const claimButton = document.querySelector(ClaimButtonSelector);

        if (claimButton && claimButton.textContent.trim() === 'Новости') {
            claimButton.click();

            setTimeout(() => {
                claimButton.click();
            }, 4000);
        }
        else {
            claimButton.click();
        }
    }
    window.addEventListener('load', () => {
        ClickStorage();
        setTimeout(() => {
            ClaimHot();
        }, 2000);
    });

})();

