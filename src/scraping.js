const request = require('request')

request('https://www.slamonline.com/nba/slams-top-100-players-of-all-time-list-no-100-51/', (err, res, body)=> {
    const website = DOMParser().parseFromString(body, 'text/html')
     
    const strong = website.querySelector('.strong')
    console.log(strong)
})