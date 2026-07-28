# -*- coding: utf-8 -*-
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt; from matplotlib.colors import ListedColormap; import numpy as np
K=[u'KAMU',u'SERMAYE',u'UYDU',u'HABER',u'SÖYLEM',u'FİYAT',u'YAPI',u'TİC',u'İMAR',u'ARSA',u'HABER-ISI']
# HABER-ISI: v2r TEMİZ · eşik >=250 kayıt (16 yıl / 8001 korpus)
D=[(u'Çubuklu',[1,1,0,1,0,1,1,1,1,1,1]),(u'Riva',[1,1,0,1,1,1,0,1,0,1,1]),(u'Kavacık',[1,1,0,0,1,1,1,1,0,1,1]),
(u'Tokatköy',[0,1,1,0,0,1,1,1,1,1,1]),(u'Gümüşsuyu',[1,1,0,0,0,0,1,1,1,1,1]),
(u'Paşabahçe',[0,1,0,1,1,0,0,1,0,0,1]),(u'İncirköy',[0,1,0,0,0,0,1,1,1,1,0]),(u'Yalıköy',[1,0,1,0,0,1,1,1,0,0,0]),
(u'Ortaçeşme',[0,0,1,0,0,1,1,0,0,0,1]),(u'Soğuksu',[0,1,0,0,0,1,0,0,1,0,1]),(u'Merkez',[0,0,0,1,0,1,1,0,0,0,1]),
(u'Çiğdem',[0,0,0,0,0,1,0,0,1,0,1]),(u'Kanlıca',[1,0,0,0,0,1,0,1,0,0,1]),(u'Polonezköy',[0,1,0,0,0,0,0,1,1,0,0]),
(u'Rüzgarlıbahçe',[0,0,0,0,0,0,1,0,1,1,0]),(u'Acarlar',[0,0,0,0,0,1,0,0,1,0,0]),(u'Baklacı',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Çamlıbahçe',[0,0,1,0,0,0,1,0,0,0,0]),(u'Çavuşbaşı Çiftlik',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Çengeldere',[0,0,0,0,0,1,0,0,0,1,0]),(u'Görele',[0,0,0,0,0,1,0,0,0,1,0]),(u'Göksu',[0,0,0,0,0,0,1,0,0,0,1]),
(u'Göztepe',[0,0,0,0,0,1,0,0,1,0,0]),(u'İshaklı',[1,0,0,0,0,0,0,0,0,1,0]),(u'Yavuz Selim',[0,0,0,0,0,1,0,0,0,1,0]),
(u'Yeni Mahalle',[0,0,0,0,0,0,1,0,0,1,0]),(u'Cumhuriyetköy',[0,0,0,0,0,0,0,0,0,1,1]),(u'Fatih',[0,0,0,0,0,0,0,0,0,0,1]),
(u'Anadolu Hisarı',[0,0,0,0,0,1,0,0,0,0,0]),(u'Anadolu Kavağı',[0,0,0,0,0,0,0,1,0,0,0]),
(u'Anadolufeneri',[0,0,0,0,0,0,0,0,0,1,0]),(u'Elmalı',[0,0,0,0,0,0,0,0,0,1,0]),
(u'Mahmutşevketpaşa',[0,0,0,0,0,0,0,0,0,1,0]),(u'Örnekköy',[0,0,0,0,0,0,0,0,0,1,0]),(u'Zerzavatçı',[0,0,0,0,0,0,0,0,0,1,0])]
D=sorted(D,key=lambda r:(-sum(r[1]),r[0]))
fig,ax=plt.subplots(figsize=(13.5,13))
M=np.array([r[1] for r in D],float); t=M.sum(1).astype(int)
ax.imshow(M,cmap=ListedColormap(['#E8ECEF','#B4232A']),aspect='auto',vmin=0,vmax=1)
ax.set_xticks(range(len(K))); ax.set_xticklabels(K,fontsize=10.5,rotation=32,ha='left',fontweight='bold')
ax.xaxis.tick_top()
ax.set_yticks(range(len(D))); ax.set_yticklabels([u'%s   %d/11'%(r[0],v) for r,v in zip(D,t)],fontsize=10)
for i in range(len(D)):
    for j in range(len(K)):
        if M[i,j]: ax.text(j,i,u'●',ha='center',va='center',color='white',fontsize=12)
for x in range(len(K)+1): ax.axvline(x-0.5,color='white',lw=2.0)
for y in range(len(D)+1): ax.axhline(y-0.5,color='white',lw=2.0)
ax.axhline(4.5,color='#1B2631',lw=2.6,ls='--'); ax.axhline(12.5,color='#7F8C8D',lw=1.5,ls=':')
ax.axvline(9.5,color='#B4232A',lw=2.4)
ax.set_title(u'BEYKOZ ISI HARİTASI — FİNAL\n45 mahalle × 11 sinyal ayağı  ·  35 mahallede en az 1 ayak  ·  10 mahallede hiçbir ayak yok',
 fontsize=15,fontweight='bold',pad=52,loc='left')
fig.text(0.012,0.020,
 u'11. AYAK  HABER-ISI: 16 yıllık gövde arşivi (Beykoz Güncel · 8001/8001 kayıt · 2010-2024) · eşik ≥250 kayıt (~%3 korpus) · kaynak S94 ısı-v2r TEMİZ\n'
 u'v2r düzeltmesi: S93\'te Fatih/Riva/Kavacık her biri 7999/7999 (boilerplate) idi → temizlendi: Kavacık 866 · Fatih 649 · Riva 476. Üç ✕ gerçek skora döndü.\n'
 u'UYARI — ayak-set duyarlılığı: sıralama hangi ayakların sayıldığına duyarlıdır. Çubuklu liderliği İMAR+ARSA+HABER-ISI eklenmesiyle geldi, yeni kanıtla değil.\n'
 u'Radar = HAKEM (ayak değil) · T131 ticari-zincir = KATMAN (ayak değil) · CC-Signals SIG11 · 2026-07-28',
 fontsize=8,color='#4A5A66')
plt.tight_layout(rect=[0,0.055,1,1]); plt.savefig('cikti/beykoz_isi_haritasi.png',dpi=170,facecolor='white')
print(u'FINAL · 0-ayak:',45-len(D),u'· lider:',D[0][0],t[0])
