// Dynamic Hotline Button Generator
function getHotlineButtons(itemData) {
    if (!itemData) return '';

    const country = itemData.country.toLowerCase();
    const brand = (itemData.brand || '').toLowerCase();
    let hotlines = [];

    // Brand-Specific Overrides
    if (brand.includes('aptamil') || brand.includes('danone') || brand.includes('dumex')) {
        if (country.includes('united kingdom') || country.includes('uk')) {
            hotlines.push({ label: 'Aptamil UK', number: '0800 996 1000', tel: '08009961000' });
        } else if (country.includes('singapore')) {
            hotlines.push({ label: 'Dumex SG', number: '1800 265 3188', tel: '18002653188' });
        } else if (country.includes('ireland')) {
            hotlines.push({ label: 'Nestle IE', number: '1800 931 832', tel: '1800931832' });
        }
    } else if (brand.includes('picot') || brand.includes('lactalis')) {
        if (country.includes('france')) {
            hotlines.push({ label: 'Picot FR', number: '0805 805 950', tel: '0805805950' });
        }
    }

    // Fallback to Nestle/Generic if no brand-specific match found
    if (hotlines.length === 0) {
        if (country.includes('china') && country.includes('mainland')) {
            hotlines.push({ label: 'China', number: '400-616-5015', tel: '4006165015' });
        } else if (country.includes('hong kong') || country.includes('hk')) {
            hotlines.push({ label: 'HK', number: '+852 2179 8136', tel: '+85221798136' });
        } else if (country.includes('united kingdom') || country.includes('uk')) {
            hotlines.push({ label: 'UK', number: '0800 081 8180', tel: '08000818180' });
        } else if (country.includes('philippines')) {
            hotlines.push({ label: 'PH', number: '+63 2 8898 0061', tel: '+63288980061' });
        } else if (country.includes('france')) {
            hotlines.push({ label: 'France', number: '0805 805 950', tel: '0805805950' });
        } else if (country.includes('germany') || country.includes('deutschland')) {
            hotlines.push({ label: 'DE', number: '0800 000 1894', tel: '08000001894' });
        } else if (country.includes('australia') || country.includes('new zealand')) {
            hotlines.push({ label: 'AU/NZ', number: '1800 025 361', tel: '1800025361' });
        } else if (country.includes('singapore')) {
            hotlines.push({ label: 'SG', number: '800 601 1633', tel: '8006011633' });
        } else {
            hotlines.push({ label: 'Global', number: '+41 21 924 1111', tel: '+41219241111' });
        }
    }

    const gridClass = hotlines.length === 1 ? 'grid-cols-1' : 'grid-cols-2';
    return `
        <div class="grid ${gridClass} gap-2">
            ${hotlines.map(h => `
                <a href="tel:${h.tel}" class="flex items-center justify-center py-4 bg-slate-900 text-white rounded-2xl shadow-xl active:scale-95 transition-all text-center group relative overflow-hidden">
                    <div class="flex flex-col relative z-10 text-center">
                        <span class="text-[8px] font-black uppercase tracking-widest opacity-50 mb-0.5">${h.label} CARE</span>
                        <span class="text-[12px] font-black tracking-tighter">${h.number}</span>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}
