# -*- coding: utf-8 -*-
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt; from matplotlib.colors import ListedColormap; import numpy as np
K=[u'KAMU',u'SERM',u'UYDU',u'HABER',u'SÖYLEM',u'FİYAT',u'YAPI',u'TİC',u'İMAR',u'ARSA',u'H-ISI']
# H-ISI: 16-yıl gövde >=250 · Fatih/Riva/Kavacık ÖLÇÜLEMEZ (boilerplate) → 'x'
D=[(u'Çubuklu',[1,1,0,1,0,1,1,1,1,1,1]),(u'Tokatköy',[0,1,1,0,0,1,1,1,1,1,1]),
(u'Gümüşsuyu',[1,1,0,0,0,0,1,1,1,1,1]),(u'Riva',[1,1,0,1,1,1,0,1,0,1,2]),(u'Kavacık',[1,1,0,0,1,1,1,1,0,1,2]),
(u'Paşabahçe',[0,1,0,1,1,0,0,1,0,0,1]),(u'İncirköy',[0,1,0,0,0,0,1,1,1,1,0]),(u'Yalıköy',[1,0,1,0,0,1,1,1,0,0,0]),
(u'Ortaçeşme',[0,0,1,0,0,1,1,0,0,0,1]),(u'Soğuksu',[0,1,0,0,0,1,0,0,1,0,1]),(u'Merkez',[0,0,0,1,0,1,1,0,0,0,1]),
(u'Çiğdem',[0,0,0,0,0,1,0,0,1,0,1]),(u'Kanlıca',[1,0,0,0,0,1,0,1,0,0,1]),(u'Polonezköy',[0,1,0,0,0,0,0,1,1,0,0]),
(u'Rüzgarlıbahçe',[0,0,0,0,0,0,1,0,1,1,0]),(u'Acarlar',[0,0,0,0,0,1,0,0,1,0,0]),(u'Baklacı',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Çamlıbahçe',[0,0,1,0,0,0,1,0,0,0,0]),(u'Çavuşbaşı Çiftlik',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Çengeldere',[0,0,0,0,0,1,0,0,0,1,0]),(u'Görele',[0,0,0,0,0,1,0,0,0,1,0]),(u'Göksu',[0,0,0,0,0,0,1,0,0,0,1]),
(u'Göztepe',[0,0,0,0,0,1,0,0,1,0,0]),(u'İshaklı',[1,0,0,0,0,0,0,0,0,1,0]),(u'Yavuz Selim',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Yeni Mahalle',[0,0,0,0,0,0,1,0,0,1,0]),(u'Cumhuriyetköy',[0,0,0,0,0,0,0,0,0,1,1]),
(u'Anadolu Hisarı',[0,0,0,0,0,1,0,0,0,0,0]),(u'Anadolu Kavağı',[0,0,0,0,0,0,0,1,0,0,0]),
(u'Anadolufeneri',[0,0,0,0,0,0,0,0,0,1,0]),(u'Elmalı',[0,0,0,0,0,0,0,0,0,1,0]),
(u'Mahmutşevketpaşa',[0,0,0,0,0,0,0,0,0,1,0]),(u'Örnekköy',[0,0,0,0,0,0,0,0,0,1,0]),(u'Zerzavatçı',[0,0,0,0,0,0,0,0,0,1,0])]
fig,ax=plt.subplots(figsize=(11.8,11.8))
M=np.array([[1 if c==1 else 0 for c in r[1]] for r in D],float)
X=np.array([[1 if c==2 else 0 for c in r[1]] for r in D],float)
t=[sum(1 for c in r[1] if c==1) for r in D]
ax.imshow(M,cmap=ListedColormap(['#EEF1F4','#C0392B']),aspect='auto',vmin=0,vmax=1)
ax.set_xticks(range(len(K))); ax.set_xticklabels(K,fontsize=8.8,rotation=35,ha='left'); ax.xaxis.tick_top()
ax.set_yticks(range(len(D))); ax.set_yticklabels([u'%s  (%d/11)'%(r[0],v) for r,v in zip(D,t)],fontsize=8.4)
for i in range(len(D)):
    for j in range(len(K)):
        if M[i,j]: ax.text(j,i,u'●',ha='center',va='center',color='white',fontsize=10)
        if X[i,j]: ax.text(j,i,u'✕',ha='center',va='center',color='#7F8C8D',fontsize=10,fontweight='bold')
for x in range(len(K)+1): ax.axvline(x-0.5,color='white',lw=1.5)
for y in range(len(D)+1): ax.axhline(y-0.5,color='white',lw=1.5)
ax.axhline(5.5,color='#2C3E50',lw=2.2,ls='--'); ax.axhline(12.5,color='#95A5A6',lw=1.3,ls=':')
ax.axvline(9.5,color='#C0392B',lw=2.2)
ax.set_title(u'BEYKOZ ISI HARİTASI FİNAL — 45 mahalle × 11 sinyal ayağı\n'
 u'34 mahallede en az 1 ayak · 11 mahallede hiçbir ayak yok · ✕ = ölçülemez (boilerplate)',
 fontsize=12.5,fontweight='bold',pad=44,loc='left')
fig.text(0.012,0.024,
 u'11. AYAK: HABER-ISI — 16 yıllık gövde arşivi (Beykoz Güncel, 8001 kayıt, 2010-2024), eşik ≥250 kayıt (~%3 korpus)\n'
 u'[!] Fatih · Riva · Kavacık ÖLÇÜLEMEZ: her biri 7999/7999 = korpusun %100\'ü, yıl profili korpusla BİREBİR AYNI → boilerplate/navigasyon kontaminasyonu\n'
 u'[*] 17 aktörün 8\'i 16 yılda SIFIR (Çelikler·Torunlar·NEF·Ion·MESA·Peker·Envoy·Sur Yapı) — yerel basın kör noktası KANITLI\n'
 u'CC-Signals SIG10 · 2026-07-28 · kaynak: Basın S93 ısı-v2 (defekt şerhli)',
 fontsize=6.4,color='#5D6D7E')
plt.tight_layout(rect=[0,0.058,1,1]); plt.savefig('cikti/beykoz_isi_haritasi.png',dpi=162,facecolor='white')
print(u'OK · 11 ayak · 0-ayak:', 45-len(D))
