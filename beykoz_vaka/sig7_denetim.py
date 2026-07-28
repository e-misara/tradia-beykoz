import json, collections, re, unicodedata, statistics
B='/Users/GAC-A/'
def slug(s):
    s=(s or '').lower().strip()
    tr={'ı':'i','İ':'i','ş':'s','ğ':'g','ü':'u','ö':'o','ç':'c','â':'a'}
    s=''.join(tr.get(c,c) for c in s)
    return re.sub(r'[^a-z0-9]+','_',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode()).strip('_')
ALIAS={'anadoluhisari':'anadolu_hisari','anadolukavagi':'anadolu_kavagi','yeni_mahalle':'yeni',
 'cumhuriyet':'cumhuriyetkoy','yavuzselim':'yavuz_selim','cavusbasi':'cavusbasi_ciftlik',
 'ciftlik':'cavusbasi_ciftlik','beykoz_merkez':'merkez','anadolu_feneri':'anadolufeneri','pasabahce_mh':'pasabahce'}
kanon={m['ad']:m for m in json.load(open(B+'tradia_ttmap/02_NOKTA/vaka_beykoz_ttmap_MAP24.json'))['mahalleler']}
def K(n):
    s=ALIAS.get(slug(n),slug(n)); return s if s in kanon else None

SICAK=set("riva cubuklu kavacik tokatkoy gumussuyu incirkoy pasabahce yalikoy polonezkoy camlibahce kanlica merkez soguksu acarlar goztepe ruzgarlibahce ortacesme cigdem yavuz_selim cengeldere goksu yeni ishakli anadolu_kavagi".split())
SIFIR=sorted(set(kanon)-SICAK)

# --- ham kaynaklar
IH=json.load(open(B+'cc_ihale/cikti/vaka_beykoz_ihale_I62.json'))['kayitlar']
COK=re.compile(r'grup okul|anadolu yakası|müteferrik|arıtma tesisleri|kısım',re.I)
BAK=re.compile(r'onarım|bakım|tadilat|revizyon|yalıtım|cephe|temizlik|islah|iksa|hafriyat',re.I)
GEL=re.compile(r'yapım işi|yapımı|inşaat|geliştir|tevsi',re.I)
kamu=collections.defaultdict(lambda:{'gel':0,'tl':0,'bak':0,'cok':0}); firma=collections.defaultdict(set)
for r in IH:
    k=K(r.get('mahalle_i62') or '')
    if not k: continue
    s=r.get('is_adi') or ''
    if r.get('yuklenici'): firma[k].add(r['yuklenici'][:40])
    if COK.search(s): kamu[k]['cok']+=1
    elif GEL.search(s) and not BAK.search(s): kamu[k]['gel']+=1; kamu[k]['tl']+=r.get('tutar_tl') or 0
    else: kamu[k]['bak']+=1
BS=json.load(open(B+'tradia_basin/cikti/vaka_beykoz_basin_S80.json'))
FP=['beykoz-belediyesi-sorusturmasinda','beykoz-belediyesine-rusvet','sorusturmasinda-ikinci-dalga','hayko-cepkin']
haber=collections.defaultdict(int)
for r in BS['kayitlar_tumu_birlesik']:
    fp=any(x in (r.get('url') or '') for x in FP)
    for m in (r.get('mahalleler') or []):
        k=K(m)
        if k and not(fp and k=='cumhuriyetkoy'): haber[k]+=1
L=[json.loads(l) for l in open(B+'tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl')]
uz=collections.Counter(); uz_all=collections.Counter()
for x in L:
    k=K(x.get('_alt') or '')
    if not k: continue
    uz_all[k]+=1
    if x.get('_kat')=='konut_satilik': uz[k]+=1
CSV={'acarlar':146,'riva':109,'goztepe':27,'yavuz_selim':24,'baklaci':22,'cengeldere':19,'gorele':13,
 'cavusbasi_ciftlik':10,'kavacik':6,'polonezkoy':6,'mahmutsevketpasa':6,'pasamandira':5,'ogumce':5,
 'cubuklu':4,'kanlica':4,'elmali':3,'anadolu_hisari':2,'merkez':2}
POI={'kavacik':74,'merkez':47,'ruzgarlibahce':28,'gumussuyu':26,'cubuklu':26,'yalikoy':20,'incirkoy':17,
 'goksu':16,'ortacesme':15,'anadolu_kavagi':12,'yeni':10,'tokatkoy':8,'acarlar':4,'kanlica':4,'polonezkoy':4,
 'anadolu_hisari':3,'poyrazkoy':3,'soguksu':2,'pasabahce':2,'camlibahce':2,'baklaci':2,'cengeldere':2,
 'cigdem':1,'yavuz_selim':1,'fatih':1,'alibahadir':1,'zerzavatci':1,'riva':0}
AGIR={'yeni':68,'cubuklu':43,'gumussuyu':43,'camlibahce':36,'kavacik':30,'tokatkoy':30,'incirkoy':25,'yalikoy':25,'goksu':20,'goztepe':19}
IMAR=set("tokatkoy cubuklu gumussuyu incirkoy cigdem soguksu acarlar ruzgarlibahce goztepe polonezkoy".split())
BORSA={'riva','tokatkoy','kavacik','incirkoy','polonezkoy','pasabahce','soguksu','gumussuyu','cubuklu'}
SOSYAL={'pasabahce':3,'kavacik':4,'riva':2,'incirkoy':1,'cubuklu':1,'tokatkoy':1,'polonezkoy':1,'anadolu_kavagi':1}
# S53 emsal GÜÇLÜ (n>=8) hücreleri — satılık+kiralık+arsa
S53={'anadolu_hisari':[('yalı-köşk sat',9,545455),('daire kir',13,564)],
 'baklaci':[('villa sat',21,151429),('arsa sat',17,40397)],
 'cavusbasi_ciftlik':[('arsa sat',34,32971)],
 'gorele':[('arsa sat',12,41593)],
 'yavuz_selim':[('arsa sat',37,30943),('villa kir',12,543)],
 'ornekkoy':[('arsa sat',20,25864)],'elmali':[('arsa sat',17,24583)],
 'mahmutsevketpasa':[('arsa sat',20,16411)],'anadolufeneri':[('arsa sat',16,15216)],
 'cumhuriyetkoy':[('arsa sat',9,13317)],'ishakli':[('arsa sat',10,13133)],
 'zerzavatci':[('arsa sat',8,24851)]}

print(f"21 SIFIR MAHALLE — HAM KAYNAK YENİDEN SORGUSU\n{'='*118}")
print(f"{'mahalle':20}{'kamu(gel/bak/çok)':>20}{'uzKS':>6}{'uzTÜM':>7}{'CSV':>5}{'POI':>5}{'ağır':>6}{'firma':>7}{'haber':>6}{'S53 GÜÇLÜ hücre':>22}")
rows=[]
for k in SIFIR:
    c=kamu.get(k,{'gel':0,'tl':0,'bak':0,'cok':0})
    s53=S53.get(k,[])
    rows.append((k,c,uz[k],uz_all[k],CSV.get(k,0),POI.get(k,0),AGIR.get(k,0),len(firma.get(k,())),haber.get(k,0),s53))
    print(f"{k:20}{f'{c[chr(103)+chr(101)+chr(108)]}/{c[chr(98)+chr(97)+chr(107)]}/{c[chr(99)+chr(111)+chr(107)]}':>20}"
          f"{uz[k]:>6}{uz_all[k]:>7}{CSV.get(k,0):>5}{POI.get(k,0):>5}{AGIR.get(k,0):>6}{len(firma.get(k,())):>7}{haber.get(k,0):>6}"
          f"{('; '.join(f'{t} n={n}' for t,n,_ in s53) or '—'):>22}")
print()
print("★ FİYAT AYAĞI TESTİ — kural: CSV n>=10 VE uzantı n>=20")
for k,c,ks,tum,csv,poi,ag,fr,hb,s53 in rows:
    if ks>=20 or csv>=10 or s53:
        neden = []
        if csv<10: neden.append(f"CSV n={csv} <10")
        if ks<20: neden.append(f"uzKS n={ks} <20")
        print(f"   {k:20} uzKS={ks:>3} uzTÜM={tum:>3} CSV={csv:>3}  S53={'; '.join(f'{t} n={n}' for t,n,_ in s53) or '-':<40} → AYAK YANMADI: {' + '.join(neden)}")
