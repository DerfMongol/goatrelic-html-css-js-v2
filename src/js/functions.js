
import {nba} from '../nba/nba'
import {nhl} from '../nhl/nhl'
import {pga} from '../pga/pga'
import {nbaPg} from '../nba/pg'
import {nbaC} from '../nba/center'
import {nbaPf} from '../nba/pf'
import {nbaSg} from '../nba/sg'
import {nbaSf} from '../nba/sf'
import {nhlC} from '../nhl/nhlC'
import {nhlW} from '../nhl/nhlW'
import {nhlD} from '../nhl/nhlD'
import {nhlG} from '../nhl/nhlG'

const empty = []

const critics = {
    empty,
    nba,
    nhl,
    pga,
    nbaPg,
    nbaC,
    nbaPf,
    nbaSg,
    nbaSf,
    nhlC, 
    nhlW,
    nhlD,
    nhlG
}

let allTime = [{
    name: '',
    rank: 0,
    lists: 0,
    avg: 0,
    relic: 0
}]

const allTimeLength = () => {
    if (allTime[0].name === '') {
        return allTime.length - 1
    } else {
        return allTime.length
    }
}

const allTimeObj = (count) => {
    if (count === 0 && allTime[0].name != '') {
        allTime.push({
            name: '',
            rank: 0,
            lists: 0,
            avg: 0,
            relic: 0
        })
    }
    if (count === -1) {
        allTime = [{
            name: '',
            rank: 0,
            lists: 0,
            avg: 0,
            relic: 0
        }]
    }
}

const sortAllTime = () => {
    allTime.sort((a , b) => {
        if (a.relic > b.relic) {
            return -1
        }
        if (b.relic > a.relic) {
            return 1
        }
        else {
            return 0
        }
    })
}

const calculateStats = (hold, player, pIndex, critics) => {
    allTime[hold].name = player
    allTime[hold].rank += (pIndex + 1)
    allTime[hold].lists++
    allTime[hold].avg = allTime[hold].rank / allTime[hold].lists
    allTime[hold].relic = ((allTime[hold].lists / critics.length) * 100) / allTime[hold].avg
}

const newElement = (type, classname, text, father) => {
    const element = document.createElement(type)
    element.className = classname
    element.textContent = text
    father.appendChild(element)
    return element
}

let maxList = 0
const allTimeList = (topSix, fullList) => {
    fullList.textContent = `(${allTime.length})`
    for (let index = 0; index < topSix.length; index++) {
        allTime.forEach((player, index1) => {
            // let bar = true
            // // debugger
            // if (foo === 1) {
            //     bar = index1 > 9
            // } else {
            //     bar = index1 < 10
            // }
            // if (bar) {
                
                const topElement = document.createElement('div')
                topElement.className = 'player-list'
                if (index === 0) {
                    let x = 1
                    if (index1 > 0) {
                        while (player.avg === allTime[index1 - x].avg) {
                            x++
                        }
                    } else {
                        // debugger
                        maxList = player.lists
                    }
                    if (x !== 1) {
                        topElement.textContent = (index1 - x + 2) + '.'
                    } else {
                        topElement.textContent = (index1 + 1) + '.'
                    }

                }
                if (index === 1) {
                    topElement.textContent = player.name
                }
                if (index === 2) {
                    topElement.textContent = (player.lists / maxList * 100).toFixed(2) + '%'
                }
                if (index === 3) {
                    topElement.textContent = player.avg.toFixed(2)
                }
                topSix[index].appendChild(topElement)
            // }
        })
    }
}

const sortCritics = (critics) => {
    critics.sort((a, b) => {
        if (a.players.length > b.players.length) {
            return -1
        }
        if (b.players.length > a.players.length) {
            return 1
        }
        else {
            return 0
        }
    })
}

const organizeCritics = (sport) => {
       
            critics[sport].forEach((critic, index) => {
                critic.players.forEach((player, pIndex) => {
                    let hold = allTimeLength()
                    let count = 0
                    allTime.forEach((member, mIndex) => {
                        if (member.name === player) {
                            hold = mIndex
                            count++
                        }
                    })
                    allTimeObj(count)
                    calculateStats(hold, player, pIndex, critics[sport])
                })
                if (index > 0) {
                    sortAllTime()
                }
            })
}

const createCritic = (sport) => {
    const criticList = document.querySelector('#critic-list')
    const criticTitle = document.querySelector('.review')
        critics[sport].forEach((critic) => {
            criticTitle.textContent = 'Critics (' + critics[sport].length + ')'
            const profile = newElement('div', 'critic-profile', null, criticList)
            newElement('div', 'pic ' + critic.pic, null, profile)
            newElement('div', 'critic-name', critic.name, profile)
            newElement('div', 'info', critic.job, profile)
            for (let index = 0; index < 10; index++) {
                if (index > critic.players.length - 1) {
                    break
                }
                newElement('div', 'goat-stats', index + 1 + '.' + '  ' + critic.players[index], profile)
                if (index == 9 && critic.players.length > 10) {
                    newElement('div', 'goat-stats', '...', profile)
                    newElement('div', 'goat-stats', '( ' + critic.players.length + ' )', profile)
                }
            }
        
            const criticFoot = newElement('div', 'foot-info', critic.date, profile)
            const criticLink = newElement('a', null, 'View Source', criticFoot)
            criticLink.id = 'web-link'
            criticLink.href = critic.url
        })
        
}


export {newElement, allTimeList, sortCritics, organizeCritics, createCritic, critics, allTimeObj, allTime}





