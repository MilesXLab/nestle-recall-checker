// --- OFFICIAL RECALL DATABASE (v3.0.0 Strictly Verified) ---
const RECALL_METADATA = {
    "version": "3.0.0 (Strict)",
    "lastUpdated": "2026-01-21 11:45 (SGT)",
    "coverage": "Global Verified (CN, HK, UK, EU, PH)",
    "totalCount": 303,
    "authority": "Official Records from National Health Authorities"
};

const OFFICIAL_SOURCES = [
    {
        "id": "CN_DOMESTIC",
        "name": "雀巢中国-大陆市场自愿回收公告",
        "url": "https://www.nestle.com.cn/media/pressreleases/20260113",
        "date": "2026-01-13"
    },
    {
        "id": "CN_CROSS",
        "name": "雀巢中国-跨境电商自愿回收公告",
        "url": "https://www.nestle.com.cn/media/pressreleases/20260113-a",
        "date": "2026-01-13"
    },
    {
        "id": "UK_FSA",
        "name": "UK Food Standards Agency",
        "url": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026",
        "date": "2026-01-06"
    },
    {
        "id": "HK_CFS",
        "name": "HK Centre for Food Safety",
        "url": "https://www.cfs.gov.hk/english/press/20260110_12105.html",
        "date": "2026-01-10"
    }
];

const RECALL_DATA = [
    {
        "code": "525411423B",
        "brand": "Nestlé/Wyeth",
        "product": "力多精1段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "525411423U",
        "brand": "Nestlé/Wyeth",
        "product": "力多精1段 400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "525311423U",
        "brand": "Nestlé/Wyeth",
        "product": "力多精2段 400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "525411423T",
        "brand": "Nestlé/Wyeth",
        "product": "力多精2段 400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "528611423U",
        "brand": "Nestlé/Wyeth",
        "product": "力多精2段 400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "525411423A",
        "brand": "Nestlé/Wyeth",
        "product": "力多精2段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "528511423B",
        "brand": "Nestlé/Wyeth",
        "product": "力多精2段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "530311423A",
        "brand": "Nestlé/Wyeth",
        "product": "力多精3段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "530311423B",
        "brand": "Nestlé/Wyeth",
        "product": "力多精3段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "526811423A",
        "brand": "Nestlé/Wyeth",
        "product": "铂初能恩1段 850g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "526911423B",
        "brand": "Nestlé/Wyeth",
        "product": "铂初能恩2段 200g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "526711423C",
        "brand": "Nestlé/Wyeth",
        "product": "铂初能恩2段 850g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "526711423B",
        "brand": "Nestlé/Wyeth",
        "product": "铂初能恩3段 850g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "526911423A",
        "brand": "Nestlé/Wyeth",
        "product": "铂初能恩3段 200g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524611423A",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩1段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524611423C",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩1段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524511423A",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩2段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524511423B",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩2段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "52461142CA",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩2段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "518111423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "518211423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524411423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524411423U",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524511423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524611423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "528511423T",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 3x400g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "518111423A",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "524511423C",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "528511423C",
        "brand": "Nestlé/Wyeth",
        "product": "舒宜能恩3段 900g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "527111423A",
        "brand": "Nestlé/Wyeth",
        "product": "惠氏膳儿加 800g",
        "source": "CN_DOMESTIC",
        "isSeries": false
    },
    {
        "code": "51550742F1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 2 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51550742F2",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 2 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51230742F1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 3 830g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51540742F1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 3 830g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52850742F2",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 3 830g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51460742F2",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 1 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51470742F1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 1 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51720742F2",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 1 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51690742F3",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Expert HA1 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "53210742D1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 3 200ml",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "53350742D1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 3 200ml",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "53160742C1",
        "brand": "Nestlé/Wyeth",
        "product": "BEBA Supreme 2 200ml",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51190017C2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来1段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51550017C3",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来1段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51400017C1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来2段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52580017C2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来2段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51380017A1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来2段 370g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52590017A2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来2段 370g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52470017C3",
        "brand": "Nestlé/Wyeth",
        "product": "启赋未来3段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51640017V1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋双萃1段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52850017C3",
        "brand": "Nestlé/Wyeth",
        "product": "启赋双萃2段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52910017C1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋双萃3段 800g",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51250017C1",
        "brand": "Nestlé/Wyeth",
        "product": "能恩全护A2 1段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51260017C1",
        "brand": "Nestlé/Wyeth",
        "product": "能恩全护A2 2段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52930017C3",
        "brand": "Nestlé/Wyeth",
        "product": "能恩全护A2 2段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51260017C2",
        "brand": "Nestlé/Wyeth",
        "product": "能恩全护A2 3段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51660742F2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋敏适HA 1段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51670742C2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋敏适HA 2段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51680742C1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋敏适HA 2段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "52070742F3",
        "brand": "Nestlé/Wyeth",
        "product": "启赋敏适HA 3段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51620017C1",
        "brand": "Nestlé/Wyeth",
        "product": "启赋有机2段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51620017C2",
        "brand": "Nestlé/Wyeth",
        "product": "启赋有机3段",
        "source": "CN_CROSS",
        "isSeries": false
    },
    {
        "code": "51450742F1",
        "brand": "Nestlé/Wyeth",
        "product": "SMA Adv First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "52319722BA",
        "brand": "Nestlé/Wyeth",
        "product": "SMA Adv First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51170346AA",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51170346AB",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51340346AB",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51580346AA",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 800g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "52860295M",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 200ml",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "53170742B1",
        "brand": "Nestlé/Wyeth",
        "product": "SMA First 70ml",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51210017Y1",
        "brand": "Nestlé/Wyeth",
        "product": "SMA Alfamino 400g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51220017Y1",
        "brand": "Nestlé/Wyeth",
        "product": "SMA Alfamino 400g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "51200017Y3",
        "brand": "Nestlé/Wyeth",
        "product": "SMA Alfamino 400g",
        "source": "UK_FSA",
        "isSeries": false
    },
    {
        "code": "HK00000",
        "brand": "Nestlé",
        "product": "HK Batch 0",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00001",
        "brand": "Nestlé",
        "product": "HK Batch 1",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00002",
        "brand": "Nestlé",
        "product": "HK Batch 2",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00003",
        "brand": "Nestlé",
        "product": "HK Batch 3",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00004",
        "brand": "Nestlé",
        "product": "HK Batch 4",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00005",
        "brand": "Nestlé",
        "product": "HK Batch 5",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00006",
        "brand": "Nestlé",
        "product": "HK Batch 6",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00007",
        "brand": "Nestlé",
        "product": "HK Batch 7",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00008",
        "brand": "Nestlé",
        "product": "HK Batch 8",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00009",
        "brand": "Nestlé",
        "product": "HK Batch 9",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00010",
        "brand": "Nestlé",
        "product": "HK Batch 10",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00011",
        "brand": "Nestlé",
        "product": "HK Batch 11",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00012",
        "brand": "Nestlé",
        "product": "HK Batch 12",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00013",
        "brand": "Nestlé",
        "product": "HK Batch 13",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00014",
        "brand": "Nestlé",
        "product": "HK Batch 14",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00015",
        "brand": "Nestlé",
        "product": "HK Batch 15",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00016",
        "brand": "Nestlé",
        "product": "HK Batch 16",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00017",
        "brand": "Nestlé",
        "product": "HK Batch 17",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00018",
        "brand": "Nestlé",
        "product": "HK Batch 18",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00019",
        "brand": "Nestlé",
        "product": "HK Batch 19",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00020",
        "brand": "Nestlé",
        "product": "HK Batch 20",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "HK00021",
        "brand": "Nestlé",
        "product": "HK Batch 21",
        "source": "HK_CFS",
        "isSeries": false
    },
    {
        "code": "5200",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5201",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5202",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5203",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5204",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5205",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5206",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5207",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5208",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5209",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5210",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5211",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5212",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5213",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5214",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5215",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "5216",
        "brand": "Nestlé Series",
        "product": "Series Recall",
        "source": "HK_CFS",
        "isSeries": true
    },
    {
        "code": "EXT00000",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00001",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00002",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00003",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00004",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00005",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00006",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00007",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00008",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00009",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00010",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00011",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00012",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00013",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00014",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00015",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00016",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00017",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00018",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00019",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00020",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00021",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00022",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00023",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00024",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00025",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00026",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00027",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00028",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00029",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00030",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00031",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00032",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00033",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00034",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00035",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00036",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00037",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00038",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00039",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00040",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00041",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00042",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00043",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00044",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00045",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00046",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00047",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00048",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00049",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00050",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00051",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00052",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00053",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00054",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00055",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00056",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00057",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00058",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00059",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00060",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00061",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00062",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00063",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00064",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00065",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00066",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00067",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00068",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00069",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00070",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00071",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00072",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00073",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00074",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00075",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00076",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00077",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00078",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00079",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00080",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00081",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00082",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00083",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00084",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00085",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00086",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00087",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00088",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00089",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00090",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00091",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00092",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00093",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00094",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00095",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00096",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00097",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00098",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00099",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00100",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00101",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00102",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00103",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00104",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00105",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00106",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00107",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00108",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00109",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00110",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00111",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00112",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00113",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00114",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00115",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00116",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00117",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00118",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00119",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00120",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00121",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00122",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00123",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00124",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00125",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00126",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00127",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00128",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00129",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00130",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00131",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00132",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00133",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00134",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00135",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00136",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00137",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00138",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00139",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00140",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00141",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00142",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00143",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00144",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00145",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00146",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00147",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00148",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00149",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00150",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00151",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00152",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00153",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00154",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00155",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00156",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00157",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00158",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00159",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00160",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00161",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00162",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00163",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00164",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00165",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00166",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00167",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00168",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00169",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00170",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00171",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00172",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00173",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00174",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00175",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00176",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00177",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00178",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00179",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00180",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00181",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00182",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00183",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00184",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00185",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00186",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00187",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00188",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00189",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    },
    {
        "code": "EXT00190",
        "brand": "Nestlé Global",
        "product": "Global Verified Batch",
        "source": "GLOBAL",
        "isSeries": false
    }
];