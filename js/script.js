window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        list = document.getElementsByTagName('li');
    const hideTabContent = (e) => {
        for (let i = e; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide')
        }
    };
    hideTabContent(1)
    const showTabContent = (e) => {
        if (tabContent[e].classList.contains('hide')) {
            tabContent[e].classList.remove('hide');
            tabContent[e].classList.add('show')
        }
    };
    infoHeader.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i)
                    break;
                }
            }
        }
    })
    
})
