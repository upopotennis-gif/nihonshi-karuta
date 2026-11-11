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
"img": null
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
"img": "img/02.jpg",
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
"img": "img/03.jpg",
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
"img": "img/04.jpg",
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
"img": "img/05.jpg",
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
"img": "img/06.jpg",
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
"img": "img/07.jpg",
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
"img": "img/08.jpg",
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
"img": "img/09.jpg",
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
"img": "img/10.jpg",
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
"img": "img/11.jpg",
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
"img": "img/12.jpg",
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
"img": "img/13.jpg",
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
"img": "img/14.jpg",
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
"img": "img/15.jpg",
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
"img": "img/16.jpg",
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
"img": "img/17.jpg",
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
"img": "img/18.jpg",
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
"img": "img/19.jpg",
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
"img": "img/20.jpg",
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
"img": "img/21.jpg",
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
"img": "img/22.jpg",
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
"img": "img/23.jpg",
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
"img": "img/24.jpg",
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
"img": "img/25.jpg",
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
"img": "img/26.jpg",
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
"img": "img/27.jpg",
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
"img": "img/28.jpg",
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
"img": "img/29.jpg",
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
"img": "img/30.jpg",
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
"img": "img/31.jpg",
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
"img": "img/32.jpg",
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
"img": "img/33.jpg",
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
"img": "img/34.jpg",
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
"img": "img/35.jpg",
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
"img": "img/36.jpg",
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
"img": "img/37.jpg",
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
"img": "img/38.jpg",
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
"img": "img/39.jpg",
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
"img": "img/40.jpg",
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
"img": "img/41.jpg",
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
"img": "img/42.jpg",
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
"img": "img/43.jpg",
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
"img": "img/44.jpg",
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
"img": "img/45.jpg",
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
"img": "img/46.jpg",
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
"img": "img/47.jpg",
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
"img": "img/48.jpg",
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
"img": "img/49.jpg",
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
"img": "img/50.jpg",
"file": "Kakuei_Tanaka_19720707.jpg",
"license": "CC BY 4.0"
}
];
