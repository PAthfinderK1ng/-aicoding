# API 文档

## 基础信息

- Base URL: `http://localhost:3000`
- 数据格式：`application/json`

## 1. 获取岗位列表

### 请求

```http
GET /api/applications
```

### 响应

```json
[
  {
    "id": 1,
    "company": "美团",
    "role": "产品经理校招",
    "stage": "interview"
  }
]
```

## 2. 新增岗位

### 请求

```http
POST /api/applications
Content-Type: application/json
```

### 请求体示例

```json
{
  "id": 1001,
  "company": "测试公司",
  "role": "产品经理实习生",
  "city": "上海",
  "type": "实习",
  "stage": "wishlist",
  "deadline": "2026-04-30",
  "nextAction": "补充简历后提交",
  "industry": "互联网",
  "channel": "官网投递",
  "source": "手动新增",
  "contactName": "待补充",
  "contactRole": "待补充",
  "contactEmail": "待补充",
  "followUpDate": "",
  "lastTouched": "2026-04-18",
  "resumeVersion": "产品-v1",
  "salary": "待补充",
  "fitNote": "待补充",
  "descriptionSnapshot": "",
  "notes": "",
  "materials": [],
  "interviews": []
}
```

## 3. 更新岗位

### 请求

```http
PATCH /api/applications/:id
Content-Type: application/json
```

### 请求体示例

```json
{
  "stage": "interview",
  "nextAction": "准备一面自我介绍",
  "lastTouched": "2026-04-18"
}
```

## 常见字段

- `id`：岗位唯一标识
- `company`：公司名称
- `role`：岗位名称
- `stage`：当前阶段
- `deadline`：截止日期
- `nextAction`：下一步动作
- `resumeVersion`：简历版本
- `followUpDate`：跟进日期
- `materials`：材料列表
- `interviews`：流程记录列表
