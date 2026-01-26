// --- I18N SYSTEM ---
const I18N = {
    en: {
        project_name: "Aegis Global Guard",
        title: "Milk Recall Search",
        input_placeholder: "Enter 10-digit batch code...",
        hazard_info: "Cereulide toxin is heat-resistant. Boiling water will NOT kill it.",
        idle_text: "Enter your batch code found on the bottom of the tin.",
        searching: "Analyzing batch...",
        critical_notice: "CRITICAL RECALL MATCHED",
        critical_desc: "This product is part of the OFFICIAL recall. DANGER: STOP USING IMMEDIATELY.",
        warning_notice: "POTENTIAL RISK DETECTED",
        warning_desc: "Your batch prefix matches a known recall series. Please verify with official hotline.",
        safe_notice: "No Matches Found",
        safe_desc: "This batch is not in our local database, but always check official news.",
        brand_label: "Brand",
        expiry_label: "Series Match",
        action_contact: "Contact Local Hotline: 400-616-5015",
        disclaimer: "Independent safety tool. Data synchronized with global reports."
    },
    zh: {
        project_name: "Aegis 全球盾",
        title: "奶粉召回极速查询",
        input_placeholder: "输入罐底 10 位批次号...",
        hazard_info: "仙人掌杆菌毒素具有强耐热性，沸水冲泡无法灭活（高温无用）。",
        idle_text: "请输入您在奶粉罐底部看到的 10 位批次编码。",
        searching: "正在匹配数据...",
        critical_notice: "!!! 官方召回命中 !!!",
        critical_desc: "该批次已列入官方自愿回收名单！风险：高度关注。请立即停止食用并封存。",
        warning_notice: "!!! 潜在风险警示 !!!",
        warning_desc: "该批次的前4位与已知问题系列一致，可能存在风险。请务必拨打官网客服核实。",
        safe_notice: "暂未发现匹配信息",
        safe_desc: "数据库中未找到该批次，但不代表绝对安全，请以官方公告为准。",
        brand_label: "品牌系列",
        expiry_label: "系列匹配",
        action_contact: "拨打客服电话: 400-616-5015",
        disclaimer: "公益性信息检索工具。数据实时对齐全球官方召回公告。"
    }
};

let currentLang = 'zh';

// UI Elements
const langToggle = document.getElementById('langToggle');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const clearBtn = document.getElementById('clearBtn');
const idleStateHTML = document.getElementById('idleState').outerHTML;

function updateLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = I18N[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = I18N[currentLang][key];
    });
    // Re-run search to update results in new language
    handleSearch();
}

function handleSearch() {
    const input = searchInput.value.trim().toUpperCase();

    if (input.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
        resultsContainer.innerHTML = idleStateHTML;
        return;
    }

    // Logic A: Exact Match (Defined in data.js as RECALL_DATA)
    const exactMatch = RECALL_DATA.includes(input);

    // Logic B: Prefix Match (4 digits)
    const prefixMatch = RECALL_DATA.some(code => code.startsWith(input.substring(0, 4))) && input.length >= 4;

    if (exactMatch) {
        renderResult('critical', input);
    } else if (prefixMatch) {
        renderResult('warning', input);
    } else if (input.length >= 4) {
        renderResult('safe', input);
    } else {
        resultsContainer.innerHTML = `
            <div class="text-center py-12 opacity-50">
                <div class="animate-pulse">◌</div>
                <p class="mt-2 text-sm">${I18N[currentLang].searching}</p>
            </div>
        `;
    }
}

function renderResult(type, input) {
    let html = '';
    const t = I18N[currentLang];

    if (type === 'critical') {
        html = `
            <div class="glass-card rounded-3xl overflow-hidden border-2 border-red-500 shadow-2xl slide-up pulse-red">
                <div class="bg-red-500 text-white px-6 py-4 flex justify-between items-center">
                    <span class="font-bold tracking-tight">${t.critical_notice}</span>
                    <span class="text-xs uppercase font-bold px-2 py-1 bg-white text-red-600 rounded">Alert</span>
                </div>
                <div class="p-6 space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="text-4xl font-black text-red-600 tracking-tighter">${input}</h3>
                        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">⚠️</div>
                    </div>
                    <p class="text-red-900 font-bold leading-snug">${t.critical_desc}</p>
                    <div class="p-4 bg-red-100 rounded-2xl border border-red-200">
                        <p class="text-xs text-red-800 font-bold uppercase mb-1">Cereulide Warning:</p>
                        <p class="text-sm text-red-700">${t.hazard_info}</p>
                    </div>
                    <a href="tel:4006165015" class="block w-full text-center py-4 bg-red-600 text-white rounded-2xl font-bold active:scale-95 transition-transform hover:bg-red-700">
                        ${t.action_contact}
                    </a>
                </div>
            </div>
        `;
    } else if (type === 'warning') {
        html = `
            <div class="glass-card rounded-3xl overflow-hidden border-2 border-amber-400 shadow-xl slide-up">
                <div class="bg-amber-400 text-amber-900 px-6 py-4 font-bold flex justify-between items-center">
                     <span>${t.warning_notice}</span>
                     <span class="text-[10px] bg-white px-1 rounded uppercase">Partial Match</span>
                </div>
                <div class="p-6 space-y-4">
                    <h3 class="text-3xl font-bold text-amber-800">${input}...</h3>
                    <p class="text-amber-900 font-medium">${t.warning_desc}</p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-amber-50 p-3 rounded-xl border border-amber-200">
                            <p class="text-[10px] uppercase text-amber-600 font-bold">${t.brand_label}</p>
                            <p class="text-sm font-bold">Nestlé / Wyeth</p>
                        </div>
                        <div class="bg-amber-50 p-3 rounded-xl border border-amber-200">
                            <p class="text-[10px] uppercase text-amber-600 font-bold">${t.expiry_label}</p>
                            <p class="text-sm font-bold">Prefix: ${input.substring(0, 4)}</p>
                        </div>
                    </div>
                    <a href="tel:4006165015" class="block w-full text-center py-4 bg-amber-500 text-white rounded-2xl font-bold active:scale-95 transition-transform">
                        ${t.action_contact}
                    </a>
                </div>
            </div>
        `;
    } else {
        html = `
            <div class="glass-card rounded-3xl p-8 text-center space-y-3 opacity-90 slide-up border border-slate-200">
                <div class="w-16 h-16 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-2xl">🛡️</div>
                <h3 class="text-xl font-bold text-slate-700">${t.safe_notice}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">${t.safe_desc}</p>
                <div class="pt-4 flex justify-center space-x-2">
                    <span class="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">Checked at ${new Date().toLocaleTimeString()}</span>
                </div>
            </div>
        `;
    }

    resultsContainer.innerHTML = html;
}

// Event Listeners
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLang();
});

searchInput.addEventListener('input', handleSearch);

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    handleSearch();
    searchInput.focus();
});

// Initialize on page load
updateLang();
