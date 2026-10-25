# medviachina.com 上线、SEO 与移动端审核 — 2026-10-25

## 1. 范围、证据与限制

- 模式：审核 + 已授权代码修复；未发布生产环境。
- 项目：MedVia China，Vinext/Next 16、React 19、Cloudflare Workers/D1。
- 市场与语言：国际患者，英文与简体中文。
- 转化：邮件、WhatsApp、咨询表单。
- 覆盖：全部 20 个公开路由、robots.txt、sitemap.xml、66 个发现的内部 URL、320/390 移动端首屏渲染、生产构建。
- 证据：本地 HTTP 抓取、HTML 元数据、代码、资源体积、Chrome 移动尺寸截图、ESLint、TypeScript、生产构建。
- 未验证：生产 DNS/HTTPS/CDN、真实 D1 写入、Resend 发信、Search Console、真实流量/Core Web Vitals、医院/专家/数量与价格声明的业务证明。

## 2. 上线结论

代码与公开页面已达到“可部署验收”阶段，但在完成生产环境变量、D1、Resend、DNS/HTTPS和真实表单测试之前，不能判定为“可正式对外上线”。生产构建、20 个公开路由、SEO 基础输出和移动端首屏均已通过本地检查。

## 3. 最高价值发现

| ID | 发现 | 状态 | 影响 | 优先级 | 动作 |
|---|---|---|---|---|---|
| TECH-01 | 42 个专科/指南内部链接返回 404 | 已修复 | 用户与爬虫进入死页 | P0 | 专科链接改到现有频道锚点；未建详情的指南去掉虚假“阅读全文”链接 |
| TECH-02 | sitemap 只含 8 个 URL，漏掉核心频道 | 已修复 | 核心商业页发现效率降低 | P1 | 扩展为全部 20 个公开 URL |
| TECH-03 | 专家、专科与法律页 canonical/hreflang/独立标题不完整 | 已修复 | 双语与重复页信号不清 | P1 | 补齐 canonical、语言 alternate、x-default 和法律页元数据 |
| TECH-04 | 价格页没有 H1 | 已修复 | 页面主题层级不完整 | P1 | 频道页首标题输出 H1，首页复用时仍为 H2 |
| PERF-01 | 移动与桌面 Banner PNG 合计约 3.97MB | 已修复 | 首屏 LCP/流量风险 | P1 | 转为 WebP：移动 118KB、桌面 107KB，约减少 94% |
| MOBILE-01 | 320px 下横向位移可能把 CTA 推出视口 | 已修复 | 小屏 CTA 可用性 | P1 | 仅在 ≥380px 启用左移，小屏恢复安全边距 |
| CONV-01 | 表单生产存储与邮件通知未验证 | 未验证 | 询盘可能丢失 | P0 | 配置 D1、Resend、收件邮箱、发件域名和随机 salt 后做授权测试 |
| TRUST-01 | 10000+、40、100+等业务数字及医院/专家资料缺少审核证据 | 未验证 | 医疗相关信任与合规风险 | P1 | 上线前由业务负责人提供来源、日期与使用授权 |
| MEASURE-01 | 未发现 Search Console/GA4 或同类转化测量 | 问题 | 无法评估自然流量和询盘漏斗 | P1 | 配置 Search Console、分析工具及同意机制，区分点击/提交/有效询盘 |
| LANG-01 | 根文档 html lang 固定为 en，中文内容仅在子容器声明 zh-CN | 待优化 | 辅助技术与语言识别不够理想 | P2 | 部署框架支持后输出路由级 html lang；当前 hreflang 和内容范围语言已存在 |

## 4. 关键词与页面映射

| 需求 | 关键词簇 | 意图 | 当前 URL | 转化动作 | 状态 |
|---|---|---|---|---|---|
| 上海公立医院选择 | Shanghai public hospitals / 上海公立医院 | 比较医院 | `/hospitals`, `/zh/hospitals` | 咨询就医路径 | 已覆盖 |
| 上海专家匹配 | Shanghai medical specialists / 上海知名专家 | 查找专家 | `/specialists`, `/zh/specialists` | 联系预约/科室咨询 | 已覆盖 |
| 按疾病找专科 | Shanghai medical specialties / 上海优势专科 | 选择科室 | `/specialties`, `/zh/specialties` | 咨询医院与专家 | 已覆盖 |
| 上海治疗费用 | treatment costs Shanghai / 上海治疗费用 | 费用比较 | `/pricing`, `/zh/pricing` | 联系确认范围与费用 | 已覆盖 |
| 国际患者协调服务 | medical concierge Shanghai / 来沪就医协调 | 商业服务 | `/services`, `/zh/services` | WhatsApp/邮件 | 已覆盖 |
| 来华就医准备 | medical travel China guide / 来华就医指南 | 信息研究 | `/guides`, `/zh/guides` | 进入服务或咨询 | 仅摘要；详情内容待扩展 |

## 5. 分阶段任务

### 阶段 1：发布前必须完成

1. 设置 `NEXT_PUBLIC_SITE_URL=https://medviachina.com`、强随机 `RATE_LIMIT_SALT`、D1 `DB` 绑定、`RESEND_API_KEY`、`ENQUIRY_TO_EMAIL`、已验证域名的 `ENQUIRY_FROM_EMAIL`。
2. 在预发布环境授权提交一条测试咨询，验证 D1 记录、通知邮件、成功提示、限流与错误日志。
3. 验证 apex/www/HTTP 到唯一 HTTPS 主机的 301，检查安全响应头和 sitemap 可访问性。
4. 业务负责人确认医院、专家、费用、保险与服务数量等声明及来源。

### 阶段 2：发布后 1–2 周

1. 验证 Google Search Console，提交 sitemap，检查页面索引、canonical 和结构化数据。
2. 部署隐私合规的分析与同意管理，记录 CTA 点击、表单开始、成功提交、有效询盘和报价。
3. 用 PageSpeed Insights/CrUX 检查移动端真实 LCP、INP、CLS；本次仅完成本地诊断。

### 阶段 3：内容增长

1. 将 9 个指南摘要扩展为有来源、有作者/审核日期的独立指南，再恢复详情链接。
2. 为医院/专家资料增加来源 URL、资料更新时间、可预约状态和明确免责声明。
3. 依据 Search Console 查询数据决定新页面，不批量制造城市或关键词门页。

## 6. 修复验收

| 检查 | 结果 |
|---|---|
| ESLint | 通过 |
| TypeScript `--noEmit` | 通过 |
| Vinext 生产构建 | 通过，20 个公开路由 + 1 个 API |
| 20 个公开 URL | 全部 200 |
| 内部链接 | 业务链接无 404；`/zh/` 到 `/zh` 为 308 规范化 |
| sitemap | 20 个 canonical URL |
| title/description/canonical | 20/20 页面输出 |
| H1 | 20/20 页面输出（修复价格频道后） |
| JSON-LD | Organization + WebSite 输出 |
| Banner 资源 | 3.97MB PNG → 225KB WebP（两张合计） |

## 7. 数据基线

Search Console、分析、真实用户性能和询盘数据均未接入，当前基线为“未验证”。发布后按设备、语言、国家和落地页分别记录展现、点击、自然会话、CTA 点击、表单开始、成功提交、有效询盘、报价和成交。

## 8. 依据

- Google Search Central：移动优先索引、canonical、可抓取链接、sitemap 与 Organization 结构化数据官方文档。
- 说明：sitemap 和结构化数据帮助发现与理解页面，不保证收录、排名或富媒体展示。
