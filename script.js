const TODAY = new Date("2026-04-18T00:00:00");

const stages = [
  { key: "wishlist", label: "待申请" },
  { key: "applied", label: "已投递" },
  { key: "written-test", label: "笔试中" },
  { key: "interview", label: "面试中" },
  { key: "offer", label: "Offer" },
  { key: "closed", label: "已结束" }
];

const stageProgress = {
  wishlist: 16,
  applied: 34,
  "written-test": 52,
  interview: 76,
  offer: 100,
  closed: 100
};

const stagePlaybooks = {
  wishlist: [
    "保存岗位描述快照，避免岗位下线后丢失要求",
    "绑定匹配的简历版本与作品集",
    "确认截止时间、投递渠道和联系人"
  ],
  applied: [
    "记录投递平台、提交材料与投递日期",
    "3-5 天后安排 follow-up，避免投后失联",
    "保存已投递版本，方便后续复盘与面试准备"
  ],
  "written-test": [
    "确认测评时限、设备要求和题型范围",
    "完成后记录难点与题目印象，方便后续复盘",
    "根据测评内容调整下一轮面试准备"
  ],
  interview: [
    "记录面试形式、面试官和考察重点",
    "面试后 24 小时内发送感谢或跟进邮件",
    "沉淀案例题答案与常见追问，减少重复准备"
  ],
  offer: [
    "记录 offer 截止时间、薪资和附加条件",
    "横向比较城市、成长空间与团队情况",
    "准备谈薪点或接受/拒绝决策"
  ],
  closed: [
    "记录拒绝原因或面试反馈",
    "保留可复用材料与表达模板",
    "把复盘结论沉淀到下一次申请中"
  ]
};

const applications = [
  {
    id: 1,
    company: "美团",
    role: "产品经理校招",
    city: "北京",
    type: "校招",
    stage: "interview",
    deadline: "2026-04-20",
    nextAction: "准备二面案例题与业务分析",
    industry: "互联网",
    channel: "官网投递",
    source: "官网 + 内推",
    contactName: "张琳",
    contactRole: "校园招聘 HR",
    contactEmail: "hr-campus@meituan.com",
    followUpDate: "2026-04-22",
    lastTouched: "2026-04-16",
    resumeVersion: "产品经理-v4",
    salary: "待沟通",
    fitNote: "业务匹配度高，二面重点会看增长与数据分析能力。",
    descriptionSnapshot:
      "负责校园业务方向的需求分析、跨团队推进与数据复盘，需要良好的结构化思维、用户洞察与协同能力。",
    notes: "一面通过，面试官重点追问增长案例和数据指标拆解。",
    materials: [
      { name: "简历", status: "complete", version: "产品经理-v4" },
      { name: "成绩单", status: "complete", version: "中英文盖章版" },
      { name: "作品集", status: "pending", version: "项目集-v2" }
    ],
    interviews: [
      { label: "一面", date: "2026-04-15", result: "通过" },
      { label: "二面", date: "2026-04-21", result: "待进行" }
    ]
  },
  {
    id: 2,
    company: "腾讯",
    role: "产品运营培训生",
    city: "深圳",
    type: "校招",
    stage: "applied",
    deadline: "2026-04-19",
    nextAction: "补充最新版简历并确认网申状态",
    industry: "互联网",
    channel: "内推链接",
    source: "学长内推",
    contactName: "李昊",
    contactRole: "部门内推人",
    contactEmail: "lihao@tencent.com",
    followUpDate: "2026-04-20",
    lastTouched: "2026-04-14",
    resumeVersion: "运营培训生-v3",
    salary: "待沟通",
    fitNote: "岗位开放度高，但当前材料完整度不够，容易丢分。",
    descriptionSnapshot:
      "岗位要求对内容运营、数据敏感度和跨部门沟通有较高要求，需要具备项目经历和结果导向意识。",
    notes: "投递量较大，建议先补齐作品案例，再通过内推人跟进状态。",
    materials: [
      { name: "简历", status: "pending", version: "运营培训生-v3" },
      { name: "成绩单", status: "complete", version: "中英文盖章版" },
      { name: "作品集", status: "missing", version: "待上传" }
    ],
    interviews: []
  },
  {
    id: 3,
    company: "字节跳动",
    role: "商业分析实习生",
    city: "上海",
    type: "实习",
    stage: "written-test",
    deadline: "2026-04-24",
    nextAction: "今晚完成在线测评并记录题型",
    industry: "互联网",
    channel: "Boss 直聘",
    source: "Boss 职位收藏转投递",
    contactName: "系统通知",
    contactRole: "平台消息",
    contactEmail: "campus@bytedance.com",
    followUpDate: "2026-04-23",
    lastTouched: "2026-04-18",
    resumeVersion: "商业分析实习-v2",
    salary: "250-300/天",
    fitNote: "JD 匹配度高，测评完成度将直接影响后续面试机会。",
    descriptionSnapshot:
      "需要具备 SQL/Excel 基础、业务分析能力和跨团队协作意识，侧重增长分析和策略支持。",
    notes: "测评预计 45 分钟，包含数据判断题和案例阅读。",
    materials: [
      { name: "简历", status: "complete", version: "商业分析实习-v2" },
      { name: "成绩单", status: "complete", version: "电子版" },
      { name: "作品集", status: "complete", version: "分析案例-v1" }
    ],
    interviews: [{ label: "在线测评", date: "2026-04-19", result: "待完成" }]
  },
  {
    id: 4,
    company: "小红书",
    role: "社区运营实习生",
    city: "上海",
    type: "实习",
    stage: "wishlist",
    deadline: "2026-04-22",
    nextAction: "完善社区案例与自我介绍视频后投递",
    industry: "内容社区",
    channel: "官网投递",
    source: "官网职位页",
    contactName: "待补充",
    contactRole: "待确认",
    contactEmail: "campus@xiaohongshu.com",
    followUpDate: "",
    lastTouched: "2026-04-17",
    resumeVersion: "社区运营-v2",
    salary: "180-220/天",
    fitNote: "内容调性匹配，但案例素材需要再补充。",
    descriptionSnapshot:
      "岗位偏重社区内容策划、活动运营和用户洞察，需要熟悉平台生态并能输出活动方案。",
    notes: "适合作为内容方向重点冲刺岗位，当前最大的阻碍是案例完整度不足。",
    materials: [
      { name: "简历", status: "complete", version: "社区运营-v2" },
      { name: "作品集", status: "pending", version: "社区项目集-v2" },
      { name: "自我介绍视频", status: "missing", version: "待录制" }
    ],
    interviews: []
  },
  {
    id: 5,
    company: "阿里巴巴",
    role: "数据产品经理",
    city: "杭州",
    type: "校招",
    stage: "offer",
    deadline: "2026-04-05",
    nextAction: "确认 offer 截止时间并准备谈薪问题",
    industry: "互联网",
    channel: "官网投递",
    source: "官网 + 校招群",
    contactName: "王晨",
    contactRole: "招聘 HRBP",
    contactEmail: "campus@alibaba-inc.com",
    followUpDate: "2026-04-19",
    lastTouched: "2026-04-17",
    resumeVersion: "数据产品-v5",
    salary: "年包待确认",
    fitNote: "进入 offer 阶段，主要问题从“能不能拿到”转为“该不该接受”。",
    descriptionSnapshot:
      "聚焦数据产品规划、业务需求拆解和指标体系搭建，需要较强的数据分析和跨部门沟通能力。",
    notes: "已进入 offer 阶段，建议对比城市、团队方向和成长空间。",
    materials: [
      { name: "简历", status: "complete", version: "数据产品-v5" },
      { name: "成绩单", status: "complete", version: "中英文盖章版" },
      { name: "作品集", status: "complete", version: "数据产品案例-v2" }
    ],
    interviews: [
      { label: "一面", date: "2026-04-07", result: "通过" },
      { label: "二面", date: "2026-04-10", result: "通过" },
      { label: "HR 面", date: "2026-04-14", result: "通过" }
    ]
  },
  {
    id: 6,
    company: "华为",
    role: "经营管理岗",
    city: "深圳",
    type: "校招",
    stage: "closed",
    deadline: "2026-04-03",
    nextAction: "复盘群面表现，优化下次案例表达",
    industry: "科技制造",
    channel: "官网投递",
    source: "官网职位页",
    contactName: "赵宁",
    contactRole: "校招 HR",
    contactEmail: "campus@huawei.com",
    followUpDate: "",
    lastTouched: "2026-04-02",
    resumeVersion: "经营管理-v2",
    salary: "待沟通",
    fitNote: "岗位方向匹配，但群面节奏和案例表达是主要短板。",
    descriptionSnapshot:
      "岗位需要较强的商业判断、项目推进和跨团队协作能力，群面环节尤其看重结构化表达。",
    notes: "群面节奏偏快，后续可强化框架表达和时间控制。",
    materials: [
      { name: "简历", status: "complete", version: "经营管理-v2" },
      { name: "成绩单", status: "complete", version: "电子版" }
    ],
    interviews: [{ label: "群面", date: "2026-04-01", result: "未通过" }]
  }
];

const state = {
  selectedId: applications[0].id,
  filters: {
    search: "",
    type: "all",
    priority: "all",
    materials: "all",
    stage: "all"
  }
};

const elements = {
  statsGrid: document.getElementById("stats-grid"),
  kanbanBoard: document.getElementById("kanban-board"),
  timeline: document.getElementById("timeline"),
  detailPanel: document.getElementById("detail-panel"),
  healthScore: document.getElementById("health-score"),
  healthSummary: document.getElementById("health-summary"),
  reminders: document.getElementById("today-reminders"),
  priorityQueue: document.getElementById("priority-queue"),
  followUpQueue: document.getElementById("followup-queue"),
  materialsHub: document.getElementById("materials-hub"),
  searchInput: document.getElementById("search-input"),
  typeFilter: document.getElementById("type-filter"),
  priorityFilter: document.getElementById("priority-filter"),
  materialFilter: document.getElementById("material-filter"),
  stageFilter: document.getElementById("stage-filter"),
  dialog: document.getElementById("application-dialog"),
  form: document.getElementById("application-form"),
  openAdd: document.getElementById("open-add"),
  closeDialog: document.getElementById("close-dialog"),
  cancelDialog: document.getElementById("cancel-dialog"),
  focusUrgent: document.getElementById("focus-urgent")
};

function parseDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "short",
    day: "numeric",
    weekday: "short"
  }).format(parseDate(dateString));
}

function formatInputDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function daysUntil(dateString) {
  return Math.ceil((parseDate(dateString) - TODAY) / (1000 * 60 * 60 * 24));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isClosedStage(stage) {
  return stage === "offer" || stage === "closed";
}

function hasDescriptionSnapshot(application) {
  return Boolean(application.descriptionSnapshot?.trim());
}

function getMissingMaterialCount(application) {
  return application.materials.filter((item) => item.status !== "complete").length;
}

function hasMissingMaterials(application) {
  return getMissingMaterialCount(application) > 0;
}

function isFollowUpActive(application) {
  return Boolean(application.followUpDate) && !isClosedStage(application.stage);
}

function isFollowUpSoon(application) {
  if (!isFollowUpActive(application)) return false;
  return daysUntil(application.followUpDate) <= 2;
}

function getPriority(application) {
  const deadlineGap = daysUntil(application.deadline);

  if (
    (deadlineGap <= 2 && deadlineGap >= 0) ||
    application.materials.some((item) => item.status === "missing") ||
    isFollowUpSoon(application)
  ) {
    return "high";
  }

  if (
    (deadlineGap <= 5 && deadlineGap >= 0) ||
    hasMissingMaterials(application) ||
    application.stage === "interview" ||
    application.stage === "written-test"
  ) {
    return "medium";
  }

  return "low";
}

function getPriorityLabel(priority) {
  if (priority === "high") return "高优先级";
  if (priority === "medium") return "中优先级";
  return "低优先级";
}

function getMaterialSummary(materials) {
  const completeCount = materials.filter((item) => item.status === "complete").length;
  return `${completeCount}/${materials.length} 份材料已准备`;
}

function getDeadlineLabel(application) {
  const gap = daysUntil(application.deadline);
  if (gap < 0) return `已截止 ${Math.abs(gap)} 天`;
  if (gap === 0) return "今天截止";
  return `还有 ${gap} 天截止`;
}

function getUrgencyReason(application) {
  if (application.materials.some((item) => item.status === "missing")) {
    return "材料未齐，容易错过投递或影响通过率";
  }

  if (isFollowUpSoon(application)) {
    return `跟进时间临近，建议在 ${formatDate(application.followUpDate)} 前主动联系`;
  }

  const deadlineGap = daysUntil(application.deadline);
  if (deadlineGap <= 2 && deadlineGap >= 0) {
    return `截止时间非常近，${deadlineGap === 0 ? "今天" : `${deadlineGap} 天内`}需要处理`;
  }

  if (application.stage === "interview") {
    return "处于面试阶段，准备质量比投递数量更重要";
  }

  if (application.stage === "written-test") {
    return "测评会直接影响后续面试机会，建议尽快完成";
  }

  return "节奏稳定，可以按计划推进";
}

function getUrgencyScore(application) {
  let score = 0;
  const deadlineGap = daysUntil(application.deadline);

  if (deadlineGap >= 0) score += Math.max(0, 20 - deadlineGap * 3);
  score += getMissingMaterialCount(application) * 18;
  if (isFollowUpSoon(application)) score += 22;
  if (application.stage === "interview") score += 14;
  if (application.stage === "written-test") score += 10;
  if (!hasDescriptionSnapshot(application)) score += 8;

  return score;
}

function getFollowUpLabel(application) {
  if (!application.followUpDate) return "未安排";
  const gap = daysUntil(application.followUpDate);
  if (gap < 0) return `已过 ${Math.abs(gap)} 天`;
  if (gap === 0) return "今天跟进";
  return `${gap} 天后跟进`;
}

function getFilteredApplications() {
  return applications.filter((application) => {
    const content = [
      application.company,
      application.role,
      application.city,
      application.contactName,
      application.channel
    ]
      .join("")
      .toLowerCase();

    const searchMatch = content.includes(state.filters.search.toLowerCase());
    const typeMatch =
      state.filters.type === "all" || application.type === state.filters.type;
    const priorityMatch =
      state.filters.priority === "all" || getPriority(application) === state.filters.priority;
    const materialMatch =
      state.filters.materials === "all" ||
      (state.filters.materials === "missing" && hasMissingMaterials(application)) ||
      (state.filters.materials === "complete" && !hasMissingMaterials(application));
    const stageMatch =
      state.filters.stage === "all" || application.stage === state.filters.stage;

    return searchMatch && typeMatch && priorityMatch && materialMatch && stageMatch;
  });
}

function renderStats(appList) {
  const stats = [
    {
      label: "申请岗位总数",
      value: appList.length,
      hint: "当前筛选视图里的全部岗位"
    },
    {
      label: "待投递",
      value: appList.filter((item) => item.stage === "wishlist").length,
      hint: "还处于准备材料或决定是否投递"
    },
    {
      label: "本周将截止",
      value: appList.filter((item) => daysUntil(item.deadline) <= 7 && daysUntil(item.deadline) >= 0).length,
      hint: "未来 7 天需要处理的岗位"
    },
    {
      label: "待补材料",
      value: appList.filter(hasMissingMaterials).length,
      hint: "含未准备或待提交的申请材料"
    },
    {
      label: "待跟进",
      value: appList.filter(isFollowUpActive).length,
      hint: "建议主动联系或确认进度的岗位"
    },
    {
      label: "已拿 Offer",
      value: appList.filter((item) => item.stage === "offer").length,
      hint: "进入决策或谈薪阶段"
    }
  ];

  elements.statsGrid.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-card">
          <p class="stat-card__label">${stat.label}</p>
          <div class="stat-card__value">${stat.value}</div>
          <p class="stat-card__hint">${stat.hint}</p>
        </article>
      `
    )
    .join("");
}

function renderHealth(appList) {
  const urgentCount = appList.filter((item) => getPriority(item) === "high").length;
  const followUpCount = appList.filter(isFollowUpSoon).length;
  const offerCount = appList.filter((item) => item.stage === "offer").length;
  const score = Math.max(56, Math.min(96, 88 - urgentCount * 8 - followUpCount * 4 + offerCount * 6));

  elements.healthScore.textContent = score;
  elements.healthSummary.textContent =
    urgentCount > 0
      ? `当前有 ${urgentCount} 个岗位属于高优先级，建议先处理临近截止、缺材料和需要主动跟进的申请。`
      : "当前整体节奏比较稳，可以把更多精力放在面试准备、offer 比较和材料优化上。";

  const reminders = [...appList]
    .sort((a, b) => getUrgencyScore(b) - getUrgencyScore(a))
    .slice(0, 3)
    .map(
      (item) => `
        <div class="reminder-item">
          <strong>${escapeHtml(item.company)} · ${escapeHtml(item.role)}</strong>
          <span>${escapeHtml(getUrgencyReason(item))}</span>
        </div>
      `
    )
    .join("");

  elements.reminders.innerHTML =
    reminders ||
    `<div class="reminder-item"><strong>状态良好</strong><span>当前筛选条件下没有紧急事项，可以继续完善材料或拓展目标公司。</span></div>`;
}

function renderActionCenter(appList) {
  const urgentItems = [...appList]
    .sort((a, b) => getUrgencyScore(b) - getUrgencyScore(a))
    .slice(0, 3);

  elements.priorityQueue.innerHTML =
    urgentItems.length > 0
      ? urgentItems
          .map(
            (item) => `
              <article class="action-item">
                <div class="action-item__top">
                  <div class="action-item__title">${escapeHtml(item.company)} · ${escapeHtml(item.role)}</div>
                  <span class="mini-badge">${escapeHtml(getPriorityLabel(getPriority(item)))}</span>
                </div>
                <p class="action-item__meta">${escapeHtml(item.nextAction)}</p>
                <p class="action-item__hint">${escapeHtml(getUrgencyReason(item))}</p>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">当前没有需要优先处理的岗位。</div>`;

  const followUpItems = [...appList]
    .filter(isFollowUpActive)
    .sort((a, b) => daysUntil(a.followUpDate) - daysUntil(b.followUpDate))
    .slice(0, 3);

  elements.followUpQueue.innerHTML =
    followUpItems.length > 0
      ? followUpItems
          .map(
            (item) => `
              <article class="action-item">
                <div class="action-item__top">
                  <div class="action-item__title">${escapeHtml(item.company)}</div>
                  <span class="mini-badge">${escapeHtml(getFollowUpLabel(item))}</span>
                </div>
                <p class="action-item__meta">${escapeHtml(item.contactName)} · ${escapeHtml(item.contactRole)}</p>
                <p class="action-item__hint">${escapeHtml(item.channel)}，建议动作：${escapeHtml(item.nextAction)}</p>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">当前没有待跟进岗位。</div>`;

  const materialItems = [...appList]
    .sort((a, b) => {
      const aScore = getMissingMaterialCount(b) - getMissingMaterialCount(a);
      if (aScore !== 0) return aScore;
      return Number(hasDescriptionSnapshot(a)) - Number(hasDescriptionSnapshot(b));
    })
    .slice(0, 3);

  elements.materialsHub.innerHTML =
    materialItems.length > 0
      ? materialItems
          .map(
            (item) => `
              <article class="action-item">
                <div class="action-item__top">
                  <div class="action-item__title">${escapeHtml(item.company)}</div>
                  <span class="mini-badge">${escapeHtml(item.resumeVersion || "简历待补")}</span>
                </div>
                <p class="action-item__meta">${escapeHtml(getMaterialSummary(item.materials))}</p>
                <p class="action-item__hint">
                  ${hasDescriptionSnapshot(item) ? "JD 已保存，可直接回看要求" : "JD 尚未保存，建议立即留档"}；
                  ${hasMissingMaterials(item) ? "仍有材料待补" : "当前材料已齐全"}
                </p>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">当前没有材料相关提醒。</div>`;
}

function renderCard(application) {
  const priority = getPriority(application);
  const jdTag = hasDescriptionSnapshot(application) ? "JD 已存档" : "JD 待补";
  const followUpTag = application.followUpDate ? getFollowUpLabel(application) : "未安排跟进";

  return `
    <article
      class="kanban-card ${application.id === state.selectedId ? "is-selected" : ""}"
      data-id="${application.id}"
      draggable="true"
    >
      <div class="card-top">
        <div>
          <div class="company">${escapeHtml(application.company)}</div>
          <div class="role">${escapeHtml(application.role)}</div>
        </div>
        <span class="priority-pill ${priority}">${escapeHtml(getPriorityLabel(priority))}</span>
      </div>

      <div class="card-meta">
        <div class="meta-row">
          <span>截止日期</span>
          <strong>${escapeHtml(formatDate(application.deadline))}</strong>
        </div>
        <div class="meta-row">
          <span>节奏判断</span>
          <strong>${escapeHtml(getDeadlineLabel(application))}</strong>
        </div>
        <div class="progress-line">
          <span style="width: ${stageProgress[application.stage]}%"></span>
        </div>
        <div class="meta-row">
          <span>材料进度</span>
          <strong>${escapeHtml(getMaterialSummary(application.materials))}</strong>
        </div>
      </div>

      <p class="card-caption">${escapeHtml(application.nextAction)}</p>

      <div class="card-tags">
        <span class="tag">${escapeHtml(application.type)}</span>
        <span class="tag">${escapeHtml(application.city)}</span>
        <span class="tag">${escapeHtml(application.industry)}</span>
        <span class="tag is-soft">${escapeHtml(application.resumeVersion || "简历待补")}</span>
        <span class="tag is-soft">${escapeHtml(jdTag)}</span>
        <span class="tag is-soft">${escapeHtml(followUpTag)}</span>
      </div>
    </article>
  `;
}

function renderKanban(appList) {
  elements.kanbanBoard.innerHTML = stages
    .map((stage) => {
      const items = appList.filter((application) => application.stage === stage.key);
      return `
        <section class="kanban-column" data-stage="${stage.key}">
          <div class="kanban-column__header">
            <div class="kanban-column__title">${stage.label}</div>
            <div class="kanban-column__count">${items.length}</div>
          </div>
          <div class="kanban-list">
            ${items.map(renderCard).join("") || '<div class="empty-state">暂无岗位</div>'}
          </div>
        </section>
      `;
    })
    .join("");

  bindBoardEvents();
}

function renderTimeline(appList) {
  const events = appList.flatMap((application) => {
    const result = [
      {
        date: application.deadline,
        title: `${application.company} 截止投递`,
        meta: `${application.role} · ${getDeadlineLabel(application)}`
      }
    ];

    if (application.followUpDate) {
      result.push({
        date: application.followUpDate,
        title: `${application.company} 跟进提醒`,
        meta: `${application.contactName} · ${application.contactRole}`
      });
    }

    application.interviews.forEach((interview) => {
      result.push({
        date: interview.date,
        title: `${application.company} ${interview.label}`,
        meta: `${application.role} · ${interview.result}`
      });
    });

    return result;
  });

  const upcoming = events
    .filter((item) => parseDate(item.date) >= TODAY)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  const recent = events
    .filter((item) => parseDate(item.date) < TODAY)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const timelineItems = [...upcoming, ...recent].slice(0, 8);

  elements.timeline.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-item__date">${escapeHtml(formatDate(item.date))}</div>
          <div class="timeline-item__title">${escapeHtml(item.title)}</div>
          <div class="timeline-item__meta">${escapeHtml(item.meta)}</div>
        </article>
      `
    )
    .join("");
}

function getChecklist(application) {
  const items = [
    {
      label: hasDescriptionSnapshot(application) ? "岗位描述已保存" : "保存岗位描述快照",
      state: hasDescriptionSnapshot(application) ? "complete" : "missing"
    },
    {
      label: application.resumeVersion
        ? `简历版本已绑定：${application.resumeVersion}`
        : "绑定目标简历版本",
      state: application.resumeVersion ? "complete" : "missing"
    },
    {
      label: application.followUpDate
        ? `已安排跟进：${formatDate(application.followUpDate)}`
        : "补充下一次跟进时间",
      state: application.followUpDate ? "complete" : "pending"
    },
    {
      label: application.nextAction,
      state: "pending"
    }
  ];

  stagePlaybooks[application.stage].forEach((text, index) => {
    items.push({
      label: text,
      state: index === 0 && application.stage !== "wishlist" ? "complete" : "pending"
    });
  });

  return items.slice(0, 6);
}

function getInterviewStatusClass(result) {
  if (result.includes("未")) return "missing";
  if (result.includes("待")) return "pending";
  return "complete";
}

function renderDetail() {
  const application = applications.find((item) => item.id === state.selectedId);

  if (!application) {
    elements.detailPanel.className = "detail-panel empty-state";
    elements.detailPanel.textContent = "当前筛选条件下没有选中的岗位。";
    return;
  }

  const checklist = getChecklist(application);
  const snapshotText = hasDescriptionSnapshot(application)
    ? application.descriptionSnapshot
    : "当前还没有保存岗位描述，建议补一份 JD 快照，后续面试时会更好回忆岗位要求。";

  elements.detailPanel.className = "detail-panel";
  elements.detailPanel.innerHTML = `
    <div class="detail-header">
      <div>
        <h3>${escapeHtml(application.company)}</h3>
        <p class="detail-subtitle">${escapeHtml(application.role)} · ${escapeHtml(application.city)} · ${escapeHtml(application.type)}</p>
      </div>
      <span class="priority-pill ${getPriority(application)}">${escapeHtml(getPriorityLabel(getPriority(application)))}</span>
    </div>

    <div class="detail-grid">
      <div class="detail-block">
        <div class="detail-block__label">截止日期</div>
        <strong>${escapeHtml(formatDate(application.deadline))}</strong>
        <p class="detail-note">${escapeHtml(getDeadlineLabel(application))}</p>
      </div>
      <div class="detail-block">
        <div class="detail-block__label">投递渠道</div>
        <strong>${escapeHtml(application.channel)}</strong>
        <p class="detail-note">${escapeHtml(application.source)}</p>
      </div>
      <div class="detail-block">
        <div class="detail-block__label">简历版本</div>
        <strong>${escapeHtml(application.resumeVersion || "待补充")}</strong>
      </div>
      <div class="detail-block">
        <div class="detail-block__label">跟进提醒</div>
        <strong>${escapeHtml(application.followUpDate ? formatDate(application.followUpDate) : "未安排")}</strong>
        <p class="detail-note">${escapeHtml(getFollowUpLabel(application))}</p>
      </div>
      <div class="detail-block">
        <div class="detail-block__label">联系人</div>
        <strong>${escapeHtml(application.contactName)} · ${escapeHtml(application.contactRole)}</strong>
        <p class="detail-note">${escapeHtml(application.contactEmail)}</p>
      </div>
      <div class="detail-block">
        <div class="detail-block__label">匹配判断</div>
        <strong>${escapeHtml(application.fitNote)}</strong>
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block__label">岗位描述快照</div>
      <div class="snapshot">${escapeHtml(snapshotText)}</div>
    </div>

    <div class="detail-block">
      <div class="detail-block__label">材料与版本</div>
      <div class="materials">
        ${application.materials
          .map(
            (material) => `
              <div class="material-item">
                <div class="material-subrow">
                  <strong>${escapeHtml(material.name)}</strong>
                  <span class="status-pill ${material.status}">
                    ${material.status === "complete" ? "已完成" : material.status === "pending" ? "待提交" : "未准备"}
                  </span>
                </div>
                <span class="detail-note">${escapeHtml(material.version || "未标注版本")}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block__label">阶段行动建议</div>
      <div class="checklist">
        ${checklist
          .map(
            (item) => `
              <div class="checklist-item">
                <span class="checklist-dot ${item.state}"></span>
                <span>${escapeHtml(item.label)}</span>
                <strong class="status-pill ${item.state}">
                  ${item.state === "complete" ? "已完成" : item.state === "pending" ? "建议执行" : "待补充"}
                </strong>
              </div>
            `
          )
          .join("")}
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block__label">流程记录</div>
      <div class="materials">
        ${
          application.interviews.length
            ? application.interviews
                .map(
                  (interview) => `
                    <div class="material-item">
                      <div class="material-subrow">
                        <strong>${escapeHtml(interview.label)} · ${escapeHtml(formatDate(interview.date))}</strong>
                        <span class="status-pill ${getInterviewStatusClass(interview.result)}">${escapeHtml(interview.result)}</span>
                      </div>
                    </div>
                  `
                )
                .join("")
            : `<span class="detail-note">当前还没有流程记录，建议在收到笔试或面试通知后第一时间补录。</span>`
        }
      </div>
    </div>

    <div class="detail-block">
      <div class="detail-block__label">备注</div>
      <div class="detail-stack">
        <span>${escapeHtml(application.notes)}</span>
        <span class="detail-note">最近一次更新：${escapeHtml(formatDate(application.lastTouched))}</span>
      </div>
    </div>
  `;
}

function bindBoardEvents() {
  const cards = document.querySelectorAll(".kanban-card");
  const columns = document.querySelectorAll(".kanban-column");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = Number(card.dataset.id);
      render();
    });

    card.addEventListener("dragstart", () => {
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });
  });

  columns.forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("drag-over");
      const dragging = document.querySelector(".kanban-card.dragging");
      if (!dragging) return;

      const id = Number(dragging.dataset.id);
      const target = applications.find((item) => item.id === id);
      if (!target) return;

      target.stage = column.dataset.stage;
      target.lastTouched = formatInputDate(TODAY);
      if (!target.followUpDate && !isClosedStage(target.stage) && target.stage !== "wishlist") {
        target.followUpDate = formatInputDate(addDays(TODAY, 3));
      }

      state.selectedId = id;
      render();
    });
  });
}

function ensureSelectedVisible(appList) {
  if (!appList.some((item) => item.id === state.selectedId)) {
    state.selectedId = appList[0]?.id ?? null;
  }
}

function render() {
  const filtered = getFilteredApplications();
  ensureSelectedVisible(filtered);
  renderStats(filtered);
  renderHealth(filtered);
  renderActionCenter(filtered);
  renderKanban(filtered);
  renderTimeline(filtered);
  renderDetail();
}

function bindControls() {
  elements.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value.trim();
    render();
  });

  elements.typeFilter.addEventListener("change", (event) => {
    state.filters.type = event.target.value;
    render();
  });

  elements.priorityFilter.addEventListener("change", (event) => {
    state.filters.priority = event.target.value;
    render();
  });

  elements.materialFilter.addEventListener("change", (event) => {
    state.filters.materials = event.target.value;
    render();
  });

  elements.stageFilter.addEventListener("change", (event) => {
    state.filters.stage = event.target.value;
    render();
  });

  elements.openAdd.addEventListener("click", () => {
    elements.dialog.showModal();
  });

  elements.closeDialog.addEventListener("click", () => {
    elements.dialog.close();
  });

  elements.cancelDialog.addEventListener("click", () => {
    elements.dialog.close();
  });

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(elements.form);

    applications.unshift({
      id: Date.now(),
      company: formData.get("company"),
      role: formData.get("role"),
      city: formData.get("city"),
      type: formData.get("type"),
      stage: formData.get("stage"),
      deadline: formData.get("deadline"),
      nextAction: formData.get("nextAction"),
      industry: "自定义",
      channel: formData.get("channel") || "手动录入",
      source: "手动新增",
      contactName: "待补充",
      contactRole: "待补充",
      contactEmail: "待补充",
      followUpDate:
        formData.get("followUpDate") ||
        (formData.get("stage") !== "wishlist" && formData.get("stage") !== "closed"
          ? formatInputDate(addDays(TODAY, 3))
          : ""),
      lastTouched: formatInputDate(TODAY),
      resumeVersion: formData.get("resumeVersion") || "",
      salary: "待补充",
      fitNote: "手动录入岗位，建议补充岗位描述、联系人和跟进节奏。",
      descriptionSnapshot: "",
      notes: formData.get("notes") || "暂无补充说明。",
      materials: [
        {
          name: "简历",
          status: formData.get("resumeVersion") ? "complete" : "pending",
          version: formData.get("resumeVersion") || "待补充"
        },
        { name: "成绩单", status: "missing", version: "待准备" }
      ],
      interviews: []
    });

    state.selectedId = applications[0].id;
    elements.form.reset();
    elements.dialog.close();
    render();
  });

  elements.focusUrgent.addEventListener("click", () => {
    state.filters.priority = "high";
    elements.priorityFilter.value = "high";
    render();
  });
}

bindControls();
render();
