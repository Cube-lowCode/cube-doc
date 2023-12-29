# 官方组件

## 榜单
### 基础配置
- 背景图：上传图片
- 标题背景图：375 * 34
- 第一名背景图、第二名背景图、第三名背景图、其他背景图：351 * 60
- 第一名排名图标、第二名排名图标、第三名排名图标：44 * 44
- 名次颜色：第4名开始的名次，文字颜色
- 昵称字号：选择榜单昵称字体字号
- 昵称颜色：选择榜单昵称字体颜色
- 活动数值名称：榜单值的含义，默认榜单分值
- 活动数值名称颜色：榜单值含义的文字颜色
- 活动数值名称字号：榜单值含义的字体字号
- 头像类型：圆形/方形，默认方形
- 空态图：榜单没有数据时的展示， 375 * 375
- 榜单长度：榜单最多可展示数量

### 数据配置
- 配置ID：接入方和Cube后端数据交互的标识
- 名称：榜单名称
- 榜单描述： 榜单的详细描述
- 类型：榜单展示类型，聊天室榜单/个人榜单；和上榜策略有关
- 榜单统计时段：榜单统计时间范围，精确到秒
- 榜单展示信息：可多选

### 数据上报
> 需要接入方将用户行为通过api接口上报到cube后台，后台会通过配置方案处理数据并最终在页面展示榜单数据

**接口地址：**`https://api.bxcube.com/webapi/api/user/task/notify`

**参数介绍：**
参数|内容|备注|必传
:---|:--|:--- |:---
data|awardAmount: 数量；awardGiftId：礼物Id| | 是 
userEvent|eventId：榜单Id；eventType：上报类型 | 榜单的eventType为board|是
userInfo|avatar：用户头像；nickname：用户昵称；userId：用户唯一id| |是
**样例：**
``` curl
curl --location --request POST 'https://api.bxcube.com/webapi/api/user/task/notify' \
--header 'Content-Type: application/json' \
--data-raw '{
  "data": {
      "awardAmount": 900,
      "awardGiftId": "1234"
  },
  "userEvent": {
    "eventId": "9",
    "eventType": "board"
  },
  "userInfo": {
    "avatar": "https://www.baidu.com/img/flexible/logo/pc/result@2.png",
    "extInfo": {},
    "nickname": "强壮的尤柚子🎃",
    "userId": "87718872774827"
  }
}'
```


## 任务

### 数据上报
> 需要接入方将用户行为通过api接口上报到cube后台，后台会通过配置方案处理数据并最终在页面展示榜单数据

**接口地址：**`https://api.bxcube.com/webapi/api/user/task/notify`

**参数介绍：**
参数|内容|备注|必传
:---|:--|:--- |:---
userEvent|eventId：任务Id；eventType：上报类型 | 榜单的eventType为task|是
userInfo|avatar：用户头像；nickname：用户昵称；userId：用户唯一id| |是
**样例：**
``` curl
curl --location --request POST 'https://api.bxcube.com/webapi/api/user/task/notify' \
--header 'Content-Type: application/json' \
--data-raw '{
  "userEvent": {
    "eventId": "18",
    "eventType": "task"
  },
  "userInfo": {
    "avatar": "https://www.baidu.com/img/flexible/logo/pc/result@2.png",
    "extInfo": {},
    "nickname": "强壮的尤柚子🎃",
    "userId": "87718872774827"
  }
}'
```