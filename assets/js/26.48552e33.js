(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{310:function(t,e,a){"use strict";a.r(e);var v=a(14),l=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"官方组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方组件"}},[t._v("#")]),t._v(" 官方组件")]),t._v(" "),e("h2",{attrs:{id:"榜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#榜单"}},[t._v("#")]),t._v(" 榜单")]),t._v(" "),e("h3",{attrs:{id:"基础配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[t._v("#")]),t._v(" 基础配置")]),t._v(" "),e("ul",[e("li",[t._v("背景图：上传图片")]),t._v(" "),e("li",[t._v("标题背景图：375 * 34")]),t._v(" "),e("li",[t._v("第一名背景图、第二名背景图、第三名背景图、其他背景图：351 * 60")]),t._v(" "),e("li",[t._v("第一名排名图标、第二名排名图标、第三名排名图标：44 * 44")]),t._v(" "),e("li",[t._v("名次颜色：第4名开始的名次，文字颜色")]),t._v(" "),e("li",[t._v("昵称字号：选择榜单昵称字体字号")]),t._v(" "),e("li",[t._v("昵称颜色：选择榜单昵称字体颜色")]),t._v(" "),e("li",[t._v("活动数值名称：榜单值的含义，默认榜单分值")]),t._v(" "),e("li",[t._v("活动数值名称颜色：榜单值含义的文字颜色")]),t._v(" "),e("li",[t._v("活动数值名称字号：榜单值含义的字体字号")]),t._v(" "),e("li",[t._v("头像类型：圆形/方形，默认方形")]),t._v(" "),e("li",[t._v("空态图：榜单没有数据时的展示， 375 * 375")]),t._v(" "),e("li",[t._v("榜单长度：榜单最多可展示数量")])]),t._v(" "),e("h3",{attrs:{id:"数据配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据配置"}},[t._v("#")]),t._v(" 数据配置")]),t._v(" "),e("ul",[e("li",[t._v("配置ID：接入方和Cube后端数据交互的标识")]),t._v(" "),e("li",[t._v("名称：榜单名称")]),t._v(" "),e("li",[t._v("榜单描述： 榜单的详细描述")]),t._v(" "),e("li",[t._v("类型：榜单展示类型，聊天室榜单/个人榜单；和上榜策略有关")]),t._v(" "),e("li",[t._v("榜单统计时段：榜单统计时间范围，精确到秒")]),t._v(" "),e("li",[t._v("榜单展示信息：可多选")])]),t._v(" "),e("h3",{attrs:{id:"数据上报"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据上报"}},[t._v("#")]),t._v(" 数据上报")]),t._v(" "),e("blockquote",[e("p",[t._v("需要接入方将用户行为通过api接口上报到cube后台，后台会通过配置方案处理数据并最终在页面展示榜单数据")])]),t._v(" "),e("p",[e("strong",[t._v("接口地址：")]),e("code",[t._v("https://api.bxcube.com/webapi/api/user/task/notify")])]),t._v(" "),e("p",[e("strong",[t._v("参数介绍：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("内容")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必传")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("awardAmount: 数量；awardGiftId：礼物Id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("userEvent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("eventId：榜单Id；eventType：上报类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("榜单的eventType为board")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("userInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("avatar：用户头像；nickname：用户昵称；userId：用户唯一id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])])])]),t._v(" "),e("p",[e("strong",[t._v("样例：")])]),t._v(" "),e("div",{staticClass:"language-curl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location --request POST \'https://api.bxcube.com/webapi/api/user/task/notify\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "data": {\n      "awardAmount": 900,\n      "awardGiftId": "1234"\n  },\n  "userEvent": {\n    "eventId": "9",\n    "eventType": "board"\n  },\n  "userInfo": {\n    "avatar": "https://www.baidu.com/img/flexible/logo/pc/result@2.png",\n    "extInfo": {},\n    "nickname": "强壮的尤柚子🎃",\n    "userId": "87718872774827"\n  }\n}\'\n')])])]),e("h2",{attrs:{id:"任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),e("h3",{attrs:{id:"数据上报-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据上报-2"}},[t._v("#")]),t._v(" 数据上报")]),t._v(" "),e("blockquote",[e("p",[t._v("需要接入方将用户行为通过api接口上报到cube后台，后台会通过配置方案处理数据并最终在页面展示榜单数据")])]),t._v(" "),e("p",[e("strong",[t._v("接口地址：")]),e("code",[t._v("https://api.bxcube.com/webapi/api/user/task/notify")])]),t._v(" "),e("p",[e("strong",[t._v("参数介绍：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("内容")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必传")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("userEvent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("eventId：任务Id；eventType：上报类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("榜单的eventType为task")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("userInfo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("avatar：用户头像；nickname：用户昵称；userId：用户唯一id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")])])])]),t._v(" "),e("p",[e("strong",[t._v("样例：")])]),t._v(" "),e("div",{staticClass:"language-curl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl --location --request POST \'https://api.bxcube.com/webapi/api/user/task/notify\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "userEvent": {\n    "eventId": "18",\n    "eventType": "task"\n  },\n  "userInfo": {\n    "avatar": "https://www.baidu.com/img/flexible/logo/pc/result@2.png",\n    "extInfo": {},\n    "nickname": "强壮的尤柚子🎃",\n    "userId": "87718872774827"\n  }\n}\'\n')])])])])}),[],!1,null,null,null);e.default=l.exports}}]);