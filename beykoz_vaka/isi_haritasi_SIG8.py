# CC-Signals SIG8 — ısı v3: E1 (FİYAT tek-kaynak) + ARSA 10. ayak
import json, collections, re, unicodedata
B='/Users/GAC-A/'
def slug(s):
    s=(s or '').lower().strip()
    tr={'ı':'i','İ':'i','ş':'s','ğ':'g','ü':'u','ö':'o','ç':'c','â':'a'}
    s=''.join(tr.get(c,c) for c in s)
    return re.sub(r'[^a-z0-9]+','_',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode()).strip('_')
AL={'anadoluhisari':'anadolu_hisari','anadolukavagi':'anadolu_kavagi','yeni_mahalle':'yeni','cumhuriyet':'cumhuriyetkoy',
 'yavuzselim':'yavuz_selim','cavusbasi':'cavusbasi_ciftlik','ciftlik':'cavusbasi_ciftlik','beykoz_merkez':'merkez','anadolu_feneri':'anadolufeneri'}
kanon={m['ad']:m for m in json.load(open(B+'tradia_ttmap/02_NOKTA/vaka_beykoz_ttmap_MAP24.json'))['mahalleler']}
def K(n):
    s=AL.get(slug(n),slug(n)); return s if s in kanon else None
# --- kaynaklar
IH=json.load(open(B+'cc_ihale/cikti/vaka_beykoz_ihale_I62.json'))['kayitlar']
COK=re.compile(r'grup okul|anadolu yakası|müteferrik|arıtma tesisleri|kısım',re.I)
BAK=re.compile(r'onarım|bakım|tadilat|revizyon|yalıtım|cephe|temizlik|islah|iksa|hafriyat',re.I)
GEL=re.compile(r'yapım işi|yapımı|inşaat|geliştir|tevsi',re.I)
kamu=collections.defaultdict(lambda:{'n':0,'tl':0}); firma=collections.defaultdict(set)
for r in IH:
    k=K(r.get('mahalle_i62') or '')
    if not k: continue
    s=r.get('is_adi') or ''
    if r.get('yuklenici'): firma[k].add(r['yuklenici'][:40])
    if COK.search(s): continue
    if GEL.search(s) and not BAK.search(s): kamu[k]['n']+=1; kamu[k]['tl']+=r.get('tutar_tl') or 0
BS=json.load(open(B+'tradia_basin/cikti/vaka_beykoz_basin_S80.json'))
FP=['beykoz-belediyesi-sorusturmasinda','beykoz-belediyesine-rusvet','sorusturmasinda-ikinci-dalga','hayko-cepkin']
haber=collections.Counter()
for r in BS['kayitlar_tumu_birlesik']:
    fp=any(x in (r.get('url') or '') for x in FP)
    for m in (r.get('mahalleler') or []):
        k=K(m)
        if k and not(fp and k=='cumhuriyetkoy'): haber[k]+=1
L=[json.loads(l) for l in open(B+'tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl')]
uz=collections.Counter()
for x in L:
    if x.get('_kat')=='konut_satilik':
        k=K(x.get('_alt') or '')
        if k: uz[k]+=1
CSV={'acarlar':146,'riva':109,'goztepe':27,'yavuz_selim':24,'baklaci':22,'cengeldere':19,'gorele':13,
 'cavusbasi_ciftlik':10,'kavacik':6,'polonezkoy':6,'mahmutsevketpasa':6,'pasamandira':5,'ogumce':5,
 'cubuklu':4,'kanlica':4,'elmali':3,'anadolu_hisari':2,'merkez':2}
# S53 arsa satılık GÜÇLÜ (n>=8) — 10. AYAK
ARSA={'riva':67,'yavuz_selim':37,'cavusbasi_ciftlik':34,'gumussuyu':31,'cengeldere':30,'ornekkoy':20,
 'mahmutsevketpasa':20,'baklaci':17,'elmali':17,'anadolufeneri':16,'yeni':15,'ruzgarlibahce':14,'tokatkoy':13,
 'incirkoy':12,'gorele':12,'kavacik':11,'cubuklu':11,'ishakli':10,'cumhuriyetkoy':9,'zerzavatci':8}
GERCEK=set("ortacesme pasabahce cubuklu cigdem yalikoy gumussuyu soguksu incirkoy camlibahce goksu yeni kavacik goztepe acarlar".split())
NDVI=json.load(open(B+'tradia_ttmap/02_NOKTA/beykoz_zaman_makinesi.json'))['mahalleler']
KIRLI={k for k,v in NDVI.items() for y,x in v['ndvi_seri'].items() if x is not None and (x>1 or x<0.06)}
BORSA={'riva','tokatkoy','kavacik','incirkoy','polonezkoy','pasabahce','soguksu','gumussuyu','cubuklu'}
SOSYAL={'pasabahce':3,'kavacik':4,'riva':2}
POI={'kavacik':74,'merkez':47,'ruzgarlibahce':28,'gumussuyu':26,'cubuklu':26,'yalikoy':20,'incirkoy':17,'goksu':16,'ortacesme':15,'anadolu_kavagi':12,'yeni':10,'tokatkoy':8}
AGIR={'yeni':68,'cubuklu':43,'gumussuyu':43,'camlibahce':36,'kavacik':30,'tokatkoy':30,'incirkoy':25,'yalikoy':25,'goksu':20,'goztepe':19}
IMAR=set("tokatkoy cubuklu gumussuyu incirkoy cigdem soguksu acarlar ruzgarlibahce goztepe polonezkoy".split())
TIC={'kavacik','cubuklu','anadolu_kavagi','yalikoy','gumussuyu','riva','polonezkoy','kanlica','tokatkoy','incirkoy','pasabahce'}
KEYS=['KAMU','SERMAYE','UYDU','HABER','SÖYLEM','FİYAT','YAPI','TİC','İMAR','ARSA']
def legs(k):
    m=kanon[k]; c=kamu.get(k,{'n':0,'tl':0}); nd=NDVI.get(k,{})
    return {'KAMU':(c['n']>=2 and c['tl']>=50e6) or c['tl']>=100e6,
      'SERMAYE':k in BORSA,
      'UYDU':(k in GERCEK and m['netfark_puan']>=2 and m['guven'] in('orta','yuksek')) or (k not in KIRLI and (nd.get('net_1985_2025') or 0)<=-0.05 and nd.get('guven')=='yuksek'),
      'HABER':haber.get(k,0)>=2, 'SÖYLEM':SOSYAL.get(k,0)>=2,
      'FİYAT':uz.get(k,0)>=20 or CSV.get(k,0)>=10,          # ← E1
      'YAPI':POI.get(k,0)>=15 or AGIR.get(k,0)>=25,
      'TİC':k in TIC, 'İMAR':k in IMAR, 'ARSA':ARSA.get(k,0)>=8}   # ← 10. ayak
rows=sorted(((sum(legs(k).values()),k,legs(k)) for k in kanon),key=lambda r:(-r[0],r[1]))
print(f"{'mahalle':18}{'ayak':>4}  "+' '.join(f'{x[:4]:>5}' for x in KEYS))
for s,k,l in rows:
    if s: print(f"{k:18}{s:>4}  "+' '.join(('  ●  ' if l[x] else '  ·  ') for x in KEYS))
z=[k for s,k,l in rows if s==0]
print(f"\n0 ayak: {len(z)} → {', '.join(z)}")
print('dagilim:',dict(sorted(collections.Counter(s for s,k,l in rows).items(),reverse=True)))
