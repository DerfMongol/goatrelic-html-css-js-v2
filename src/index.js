
import { allTimeList, sortCritics, newElement, createCritic, organizeCritics, critics, allTimeObj, allTime } from './js/functions'
import { sportTrophies } from './js/trophy'
import { debug } from 'util';

const sports = []
sports[0] = {
    name: 'nba',
    players: [
        'All Time',
        'Point Guard',
        'Center',
        'Power Forward',
        'Shooting Guard',
        'Small Forward'
        // 'Michael Jordan',
        // 'Kareem Abdul-Jabaar',
        // 'Lebron James',
        // 'Magic Johnson',
        // 'Wilt Chamberlain'
    ],
    files: [
        'nba',
        'nbaPg',
        'nbaC',
        'nbaPf',
        'nbaSg',
        'nbaSf'
        // 'jordan.html',
        // 'kareem.html',
        // 'lebron.html',
        // 'magic.html',
        // 'wilt.html'
    ]
}



sports[1] = {
    name: 'nhl',
    players: [
        'All Time',
        'Center',
        'Winger',
        'Defensemen',
        'Goalie'
        // 'Gordie Howe',
        // 'Wayne Gretzky',
        // 'Mario Lemieux',
        // 'Bobby Orr',
        // 'Maurice Richard'
    ],
    files: [
        'nhl',
        'nhlC',
        'nhlW',
        'nhlD',
        'nhlG'

        //     'gordie.html',
        //     'gretzky.html',
        //     'mario.html',
        //     'orr.html',
        //     'rocket.html',
        //     'russel.html'
    ]
}

sports[2] = {
    name: 'pga',
    players: [
        // 'Jack Nicklaus',
        // 'Tiger Woods'
    ]
    // files: [
    //     'jack.html',
    //     'tiger.html'
    // ]
}


const main = document.querySelector('main')
const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const selectNegativeButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobilePlayers = document.querySelector('.mobile-players')
const mainItems = document.querySelector('.main-items')

const titleFont = document.querySelectorAll('.titleFont')
const big = document.querySelectorAll('.big')
const head = document.querySelector('head')
const fontLink = newElement('link', null, null, head)

const topSix = document.querySelectorAll('#all-time .cats')
const alltime = document.querySelector('#list')
const menuFont = document.querySelectorAll('.menu-font')
const criticReview = document.querySelector('#critic-list')

fontLink.href = "https://fonts.googleapis.com/css?family=Vidaloka"
fontLink.rel = 'stylesheet'
for (let i = 0; i < titleFont.length; i++) {
    titleFont[i].style.fontFamily = 'Vidaloka, serif'
}
for (let i = 0; i < big.length; i++) {
    big[i].style.fontFamily = 'Vidaloka, serif'
}
    


sports.forEach((sport, index) => {
    const mainItem = newElement('li', 'main-item dropdown', null, mainItems)
    const title = newElement('a', 'dropbtn', sport.name.toUpperCase(), mainItem)

    const originHref = location.origin + '/' + sports[index].name
    title.href = originHref + '/index.html'

    // const dropContent = newElement('div', 'dropdown-content', null, mainItem)
    // const home = newElement('a', null, 'All Time', dropContent)
    // home.href = originHref + '/index.html'

    // sport.players.forEach((player, index1) => {
    //     const nextFile = newElement('a', null, player, dropContent)
    //     nextFile.href = originHref + '/players/' + sport.files[index1]


    // })

})

// const mainItem = newElement('li', 'main-item dropdown', null, mainItems)
// const userPick = newElement('a', 'dropbtn', 'Make Goat List', mainItem)
// userPick.href = location.origin + '/user/userList.html'

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}
if (selectNegativeButton) {
    selectNegativeButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobilePlayers.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    // mobilePlayers.classList.add('open');
})

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

const mobileItems = document.querySelector('.mobile-nav__items')
sports.forEach((sport, index) => {

    const mobileItem = newElement('li', 'mobile-nav__item', null, mobileItems)
    const sportName = newElement('a', null, sport.name.toUpperCase(), mobileItem)
    sportName.addEventListener('click', (e) => {
        const originHref = location.origin + '/' + sports[index].name
        sportName.href = originHref + '/index.html'
        // debugger
        // const deleteLinks = mobilePlayers.querySelectorAll('a')
        // const mobileItem = mobileItems.querySelectorAll('a')


        // for (let i = 0; i < deleteLinks.length; i++) {
        //     mobilePlayers.removeChild(deleteLinks[i])

        // }

        for (let i = 0; i < mobileItem.length; i++) {
            mobileItem[i].id = null
        }
        e.target.id = 'mobile-click'
        // sports.forEach((sport, index) => {


        //     if (e.target.textContent === sport.name.toUpperCase()) {

        //         const originHref = location.origin + '/' + sports[index].name
        //         const home = newElement('a', 'home-drop', 'Home', mobilePlayers)
        //         home.href = originHref + '/index.html'
        //         // sport.players.forEach((player, index1) => {
        //         //     const nextFile = newElement('a', 'mobile-player', player, mobilePlayers)
        //         //     nextFile.href = originHref + '/players/' + sport.files[index1]
        //         // })
        //     }
        // })

    })
    // debugger
    // if (location.pathname.includes(sport.name)) {
    //     sportName.id= 'mobile-click'
    //     const originHref = location.origin + '/' + sports[index].name
    //     const home = newElement('a', 'home-drop', 'Home', mobilePlayers)
    //     home.href = originHref + '/index.html'
    //     // sport.players.forEach((player, index1) => {
    //     //     const nextFile = newElement('a', 'mobile-player', player, mobilePlayers)
    //     //     nextFile.href = originHref + '/players/' + sport.files[index1]
    //     // })
    // }

})

const goat = document.querySelector('.goat')
goat.addEventListener('click', () => {
    window.location.href = location.origin + '/index.html'
})



for (let i = 0; i < sports.length; i++) {
    if (location.pathname.includes(sports[i].name) && !location.pathname.includes('players')) {
        const trophyCase = document.querySelector('.trophies')
        Object.keys(sportTrophies).forEach((sport) => {
            if (location.pathname.includes(sport)) {
                sportTrophies[sport].forEach((trophy) => {
                    const drpDwn = newElement('div', 'dropdown-trophy', null, trophyCase)
                    const image = newElement('img', null, null, drpDwn)
                    image.id = trophy.id
                    image.src = 'images/' + trophy.src
                    const description = newElement('div', 'description', null, drpDwn)
                    newElement('div', 'trophy-title', trophy.title, description)
                    const nav = newElement('nav', null, null, description)
                    const ul = newElement('ul', null, null, nav)
                    trophy.info.forEach((bullet) => {
                        newElement('li', null, bullet, ul)
                    })
                })
            }
        })
        Object.keys(critics).forEach((sport) => {
            if (location.pathname.includes(sport)) {
                organizeCritics(sport)
                sortCritics(critics[sport])
                createCritic(sport)
            }
        })





        const fullList = document.createElement('div')
        fullList.className = 'big min-max'
        fullList.style.fontFamily = 'Vidaloka, serif'
        alltime.appendChild(fullList)

        allTimeList(topSix, fullList)
        menuFont[0].classList.add('menu-font-extra')
        for (let i = 0; i < menuFont.length; i++) {
            let sportPosition = menuFont[i].textContent
            menuFont[i].addEventListener('click', (e) => {
                for (let index = 0; index < menuFont.length; index++) {
                    menuFont[index].classList.remove('menu-font-extra')
                }
                menuFont[i].classList.add('menu-font-extra')
                for (let index = 0; index < topSix.length; index++) {
                    const playDiv = topSix[index].querySelectorAll('div')
                    for (let index1 = 0; index1 < playDiv.length; index1++) {
                        if (index1 > 0) {
                            topSix[index].removeChild(playDiv[index1])
                        }

                    }
                }
                const criticProfile = document.querySelectorAll('.critic-profile')
                for (let index = 0; index < criticProfile.length; index++) {
                    criticReview.removeChild(criticProfile[index])
                }
                sports.forEach((sport) => {
                    if (location.pathname.includes(sport.name)) {
                        sport.players.forEach((player, index1) => {
                            if (sportPosition === player) {
                                positionLists(sportPosition, sport.files[index1])
                            }
                        })

                    }

                })
                allTimeList(topSix, fullList)
                // if (sportPosition === 'Point Guard') {
                //     positionLists(sportPosition, 'nbaPg')
                // }
                // if (sportPosition === 'All Time') {
                //     positionLists(sportPosition, 'nba')
                // }
                // if (sportPosition === 'Center') {
                //     positionLists(sportPosition, 'nbaC')
                // }
                // if (sportPosition === 'Power Forward') {
                //     positionLists(sportPosition, 'nbaPf')
                // }
                // if (sportPosition === 'Shooting Guard') {
                //     positionLists(sportPosition, 'nbaSg')
                // }
                // if (sportPosition === 'Small Forward') {
                //     positionLists(sportPosition, 'nbaSf')
                // }

                console.log(allTime)
            })
        }
        // const userInput = document.querySelector('.user-input')
        // const dropContent = document.querySelector('.dropdown-content')
        // userInput.addEventListener('input', (e) => {
        //     console.log(e.target.value)
        //     let size = e.target.value.length
        //     dropContent.innerHTML = ''
        //     if (e.target.value === '') {
        //         dropContent.style.display = 'none'
        //         dropContent.innerHTML = ''
        //     } else {
        //         console.log(size)
        //         // debugger
        //         for (let i = 0; i < allTime.length; i++) {
        //             let count = 0
        //             for (let j = 0; j < size; j++) {
        //                 if (allTime[i].name.length >= size) {
        //                     if (allTime[i].name[j].toLowerCase() === e.target.value[j].toLowerCase()) {
        //                         count++
        //                     }
        //                 }

        //             }
        //             if (count === size) {
        //                 const playerSearch = newElement('div', 'player-search', allTime[i].name, dropContent)
        //                 playerSearch.tabIndex = 0
        //                 playerSearch.addEventListener('click', (e) => {
        //                     userInput.value = allTime[i].name
        //                     let name = e.target.textContent
        //                     addPlayerToList(name)
        //                     userInput.value = ''
        //                     userInput.focus()
        //                     userInput.select()
        //                 })
        //                 playerSearch.addEventListener('keyup', (e) => {
        //                     e.preventDefault()
        //                     if (e.keyCode === 13) {
        //                         let name = e.target.textContent
        //                         addPlayerToList(name)
        //                         userInput.value = ''
        //                         userInput.focus()
        //                         userInput.select()
        //                     }
        //                 })
        //             }
        //         }
        //         dropContent.style.display = 'block'
        //     }
        // })
        // const addPlayers = document.querySelector('.add-players')
        // let count = 0
        // userInput.addEventListener('keyup', (e) => {
        //     e.preventDefault()
        //     if (e.keyCode === 13) {
        //         let name = e.target.value
        //         addPlayerToList(name)
        //         e.target.value = ''
        //     }
        // })

        // const addPlayerToList = (name) => {
        //     dropContent.innerHTML = ''
        //     dropContent.style.display = 'none'
        //     count = document.querySelectorAll('.row').length + 1
        //     const row = newElement('div', 'row', null, addPlayers)
        //     newElement('div', 'num', `${count}. `, row)
        //     // console.log(e.target)
        //     newElement('div', 'space', `${name}`, row)
        //     const deleteButton = newElement('button', 'delete-button', 'X', row)
        //     deleteButton.addEventListener('click', (h) => {
        //         console.log(h)
        //         addPlayers.removeChild(row)
        //         let allNums = document.querySelectorAll('.num')
        //         for (let k = 0; k < allNums.length; k++) {
        //             allNums[k].textContent = `${k + 1}.`
        //         }
        //     })
        // }
        const positionLists = (sportPosition, stringPos) => {

            Object.keys(critics).forEach((sport) => {
                if (sportPosition === 'All Time') {
                    document.querySelector('#stat-head').textContent = `Critics Top Players of All Time`
                } else {
                    document.querySelector('#stat-head').textContent = `Critics Top ${sportPosition}s of All Time`
                }

                if (sport === stringPos) {
                    allTimeObj(-1)
                    organizeCritics(sport)
                    sortCritics(critics[sport])
                    createCritic(sport)
                }
            })
        }

        // const minList = document.createElement('div')
        // minList.textContent = '-'
        // minList.className = 'big min-max'

        // fullList.addEventListener('click', () => {
        //     allTimeList(topSix)
        //     big.textContent = 'Critics Top Players of All Time'
        //     alltime.removeChild(fullList)
        //     alltime.appendChild(minList)
        // })

        // minList.addEventListener('click', () => {

        //     for (let index = 0; index < topSix.length; index++) {
        //         const playDiv = topSix[index].querySelectorAll('div')
        //         for (let index1 = 0; index1 < playDiv.length; index1++) {

        //             // debugger
        //             if (index1 > 10) {
        //                 topSix[index].removeChild(playDiv[index1])
        //             }
        //         }
        //     }
        //     big.textContent = 'Critics Top 10 Players of All Time'
        //     alltime.removeChild(minList)
        //     alltime.appendChild(fullList)
        // })
    }
}








