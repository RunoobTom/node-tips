门店储值需求一审
    所有储值类的单子都要记录，退单是指单子的逆向流程
    c端暂时不做退款入口
    c端自定义储值规则自定义规则那段不要了，移到储值协议里展示，如果b端没有填 则不展示储值协议按钮（文案）
    q: 如果不填，接口是空还是其他什么？  全部规则  ui调整(没对齐)
    支付页面ui调整
    单门店下不要切换按钮；
    单门店多门店的流程
    sid是否为pid有接口？  
    定位失败 手动引导客户选择门店
    没有门店的时候怎么展示
    定位流程尚未确定
    定位逻辑参考陈世力
    链接带的sid为-1不算改商户下的门店
    paas跟我们是否有关
    storeList是否为开启的门店 是

例会
    页面重构需要所有的类型检查通过和eslint通过

查询
    在无storeId时，如果根据位置获取storeId为空则页面空白
    自定义充值规则是否为商户级别，若为商户级别则所有门店下的都为同一规则展示，是否使用原有接口
    存储规则各门店相同，所以先展示充值规则再定位门店
    paas情况下正常走流程，确定storeId后再展示出规则

注意点：
    1.分支管理：master切开发分支合到上线分支自动合到master
    2.上线流程：开发->自测->测试/验收->上线 （小程序的测试验收流程具体什么流程）
    3.门店定位流程以及覆盖二维码等各种场景
    4.储值规则展示优化
    5.paas情况以及正常情况下的区分，最坏情况则写两种情况下的页面
    6.规则展示要换行
    7.不同环境要发不同的地方，不同仓库的代码也要管理

进度：
    7.10 完成基本门店定位逻辑 不包含页面展示逻辑和paas逻辑（paas情况放最后处理）

    7.13 todo 使用开发页面完成基本UI,无会员充值会员后跳回储值页
    <text>标签嵌套<text>标签导致内部标签定位到页面左上角？
    <text>标签不在同一行会导致同级的text内容不在同一行？
    微信小程序字体粗细

    7.14 UI：修改会员提示样式，固定档选中样式

    7.15 兜底页面(定位失败、无门店)、图片引入、paas情况
        定位失败正常情况和paas的兜底异常页是否一样
        空态页面

    7.16 完成餐厅所有页面（替换图片、paas情况、异常兜底）
    todo 重新定位功能 ✅
    支付按钮不做置灰，在点击时根据不同异常情况提示

    非会员、无门店、无可用规则等
    无会员下，会优先展示会员status为3 有会员才会因为没有开启储值规则status为1

    7.17 完成非paas的所有情况

    7.20 加上icon 确认流程

    7.21 完成非paas情况和非paas所有异常情况

    7.22 完成paas情况

    7.23 加入陈亦清代码 更新样式细节
    todo  获取储值规则接口需要联调
    拿到sid为loading结束

    7.24 完成餐厅的所有代码
        区间档外面显示里面不显示；每满档相反