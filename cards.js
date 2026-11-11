// build_web.py が作るファイル。直すときは people.py / breaks.py を直して作り直す。
const CARDS = [
{
"no": 1,
"name": "卑弥呼",
"sub": "",
"yomi": "ひみこ",
"era": "弥生",
"group": "kodai",
"q": [
"魏に使いを送り、",
"「親魏倭王」の称号と",
"金印を授けられた",
"邪馬台国の女王は？"
],
"img": null,
"year": 239
},
{
"no": 2,
"name": "厩戸王",
"sub": "聖徳太子",
"yomi": "うまやとおう",
"era": "飛鳥",
"group": "kodai",
"q": [
"推古天皇のもとで",
"冠位十二階や",
"憲法十七条を",
"定めた人物は？"
],
"img": "img/002.jpg",
"year": 604,
"file": "Shōtoku_Taishi_Shōmankyō_Kōsan.jpg",
"license": "Public domain"
},
{
"no": 3,
"name": "中大兄皇子",
"sub": "",
"yomi": "なかのおおえのおうじ",
"era": "飛鳥",
"group": "kodai",
"q": [
"中臣鎌足とともに",
"蘇我氏を倒し、",
"のちに近江大津宮で",
"即位した人物は？"
],
"img": "img/003.jpg",
"year": 645,
"file": "Emperor_Tenji_(Kanou_Tanyuu).jpg",
"license": "Public domain"
},
{
"no": 4,
"name": "聖武天皇",
"sub": "",
"yomi": "しょうむてんのう",
"era": "奈良",
"group": "kodai",
"q": [
"国分寺建立の詔と",
"大仏造立の詔を",
"出した天皇は？"
],
"img": "img/004.jpg",
"year": 743,
"file": "Emperor_Shomu.jpg",
"license": "Public domain"
},
{
"no": 5,
"name": "鑑真",
"sub": "",
"yomi": "がんじん",
"era": "奈良",
"group": "kodai",
"q": [
"渡航に何度も",
"失敗しながら来日し、",
"唐招提寺を開いた",
"唐の僧は？"
],
"img": "img/005.jpg",
"year": 754,
"file": "Ganjin_wajyo_portrait.JPG",
"license": "Public domain"
},
{
"no": 6,
"name": "桓武天皇",
"sub": "",
"yomi": "かんむてんのう",
"era": "平安",
"group": "kodai",
"q": [
"平安京に都を移し、",
"坂上田村麻呂を",
"征夷大将軍として",
"蝦夷を攻めさせた",
"天皇は？"
],
"img": "img/006.jpg",
"year": 794,
"file": "Emperor_Kammu_large.jpg",
"license": "Public domain"
},
{
"no": 7,
"name": "空海",
"sub": "",
"yomi": "くうかい",
"era": "平安",
"group": "kodai",
"q": [
"唐で密教を学び、",
"高野山に金剛峰寺を",
"開いて真言宗を",
"広めた僧は？"
],
"img": "img/007.jpg",
"year": 816,
"file": "Portrait_of_Kōbō_Daishi.jpg",
"license": "Public domain"
},
{
"no": 8,
"name": "菅原道真",
"sub": "",
"yomi": "すがわらのみちざね",
"era": "平安",
"group": "kodai",
"q": [
"遣唐使の停止を提案し、",
"のちに藤原時平の",
"策謀で大宰府に",
"左遷された人物は？"
],
"img": "img/008.jpg",
"year": 894,
"file": "束帯天神像.png",
"license": "Public domain"
},
{
"no": 9,
"name": "藤原道長",
"sub": "",
"yomi": "ふじわらのみちなが",
"era": "平安",
"group": "kodai",
"q": [
"娘を次々と",
"天皇の后とし、",
"「この世をば",
"我が世とぞ思ふ」と",
"詠んだ人物は？"
],
"img": "img/009.jpg",
"year": 1016,
"file": "Fujiwara_no_Michinaga_2.jpg",
"license": "Public domain"
},
{
"no": 10,
"name": "白河上皇",
"sub": "",
"yomi": "しらかわじょうこう",
"era": "平安",
"group": "kodai",
"q": [
"１０８６年に",
"院政を始め、",
"北面の武士を",
"置いた上皇は？"
],
"img": "img/010.jpg",
"year": 1086,
"file": "Emperor_Shirakawa.jpg",
"license": "Public domain"
},
{
"no": 11,
"name": "平清盛",
"sub": "",
"yomi": "たいらのきよもり",
"era": "平安",
"group": "kodai",
"q": [
"武士として初めて",
"太政大臣となり、",
"大輪田泊を修築して",
"日宋貿易を",
"進めた人物は？"
],
"img": "img/011.jpg",
"year": 1167,
"file": "Taira_no_Kiyomori,TenshiSekkanMiei.jpg",
"license": "Public domain"
},
{
"no": 12,
"name": "源頼朝",
"sub": "",
"yomi": "みなもとのよりとも",
"era": "鎌倉",
"group": "chusei",
"q": [
"守護・地頭の設置を",
"認められ、",
"１１９２年に征夷大将軍",
"となった人物は？"
],
"img": "img/012.jpg",
"year": 1192,
"file": "Minamoto_no_Yoritomo_(cropped).jpg",
"license": "Public domain"
},
{
"no": 13,
"name": "北条泰時",
"sub": "",
"yomi": "ほうじょうやすとき",
"era": "鎌倉",
"group": "chusei",
"q": [
"評定衆を置き、",
"御成敗式目を制定した",
"鎌倉幕府の執権は？"
],
"img": "img/013.jpg",
"year": 1232,
"file": "Hōjō_Yasutoki.jpg",
"license": "Public domain"
},
{
"no": 14,
"name": "北条時宗",
"sub": "",
"yomi": "ほうじょうときむね",
"era": "鎌倉",
"group": "chusei",
"q": [
"文永・弘安の役で、",
"元の襲来を退けた",
"鎌倉幕府の執権は？"
],
"img": "img/014.jpg",
"year": 1274,
"file": "Hōjō_Tokimune.jpg",
"license": "Public domain"
},
{
"no": 15,
"name": "親鸞",
"sub": "",
"yomi": "しんらん",
"era": "鎌倉",
"group": "chusei",
"q": [
"悪人正機を説き、",
"浄土真宗（一向宗）を",
"開いた僧は？"
],
"img": "img/015.jpg",
"year": 1224,
"file": "ShinranShonin.png",
"license": "Public domain"
},
{
"no": 16,
"name": "後醍醐天皇",
"sub": "",
"yomi": "ごだいごてんのう",
"era": "南北朝",
"group": "chusei",
"q": [
"鎌倉幕府を倒して",
"建武の新政を始め、",
"のちに吉野へ",
"移った天皇は？"
],
"img": "img/016.jpg",
"year": 1334,
"file": "Emperor_Godaigo_by_Monkan-bō_Kōshin.jpg",
"license": "Public domain"
},
{
"no": 17,
"name": "足利尊氏",
"sub": "",
"yomi": "あしかがたかうじ",
"era": "南北朝",
"group": "chusei",
"q": [
"建武式目を定め、",
"１３３８年に",
"征夷大将軍となった",
"人物は？"
],
"img": "img/017.jpg",
"year": 1338,
"file": "Ashikaga_Takauji_Jōdo-ji.jpg",
"license": "Public domain"
},
{
"no": 18,
"name": "足利義満",
"sub": "",
"yomi": "あしかがよしみつ",
"era": "室町",
"group": "chusei",
"q": [
"南北朝の合一を実現し、",
"明との勘合貿易を始めた",
"室町幕府の将軍は？"
],
"img": "img/018.jpg",
"year": 1392,
"file": "Yoshimitsu_Ashikaga_cropped.jpg",
"license": "Public domain"
},
{
"no": 19,
"name": "足利義政",
"sub": "",
"yomi": "あしかがよしまさ",
"era": "室町",
"group": "chusei",
"q": [
"銀閣を建てて",
"東山文化を育み、",
"跡継ぎ問題が",
"応仁の乱の一因と",
"なった将軍は？"
],
"img": "img/019.jpg",
"year": 1467,
"file": "Ashikaga_Yoshimasa.jpg",
"license": "Public domain"
},
{
"no": 20,
"name": "織田信長",
"sub": "",
"yomi": "おだのぶなが",
"era": "戦国",
"group": "chusei",
"q": [
"桶狭間の戦いで",
"今川義元を破り、",
"安土城下に楽市令を",
"出した人物は？"
],
"img": "img/020.jpg",
"year": 1560,
"file": "Odanobunaga.jpg",
"license": "Public domain"
},
{
"no": 21,
"name": "豊臣秀吉",
"sub": "",
"yomi": "とよとみひでよし",
"era": "安土桃山",
"group": "kinsei",
"q": [
"太閤検地と刀狩を行い、",
"全国統一を",
"果たした人物は？"
],
"img": "img/021.jpg",
"year": 1590,
"file": "Toyotomi_hideyoshi.jpg",
"license": "Public domain"
},
{
"no": 22,
"name": "徳川家康",
"sub": "",
"yomi": "とくがわいえやす",
"era": "江戸",
"group": "kinsei",
"q": [
"関ヶ原の戦いに勝利し、",
"１６０３年に",
"江戸幕府を開いた",
"人物は？"
],
"img": "img/022.jpg",
"year": 1603,
"file": "Tokugawa_Ieyasu2.JPG",
"license": "Public domain"
},
{
"no": 23,
"name": "徳川家光",
"sub": "",
"yomi": "とくがわいえみつ",
"era": "江戸",
"group": "kinsei",
"q": [
"参勤交代を制度化し、",
"ポルトガル船の",
"来航を禁止した",
"将軍は？"
],
"img": "img/023.jpg",
"year": 1635,
"file": "Iemitu.jpg",
"license": "Public domain"
},
{
"no": 24,
"name": "徳川綱吉",
"sub": "",
"yomi": "とくがわつなよし",
"era": "江戸",
"group": "kinsei",
"q": [
"生類憐みの令を出し、",
"湯島聖堂を建てた",
"将軍は？"
],
"img": "img/024.jpg",
"year": 1685,
"file": "Tsunyaoshi.jpg",
"license": "Public domain"
},
{
"no": 25,
"name": "新井白石",
"sub": "",
"yomi": "あらいはくせき",
"era": "江戸",
"group": "kinsei",
"q": [
"正徳の政治を進め、",
"海舶互市新例で",
"長崎貿易を制限した",
"儒学者は？"
],
"img": "img/025.jpg",
"year": 1715,
"file": "Arai_Hakuseki_-_Japanischer_Gelehrter.jpg",
"license": "Public domain"
},
{
"no": 26,
"name": "徳川吉宗",
"sub": "",
"yomi": "とくがわよしむね",
"era": "江戸",
"group": "kinsei",
"q": [
"享保の改革で",
"上げ米の制や",
"目安箱を設けた",
"将軍は？"
],
"img": "img/026.jpg",
"year": 1716,
"file": "Tokugawa_Yoshimune.jpg",
"license": "Public domain"
},
{
"no": 27,
"name": "田沼意次",
"sub": "",
"yomi": "たぬまおきつぐ",
"era": "江戸",
"group": "kinsei",
"q": [
"株仲間を",
"積極的に公認し、",
"印旛沼の干拓を",
"試みた老中は？"
],
"img": "img/027.jpg",
"year": 1772,
"file": "Tanuma_Okitsugu2.jpg",
"license": "Public domain"
},
{
"no": 28,
"name": "松平定信",
"sub": "",
"yomi": "まつだいらさだのぶ",
"era": "江戸",
"group": "kinsei",
"q": [
"寛政の改革で",
"囲米や棄捐令を",
"実施した老中は？"
],
"img": "img/028.jpg",
"year": 1787,
"file": "Matsudaira_Sadanobu.jpg",
"license": "Public domain"
},
{
"no": 29,
"name": "本居宣長",
"sub": "",
"yomi": "もとおりのりなが",
"era": "江戸",
"group": "kinsei",
"q": [
"『古事記伝』を著し、",
"国学を大成した",
"人物は？"
],
"img": "img/029.jpg",
"year": 1798,
"file": "本居宣長02.jpg",
"license": "Public domain"
},
{
"no": 30,
"name": "杉田玄白",
"sub": "",
"yomi": "すぎたげんぱく",
"era": "江戸",
"group": "kinsei",
"q": [
"前野良沢らとともに",
"『解体新書』を訳した",
"蘭方医は？"
],
"img": "img/030.jpg",
"year": 1774,
"file": "Sugita_Genpaku.jpg",
"license": "Public domain"
},
{
"no": 31,
"name": "水野忠邦",
"sub": "",
"yomi": "みずのただくに",
"era": "江戸",
"group": "kinsei",
"q": [
"天保の改革で",
"株仲間の解散や",
"上知令を命じた",
"老中は？"
],
"img": "img/031.jpg",
"year": 1841,
"file": "Mizuno_Tadakuni.jpg",
"license": "Public domain"
},
{
"no": 32,
"name": "井伊直弼",
"sub": "",
"yomi": "いいなおすけ",
"era": "幕末",
"group": "kinsei",
"q": [
"勅許を得ずに",
"日米修好通商条約に",
"調印し、",
"桜田門外の変で",
"暗殺された大老は？"
],
"img": "img/032.jpg",
"year": 1858,
"file": "Ii_Naosuke.jpg",
"license": "Public domain"
},
{
"no": 33,
"name": "西郷隆盛",
"sub": "",
"yomi": "さいごうたかもり",
"era": "明治",
"group": "kingendai",
"q": [
"江戸城の無血開城に",
"尽力し、",
"のちに西南戦争を",
"起こした人物は？"
],
"img": "img/033.jpg",
"year": 1877,
"file": "Saigo_Takamori_Portrait_by_Ishikawa_Shizumasa.jpg",
"license": "Public domain"
},
{
"no": 34,
"name": "大久保利通",
"sub": "",
"yomi": "おおくぼとしみち",
"era": "明治",
"group": "kingendai",
"q": [
"岩倉使節団に加わり、",
"帰国後は内務卿として",
"殖産興業を進めた",
"人物は？"
],
"img": "img/034.jpg",
"year": 1873,
"file": "Toshimichi_Okubo_4.jpg",
"license": "Public domain"
},
{
"no": 35,
"name": "木戸孝允",
"sub": "",
"yomi": "きどたかよし",
"era": "明治",
"group": "kingendai",
"q": [
"五箇条の誓文の",
"作成に関わり、",
"版籍奉還を推進した",
"長州藩出身の人物は？"
],
"img": "img/035.jpg",
"year": 1868,
"file": "Takayoshi_Kido_suit.jpg",
"license": "Public domain"
},
{
"no": 36,
"name": "伊藤博文",
"sub": "",
"yomi": "いとうひろぶみ",
"era": "明治",
"group": "kingendai",
"q": [
"大日本帝国憲法の",
"起草を中心となって",
"進め、",
"初代内閣総理大臣と",
"なった人物は？"
],
"img": "img/036.jpg",
"year": 1885,
"file": "ITŌ_Hirobumi.jpg",
"license": "Public domain"
},
{
"no": 37,
"name": "大隈重信",
"sub": "",
"yomi": "おおくましげのぶ",
"era": "明治",
"group": "kingendai",
"q": [
"立憲改進党を結成し、",
"東京専門学校",
"（のちの早稲田大学）を",
"創設した人物は？"
],
"img": "img/037.jpg",
"year": 1882,
"file": "Shigenobu_Okuma_5.jpg",
"license": "Public domain"
},
{
"no": 38,
"name": "板垣退助",
"sub": "",
"yomi": "いたがきたいすけ",
"era": "明治",
"group": "kingendai",
"q": [
"民撰議院設立の",
"建白書を提出し、",
"自由党を結成した",
"人物は？"
],
"img": "img/038.jpg",
"year": 1874,
"file": "ITAGAKI_Taisuke.jpg",
"license": "Public domain"
},
{
"no": 39,
"name": "福沢諭吉",
"sub": "",
"yomi": "ふくざわゆきち",
"era": "明治",
"group": "kingendai",
"q": [
"『学問のすゝめ』を",
"著し、慶應義塾を",
"開いた人物は？"
],
"img": "img/039.jpg",
"year": 1872,
"file": "Fukuzawa_Yukichi_1891.jpg",
"license": "Public domain"
},
{
"no": 40,
"name": "陸奥宗光",
"sub": "",
"yomi": "むつむねみつ",
"era": "明治",
"group": "kingendai",
"q": [
"１８９４年に",
"領事裁判権の撤廃を",
"実現し、日清戦争の",
"講和にも関わった",
"外務大臣は？"
],
"img": "img/040.jpg",
"year": 1894,
"file": "Mutsu_Munemitsu.jpg",
"license": "Public domain"
},
{
"no": 41,
"name": "小村寿太郎",
"sub": "",
"yomi": "こむらじゅたろう",
"era": "明治",
"group": "kingendai",
"q": [
"ポーツマス条約に",
"調印し、１９１１年に",
"関税自主権の回復を",
"実現した外務大臣は？"
],
"img": "img/041.jpg",
"year": 1905,
"file": "Portrait_of_Komura_Jutaro.jpg",
"license": "Public domain"
},
{
"no": 42,
"name": "桂太郎",
"sub": "",
"yomi": "かつらたろう",
"era": "明治・大正",
"group": "kingendai",
"q": [
"日英同盟を結び、",
"第３次内閣が",
"大正政変で倒れた",
"首相は？"
],
"img": "img/042.jpg",
"year": 1902,
"file": "11_KatsuraT.jpg",
"license": "Public domain"
},
{
"no": 43,
"name": "原敬",
"sub": "",
"yomi": "はらたかし",
"era": "大正",
"group": "kingendai",
"q": [
"米騒動の後に",
"本格的な政党内閣を",
"組織し、",
"「平民宰相」と",
"呼ばれた首相は？"
],
"img": "img/043.jpg",
"year": 1918,
"file": "Takashi_Hara_formal.jpg",
"license": "Public domain"
},
{
"no": 44,
"name": "加藤高明",
"sub": "",
"yomi": "かとうたかあき",
"era": "大正",
"group": "kingendai",
"q": [
"護憲三派内閣を率い、",
"普通選挙法と",
"治安維持法を",
"成立させた首相は？"
],
"img": "img/044.jpg",
"year": 1925,
"file": "Takaaki_Kato_suit.jpg",
"license": "Public domain"
},
{
"no": 45,
"name": "浜口雄幸",
"sub": "",
"yomi": "はまぐちおさち",
"era": "昭和",
"group": "kingendai",
"q": [
"金解禁を断行し、",
"ロンドン海軍",
"軍縮条約を結んだ",
"首相は？"
],
"img": "img/045.jpg",
"year": 1930,
"file": "HAMAGUCHI_Osachi.jpg",
"license": "Public domain"
},
{
"no": 46,
"name": "犬養毅",
"sub": "",
"yomi": "いぬかいつよし",
"era": "昭和",
"group": "kingendai",
"q": [
"１９３１年に組閣して",
"金輸出を再禁止し、",
"五・一五事件で",
"暗殺された首相は？"
],
"img": "img/046.jpg",
"year": 1931,
"file": "Inukai_Tsuyoshi.jpg",
"license": "Public domain"
},
{
"no": 47,
"name": "近衛文麿",
"sub": "",
"yomi": "このえふみまろ",
"era": "昭和",
"group": "kingendai",
"q": [
"日中戦争が",
"始まったときの首相で、",
"のちに大政翼賛会の",
"総裁となった人物は？"
],
"img": "img/047.jpg",
"year": 1937,
"file": "Fumimaro_Konoe.jpg",
"license": "Public domain"
},
{
"no": 48,
"name": "吉田茂",
"sub": "",
"yomi": "よしだしげる",
"era": "昭和",
"group": "kingendai",
"q": [
"サンフランシスコ",
"平和条約と",
"日米安全保障条約に",
"調印した首相は？"
],
"img": "img/048.jpg",
"year": 1951,
"file": "Yoshida_Shigeru_ca._1950.jpg",
"license": "Public domain"
},
{
"no": 49,
"name": "佐藤栄作",
"sub": "",
"yomi": "さとうえいさく",
"era": "昭和",
"group": "kingendai",
"q": [
"日韓基本条約を結び、",
"沖縄返還を実現した",
"首相は？"
],
"img": "img/049.jpg",
"year": 1965,
"file": "Eisaku_Sato_19641109.jpg",
"license": "CC BY 4.0"
},
{
"no": 50,
"name": "田中角栄",
"sub": "",
"yomi": "たなかかくえい",
"era": "昭和",
"group": "kingendai",
"q": [
"日中共同声明で",
"中国との国交を",
"正常化し、",
"「日本列島改造論」を",
"掲げた首相は？"
],
"img": "img/050.jpg",
"year": 1972,
"file": "Kakuei_Tanaka_19720707.jpg",
"license": "CC BY 4.0"
},
{
"no": 51,
"name": "天武天皇",
"sub": "",
"yomi": "てんむてんのう",
"era": "飛鳥",
"group": "kodai",
"q": [
"壬申の乱で",
"大友皇子を破って",
"即位し、",
"八色の姓を",
"定めた天皇は？"
],
"img": "img/051.jpg",
"year": 672,
"file": "Emperor_Tenmu.jpg",
"license": "Public domain"
},
{
"no": 52,
"name": "持統天皇",
"sub": "",
"yomi": "じとうてんのう",
"era": "飛鳥",
"group": "kodai",
"q": [
"天武天皇の皇后で、",
"夫の死後に即位して",
"藤原京に都を",
"移した天皇は？"
],
"img": "img/052.jpg",
"year": 694,
"file": "Empress_Jito_by_Katsukawa_Shunsho.png",
"license": "Public domain"
},
{
"no": 53,
"name": "藤原不比等",
"sub": "",
"yomi": "ふじわらのふひと",
"era": "奈良",
"group": "kodai",
"q": [
"刑部親王らと",
"大宝律令をまとめ、",
"のちに養老律令の",
"編纂も進めた",
"藤原鎌足の子は？"
],
"img": "img/053.jpg",
"year": 701,
"file": "Fujiwara-Fuhito.jpg",
"license": "Public domain"
},
{
"no": 54,
"name": "行基",
"sub": "",
"yomi": "ぎょうき",
"era": "奈良",
"group": "kodai",
"q": [
"民衆に布教して",
"橋や池をつくり、",
"のちに大仏造立に",
"協力して大僧正と",
"なった僧は？"
],
"img": "img/054.jpg",
"year": 745,
"file": "Gyoki_Bosatsu_(Saidaiji_Nara).jpg",
"license": "Public domain"
},
{
"no": 55,
"name": "最澄",
"sub": "",
"yomi": "さいちょう",
"era": "平安",
"group": "kodai",
"q": [
"比叡山に",
"延暦寺を建て、",
"天台宗を開いて",
"大乗戒壇の設立を",
"めざした僧は？"
],
"img": "img/055.jpg",
"year": 805,
"file": "最澄像_一乗寺蔵_平安時代.jpg",
"license": "Public domain"
},
{
"no": 56,
"name": "清少納言",
"sub": "",
"yomi": "せいしょうなごん",
"era": "平安",
"group": "kodai",
"q": [
"一条天皇の",
"中宮定子に仕え、",
"随筆『枕草子』を",
"著した人物は？"
],
"img": "img/056.jpg",
"year": 1001,
"file": "Sei_Shonagon.jpg",
"license": "Public domain"
},
{
"no": 57,
"name": "紫式部",
"sub": "",
"yomi": "むらさきしきぶ",
"era": "平安",
"group": "kodai",
"q": [
"藤原道長の娘の",
"彰子に仕え、",
"『源氏物語』を",
"著した人物は？"
],
"img": "img/057.jpg",
"year": 1008,
"file": "Tosa_Mitsuoki_001.jpg",
"license": "Public domain"
},
{
"no": 58,
"name": "藤原頼通",
"sub": "",
"yomi": "ふじわらのよりみち",
"era": "平安",
"group": "kodai",
"q": [
"約５０年にわたり",
"摂政・関白をつとめ、",
"宇治に平等院鳳凰堂を",
"建てた人物は？"
],
"img": "img/058.jpg",
"year": 1053,
"file": "藤原頼通.jpg",
"license": "Public domain"
},
{
"no": 59,
"name": "法然",
"sub": "",
"yomi": "ほうねん",
"era": "鎌倉",
"group": "chusei",
"q": [
"専修念仏を説いて",
"『選択本願念仏集』",
"を著し、",
"浄土宗を開いた僧は？"
],
"img": "img/059.jpg",
"year": 1175,
"file": "Takanobu-no-miei.jpg",
"license": "Public domain"
},
{
"no": 60,
"name": "北条政子",
"sub": "",
"yomi": "ほうじょうまさこ",
"era": "鎌倉",
"group": "chusei",
"q": [
"源頼朝の妻で、",
"承久の乱の際に",
"御家人たちに",
"結束を訴えた",
"「尼将軍」は？"
],
"img": "img/060.jpg",
"year": 1219,
"file": "Hojo_Masako.jpg",
"license": "Public domain"
},
{
"no": 61,
"name": "後鳥羽上皇",
"sub": "",
"yomi": "ごとばじょうこう",
"era": "鎌倉",
"group": "chusei",
"q": [
"西面の武士を置き、",
"承久の乱を",
"起こして敗れ、",
"隠岐に流された",
"上皇は？"
],
"img": "img/061.jpg",
"year": 1221,
"file": "Emperor_Go-Toba.jpg",
"license": "Public domain"
},
{
"no": 62,
"name": "道元",
"sub": "",
"yomi": "どうげん",
"era": "鎌倉",
"group": "chusei",
"q": [
"ひたすら坐禅する",
"只管打坐を説き、",
"越前に永平寺を",
"開いた曹洞宗の僧は？"
],
"img": "img/062.jpg",
"year": 1244,
"file": "Soto-Zen-Master-Dogen-Zenji-Portrait.png",
"license": "Public domain"
},
{
"no": 63,
"name": "日蓮",
"sub": "",
"yomi": "にちれん",
"era": "鎌倉",
"group": "chusei",
"q": [
"題目を唱える",
"ことを説き、",
"『立正安国論』を",
"北条時頼に",
"提出した僧は？"
],
"img": "img/063.jpg",
"year": 1260,
"file": "Nichiren_Daishonin_Hakii_Portrait.jpg",
"license": "Public domain"
},
{
"no": 64,
"name": "一遍",
"sub": "",
"yomi": "いっぺん",
"era": "鎌倉",
"group": "chusei",
"q": [
"諸国を遊行して",
"踊念仏で",
"教えを広め、",
"時宗の開祖と",
"される僧は？"
],
"img": "img/064.jpg",
"year": 1279,
"file": "Ippen_Shonin_(Kyushu_National_Museum).jpg",
"license": "Public domain"
},
{
"no": 65,
"name": "蓮如",
"sub": "",
"yomi": "れんにょ",
"era": "室町",
"group": "chusei",
"q": [
"平易な文章の",
"御文で布教し、",
"越前吉崎を拠点に",
"本願寺の勢力を",
"広げた僧は？"
],
"img": "img/065.jpg",
"year": 1471,
"file": "Rennyo5.1.JPG",
"license": "Public domain"
},
{
"no": 66,
"name": "雪舟",
"sub": "",
"yomi": "せっしゅう",
"era": "室町",
"group": "chusei",
"q": [
"明に渡って",
"水墨画を学び、",
"帰国後に",
"『四季山水図巻』",
"などを描いた禅僧は？"
],
"img": "img/066.jpg",
"year": 1486,
"file": "Portrait_of_Sesshu.jpg",
"license": "Public domain"
},
{
"no": 67,
"name": "ザビエル",
"sub": "",
"yomi": "ざびえる",
"era": "戦国",
"group": "chusei",
"q": [
"１５４９年に",
"鹿児島に来航し、",
"日本に初めて",
"キリスト教を伝えた",
"イエズス会の宣教師は？"
],
"img": "img/067.jpg",
"year": 1549,
"file": "Franciscus_de_Xabier.jpg",
"license": "Public domain"
},
{
"no": 68,
"name": "千利休",
"sub": "",
"yomi": "せんのりきゅう",
"era": "安土桃山",
"group": "kinsei",
"q": [
"堺の豪商の出身で",
"侘茶を大成し、",
"のちに豊臣秀吉に",
"切腹を命じられた",
"人物は？"
],
"img": "img/068.jpg",
"year": 1587,
"file": "Sen_no_Rikyu_JPN.jpg",
"license": "Public domain"
},
{
"no": 69,
"name": "井原西鶴",
"sub": "",
"yomi": "いはらさいかく",
"era": "江戸",
"group": "kinsei",
"q": [
"『好色一代男』や",
"『日本永代蔵』を",
"著した、元禄期の",
"浮世草子作家は？"
],
"img": "img/069.jpg",
"year": 1682,
"file": "Ihara-Saikaku-Portrait.png",
"license": "Public domain"
},
{
"no": 70,
"name": "松尾芭蕉",
"sub": "",
"yomi": "まつおばしょう",
"era": "江戸",
"group": "kinsei",
"q": [
"蕉風俳諧を確立し、",
"東北・北陸の旅を",
"『奥の細道』に",
"まとめた人物は？"
],
"img": "img/070.jpg",
"year": 1689,
"file": "Basho_by_Hokusai-small.jpg",
"license": "Public domain"
},
{
"no": 71,
"name": "近松門左衛門",
"sub": "",
"yomi": "ちかまつもんざえもん",
"era": "江戸",
"group": "kinsei",
"q": [
"『曽根崎心中』",
"『国性爺合戦』など、",
"人形浄瑠璃の",
"脚本を書いた人物は？"
],
"img": "img/071.jpg",
"year": 1703,
"file": "近松門左衛門.jpg",
"license": "Public domain"
},
{
"no": 72,
"name": "荻生徂徠",
"sub": "",
"yomi": "おぎゅうそらい",
"era": "江戸",
"group": "kinsei",
"q": [
"古文辞学を唱え、",
"徳川吉宗に",
"『政談』を献じた",
"儒学者は？"
],
"img": "img/072.jpg",
"year": 1727,
"file": "Ogyuh_Sorai.jpg",
"license": "Public domain"
},
{
"no": 73,
"name": "平賀源内",
"sub": "",
"yomi": "ひらがげんない",
"era": "江戸",
"group": "kinsei",
"q": [
"摩擦発電器の",
"エレキテルを復元し、",
"秋田藩士に",
"西洋画法を",
"伝えた人物は？"
],
"img": "img/073.jpg",
"year": 1776,
"file": "A_Portrait_of_Kyūkei_Hiraga_cropped.jpg",
"license": "Public domain"
},
{
"no": 74,
"name": "伊能忠敬",
"sub": "",
"yomi": "いのうただたか",
"era": "江戸",
"group": "kinsei",
"q": [
"全国の沿岸を",
"歩いて測量し、",
"『大日本沿海輿地全図』",
"の作成に",
"あたった人物は？"
],
"img": "img/074.jpg",
"year": 1800,
"file": "Ino_Tadataka_(cropped).jpg",
"license": "Public domain"
},
{
"no": 75,
"name": "シーボルト",
"sub": "",
"yomi": "しーぼると",
"era": "江戸",
"group": "kinsei",
"q": [
"長崎郊外に",
"鳴滝塾を開き、",
"日本地図の持ち出しが",
"発覚して国外追放と",
"なったドイツ人医師は？"
],
"img": "img/075.jpg",
"year": 1828,
"file": "シーボルト_川原慶賀筆.jpg",
"license": "Public domain"
},
{
"no": 76,
"name": "大塩平八郎",
"sub": "",
"yomi": "おおしおへいはちろう",
"era": "江戸",
"group": "kinsei",
"q": [
"大坂町奉行所の",
"元与力で、",
"天保の飢饉のさなか",
"１８３７年に乱を",
"起こした陽明学者は？"
],
"img": "img/076.jpg",
"year": 1837,
"file": "Oshio_Heihachiro.jpg",
"license": "Public domain"
},
{
"no": 77,
"name": "ペリー",
"sub": "",
"yomi": "ぺりー",
"era": "幕末",
"group": "kinsei",
"q": [
"１８５３年に",
"浦賀に来航し、",
"翌年に日米和親条約を",
"結んだアメリカの",
"使節は？"
],
"img": "img/077.jpg",
"year": 1853,
"file": "Commodore_Matthew_Calbraith_Perry.png",
"license": "Public domain"
},
{
"no": 78,
"name": "吉田松陰",
"sub": "",
"yomi": "よしだしょういん",
"era": "幕末",
"group": "kinsei",
"q": [
"萩の松下村塾で",
"高杉晋作らを教え、",
"安政の大獄で",
"処刑された長州藩士は？"
],
"img": "img/078.jpg",
"year": 1857,
"file": "Yoshida_Shoin2.jpg",
"license": "Public domain"
},
{
"no": 79,
"name": "勝海舟",
"sub": "",
"yomi": "かつかいしゅう",
"era": "幕末",
"group": "kinsei",
"q": [
"咸臨丸で",
"太平洋を横断し、",
"のちに西郷隆盛と",
"会見して江戸城の",
"無血開城を",
"実現させた幕臣は？"
],
"img": "img/079.jpg",
"year": 1860,
"file": "Kaishu_Katsu_2.jpg",
"license": "Public domain"
},
{
"no": 80,
"name": "坂本龍馬",
"sub": "",
"yomi": "さかもとりょうま",
"era": "幕末",
"group": "kinsei",
"q": [
"薩長同盟の成立を",
"仲介し、",
"海援隊を組織した",
"土佐藩出身の人物は？"
],
"img": "img/080.jpg",
"year": 1866,
"file": "Sakamoto_Ryoma.jpg",
"license": "Public domain"
},
{
"no": 81,
"name": "徳川慶喜",
"sub": "",
"yomi": "とくがわよしのぶ",
"era": "幕末",
"group": "kinsei",
"q": [
"１８６７年に",
"大政奉還を申し出て、",
"朝廷に政権を返した",
"江戸幕府最後の",
"将軍は？"
],
"img": "img/081.jpg",
"year": 1867,
"file": "Tokugawa_Yoshinobu_as_Shogun.jpg",
"license": "Public domain"
},
{
"no": 82,
"name": "岩倉具視",
"sub": "",
"yomi": "いわくらともみ",
"era": "明治",
"group": "kingendai",
"q": [
"公家出身で",
"王政復古の実現に動き、",
"１８７１年から",
"使節団の大使として",
"欧米を回った人物は？"
],
"img": "img/082.jpg",
"year": 1871,
"file": "IWAKURA_Tomomi.jpg",
"license": "Public domain"
},
{
"no": 83,
"name": "渋沢栄一",
"sub": "",
"yomi": "しぶさわえいいち",
"era": "明治",
"group": "kingendai",
"q": [
"国立銀行条例の",
"制定に関わり、",
"第一国立銀行や",
"大阪紡績会社を",
"設立した実業家は？"
],
"img": "img/083.jpg",
"year": 1873,
"file": "Eiichi_Shibusawa.jpg",
"license": "Public domain"
},
{
"no": 84,
"name": "中江兆民",
"sub": "",
"yomi": "なかえちょうみん",
"era": "明治",
"group": "kingendai",
"q": [
"ルソーの",
"『社会契約論』を",
"『民約訳解』として",
"訳し、",
"「東洋のルソー」と",
"呼ばれた人物は？"
],
"img": "img/084.jpg",
"year": 1882,
"file": "Nakae_Tokusuke.jpg",
"license": "Public domain"
},
{
"no": 85,
"name": "山県有朋",
"sub": "",
"yomi": "やまがたありとも",
"era": "明治",
"group": "kingendai",
"q": [
"徴兵令の制定を進めて",
"陸軍の基礎を築き、",
"首相として",
"軍部大臣現役武官制を",
"定めた人物は？"
],
"img": "img/085.jpg",
"year": 1889,
"file": "Yamagata_Aritomo.jpg",
"license": "Public domain"
},
{
"no": 86,
"name": "樋口一葉",
"sub": "",
"yomi": "ひぐちいちよう",
"era": "明治",
"group": "kingendai",
"q": [
"『たけくらべ』",
"『にごりえ』を著し、",
"２４歳で亡くなった",
"女性作家は？"
],
"img": "img/086.jpg",
"year": 1895,
"file": "Higuchi_Ichiyou.png",
"license": "Public domain"
},
{
"no": 87,
"name": "津田梅子",
"sub": "",
"yomi": "つだうめこ",
"era": "明治",
"group": "kingendai",
"q": [
"最年少の",
"女子留学生として",
"岩倉使節団とともに",
"渡米し、のちに",
"女子英学塾を",
"開いた人物は？"
],
"img": "img/087.jpg",
"year": 1900,
"file": "Tsuda_Umeko.jpg",
"license": "Public domain"
},
{
"no": 88,
"name": "田中正造",
"sub": "",
"yomi": "たなかしょうぞう",
"era": "明治",
"group": "kingendai",
"q": [
"足尾鉱毒事件の",
"解決を訴え、",
"議員を辞職して",
"天皇に直訴しようと",
"した人物は？"
],
"img": "img/088.jpg",
"year": 1901,
"file": "Tanaka_Shozo.jpg",
"license": "Public domain"
},
{
"no": 89,
"name": "与謝野晶子",
"sub": "",
"yomi": "よさのあきこ",
"era": "明治",
"group": "kingendai",
"q": [
"歌集『みだれ髪』を",
"出し、日露戦争中に",
"「君死にたまふ",
"こと勿れ」を",
"発表した歌人は？"
],
"img": "img/089.jpg",
"year": 1904,
"file": "Akiko_Yosano_younger.jpg",
"license": "Public domain"
},
{
"no": 90,
"name": "夏目漱石",
"sub": "",
"yomi": "なつめそうせき",
"era": "明治",
"group": "kingendai",
"q": [
"イギリス留学ののち、",
"『吾輩は猫である』",
"『こころ』などを",
"著した作家は？"
],
"img": "img/090.jpg",
"year": 1905,
"file": "Natsume_Soseki_photo.jpg",
"license": "Public domain"
},
{
"no": 91,
"name": "西園寺公望",
"sub": "",
"yomi": "さいおんじきんもち",
"era": "明治・大正",
"group": "kingendai",
"q": [
"桂太郎と交互に",
"政権を担当し、",
"のちにパリ講和会議の",
"首席全権となった",
"「最後の元老」は？"
],
"img": "img/091.jpg",
"year": 1906,
"file": "Kinmochi_Saionji_2.jpg",
"license": "Public domain"
},
{
"no": 92,
"name": "幸徳秋水",
"sub": "",
"yomi": "こうとくしゅうすい",
"era": "明治",
"group": "kingendai",
"q": [
"平民社をおこして",
"日露戦争に反対し、",
"大逆事件で処刑された",
"社会主義者は？"
],
"img": "img/092.jpg",
"year": 1910,
"file": "KotokuShusui.jpg",
"license": "Public domain"
},
{
"no": 93,
"name": "平塚らいてう",
"sub": "",
"yomi": "ひらつからいちょう",
"era": "明治・大正",
"group": "kingendai",
"q": [
"青鞜社を結成し、",
"のちに市川房枝らと",
"新婦人協会を",
"設立した人物は？"
],
"img": "img/093.jpg",
"year": 1911,
"file": "Raicho_Hiratsuka.jpg",
"license": "Public domain"
},
{
"no": 94,
"name": "美濃部達吉",
"sub": "",
"yomi": "みのべたつきち",
"era": "大正・昭和",
"group": "kingendai",
"q": [
"天皇機関説を唱え、",
"１９３５年に",
"貴族院などで攻撃されて",
"著書が発禁となった",
"憲法学者は？"
],
"img": "img/094.jpg",
"year": 1912,
"file": "Tatsukichi_Minobe,_Professor_of_Comparative_History_of_Legal_Institutions_in_the_Tokyo_Imp._University.jpg",
"license": "Public domain"
},
{
"no": 95,
"name": "吉野作造",
"sub": "",
"yomi": "よしのさくぞう",
"era": "大正",
"group": "kingendai",
"q": [
"民本主義を唱えて",
"大正デモクラシーを",
"理論面で支え、",
"黎明会を結成した",
"政治学者は？"
],
"img": "img/095.jpg",
"year": 1916,
"file": "Yoshino_Sakuzo_01.jpg",
"license": "Public domain"
},
{
"no": 96,
"name": "高橋是清",
"sub": "",
"yomi": "たかはしこれきよ",
"era": "昭和",
"group": "kingendai",
"q": [
"モラトリアムを出して",
"金融恐慌をしずめ、",
"のちに二・二六事件で",
"暗殺された",
"大蔵大臣は？"
],
"img": "img/096.jpg",
"year": 1927,
"file": "Korekiyo_Takahashi_2.jpg",
"license": "Public domain"
},
{
"no": 97,
"name": "東条英機",
"sub": "",
"yomi": "とうじょうひでき",
"era": "昭和",
"group": "kingendai",
"q": [
"太平洋戦争を",
"始めたときの首相で、",
"サイパン島陥落の",
"責任をとって",
"退陣した人物は？"
],
"img": "img/097.jpg",
"year": 1941,
"file": "Hideki_Tojo_2.jpg",
"license": "Public domain"
},
{
"no": 98,
"name": "マッカーサー",
"sub": "",
"yomi": "まっかーさー",
"era": "昭和",
"group": "kingendai",
"q": [
"連合国軍最高司令官",
"として日本の",
"占領政策を進め、",
"朝鮮戦争中に",
"解任された人物は？"
],
"img": "img/098.jpg",
"year": 1945,
"file": "MacArthur_Manila.jpg",
"license": "Public domain"
},
{
"no": 99,
"name": "岸信介",
"sub": "",
"yomi": "きしのぶすけ",
"era": "昭和",
"group": "kingendai",
"q": [
"安保闘争が",
"高まる中で",
"日米新安全保障条約を",
"成立させ、直後に",
"退陣した首相は？"
],
"img": "img/099.jpg",
"year": 1960,
"file": "KISHI_Nobusuke.jpg",
"license": "Public domain"
},
{
"no": 100,
"name": "池田勇人",
"sub": "",
"yomi": "いけだはやと",
"era": "昭和",
"group": "kingendai",
"q": [
"「所得倍増」を",
"スローガンに",
"高度経済成長を進め、",
"在任中に",
"東京オリンピックが",
"開かれた首相は？"
],
"img": "img/100.jpg",
"year": 1964,
"file": "IKEDA_Hayato_cropped_1.jpg",
"license": "Public domain"
}
];
