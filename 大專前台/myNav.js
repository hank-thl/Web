var category = [["特別企劃",
    "Tasty Martini 弛綠系列｜品牌特別企劃",
    "宇宙迷｜宇宙太空系列企劃",
    "butter daily｜奶油日常系列企劃"]
    ,
["獨家設計師款",
    "生活訂製｜獨家商品",
    "包大山 BAOZI｜插畫聯名",
    "草棉谷RONG｜插畫聯名",
    "你好工作室 Hello Studio｜插畫聯名",
    "Yuz Drawing Cooking｜插畫聯名",
    "âme sœur｜中性服飾插畫聯名",
    "PONPON 蓬蓬獅｜生活倉庫原創設計",
    "CHILL ZOO｜韓系動物插畫聯名",
    "馬卡龍腳趾 Macaron TOE｜插畫聯名"]
    ,
["外出旅行",
    "戶外野餐露營專區",
    "外出野餐",
    "隨身3C",
    "雨傘雨具",
    "外出收納"]];

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

$('#nav0>ul').css('width', '350px')
$('#nav1>ul').css('width', '300px')
