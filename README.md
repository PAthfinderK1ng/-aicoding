# 求职申请管理看板

一个面向大学生求职场景设计的轻量全栈作品，聚焦三个核心问题：

- 多岗位并行申请时的进度混乱
- 截止日期与面试安排容易遗漏
- 简历、作品集、成绩单等材料状态难以管理

## 作品亮点

- 看板式进度管理：按待申请、已投递、笔试中、面试中、Offer、已结束分栏展示
- 首页总览：展示申请总数、本周截止、待补材料、面试中、Offer 等关键指标
- 行动中心：把“今日优先处理”“待跟进列表”“材料与版本”单独提炼出来
- 近期时间线：汇总截止日期与面试节点
- 岗位详情面板：查看材料状态、流程记录、备注、岗位描述快照、简历版本和跟进动作
- 拖拽交互：可直接拖动岗位卡片切换申请阶段
- 筛选搜索：支持按关键词、类型、优先级、材料状态、阶段过滤
- 新增申请：支持手动录入新的岗位卡片
- Node 后端：提供岗位列表读取、新增、更新状态的 API
- 本地持久化：数据写入 `data/applications.json`，刷新页面后仍然保留

## 研究后补强的设计点

这版作品不是只做“看板展示”，还参考了常见求职管理工具和高校就业中心给学生的建议，额外补了几类真实场景能力：

- `JD 快照`：保存岗位描述，避免职位下线后找不到原始要求
- `简历版本绑定`：记录每个岗位使用的简历版本，减少“同一份简历投所有岗位”的问题
- `联系人与 Follow-up`：把联系人、跟进时间和下一步动作放到同一处
- `阶段行动建议`：根据当前阶段给出操作清单，而不是只显示状态
- `材料版本意识`：不仅看材料是否提交，也关注用了哪个版本

## 如何运行

推荐用 Node 启动完整版本：

```bash
npm start
```

然后访问 `http://localhost:3000`。

如果当前环境没有 `npm`，也可以直接执行：

```bash
node server.js
```

这个模式下会启用后端接口，并把数据持久化到 [applications.json](/Users/lkd/Desktop/美团/data/applications.json)。

如果你只是想快速看静态演示，也可以直接打开 [index.html](/Users/lkd/Desktop/美团/index.html)。
但 `file://` 模式下不会启用后端持久化，只会使用前端内置示例数据。

## 文件结构

- [index.html](/Users/lkd/Desktop/美团/index.html)：页面结构
- [style.css](/Users/lkd/Desktop/美团/style.css)：视觉样式与响应式布局
- [script.js](/Users/lkd/Desktop/美团/script.js)：前端逻辑、渲染与 API 接入
- [server.js](/Users/lkd/Desktop/美团/server.js)：Node HTTP 服务与 API
- [applications.json](/Users/lkd/Desktop/美团/data/applications.json)：本地数据存储
- [seed-applications.json](/Users/lkd/Desktop/美团/data/seed-applications.json)：演示初始数据
- [package.json](/Users/lkd/Desktop/美团/package.json)：启动脚本
- [DELIVERABLES.md](/Users/lkd/Desktop/美团/docs/DELIVERABLES.md)：交付清单
- [PRODUCT-DESIGN.md](/Users/lkd/Desktop/美团/docs/PRODUCT-DESIGN.md)：产品说明
- [API.md](/Users/lkd/Desktop/美团/docs/API.md)：接口文档
- [DEMO-SCRIPT.md](/Users/lkd/Desktop/美团/docs/DEMO-SCRIPT.md)：演示讲稿

## 常用命令

```bash
node server.js
node scripts/reset-data.js
```

如果环境支持 `npm`，也可以使用：

```bash
npm start
npm run reset-data
```

## 适合测评时的讲解角度

你可以这样概括这个作品：

“我把题目做成了一个可交互的求职申请管理看板，而不是停留在概念稿。整个设计围绕截止日期、材料状态、岗位描述留档、联系人跟进和流程推进几个高频痛点展开，通过总览、行动中心、看板、时间线和详情联动，帮助用户清楚知道自己投了什么、做到哪一步、下一步该做什么。” 
