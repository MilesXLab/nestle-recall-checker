#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中国大陆和香港数据验证脚本
Verify China Mainland and Hong Kong batch data
"""

import csv
from collections import Counter

with open('recall_database_v3.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# 筛选中国相关数据
china_mainland = [r for r in rows if 'China (Mainland)' in r.get('country', '') or 'Mainland' in r.get('country', '')]
china_crossborder = [r for r in rows if 'Cross-border' in r.get('country', '')]
hong_kong = [r for r in rows if 'Hong Kong' in r.get('country', '')]

print("="*80)
print("中国大陆和香港数据验证 / China Mainland & Hong Kong Data Verification")
print("="*80)

print(f"\n🇨🇳 中国大陆 (China Mainland): {len(china_mainland)} 批次")
if china_mainland:
    print(f"\n   样本批次 (Sample batches):")
    for b in china_mainland[:5]:
        print(f"   - {b['code']}: {b['product']} ({b['specification']})")
    
    # 统计产品类型
    products = Counter(b['product'] for b in china_mainland)
    print(f"\n   产品分布 (Product distribution):")
    for prod, count in products.most_common(5):
        print(f"   - {prod}: {count}")

print(f"\n🇨🇳 中国跨境 (China Cross-border): {len(china_crossborder)} 批次")
if china_crossborder:
    print(f"\n   样本批次 (Sample batches):")
    for b in china_crossborder[:5]:
        print(f"   - {b['code']}: {b['product']} ({b['specification']})")
    
    # 统计产品类型
    products = Counter(b['product'] for b in china_crossborder)
    print(f"\n   产品分布 (Product distribution):")
    for prod, count in products.most_common(5):
        print(f"   - {prod}: {count}")

print(f"\n🇭🇰 香港 (Hong Kong): {len(hong_kong)} 批次")
if hong_kong:
    print(f"\n   完整批次列表 (Complete batch list):")
    for b in hong_kong:
        print(f"   - {b['code']}: {b['product']} ({b['specification']})")
        print(f"     来源: {b['sourceDisplay']}")
        print(f"     链接: {b['docUrl']}")
else:
    print(f"   ⚠️  警告: 未找到标记为'Hong Kong'的批次")
    print(f"   注意: 香港批次可能被标记为'China (Cross-border)'")

print(f"\n📊 总计 (Total):")
print(f"   中国大陆: {len(china_mainland)}")
print(f"   中国跨境: {len(china_crossborder)}")
print(f"   香港: {len(hong_kong)}")
print(f"   中国相关总计: {len(china_mainland) + len(china_crossborder) + len(hong_kong)}")

print(f"\n{'='*80}")
print(f"验证状态 (Verification Status):")
if len(china_mainland) >= 30 and len(china_crossborder) >= 40:
    print(f"✅ 中国数据完整 (China data complete)")
else:
    print(f"⚠️  中国数据可能不完整 (China data may be incomplete)")

if len(hong_kong) >= 1:
    print(f"✅ 香港数据存在 (Hong Kong data exists)")
else:
    print(f"ℹ️  香港批次可能在'China (Cross-border)'中 (HK batches may be in Cross-border)")
print(f"{'='*80}")
