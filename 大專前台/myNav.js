var category = [["全部商品"]
    ,
["飾品",
    "戒指",
    "耳環",
    "項鍊"]
    ,
["生活小品",
    "戶外野餐露營專區",
    "外出野餐",
    "隨身3C",
    "雨傘雨具",
    "外出收納"]
    ,
["家居"],
["3C"],
["動漫周邊",
    "C8763"]];

let cat = [
    {
        tab: "全部商品",

    },
    {
        tab: "",
        list: ["", ""]
    },
    {
        tab: "",
        list: ["", ""]
    },
    {
        tab: "",
        list: ["", ""]
    }
]

// var category = [["現貨速達"], ["標題", "細項"], ["標題", "細項", "細項", "細項", "細項"]];
// $.each(category, (index, item) => {
//     if (item.length == 1) {
//         $('#nav').append(`<li id="nav${index}" class="level0 parent drop-menu"><a href="index.html" class="level-top"><span>${item[0]}</span></a></li>`)
//     } else {
//         $.each(item, (index1, item1) => {
//             if (index1 == 0) {
//                 $('#nav').append(`<li id="nav${index}" class="level0 parent drop-menu"><a href="index.html" class="level-top"><span>${item1}</span></a></li>`)
//                 $(`#nav${index}`).append(`<ul class="level1"></ul>`)
//             } else {
//                 $(`#nav${index}>ul`).append(`<li class="level2 first"><a href="grid.html"><span>${item1}</span></a></li>`)
//             }
//         })
//     }
// })
$.each(category, (index, item) => {
    if (item.length == 1) {
        $('#nav').append(`<li id="nav${index}" class="level0 parent drop-menu"><a href="index.html" class="level-top"><span>${item[0]}</span></a></li>`)
    } else {
        $.each(item, (index1, item1) => {
            if (index1 == 0) {
                $('#nav').append(`<li id="nav${index}" class="level0 parent drop-menu"><a href="index.html" class="level-top"><span>${item1}</span></a></li>`)
                $(`#nav${index}`).append(`<ul class="level1"></ul>`)

            } else {
                $(`#nav${index}>ul`).append(`<li class="level2 first"><a href="grid.html"><span>${item1}</span></a></li>`)

            }
        })
    }
})

// $('#nav0>ul').css('width', '350px')
// $('#nav1>ul').css('width', '300px')
