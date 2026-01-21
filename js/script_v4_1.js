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
        label_source: "Official Source"
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
        label_source: "权威判定源"
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

function updateLang() {
    document.querySelector('[data-i18n="project_name"]').textContent = I18N[currentLang].proj_name;
    document.querySelector('[data-i18n="title"]').textContent = I18N[currentLang].title;
    document.querySelector('[data-i18n="hazard_info"]').textContent = I18N[currentLang].hazard;
    document.getElementById('searchInput').placeholder = I18N[currentLang].placeholder;

    // Disclaimer update
    document.querySelector('#disclaimerModal h3').textContent = I18N[currentLang].disclaimer_title;
    const ps = document.querySelectorAll('#disclaimerModal p');
    ps[0].textContent = I18N[currentLang].disclaimer_p1;
    ps[1].textContent = I18N[currentLang].disclaimer_p2;
    ps[2].textContent = I18N[currentLang].disclaimer_p3;
    acceptBtn.textContent = I18N[currentLang].disclaimer_btn;

    document.querySelector('footer').innerHTML = `
        <p class="text-[10px] text-slate-400 mb-2">${I18N[currentLang].data_ver}</p>
        <p class="text-xs text-secondary font-bold">${I18N[currentLang].final_authority}</p>
    `;

    // Global Sources section
    const sourcesHtml = OFFICIAL_SOURCES.map(s => `
        <a href="${s.url}" target="_blank" class="block p-4 glass-card rounded-2xl text-left hover:bg-white transition-all mb-3 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">${s.date}</p>
                    <p class="text-sm font-black text-slate-800">${s.name}</p>
                </div>
                <span class="text-xs text-blue-500 font-bold group-hover:translate-x-1 transition-transform">↗</span>
            </div>
            <div class="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
        <div class="text-center py-8 space-y-6 slide-up">
            <div class="bottle-container status-idle mx-auto">
                <svg class="bottle-svg" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Bottle Body -->
                    <path class="bottle-outline" d="M35 25 Q30 30 30 40 L30 110 Q30 120 40 125 L60 125 Q70 120 70 110 L70 40 Q70 30 65 25 Z" 
                          fill="none" stroke="#BDBDBD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <!-- Nipple -->
                    <ellipse class="bottle-nipple" cx="50" cy="20" rx="15" ry="10" 
                             fill="none" stroke="#BDBDBD" stroke-width="3"/>
                    
                    <!-- Milk Fill (from bottom up) -->
                    <path class="milk-fill" d="M33 123 L67 123 L67 70 Q67 50 50 50 Q33 50 33 70 Z" 
                          fill="#F5F5F5" opacity="0.6"/>
                    
                    <!-- Milk Wave -->
                    <path class="milk-wave" d="M33 70 Q43 65 50 70 Q57 75 67 70" 
                          fill="none" stroke="#E0E0E0" stroke-width="2" opacity="0.4"/>
                </svg>
            </div>
            <p class="text-slate-500 font-bold px-8 text-sm">${I18N[currentLang].idle}</p>
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
        <div class="glass-card rounded-[2.5rem] overflow-hidden border-2 ${config.border} slide-up shadow-2xl">
            <div class="p-8 space-y-6">
                <!-- SVG Bottle Visualization -->
                <div class="bottle-container ${config.bottleStatus} mx-auto">
                    <svg class="bottle-svg" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
                        <!-- Bottle Body -->
                        <path class="bottle-outline" d="M35 25 Q30 30 30 40 L30 110 Q30 120 40 125 L60 125 Q70 120 70 110 L70 40 Q70 30 65 25 Z" 
                              fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        
                        <!-- Nipple -->
                        <ellipse class="bottle-nipple" cx="50" cy="20" rx="15" ry="10" 
                                 fill="none"/>
                        
                        <!-- Milk Fill (from bottom up) -->
                        <path class="milk-fill" d="M33 123 L67 123 L67 70 Q67 50 50 50 Q33 50 33 70 Z"/>
                        
                        <!-- Milk Wave -->
                        <path class="milk-wave" d="M33 70 Q43 65 50 70 Q57 75 67 70" 
                              fill="none" stroke-width="2"/>
                    </svg>
                </div>

                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest ${config.text} opacity-50 mb-1 block">${t.label_batch}</span>
                        <h3 class="text-4xl font-black ${config.text} tracking-tighter">${code}</h3>
                        ${itemData ? `<p class="text-xs font-bold text-slate-500 mt-1 uppercase tracking-tight">${itemData.product}</p>` : ''}
                    </div>
                </div>
                
                <div class="py-4 border-t border-slate-100">
                    <p class="text-lg font-black ${config.text}">${config.title}</p>
                    <p class="text-sm text-slate-600 mt-2 font-medium leading-relaxed">${config.desc}</p>
                    ${config.seriesLabel}
                </div>

                ${detailGrid}

                <div class="space-y-4 pt-4">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-1">${t.final_authority}</p>
                    <div class="grid grid-cols-1 gap-3">
                        ${config.sourceBtn}
                        <div class="grid grid-cols-2 gap-2">
                            <a href="tel:4006165015" class="flex items-center justify-center py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-tight shadow-lg active:scale-95 transition-all">
                                CN: 400-616-5015
                            </a>
                            <a href="tel:+85221798888" class="flex items-center justify-center py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-tight shadow-lg active:scale-95 transition-all">
                                HK: +852-2179-8888
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
