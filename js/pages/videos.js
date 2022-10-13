
const videoUrls = [
  {
    "url": `https://www.youtube.com/embed/2ncl9ZZa50Q`,
    "description": "How To Hack (WIFI PASSWORD) PC In CMD With In 2 Minutes".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/aBRREpJT-Xs?list=PLjZw-n2drDsRuIlgUioO7rtT9LFBS-fXj`,
    "description": "How to Hack Wifi password".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/cCy5QotEpEs`,
    "description": "Far Cry 3 - Diamond Mission Gameplay".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/NfvodnrwZUc`,
    "description": "Call Of Duty Mobile Part 10 Its dlq33 is It Sniper".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/Fniuz4H0MuM?list=PLjZw-n2drDsStC7zv35TwZ-SO-jiq4e7H`,
    "description": "Call Of Duty Mobile - Its Locus Sniper With Inari Okami Lucky Draw".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/os_iFgy-968?list=PLjZw-n2drDsTsPFG0E5vjcZ3PHyOEwXrg`,
    "description": "FreeFire Prefect Para Samsung".toUpperCase()
  },
  {
    "url": `https://www.youtube.com/embed/bchujQtqSvQ?list=PLjZw-n2drDsTFJgJcUp_i7hnEfK8GRUZA`,
    "description": "FreeFire Clash Sqard In Bemudar".toUpperCase()
  },

  {
    "url": `https://www.youtube.com/embed/uUG8jdO_AAI`,
    "description": "Lets Capture Flag With AK 117 GLITCH Gun | COD".toUpperCase()
  }
]

let height = 200


const links = [

  `<iframe height="${height}" src="${videoUrls[0].url}" title="${videoUrls[0].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[1].url}" title="${videoUrls[1].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[2].url}" title="${videoUrls[2].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[3].url}" title="${videoUrls[3].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[4].url}" title="${videoUrls[4].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[5].url}" title="${videoUrls[5].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[6].url}" title="${videoUrls[6].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,

  `<iframe height="${height}" src="${videoUrls[7].url}" title="${videoUrls[7].description}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

]
async function vds() {
  for (let k = 0; k < 8; k++) {
    document.getElementById("videos").innerHTML += links[k]
  }
}
vds()

if (document.getElementById("videos").innerHTML != null) {
  console.log("videos defined".toUpperCase())
}