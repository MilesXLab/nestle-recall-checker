// --- I18N SYSTEM (STRICT v2.4) ---
const I18N = {
    en: {
        proj_name: "Aegis Global Guard",
        title: "Recall Checker",
        hazard: "⚠️ CEREULIDE (Bacillus cereus toxin) IS HEAT-RESISTANT. BOILING WATER CANNOT DEACTIVATE IT.",
        placeholder: "Enter batch code from packaging...",
        idle: "Enter the batch code found on your product (e.g., at the bottom or top of the packaging) for verification.",
        searching: "Comparing against official regulatory records...",

        status_critical: "STRICT MATCH: OFFICIAL RECALL",
        desc_critical: "This specific batch code is explicitly listed in the official recall announcement.",

        status_caution: "OFFICIAL SERIES RECALL",
        desc_caution: "Your code starts with a production series prefix that has been recalled in its entirety by official sources.",

        status_none: "NO MATCH IN OFFICIAL LIST",
        desc_none: "This specific code is not currently found in our database of officially recalled batches.",

        series_notice: "Official Regulatory Notice: The authority has recalled the ENTIRE production series starting with '[Prefix]'. Individual codes within this series are affected.",

        final_authority: "THE OFFICIAL HOTLINE IS THE ONLY FINAL AUTHORITY.",
        btn_cn: "Call China: 400 616 5015",
        btn_hk: "Call HK: +852 2179 8136",
        btn_uk: "Call UK: 0800 081 8180",
        btn_ph: "Call PH: +63 2 8898 0061",
        view_source: "View Official Source",
        data_ver: "Database Sync: " + RECALL_METADATA.version + " | " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "Strict Compliance Notice",
        disclaimer_p1: "This tool strictly indexes batch codes announced by government regulatory bodies (FSA, FDA, SAMR, CFS).",
        disclaimer_p2: "We do not use fuzzy or probabilistic matching to avoid misidentification and legal risks for merchants.",
        disclaimer_p3: "Always cross-reference with the official hotline or local health authorities for a final determination.",
        disclaimer_btn: "I AGREE TO THE STRICT TERMS",
        label_batch: "Batch Code",
        label_spec: "Specification",
        label_brand: "Brand",
        label_country: "Country/Region",
        label_reason: "Recall Reason",
        label_source: "Official Source",
        label_authoritative_sources: "Authoritative Data Sources",
        github_project: "GitHub Project",
        report_issue: "Report Issue",
        version_update: "📢 Latest Update: {version} | {date} | {count} verified batches from {coverage} | Open Source Project - Star us on GitHub!",
        view_on_github: "View on GitHub",
        help_title: "Found an Issue or Have New Data?",
        help_description: "Help us keep this database accurate! If you find outdated information, discover new recall batches, or encounter any problems, please report them on GitHub.",
        report_on_github: "Report on GitHub Issues",
        help_description_compact: "Found outdated info or new recall data? Help us improve!",
        report_on_github_short: "Report Issue",
        send_email: "Send Email",
        announcement_title: "🚨 URGENT: MASSIVE RECALL EXPANSION (FEB 6, 2026)",
        announcement_body: "Danone has significantly expanded its recall to include dozens of new batches of Cow & Gate and Aptamil in the UK, Ireland, and across Europe. Our database has been updated with 714+ verified batches to date.",
        announcement_link: "Read Official FSA Notice",
        dev_note_title: "👨‍💻 Note from Developer (TechDadShanghai)",
        dev_note_body: "Our baby has been running a high fever this week, causing a 5-day gap since the last update. Also, my Reddit account 'Techdadshanghai' was banned for sharing these safety links. While the appeal is pending, I cannot update on Reddit. However, the database is being updated here constantly as more brands are affected. Please BOOKMARK this page and check regularly.",
        total_visits: "Total Visits",
        families_helped: "Families Helped",
        helpful_button: "This Tool Helped Me",
        stats_note: "Statistics help us understand the actual usage of this tool",
        helpful_thanks: "Thank you! 🙏",
        helpful_already: "Already Counted"
    },
    zh: {
        proj_name: "Aegis 全球盾",
        title: "全球召回核对工具",
        hazard: "⚠️ Cereulide（蜡样芽孢杆菌毒素）具有强耐热性，沸水冲泡无法灭活（高温无效）。",
        placeholder: "输入包装上的批次编码...",
        idle: "请输入产品包装（如罐底或瓶盖）上的批次编码进行严格核对。",
        searching: "正在比对官方监管部门录入的批次...",

        status_critical: "!!! 官方精确匹配：确认召回 !!!",
        desc_critical: "该批次号明确出现在官方公布的召回名单中。",

        status_caution: "!!! 官方整线召回：系列匹配 !!!",
        desc_caution: "您的批次号开头属于官方公告明确指定的整线召回系列码。",

        status_none: "官方名单未命中",
        desc_none: "在当前录入的官方召回名单中未找到该批次。注：非保修证明，请以官方客服为准。",

        series_notice: "官方监管说明：监管部门对以 “[Prefix]” 开头的整条生产线/生产系列下达了召回令，因此该系列下所有产品均在受影响范围。",

        final_authority: "官方热线反馈是唯一的最终判定标准。",
        btn_cn: "拨打大陆客服: 400 616 5015",
        btn_hk: "拨打香港客服: +852 2179 8136",
        btn_uk: "拨打英国客服: 0800 081 8180",
        btn_ph: "拨打菲律宾客服: +63 2 8898 0061",
        view_source: "查看官方原始公告",
        data_ver: "最近同步: " + RECALL_METADATA.version + " | " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "严格合规性协议",
        disclaimer_p1: "本工具严格索引政府监管部门（如国家食安中心、FSA、FDA等）发布的批次名单。",
        disclaimer_p2: "系统不使用模糊匹配或过度推断逻辑，以避免误导消费者或导致商家名誉损失。",
        disclaimer_p3: "查询结果仅供参考。继续使用即代表您同意：最终结论以品牌官方或当地食安部门回复为准。",
        disclaimer_btn: "我已知晓并同意协议",
        label_batch: "批次编号",
        label_spec: "规格/重量",
        label_brand: "产品品牌",
        label_country: "所属国家/地区",
        label_reason: "召回原因",
        label_source: "权威判定源",
        label_authoritative_sources: "权威数据来源 (同步官方)",
        github_project: "GitHub 项目",
        report_issue: "反馈问题",
        version_update: "📢 最新更新：{version} | {date} | 已验证 {count} 个批次来自 {coverage} | 开源项目 - 欢迎在 GitHub 上给我们加星！",
        view_on_github: "在 GitHub 上查看",
        help_title: "发现问题或有新数据？",
        help_description: "帮助我们保持数据库的准确性！如果您发现过时信息、新的召回批次或遇到任何问题，请在 GitHub 上报告。",
        report_on_github: "在 GitHub Issues 上报告",
        help_description_compact: "发现过时信息或新的召回数据？帮助我们改进！",
        report_on_github_short: "报告问题",
        send_email: "发送邮件",
        announcement_title: "🚨 紧急状态：召回范围剧烈扩大 (2026年2月6日)",
        announcement_body: "达能集团 (Danone) 大幅扩大了召回范围，新增了数十个英国及爱尔兰市场的牛栏 (Cow & Gate) 和爱他美 (Aptamil) 批次。本工具数据库已完成深度补全，目前包含全球 714 个已核实批次。",
        announcement_link: "查看英国 FSA 官方公告",
        dev_note_title: "👨‍💻 开发者 (TechDadShanghai) 指南",
        dev_note_body: "在这特别说明：因为本周宝宝一直发高烧，距离上次大更新已有 5 天时间。同时我的 Reddit 账号 Techdadshanghai 因分享这些安全链接被意外封禁。申诉正在进行中，但在此期间我无法在 Reddit 及时发布动态。请放心，本站召回信息一直在持续同步，且涉及的品牌和批次还在增加。请务必【收藏此地址】，并定期查看核对以确保宝宝安全。",
        total_visits: "总访问量",
        families_helped: "帮助的家庭",
        helpful_button: "这个工具帮到我了",
        stats_note: "统计数据帮助我们了解工具的实际使用情况",
        helpful_thanks: "感谢您！🙏",
        helpful_already: "已统计"
    }
};

const REASON_MAP = {
    // Chinese Bases
    "预防性召回：个别原材料存在蜡样芽孢杆菌代谢物（Cereulide）风险": {
        en: "Precautionary recall: Risk of Cereulide (Bacillus cereus toxin) in certain raw materials",
        zh: "预防性召回：个别原材料存在蜡样芽孢杆菌代谢物（Cereulide）风险"
    },
    "预防性召回：蜡样芽孢杆菌代谢物风险 (Cereulide)": {
        en: "Precautionary recall: Cereulide toxin risk",
        zh: "预防性召回：蜡样芽孢杆菌代谢物风险 (Cereulide)"
    },
    // English Bases
    "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)": {
        en: "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
        zh: "预防性召回：可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    },
    "Precautionary verification: Quality concern related to raw material": {
        en: "Precautionary verification: Quality concern related to raw material",
        zh: "预防性核查：涉及原材料的质量问题"
    },
    "Microbial contamination (Cereulide)": {
        en: "Microbial contamination (Cereulide)",
        zh: "微生物污染 (Cereulide)"
    },
    "Precautionary recall: Microbial contamination (Cereulide)": {
        en: "Precautionary recall: Microbial contamination (Cereulide)",
        zh: "预防性召回：微生物污染 (Cereulide)"
    },
    "Precautionary recall: Possible presence of Cereulide toxin": {
        en: "Precautionary recall: Possible presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Precautionary recall: Potential presence of Cereulide toxin": {
        en: "Precautionary recall: Potential presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Voluntary Recall: Detection of low levels of cereulide in a raw material": {
        en: "Voluntary Recall: Detection of low levels of cereulide in a raw material",
        zh: "自愿召回：在原材料中检测到低水平的 Cereulide"
    },
    "Precautionary recall: Cereulide Produced by Bacillus Cereus": {
        en: "Precautionary recall: Cereulide Produced by Bacillus Cereus",
        zh: "预防性召回：蜡样芽孢杆菌产生的 Cereulide 毒素"
    },
    "Precautionary recall: Cereulide toxin risk": {
        en: "Precautionary recall: Cereulide toxin risk",
        zh: "预防性召回：Cereulide 毒素风险"
    },
    "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid": {
        en: "Precautionary recall: Possible presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Rappel de précaution : Présence potentielle de toxin (Céréulide)": {
        en: "Precautionary recall: Potential presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    }
};

function getTranslatedReason(reason, lang) {
    if (REASON_MAP[reason] && REASON_MAP[reason][lang]) {
        return REASON_MAP[reason][lang];
    }
    return reason; // Fallback to original
}

// --- LANGUAGE DETECTION ---
let currentLang = 'en'; // Default to English
if (localStorage.getItem('preferred_lang')) {
    currentLang = localStorage.getItem('preferred_lang');
}

// UI Elements
const langToggle = document.getElementById('langToggle');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const clearBtn = document.getElementById('clearBtn');
const disclaimerModal = document.getElementById('disclaimerModal');
const acceptBtn = document.getElementById('acceptBtn');

// Normalization Engine
function normalizeBatch(code) {
    if (!code) return { sanitized: "", fuzzy: "" };
    let sanitized = code.toString().trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    const ocrMap = { 'O': '0', 'I': '1', 'L': '1', 'S': '5', 'B': '8', 'Z': '2' };
    let fuzzy = sanitized.split('').map(char => ocrMap[char] || char).join('');
    return { sanitized, fuzzy };
}

const REGION_FLAGS = {
    "IE_FSAI": "🇮🇪",
    "AT_AGES": "🇦🇹",
    "UK_FSA": "🇬🇧",
    "SG_SFA": "🇸🇬",
    "CZ_MZD": "🇨🇿",
    "BR_ANVISA": "🇧🇷",
    "MX_COFEPRIS_N": "🇲🇽",
    "MX_COFEPRIS_A": "🇲🇽",
    "PH_FDA": "🇵🇭",
    "FR_CN": "🇫🇷",
    "CN_SAMR": "🇨🇳",
    "HK_CFS": "🇨🇳",
    "AU_FSANZ": "🇦🇺",
    // Fallback/Legacy
    "DE_NESTLE": "🇩🇪",
    "BE_LU_NESTLE": "🇧🇪"
};

const COUNTRY_FLAGS = {
    "UK": "🇬🇧",
    "Ireland": "🇮🇪",
    "Austria": "🇦🇹",
    "Germany": "🇩🇪",
    "Singapore": "🇸🇬",

    "Czech Republic": "🇨🇿",
    "Brazil": "🇧🇷",
    "Mexico": "🇲🇽",
    "Philippines": "🇵🇭",
    "France": "🇫🇷",
    "China (Mainland)": "🇨🇳",
    "China (Cross-border)": "🇨🇳",
    "Hong Kong": "🇨🇳",
    "Australia/NZ": "🇦🇺"
};

function updateLang() {
    document.querySelector('[data-i18n="project_name"]').textContent = I18N[currentLang].proj_name;
    document.querySelector('[data-i18n="title"]').textContent = I18N[currentLang].title;
    document.querySelector('[data-i18n="hazard_info"]').textContent = I18N[currentLang].hazard;
    document.querySelector('[data-i18n="sources_title"]').textContent = I18N[currentLang].label_authoritative_sources;
    document.getElementById('searchInput').placeholder = I18N[currentLang].placeholder;

    // Disclaimer update
    document.querySelector('#disclaimerModal h3').textContent = I18N[currentLang].disclaimer_title;
    const ps = document.querySelectorAll('#disclaimerModal p');
    ps[0].textContent = I18N[currentLang].disclaimer_p1;
    ps[1].textContent = I18N[currentLang].disclaimer_p2;
    ps[2].textContent = I18N[currentLang].disclaimer_p3;
    acceptBtn.textContent = I18N[currentLang].disclaimer_btn;

    document.getElementById('authoritativeFooter').innerHTML = `
        <p class="text-[10px] text-slate-400 mb-2 text-center">${I18N[currentLang].data_ver}</p>
        <p class="text-xs text-slate-500 font-bold text-center">${I18N[currentLang].final_authority}</p>
    `;

    // Global Sources section
    const sourcesHtml = OFFICIAL_SOURCES.map(s => `
        <a href="${s.url}" target="_blank" class="block p-5 glass-card rounded-[1.5rem] text-left hover:bg-white transition-all border border-slate-100 shadow-sm relative overflow-hidden group h-full">
            <div class="flex justify-between items-start relative z-10">
                <div class="flex items-start space-x-3">
                    <span class="text-2xl">${REGION_FLAGS[s.id] || "🌐"}</span>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">${s.date}</p>
                        <p class="text-[13px] font-black text-slate-800 leading-tight">${s.name}</p>
                    </div>
                </div>
                <span class="text-xs text-blue-500 font-bold group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">↗</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
    `).join('');

    document.getElementById('sourcesList').innerHTML = sourcesHtml;

    // Update GitHub links
    const githubLinks = document.querySelectorAll('[data-i18n="github_project"]');
    githubLinks.forEach(link => link.textContent = I18N[currentLang].github_project);

    const issueLinks = document.querySelectorAll('[data-i18n="report_issue"]');
    issueLinks.forEach(link => link.textContent = I18N[currentLang].report_issue);

    // Update GitHub button
    const viewOnGithubLinks = document.querySelectorAll('[data-i18n="view_on_github"]');
    viewOnGithubLinks.forEach(link => link.textContent = I18N[currentLang].view_on_github);

    // Update help/contribution notice
    const helpTitle = document.querySelector('[data-i18n="help_title"]');
    if (helpTitle) helpTitle.textContent = I18N[currentLang].help_title;

    const helpDescription = document.querySelector('[data-i18n="help_description"]');
    if (helpDescription) helpDescription.textContent = I18N[currentLang].help_description;

    const reportOnGithub = document.querySelectorAll('[data-i18n="report_on_github"]');
    reportOnGithub.forEach(link => link.textContent = I18N[currentLang].report_on_github);

    // Update compact help notice
    const helpDescriptionCompact = document.querySelector('[data-i18n="help_description_compact"]');
    if (helpDescriptionCompact) helpDescriptionCompact.textContent = I18N[currentLang].help_description_compact;

    const reportOnGithubShort = document.querySelectorAll('[data-i18n="report_on_github_short"]');
    reportOnGithubShort.forEach(link => link.textContent = I18N[currentLang].report_on_github_short);

    // Update email button
    const sendEmailLinks = document.querySelectorAll('[data-i18n="send_email"]');
    sendEmailLinks.forEach(link => link.textContent = I18N[currentLang].send_email);

    // Update version scrolling banner
    updateVersionBanner();

    // Update announcements
    renderAnnouncement();
    renderDevNote();

    // Force re-render of current view
    if (searchInput.value.trim().length > 0) {
        handleSearch();
    } else {
        renderIdle();
    }
}

// Version Update Banner Function (Now in footer - static display)
function updateVersionBanner() {
    const versionText = I18N[currentLang].version_update
        .replace('{version}', RECALL_METADATA.version)
        .replace('{date}', RECALL_METADATA.lastUpdated)
        .replace('{count}', RECALL_METADATA.totalCount)
        .replace('{coverage}', RECALL_METADATA.coverage);

    const scrollContent = document.getElementById('versionScrollContent');
    if (!scrollContent) return;

    // Static display in footer (no scrolling needed)
    scrollContent.textContent = versionText;
}

// Announcement Renderer
// Announcement Renderer (Scrolling Banner)
function renderAnnouncement() {
    const container = document.getElementById('recallScrollContent');
    if (!container) return; // Guard clause

    const t = I18N[currentLang];

    const linkUrl = "https://www.produktwarnung.eu/2026/02/05/rueckruf-gesundheitsgefahr-danone-ruft-aptamil-babynahrung-zurueck/36778";

    // Scrolling Content: Icon + Title + Body + Link (Hazard warning removed - already in sticky banner)
    const itemHtml = `
        <a href="${linkUrl}" target="_blank" class="inline-flex items-center mx-8 hover:text-red-100 transition-colors py-1 group">
            <span class="text-lg mr-2 animate-pulse">📢</span>
            <span class="font-black uppercase tracking-tight mr-2 underline decoration-red-300 underline-offset-4">${t.announcement_title}</span>
            <span class="opacity-90 mr-3 text-xs font-medium hidden sm:inline">${t.announcement_body}</span>
            <span class="font-bold bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider group-hover:bg-white group-hover:text-red-600 transition-all">🔗 ${t.announcement_link}</span>
        </a>
    `;

    container.innerHTML = itemHtml + itemHtml; // Duplicate for smooth scroll

    // Clean up old bottom container if it still exists
    const oldContainer = document.getElementById('announcementContainer');
    if (oldContainer) oldContainer.remove();
}

function renderDevNote() {
    const container = document.getElementById('devNoteContainer');
    if (!container) return;

    const t = I18N[currentLang];

    // Developer Personal Note Card - positioned after authoritative sources
    container.innerHTML = `
        <div class="glass-card rounded-2xl p-5 sm:p-6 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/40 to-transparent shadow-md relative overflow-hidden text-left">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100/60 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-blue-200/60 shadow-sm">
                    👨‍💻
                </div>
                <div class="flex-1 space-y-2 min-w-0">
                    <h3 class="text-[11px] font-black text-blue-600 uppercase tracking-wider leading-tight">${t.dev_note_title}</h3>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        ${t.dev_note_body}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function handleSearch() {
    const rawInput = searchInput.value;
    const { sanitized, fuzzy } = normalizeBatch(rawInput);

    if (sanitized.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
        renderIdle();
        return;
    }

    // STRICT MATCHING LOGIC (v2.5) - Improved Normalization
    // 1. Exact Match: Must match the full code in database (non-series)
    const exactMatch = RECALL_DATA.find(item => {
        if (item.isSeries) return false;
        // Normalize both sides for comparison to handle hyphens/spaces
        const dbSanitized = normalizeBatch(item.code).sanitized;
        const dbFuzzy = normalizeBatch(item.code).fuzzy;
        return sanitized === dbSanitized || fuzzy === dbFuzzy || sanitized === item.code || fuzzy === item.code;
    });

    // 2. Series Match: Must match code marked as isSeries in database
    const seriesMatch = RECALL_DATA.find(item => {
        if (!item.isSeries) return false;
        const dbSanitized = normalizeBatch(item.code).sanitized;
        return sanitized.startsWith(dbSanitized) || sanitized.startsWith(item.code);
    });

    if (exactMatch) {
        renderResult('critical', sanitized, exactMatch);
    } else if (seriesMatch) {
        renderResult('caution', sanitized, seriesMatch);
    } else if (sanitized.length >= 4) {
        renderResult('none', sanitized);
    }
}

function renderIdle() {
    resultsContainer.innerHTML = `
        <div class="text-center py-6 space-y-8 slide-up">
            <div class="bottle-container status-idle mx-auto" style="width: 140px; height: 160px;">
                <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                    <!-- Base Character Body (Premium Vector Style) -->
                    <g fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                        <!-- Nipple (Soft Peach) -->
                        <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="#FFE4E6" />
                        <!-- Blue Ribbed Cap (Little Star Style) -->
                        <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="#3B82F6" />
                        <!-- Body (Pigeon Style) -->
                        <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                    </g>
                    
                    <!-- Sleepy/Idle Expression -->
                    <g stroke="#94A3B8" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round">
                        <path d="M60 135 Q65 130 70 135" /> 
                        <path d="M90 135 Q95 130 100 135" />
                        <path d="M75 160 Q80 165 85 160" />
                    </g>
                    
                </svg>
            </div>
            <p class="text-slate-400 font-bold px-12 text-sm leading-relaxed max-w-sm mx-auto">${I18N[currentLang].idle}</p>
        </div>
    `;
}

function renderResult(type, code, itemData = null) {
    const t = I18N[currentLang];
    let config = {
        bg: "bg-slate-100",
        border: "border-slate-300",
        text: "text-slate-900",
        bottleStatus: "status-safe",
        themeColor: "#3B82F6", // Default Safe uses Blue (neutral, not misleading)
        title: t.status_none,
        desc: t.desc_none,
        sourceBtn: "",
        seriesLabel: ""
    };

    if (type === 'critical' || type === 'caution') {
        const isCritical = type === 'critical';
        const accentColor = isCritical ? "text-red-700" : "text-amber-800";
        const themeHex = isCritical ? "#B91C1C" : "#D97706";
        const borderColor = isCritical ? "border-red-600" : "border-amber-500";
        const bgColor = isCritical ? "bg-red-50" : "bg-amber-50";

        config = {
            bg: bgColor,
            border: borderColor,
            text: accentColor,
            themeColor: themeHex,
            bottleStatus: isCritical ? "status-danger" : "status-warning",
            title: isCritical ? t.status_critical : t.status_caution,
            desc: isCritical ? t.desc_critical : t.desc_caution,
            seriesLabel: type === 'caution' ? `
                <div class="mt-4 p-4 bg-amber-100 border-l-4 border-amber-600 rounded-lg text-xs text-amber-950 leading-relaxed font-semibold">
                    ${t.series_notice.replace('[Prefix]', itemData.code)}
                </div>` : "",
            sourceBtn: `
                <a href="${itemData.docUrl}" target="_blank" class="block w-full text-center py-4 border-2 ${borderColor} ${accentColor} rounded-2xl text-xs font-black uppercase tracking-widest mt-2 hover:opacity-80 transition-all shadow-sm">
                    🔗 ${t.view_source}
                </a>
            `
        };
    }

    const detailGrid = itemData ? `
        <div class="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_brand}</p>
                <p class="text-sm font-black text-slate-800">${itemData.subBrand || 'Nestlé'}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_spec}</p>
                <p class="text-sm font-black text-slate-800">${itemData.specification || '800g'}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_country}</p>
                <p class="text-sm font-black text-slate-800 flex items-center gap-2">
                    <span>${COUNTRY_FLAGS[itemData.country] || "🌐"}</span>
                    ${itemData.country}
                </p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_source}</p>
                <p class="text-[11px] font-bold text-blue-600 underline truncate">${itemData.sourceDisplay}</p>
            </div>
            <div class="col-span-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_reason}</p>
                <p class="text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg mt-1 border border-red-100">${getTranslatedReason(itemData.reason, currentLang)}</p>
            </div>
        </div>
    ` : '';

    resultsContainer.innerHTML = `
        <div class="glass-card rounded-[2.5rem] overflow-hidden border-2 ${config.border} slide-up shadow-2xl relative">
            <div class="p-6 space-y-4">
                <!-- Premium Little Star SVG Character -->
                <div class="${type === 'critical' ? 'w-52 h-64' : 'w-48 h-60'} mx-auto transition-all duration-700">
                    <div class="bottle-container ${config.bottleStatus} w-full h-full">
                        <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="bodyClip">
                                    <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" />
                                </clipPath>
                            </defs>
                            
                            <!-- Premium Outlines & Base -->
                            <g fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                                <!-- Nipple -->
                                <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="#FFE4E6" />
                                <!-- Cap (Dynamic Theme Color) -->
                                <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="${config.themeColor}" />
                                <!-- Body Base -->
                                <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                            </g>
                            
                            <!-- Dynamic Liquid Fill -->
                            <g clip-path="url(#bodyClip)">
                                <path class="milk-fill" d="M20 210 L140 210 L140 100 Q80 90 20 100 Z" />
                                <!-- Premium Inner Decorations (Sparkles/Bubbles) -->
                                <circle cx="50" cy="180" r="4" fill="white" opacity="0.4" />
                                <circle cx="110" cy="190" r="6" fill="white" opacity="0.3" />
                                <circle cx="80" cy="170" r="3" fill="white" opacity="0.5" />
                            </g>
                            

                            <!-- Emotional Cartoon Expression -->
                            <g class="bottle-face">
                                ${type === 'none' ? `
                                    <!-- Status 1: Safe - Happy & Sparkling -->
                                    <g fill="#1E293B">
                                        <circle cx="60" cy="122" r="12" /> 
                                        <circle cx="100" cy="122" r="12" />
                                        <circle cx="66" cy="116" r="4.5" fill="white" /> 
                                        <circle cx="106" cy="116" r="4.5" fill="white" />
                                        <circle cx="56" cy="129" r="2" fill="white" opacity="0.6" />
                                        <circle cx="96" cy="129" r="2" fill="white" opacity="0.6" />
                                    </g>
                                    <path d="M72 132 Q80 138 88 132" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
                                    <ellipse cx="45" cy="135" rx="8" ry="4" fill="#FDA4AF" opacity="0.8" />
                                    <ellipse cx="115" cy="135" rx="8" ry="4" fill="#FDA4AF" opacity="0.8" />
                                ` : type === 'caution' ? `
                                    <!-- Status 2: Warning - Worried -->
                                    <g fill="#1E293B">
                                        <circle cx="65" cy="125" r="6" /> 
                                        <circle cx="95" cy="125" r="6" />
                                    </g>
                                    <!-- Eyebrow raised -->
                                    <path d="M85 110 Q100 100 115 110" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round" />
                                    <path d="M75 145 L85 145" fill="none" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
                                    <!-- Caution Icon -->
                                    <g transform="translate(145, 80)">
                                        <path d="M0 -15 L15 15 L-15 15 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="3" />
                                        <text y="10" text-anchor="middle" fill="white" font-size="16" font-weight="950" font-family="Arial">!</text>
                                    </g>
                                ` : `
                                    <!-- Status 3: Danger - Teary & Sad -->
                                    <g fill="#1E293B">
                                        <path d="M50 125 Q60 110 70 125" fill="none" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
                                        <path d="M90 125 Q100 110 110 125" fill="none" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
                                    </g>
                                    <path d="M70 148 Q80 138 90 148" fill="none" stroke="#1E293B" stroke-width="5" stroke-linecap="round" />
                                    
                                    <!-- Animated Tears -->
                                    <circle cx="55" cy="130" r="5" fill="#60A5FA" opacity="0.9">
                                        <animate attributeName="cy" values="130;185" dur="1s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.9;0" dur="1s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="105" cy="130" r="5" fill="#60A5FA" opacity="0.9">
                                        <animate attributeName="cy" values="130;185" dur="1.4s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.9;0" dur="1.4s" repeatCount="indefinite" />
                                    </circle>
                                `}
                            </g>
                        </svg>
                    </div>
                </div>

                <div class="text-center">
                    <span class="text-[9px] font-black uppercase tracking-[0.2em] ${config.text} opacity-40 block mb-0.5">${t.label_batch}</span>
                    <h3 class="${type === 'critical' ? 'text-4xl' : 'text-3xl'} font-black ${config.text} tracking-tight font-sans">${code}</h3>
                    ${itemData ? `<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">${itemData.product}</p>` : ''}
                </div>
                
                <div class="py-4 border-t border-slate-100 text-center">
                    <div class="flex items-center justify-center space-x-2 mb-1.5">
                        ${type === 'critical' ? '<span class="text-xl">⚠️</span>' : ''}
                        <p class="${type === 'critical' ? 'text-xl' : 'text-lg'} font-black ${config.text} uppercase tracking-tight">${config.title}</p>
                    </div>
                    <p class="text-[11px] text-slate-500 font-bold leading-snug max-w-xs mx-auto">${config.desc}</p>
                    ${config.seriesLabel}
                </div>

                ${detailGrid}

                <div class="space-y-4 pt-2">
                    <div class="grid grid-cols-1 gap-3">
                        ${config.sourceBtn}
                        ${getHotlineButtons(itemData)}
                    </div>
                </div>
            </div>
            ${type === 'critical' ? '<div class="absolute top-0 left-0 w-full h-1 bg-red-600 animate-pulse z-20"></div>' : ''}
        </div>
    `;
}

// Event Listeners
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferred_lang', currentLang);
    updateLang();
});

acceptBtn.addEventListener('click', () => {
    disclaimerModal.classList.add('hidden');
    localStorage.setItem('aegis_agreed', 'true');
});

if (!localStorage.getItem('aegis_agreed')) {
    disclaimerModal.classList.remove('hidden');
} else {
    disclaimerModal.classList.add('hidden');
}

searchInput.addEventListener('input', handleSearch);

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderIdle();
    clearBtn.classList.add('hidden');
    searchInput.focus();
});

updateLang();

// ========== Stats and Helpful Button Feature ==========
// Using CounterAPI v2 for stable statistics (api.counterapi.dev)

const STATS_API_BASE = 'https://api.counterapi.dev/v1';
const STATS_NS = 'nestle_recall_checker';

// Baseline stats (Historical data from previous versions)
const BASELINE_VIEWS = 5840;
const BASELINE_HELPFUL = 642;
async function initializeStats() {
    const pageViewsEl = document.getElementById('pageViews');
    const helpfulCountEl = document.getElementById('helpfulCount');

    if (pageViewsEl) pageViewsEl.textContent = formatNumber(BASELINE_VIEWS);
    if (helpfulCountEl) {
        const localBonus = localStorage.getItem('aegis_helpful_clicked') ? 1 : 0;
        helpfulCountEl.textContent = formatNumber(BASELINE_HELPFUL + localBonus);
    }

    try {
        const fetchWithTimeout = (url, timeout = 5000) => {
            return Promise.race([
                fetch(url),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
            ]);
        };

        const viewsRes = await fetchWithTimeout(`${STATS_API_BASE}/${STATS_NS}/page_views/up`);
        if (viewsRes.ok) {
            const data = await viewsRes.json();
            if (data && data.count !== undefined && pageViewsEl) {
                pageViewsEl.textContent = formatNumber(BASELINE_VIEWS + data.count);
            }
        }

        const helpfulRes = await fetchWithTimeout(`${STATS_API_BASE}/${STATS_NS}/helpful_count`);
        if (helpfulRes.ok) {
            const data = await helpfulRes.json();
            if (data && data.count !== undefined && helpfulCountEl) {
                helpfulCountEl.textContent = formatNumber(BASELINE_HELPFUL + data.count);
            }
        }
    } catch (error) {
        console.warn('[Stats] API unreachable.', error.message);
    }
}

function formatNumber(num) {
    if (num === null || num === undefined) return '---';
    return num.toLocaleString();
}

const helpfulBtn = document.getElementById('helpfulBtn');
const HELPFUL_STORAGE_KEY = 'aegis_helpful_clicked';
if (localStorage.getItem(HELPFUL_STORAGE_KEY)) {
    const t = I18N[currentLang];
    helpfulBtn.disabled = true;
    helpfulBtn.querySelector('.btn-text').textContent = t.helpful_already;
    helpfulBtn.classList.add('opacity-50', 'cursor-not-allowed');
    helpfulBtn.style.background = 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)';
}

helpfulBtn.addEventListener('click', async () => {
    if (localStorage.getItem(HELPFUL_STORAGE_KEY)) return;
    const t = I18N[currentLang];
    const btnText = helpfulBtn.querySelector('.btn-text');
    const countEl = document.getElementById('helpfulCount');
    localStorage.setItem(HELPFUL_STORAGE_KEY, 'true');
    helpfulBtn.classList.add('clicked');
    btnText.textContent = t.helpful_thanks;
    if (countEl) {
        const currentVal = parseInt(countEl.textContent.replace(/,/g, '')) || BASELINE_HELPFUL;
        countEl.textContent = formatNumber(currentVal + 1);
    }
    try {
        const response = await fetch(`${STATS_API_BASE}/${STATS_NS}/helpful_count/up`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.count !== undefined && countEl) {
                countEl.textContent = formatNumber(BASELINE_HELPFUL + data.count);
            }
        }
    } catch (error) {
        console.error('[Stats] Increment failed:', error);
    }
    setTimeout(() => {
        helpfulBtn.classList.remove('clicked');
        btnText.textContent = t.helpful_already;
        helpfulBtn.disabled = true;
        helpfulBtn.classList.add('opacity-50', 'cursor-not-allowed');
        helpfulBtn.style.background = 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)';
    }, 2000);
});

initializeStats();
