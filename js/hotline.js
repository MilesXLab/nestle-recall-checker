// Dynamic Hotline Button Generator
function getHotlineButtons(itemData) {
    if (!itemData) {
        // No match found - don't show any specific hotline
        return '';
    }

    const country = itemData.country.toLowerCase();
    let hotlines = [];

    // Region-specific hotlines
    if (country.includes('china') && country.includes('mainland')) {
        hotlines.push({ label: 'China', number: '400-616-5015', tel: '4006165015' });
    } else if (country.includes('china') && country.includes('cross-border')) {
        hotlines.push({ label: 'China', number: '400-616-5015', tel: '4006165015' });
        hotlines.push({ label: 'HK', number: '+852-2179-8888', tel: '+85221798888' });
    } else if (country.includes('hong kong') || country.includes('hk')) {
        hotlines.push({ label: 'HK', number: '+852-2179-8888', tel: '+85221798888' });
    } else if (country.includes('united kingdom') || country.includes('uk')) {
        hotlines.push({ label: 'UK', number: '0800 081 8180', tel: '08000818180' });
    } else if (country.includes('philippines')) {
        hotlines.push({ label: 'PH', number: '+63 2 8898 0061', tel: '+6328898006' });
    } else if (country.includes('france')) {
        hotlines.push({ label: 'France', number: '0800 22 32 42', tel: '0800223242' });
    } else if (country.includes('germany') || country.includes('deutschland')) {
        hotlines.push({ label: 'DE', number: '0800 000 1894', tel: '08000001894' });
    } else if (country.includes('australia') || country.includes('new zealand')) {
        hotlines.push({ label: 'AU/NZ', number: '1800 025 361', tel: '1800025361' });
    } else if (country.includes('middle east') || country.includes('mena')) {
        hotlines.push({ label: 'MENA', number: '+971 4 406 6999', tel: '+97144066999' });
    } else if (country.includes('egypt')) {
        hotlines.push({ label: 'Egypt', number: '+20 2 2529 9999', tel: '+20225299999' });
    } else if (country.includes('singapore')) {
        hotlines.push({ label: 'SG', number: '1800 738 7537', tel: '18007387537' });
    } else if (country.includes('brunei')) {
        hotlines.push({ label: 'Brunei', number: '+673 2 244 844', tel: '+6732244844' });
    } else {
        // Generic fallback
        hotlines.push({ label: 'Global', number: '+41 21 924 1111', tel: '+41219241111' });
    }

    // Generate HTML
    const gridClass = hotlines.length === 1 ? 'grid-cols-1' : 'grid-cols-2';
    return `
        <div class="grid ${gridClass} gap-2">
            ${hotlines.map(h => `
                <a href="tel:${h.tel}" class="flex items-center justify-center py-3.5 bg-gray-900 text-white rounded-[1.2rem] shadow-lg active:scale-95 transition-all text-center">
                    <div class="flex flex-col">
                        <span class="text-[8px] font-black uppercase tracking-widest opacity-40 leading-none mb-1">${h.label}</span>
                        <span class="text-[11px] font-black tracking-tighter">${h.number}</span>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}
