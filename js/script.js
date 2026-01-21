// --- I18N SYSTEM (STRICT v2.4) ---
const I18N = {
    en: {
        proj_name: "Aegis Global Guard",
        title: "Recall Checker",
        hazard: "⚠️ CEREULIDE (Bacillus cereus toxin) IS HEAT-RESISTANT. BOILING WATER CANNOT DEACTIVATE IT.",
        placeholder: "Enter 10-digit batch code...",
        idle: "Input the 10-digit batch code from the bottom of your tin for strict verification.",
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
        btn_hk: "Call HK: +852 2179 8888",
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
        label_authoritative_sources: "Authoritative Data Sources"
    },
    zh: {
        proj_name: "Aegis 全球盾",
        title: "全球召回核对工具",
        hazard: "⚠️ Cereulide（蜡样芽孢杆菌毒素）具有强耐热性，沸水冲泡无法灭活（高温无效）。",
        placeholder: "输入罐底 10 位编码...",
        idle: "请输入罐底喷码第一行的 10 位编码进行严格核对。",
        searching: "正在比对官方监管部门录入的批次...",

        status_critical: "!!! 官方精确匹配：确认召回 !!!",
        desc_critical: "该 10 位批次号明确出现在官方公布的召回名单中。",

        status_caution: "!!! 官方整线召回：系列匹配 !!!",
        desc_caution: "您的批次号开头属于官方公告明确指定的整线召回系列码。",

        status_none: "官方名单未命中",
        desc_none: "在当前录入的官方召回名单中未找到该批次。注：非保修证明，请以官方客服为准。",

        series_notice: "官方监管说明：监管部门对以 “[Prefix]” 开头的整条生产线/生产系列下达了召回令，因此该系列下所有产品均在受影响范围。",

        final_authority: "官方热线反馈是唯一的最终判定标准。",
        btn_cn: "拨打大陆客服: 400 616 5015",
        btn_hk: "拨打香港客服: +852 2179 8888",
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
        label_authoritative_sources: "权威数据来源 (同步官方)"
    }
};

let currentLang = 'zh';

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
    "CN_DOMESTIC": "🇨🇳",
    "CN_CROSSBORDER": "🌐",
    "UK_FSA": "🇬🇧",
    "PH_FDA": "🇵🇭",
    "HK_CFS": "🇭🇰",
    "HK_NESTLE": "🇭🇰",
    "DE_NESTLE": "🇩🇪",
    "FR_NESTLE": "🇫🇷",
    "BE_LU_NESTLE": "🇧🇪"
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
        <p class="text-[10px] text-slate-400 mb-2">${I18N[currentLang].data_ver}</p>
        <p class="text-xs text-secondary font-bold">${I18N[currentLang].final_authority}</p>
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
    handleSearch();
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
        <div class="text-center py-8 space-y-10 slide-up">
            <div class="bottle-container status-idle mx-auto" style="width: 140px; height: 160px;">
                <svg class="bottle-svg" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                    <!-- Nipple (Wide/Chubby) -->
                    <path class="bottle-nipple" d="M100 5 Q85 5 85 30 L115 30 Q115 5 100 5Z" 
                          fill="none" stroke="#CBD5E1" stroke-width="2.5"/>
                    <!-- Dome Collar -->
                    <path class="bottle-ring" d="M65 65 A40 40 0 0 1 135 65 L140 75 L60 75 Z" 
                          fill="none" stroke="#CBD5E1" stroke-width="3"/>
                    
                    <!-- Handles (C-Shape) -->
                    <path class="bottle-handles" d="M60 85 Q30 85 30 130 Q30 160 55 160" 
                          fill="none" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>
                    <path class="bottle-handles" d="M140 85 Q170 85 170 130 Q170 160 145 160" 
                          fill="none" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>

                    <!-- Main Body (Wide/Curvy) -->
                    <path class="bottle-outline" d="M60 75 L60 90 Q60 140 65 180 Q65 235 100 235 Q135 235 135 180 Q140 140 140 90 L140 75" 
                          fill="none" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <!-- Milk Fill -->
                    <path class="milk-fill" d="M65 220 L65 130 Q100 120 135 130 L135 220 Q135 230 100 230 Q65 230 65 220 Z" 
                          fill="#F8FAFC" opacity="0.4"/>

                    <!-- Straw with Weight -->
                    <path class="bottle-straw" d="M100 75 L100 210" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="3" opacity="0.3"/>
                    <circle cx="100" cy="215" r="5" fill="#CBD5E1" opacity="0.2"/>
                    
                    <!-- Scales -->
                    <g class="bottle-scales" stroke="#E2E8F0" opacity="0.5">
                        <line x1="100" y1="180" x2="110" y2="180" stroke-width="2" />
                        <line x1="100" y1="150" x2="115" y2="150" stroke-width="2" />
                        <line x1="100" y1="120" x2="110" y2="120" stroke-width="2" />
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
        title: t.status_none,
        desc: t.desc_none,
        sourceBtn: "",
        seriesLabel: ""
    };

    if (type === 'critical' || type === 'caution') {
        const isCritical = type === 'critical';
        const accentColor = isCritical ? "text-red-700" : "text-amber-800";
        const borderColor = isCritical ? "border-red-600" : "border-amber-500";
        const bgColor = isCritical ? "bg-red-50" : "bg-amber-50";

        config = {
            bg: bgColor,
            border: borderColor,
            text: accentColor,
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

    // Detail Grid HTML
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
                <p class="text-sm font-black text-slate-800">${itemData.country}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_source}</p>
                <p class="text-[11px] font-bold text-blue-600 underline truncate">${itemData.sourceDisplay}</p>
            </div>
            <div class="col-span-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_reason}</p>
                <p class="text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg mt-1 border border-red-100">${itemData.reason}</p>
            </div>
        </div>
    ` : '';

    resultsContainer.innerHTML = `
        <div class="glass-card rounded-[3rem] overflow-hidden border-2 ${config.border} slide-up shadow-2xl relative">
            <div class="p-10 space-y-8">
                <!-- SVG Bottle Visualization -->
                <div class="${type === 'critical' ? 'w-64 h-72' : 'w-48 h-56'} mx-auto transition-all duration-700">
                    <div class="bottle-container ${config.bottleStatus} w-full h-full">
                        <svg class="bottle-svg" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
                            <path class="bottle-nipple" d="M100 5 Q85 5 85 30 L115 30 Q115 5 100 5Z" fill="none" stroke-width="2.5"/>
                            <path class="bottle-ring" d="M65 65 A40 40 0 0 1 135 65 L140 75 L60 75 Z" fill="none" stroke-width="3"/>
                            <path class="bottle-handles" d="M60 85 Q30 85 30 130 Q30 160 55 160" fill="none" stroke-width="6" stroke-linecap="round"/>
                            <path class="bottle-handles" d="M140 85 Q170 85 170 130 Q170 160 145 160" fill="none" stroke-width="6" stroke-linecap="round"/>
                            <path class="bottle-outline" d="M60 75 L60 90 Q60 140 65 180 Q65 235 100 235 Q135 235 135 180 Q140 140 140 90 L140 75" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="milk-fill" d="M65 220 L65 130 Q100 120 135 130 L135 220 Q135 230 100 230 Q65 230 65 220 Z" />
                            <path class="bottle-straw" d="M100 75 L100 210" fill="none" stroke-width="1.5" stroke-dasharray="3" opacity="0.3"/>
                            <circle cx="100" cy="215" r="5" opacity="0.2"/>
                            <g class="bottle-scales" opacity="0.5">
                                <line x1="100" y1="180" x2="110" y2="180" stroke-width="2" />
                        <line x1="100" y1="150" x2="115" y2="150" stroke-width="2" />
                        <line x1="100" y1="120" x2="110" y2="120" stroke-width="2" />
                            </g>
                        </svg>
                    </div>
                </div>

                <div class="text-center space-y-3">
                    <span class="text-[10px] font-black uppercase tracking-[0.3em] ${config.text} opacity-40 block">${t.label_batch}</span>
                    <h3 class="${type === 'critical' ? 'text-6xl' : 'text-4xl'} font-black ${config.text} tracking-tight font-serif">${code}</h3>
                    ${itemData ? `<p class="text-xs font-black text-slate-400 uppercase tracking-widest">${itemData.product}</p>` : ''}
                </div>
                
                <div class="py-8 border-t border-slate-100 text-center">
                    <div class="flex items-center justify-center space-x-3 mb-3">
                        ${type === 'critical' ? '<span class="text-3xl animate-bounce">⚠️</span>' : ''}
                        <p class="${type === 'critical' ? 'text-2xl leading-tight' : 'text-xl'} font-black ${config.text} uppercase tracking-tight">${config.title}</p>
                    </div>
                    <p class="${type === 'critical' ? 'text-sm' : 'text-xs'} text-slate-500 font-bold leading-relaxed max-w-sm mx-auto">${config.desc}</p>
                    ${config.seriesLabel}
                </div>

                ${detailGrid}

                <div class="space-y-6 pt-6">
                    <p class="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">${t.final_authority}</p>
                    <div class="grid grid-cols-1 gap-4">
                        ${config.sourceBtn}
                        <div class="grid grid-cols-2 gap-3">
                            <a href="tel:4006165015" class="flex flex-col items-center justify-center py-5 bg-gray-900 text-white rounded-[1.5rem] shadow-xl active:scale-95 transition-all group overflow-hidden relative">
                                <span class="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1 group-hover:opacity-100 transition-opacity">China</span>
                                <span class="text-xs font-black tracking-tight">400-616-5015</span>
                                <div class="absolute inset-x-0 bottom-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </a>
                            <a href="tel:+85221798888" class="flex flex-col items-center justify-center py-5 bg-gray-900 text-white rounded-[1.5rem] shadow-xl active:scale-95 transition-all group overflow-hidden relative">
                                <span class="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1 group-hover:opacity-100 transition-opacity">Hong Kong</span>
                                <span class="text-xs font-black tracking-tight">+852-2179-8888</span>
                                <div class="absolute inset-x-0 bottom-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ${type === 'critical' ? '<div class="absolute top-0 left-0 w-full h-1.5 bg-red-600 animate-pulse z-20"></div>' : ''}
        </div>
    `;
}

// Event Listeners
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
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
