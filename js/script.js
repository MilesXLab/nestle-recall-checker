// --- I18N SYSTEM (STRICT v2.4) ---
const I18N = {
    en: {
        proj_name: "Aegis Global Guard",
        title: "Recall Checker",
        hazard: "⚠️ CEREULIDE (Bacillus cereus toxin) IS HEAT-RESISTANT. BOILING WATER CANNOT DEACTIVATE IT.",
        placeholder: "Enter batch code...",
        idle: "Input the batch code from your product for strict safety verification.",
        searching: "Comparing against global regulatory records...",

        status_critical: "STRICT MATCH: OFFICIAL RECALL",
        desc_critical: "This specific batch is explicitly listed in official recall announcements.",

        status_caution: "OFFICIAL SERIES RECALL",
        desc_caution: "This prefix belongs to a production series that has been fully recalled.",

        status_none: "NO MATCH FOUND",
        desc_none: "This batch is not currently in our database of officially recalled products.",

        series_notice: "Regulatory Alert: The authority has recalled the ENTIRE production series '[Prefix]'.",

        final_authority: "THE OFFICIAL BRAND HOTLINE IS THE ONLY FINAL AUTHORITY.",
        btn_cn: "Call China: 400 616 5015",
        btn_hk: "Call HK: +852 2179 8888",
        btn_uk: "Call UK: 0800 081 8180",
        btn_ph: "Call PH: +63 2 8898 0061",
        view_source: "View Official Alert",
        data_ver: "Global Database v" + RECALL_METADATA.version + " | Last Sync: " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "OFFICIAL LICENSE & SAFETY NOTICE",
        disclaimer_p1: "This community project is licensed under CC BY-NC 4.0. It is 100% FREE for public safety use.",
        disclaimer_p2: "❌ SCAM ALERT: Any person or group charging for this content or claiming 'official paid services' related to ChinaOps is FRAUDULENT.",
        disclaimer_p3: "If you encounter any payment requests, please reject them and report to the community immediately.",
        disclaimer_btn: "I AGREE TO THE STRICT TERMS",
        label_batch: "Batch Code",
        label_spec: "Product Info",
        label_brand: "Brand",
        label_country: "Region",
        label_reason: "Reason",
        label_source: "Source",
        label_authoritative_sources: "Authoritative Data Index"
    },
    zh: {
        proj_name: "Aegis 全球盾",
        title: "婴儿奶粉召回核对",
        hazard: "⚠️ Cereulide（蜡样芽孢杆菌毒素）具有强耐热性，沸水冲泡无效（高温无法杀灭）。",
        placeholder: "输入批次编号...",
        idle: "请输入产品罐底或包装上的批次编号进行权威核对。",
        searching: "正在同步全球监管部门名单...",

        status_critical: "!!! 命中官方召回名单 !!!",
        desc_critical: "该批次编号已明确列入官方公布的全球召回名单中。",

        status_caution: "!!! 官方整线召回警告 !!!",
        desc_caution: "该批次属于监管部门下令整线召回的生产系列。",

        status_none: "未发现匹配召回记录",
        desc_none: "当前官方数据库中未发现该批次的召回记录。请以官方热线为准。",

        series_notice: "官方监管说明：监管部门已对以 “[Prefix]” 开头的整条系列下达了召回令。",

        final_authority: "官方品牌热线是召回判定的唯一最终依据。",
        btn_cn: "拨打中国热线: 400 616 5015",
        btn_hk: "拨打香港热线: +852 2179 8888",
        btn_uk: "拨打英国热线: 0800 081 8180",
        btn_ph: "拨打菲律宾热线: +63 2 8898 0061",
        view_source: "查看官方原始公告",
        data_ver: "全球数据库 v" + RECALL_METADATA.version + " | 同步时间: " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "版权协议与安全严正声明",
        disclaimer_p1: "本公益项目基于 CC BY-NC 4.0 协议。对公众永久免费开放，严禁任何形式的商业牟利。",
        disclaimer_p2: "❌ 防骗警告：任何以本内容收费、推出“ChinaOps官方付费服务”的行为均为诈骗。",
        disclaimer_p3: "如遇任何收费要求，请立即拒绝并向社区举报。本工具始终保持纯粹公益性。",
        disclaimer_btn: "我已知晓并同意协议",
        label_batch: "批号",
        label_spec: "产品详情",
        label_brand: "所属品牌",
        label_country: "召回区域",
        label_reason: "召回原因",
        label_source: "权威判定源",
        label_authoritative_sources: "权威数据索引 (同步官方)"
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
    let sanitized = code.toString().trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    const ocrMap = { 'O': '0', 'I': '1', 'L': '1', 'S': '5', 'B': '8', 'Z': '2' };
    let fuzzy = sanitized.split('').map(char => ocrMap[char] || char).join('');
    return { sanitized, fuzzy };
}

const REGION_FLAGS = {
    "CN_DOMESTIC": "🇨🇳",
    "CN_CROSSBORDER": "🌐",
    "UK_FSA_SMA": "🇬🇧",
    "UK_FSA_APTAMIL": "🇬🇧",
    "SG_SFA_DUMEX": "🇸🇬",
    "FR_PICOT": "🇫🇷",
    "PH_FDA": "🇵🇭",
    "HK_CFS": "🇭🇰"
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
        <p class="text-[10px] text-slate-400 mb-2 font-bold">${I18N[currentLang].data_ver}</p>
        <p class="text-[11px] text-slate-600 font-black">${I18N[currentLang].final_authority}</p>
    `;

    // Global Sources section
    const sourcesHtml = OFFICIAL_SOURCES.map(s => `
        <a href="${s.url}" target="_blank" class="block p-6 glass-card rounded-[2rem] text-left hover:bg-white transition-all border border-slate-100 shadow-sm relative overflow-hidden group h-full">
            <div class="flex justify-between items-start relative z-10">
                <div class="flex items-start space-x-4">
                    <span class="text-3xl">${REGION_FLAGS[s.id] || "🌐"}</span>
                    <div>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">${s.date}</p>
                        <p class="text-[14px] font-black text-slate-800 leading-tight">${s.name}</p>
                    </div>
                </div>
                <span class="text-xs text-blue-500 font-bold group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">↗</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
    `).join('');

    document.getElementById('sourcesList').innerHTML = sourcesHtml;

    // Force re-render of current view
    if (searchInput.value.trim().length > 0) {
        handleSearch();
    } else {
        renderIdle();
    }
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

    // STRICT MATCHING LOGIC (v2.4)
    // 1. Exact Match: Must match the full code in database (non-series)
    const exactMatch = RECALL_DATA.find(item =>
        !item.isSeries && (sanitized === item.code || fuzzy === item.code)
    );

    // 2. Series Match: Must match code marked as isSeries in database
    const seriesMatch = RECALL_DATA.find(item =>
        item.isSeries && sanitized.startsWith(item.code)
    );

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
        <div class="text-center py-12 space-y-10 slide-up">
            <div class="relative flex items-center justify-center">
                <div class="bottle-container status-idle mx-auto relative z-10" style="width: 140px; height: 180px;">
                    <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#0F172A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="#EF4444" />
                            <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="#EF4444" />
                            <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                        </g>
                        <g class="bottle-face" opacity="0.3">
                            <g fill="#0F172A">
                                <circle cx="65" cy="125" r="7" /> 
                                <circle cx="95" cy="125" r="7" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <p class="text-slate-400 font-bold px-12 text-sm leading-relaxed max-w-sm mx-auto">${I18N[currentLang].idle}</p>
        </div>
    `;
}

function renderResult(type, code, itemData = null) {
    const t = I18N[currentLang];
    let config = {
        bg: "bg-white",
        bottleStatus: "status-safe",
        themeColor: "#EF4444",
        title: t.status_none,
        desc: t.desc_none,
        sourceBtn: "",
        seriesLabel: ""
    };

    if (type === 'critical' || type === 'caution') {
        const isCritical = type === 'critical';
        const accentColor = isCritical ? "text-red-700" : "text-amber-800";
        const borderColor = isCritical ? "border-red-600" : "border-amber-500";

        config = {
            bg: isCritical ? "bg-red-50" : "bg-amber-50",
            bottleStatus: isCritical ? "status-danger" : "status-warning",
            themeColor: isCritical ? "#B91C1C" : "#F59E0B",
            title: isCritical ? t.status_critical : t.status_caution,
            desc: isCritical ? t.desc_critical : t.desc_caution,
            seriesLabel: type === 'caution' ? `
                <div class="mt-4 p-4 bg-amber-100 border-l-4 border-amber-600 rounded-lg text-xs text-amber-950 font-bold">
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
        <div class="grid grid-cols-2 gap-4 py-8 border-t border-slate-100">
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_brand}</p>
                <p class="text-sm font-black text-slate-900">${itemData.brand}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_spec}</p>
                <p class="text-sm font-black text-slate-900">${itemData.specification}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_country}</p>
                <p class="text-sm font-black text-slate-900">${itemData.country}</p>
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
        <div class="glass-card rounded-[2.8rem] overflow-hidden border border-slate-200 shadow-2xl slide-up">
            <div class="py-14 px-8 space-y-10">
                <!-- Authentic Initial Bottle Effect -->
                <div class="relative flex items-center justify-center h-48">
                    <div class="bottle-halo absolute"></div>
                    <div class="bottle-container ${config.bottleStatus} relative z-10" style="width: 130px; height: 170px;">
                        <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="bodyClip">
                                    <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" />
                                </clipPath>
                            </defs>
                            <g fill="none" stroke="#0F172A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="${config.themeColor}" />
                                <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="${config.themeColor}" />
                                <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                            </g>
                            <g clip-path="url(#bodyClip)">
                                <path class="milk-fill" d="M20 210 L140 210 L140 110 Q80 100 20 110 Z" />
                            </g>
                            <g class="bottle-face">
                                ${type === 'none' ? `
                                    <g fill="#0F172A">
                                        <circle cx="65" cy="130" r="7" /> 
                                        <circle cx="95" cy="130" r="7" />
                                    </g>
                                    <path d="M72 152 Q80 160 88 152" fill="none" stroke="#0F172A" stroke-width="5" stroke-linecap="round" />
                                ` : `
                                    <g fill="#0F172A" stroke="#0F172A" stroke-width="6" stroke-linecap="round">
                                        <path d="M55 130 Q65 118 75 130" fill="none" />
                                        <path d="M85 130 Q95 118 105 130" fill="none" />
                                    </g>
                                    <circle cx="80" cy="160" r="5" fill="#FFBCC9" />
                                `}
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- Precise Typography -->
                <div class="text-center">
                    <p class="text-[13px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">${t.label_batch}</p>
                    <h3 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">${code}</h3>
                </div>
                
                ${type !== 'none' ? `
                    <div class="pt-10 border-t border-slate-100 text-center">
                        <p class="text-xl font-black ${type === 'critical' ? 'text-red-700' : 'text-amber-800'} uppercase tracking-tight">${config.title}</p>
                        <p class="text-[15px] text-slate-500 font-bold leading-relaxed mt-2">${config.desc}</p>
                        ${config.seriesLabel}
                    </div>
                    ${detailGrid}
                    <div class="space-y-4 pt-6">
                        ${config.sourceBtn}
                        ${getHotlineButtons(itemData)}
                    </div>
                ` : `
                    <div class="pt-8 text-center opacity-40">
                        <p class="text-[15px] font-bold text-slate-400 italic">${t.desc_none}</p>
                    </div>
                `}
            </div>
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
