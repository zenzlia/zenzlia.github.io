var tierNum = -1;

var error = "Sorry, we couldn't find you, this either means your Mkleo number is too high or you have no registered games on ausmash.com.au";

var reason = error;

var counter = 1;

var defeatOrder = [];

var first = {'Saber':'Ben Gold','SebPro101':'Ben Gold','Luma':'Ben Gold','OnePhoAll':'Ben Gold','Shadrew':'Ben Gold','Dags':'Ben Gold','Kwaksy':'Ben Gold','Negima':'Ben Gold','Ari':'Ben Gold','Shitashi':'Ben Gold','DFS':'Ben Gold','SiqNiq':'Ben Gold','Neath':'Ben Gold','SadHour':'Ben Gold','Milis':'Ben Gold','Insie':'Ben Gold','Doctor A.Ness':'Ben Gold','Ghost':'Ben Gold','Sriks':'Ben Gold','Cajeck':'Ben Gold','Spammage':'Ben Gold','Corvid':'Ben Gold','Duon':'Ben Gold','DD':'Ben Gold','Jdizzle':'Ben Gold','Rust':'Ben Gold','Flex':'Ben Gold','Mr Leak':'Ben Gold','Killy':'Ben Gold','Luminescent':'Ben Gold','Jaice':'Ben Gold','Extra':'Ben Gold','EmanSaur':'Ben Gold','Bigfatelli':'Ben Gold','Nicc':'Ben Gold','Jolt':'Ben Gold','Zyphenor':'Ben Gold','Weeb':'Ben Gold','Ouch':'Ben Gold','schooner':'Ben Gold'}

var second = {'Joe':'Saber','Ryzuul':'Saber','Tomie':'Saber','RaZe':'Saber','Jaypam':'Saber','Earl':'Saber','AT LOWES':'Saber','LoneZen':'Saber','Luco':'Saber','Pudge':'Saber','B-2':'Saber','Dr Omega':'Saber','Ignis':'Saber','Revax':'Saber','Sandman':'Saber','Sato':'Saber','Cherry':'Saber','Asiatic':'Saber','Turn Up':'Saber','Booper':'Saber','BIGBOSS':'Saber','Skitter':'SebPro101','P9':'SebPro101','Aluf':'SebPro101','Shen':'SebPro101','Piski':'SebPro101','Tru4':'SebPro101','Dylba':'SebPro101','4par':'SebPro101','Arnie':'SebPro101','Arc':'SebPro101','Mar':'SebPro101','Stabby J':'Luma','Loki':'Luma','Nikes':'Luma','Poppt1':'Luma','Little Z':'Luma','Pat Sanders':'Luma','Dogivet':'Luma','weed7':'Luma','Danklin':'OnePhoAll','MasterofDisaster':'OnePhoAll','Chipotle':'OnePhoAll','Aya':'OnePhoAll','Flow':'OnePhoAll','Jarr':'OnePhoAll','VineGreen':'OnePhoAll','Whis Dom':'OnePhoAll','BigChilli':'OnePhoAll','El':'OnePhoAll','Princess':'OnePhoAll','Haris':'OnePhoAll','Legic':'OnePhoAll','Troongy':'OnePhoAll','yarb sarb':'OnePhoAll','Fortune':'OnePhoAll','Havok':'OnePhoAll','Zaki':'OnePhoAll','Khami':'OnePhoAll','Neoblade':'OnePhoAll','Gabe':'OnePhoAll','Ergon':'OnePhoAll','Becchino':'OnePhoAll','Mast':'OnePhoAll','bebop':'OnePhoAll','Techno':'OnePhoAll','Sim':'OnePhoAll','Xettman':'OnePhoAll','Ollie':'OnePhoAll','Catburger':'OnePhoAll','JASP':'OnePhoAll','Jamwa':'OnePhoAll','Toffee':'OnePhoAll','Nothing':'OnePhoAll','w00tkins':'OnePhoAll','No Skills':'OnePhoAll','Amaterasu':'OnePhoAll','Dampé':'OnePhoAll','SKG':'OnePhoAll','Dom':'OnePhoAll','KmS':'OnePhoAll','Witness':'OnePhoAll','Shenny':'OnePhoAll','Lizam':'OnePhoAll','Taicho':'Shadrew','ClassicJono':'Shadrew','Seymour Butts':'Shadrew','Recon':'Shadrew','Glace':'Shadrew','Day':'Shadrew','PillowTalk':'Shadrew','conso':'Shadrew','Jezmo':'Shadrew','UMKO':'Shadrew','Flutter':'Shadrew','Linoone':'Shadrew','Casper':'Shadrew','Kaboose':'Dags','Joser':'Dags','Talie':'Dags','SpaZzy':'Dags','Pinkie':'Dags','Mabi':'Dags','Wildermold':'Dags','BattleDolphin':'Dags','Verse':'Dags','KaiDASH':'Dags','Squeegee':'Dags','Cool Mum':'Dags','Leliel':'Dags','Aurion':'Dags','InfamousL':'Dags','Crimson':'Dags','J-Dot':'Dags','McJobo':'Dags','Tom':'Dags','CroW':'Dags','MetaBhreat':'Dags','squidfist-':'Dags','Umbrella':'Dags','Vye':'Dags','JediLink':'Dags','Sheepishdays':'Dags','Waz':'Dags','JD':'Dags','Staples':'Dags','Blaze':'Dags','Tempest':'Dags','Joz.':'Kwaksy','Fly':'Kwaksy','Spoony':'Kwaksy','Iroh':'Kwaksy','Cagey':'Kwaksy','Jyoshi':'Kwaksy','Mittens':'Kwaksy','Zeus':'Kwaksy','Swate':'Kwaksy','Sifo1':'Kwaksy','Churropon':'Kwaksy','Mint2':'Kwaksy','Code_E':'Kwaksy','Raibok':'Kwaksy','Kurogane Hammer':'Kwaksy','JuiceGoose':'Negima','Aidento':'Negima','Spike':'Negima','Shaoweater':'Negima','BigTrouble':'Negima','Trunkle?!?':'Negima','Omta':'Ari','ft':'Ari','Jacko':'Ari','Curtain':'Ari','Bless':'Ari','Timtam':'Ari','Grumbley':'Ari','Archaze':'Ari','Deez':'Ari','Modest':'Ari','Lucijutsu':'Ari','Gym':'Ari','Cava':'Ari','Timboe':'Ari','Star':'Shitashi','Shmu':'Shitashi','Cap':'DFS','Jed':'DFS','Python':'DFS','Murke':'DFS','Zuko':'DFS','Delve':'DFS','Crabs':'DFS','JANGLIO!':'SiqNiq','Hashimo':'SiqNiq','Lomar':'SiqNiq','Jeese':'SiqNiq','Robit':'SiqNiq','HikerNob':'Neath','bounsies':'Neath','Kanga.exe':'Neath','Patchy':'Milis','HueHue':'Milis','Danzah':'Milis','Wattson':'Milis','FabulousDork':'Milis','Ryan':'Milis','BOOTYMEAT':'Milis','Ash':'Milis','Spicy':'Milis','Lt':'Milis','Jem':'Milis','Supa':'Milis','MP':'Milis','Exist':'Milis','Blurry':'Milis','Rababity':'Milis','LUSH':'Milis','Zunjo':'Milis','Terrence':'Milis','ASquirtle':'Milis','Limit':'Milis','HeaL':'Milis','Johzyn':'Milis','Skitz':'Milis','Darkfire':'Milis','tony.comp':'Milis','shockwave':'Insie','Connorzam':'Insie','Tommella':'Insie','Purple~H':'Doctor A.Ness','Johtothan':'Doctor A.Ness','Tin Man':'Doctor A.Ness','MegaloManiAsh':'Doctor A.Ness','2Girls1Gus':'Doctor A.Ness','Invisi':'Doctor A.Ness','Lumidyne':'Doctor A.Ness','Pat':'Doctor A.Ness','Mikkle':'Doctor A.Ness','Delta':'Doctor A.Ness','Bussy':'Doctor A.Ness','BJSchoey':'Doctor A.Ness','Truth':'Doctor A.Ness','Hackoru':'Doctor A.Ness','Fruit':'Doctor A.Ness','Kristoph':'Doctor A.Ness','Q':'Ghost','BLU':'Ghost','Snake':'Ghost','Con':'Ghost','Vivi':'Ghost','im23bro':'Ghost','Jon':'Ghost','MapleMage':'Sriks','Reshi':'Sriks','Apollo':'Sriks','Dumpy':'Sriks','PhoenixRave':'Sriks','Danal':'Sriks','Pazx':'Sriks','Lachy':'Sriks','TurtleCat':'Sriks','SaucyDancer':'Sriks','Joey':'Sriks','Jix':'Cajeck','Cmonster':'Cajeck','Techno':'Cajeck','ALP1NE':'Spammage','Thorpenado':'Spammage','DimiChrys':'Spammage','G':'Spammage','New':'Spammage','BoingBoing':'Spammage','BshortZ':'Spammage','asa':'Spammage','Jett':'Spammage','Spaz':'Corvid','Sable':'Corvid','VeloCitY':'Corvid','Hijoord':'Corvid','Jazzy':'Corvid','Ledge':'Corvid','John':'Corvid','Jei':'Corvid','Hazzacka':'Corvid','Conan':'Corvid','Static':'Duon','nate':'Duon','Kaito':'Duon','Trojans':'Duon','Xambie':'DD','Jayd':'DD','Sir Banana':'DD','Gary':'DD','NAKAT':'DD','Mr. R':'Jdizzle','Doyroi':'Rust','Toketchan':'Flex','Veness':'Mr Leak','Andrew Lin':'Mr Leak','TWIRLY':'Mr Leak','Matter':'Mr Leak','Mukora':'Mr Leak','JDfreeUZI':'Mr Leak','Palooka':'Mr Leak','Cambo':'Mr Leak','Fez':'Mr Leak','Daddy':'Mr Leak','Freelandor':'Mr Leak','Adeptus':'Mr Leak','Rog':'Mr Leak','Muzzard':'Mr Leak','Enn':'Mr Leak','Vic':'Killy','Keitaro':'Luminescent','Cosmos':'Luminescent','Falchion':'Extra','Temper':'Bigfatelli','Lunchy':'Bigfatelli','Microsoft J':'Nicc','Nazzer':'Nicc','KevinNyaa':'Nicc','Vasi':'Nicc','Rosh':'Nicc','Hinchy':'Nicc','Kai':'Jolt','sat':'Zyphenor','WhitePages':'Zyphenor','Stoobz':'Zyphenor','Hammerhead96':'Weeb','Mx':'Weeb','Smesty':'Weeb'}

var third = {'Yauhyeah':'Joe','Zesco':'Joe','Merebry':'Ryzuul','Danza':'Tomie','cag':'Tomie','Splice':'Tomie','Pat Cash':'Jaypam','dunkMATTic':'Jaypam','Crozzy':'Jaypam','Little Mark':'Jaypam','iB':'Jaypam','GotMilk':'Jaypam','P8':'Jaypam','Daddy Ganny':'Jaypam','Hunta':'Jaypam','Simple':'Jaypam','Jules':'Jaypam','Ktan':'Jaypam','Amph':'Jaypam','Jollus':'Jaypam','TheWalshinator':'Jaypam','Soda':'Jaypam','Murkiri':'Earl','The Crynek':'Earl','MGK':'Earl','Moxie':'Earl','Rren':'Earl','Villyness':'Earl','Orion':'LoneZen','YukiDraco':'LoneZen','Tempest':'LoneZen','Ever':'LoneZen','Maribro':'LoneZen','Slimboy17':'Pudge','Sodaman':'Pudge','Spud':'Pudge','Yellow':'Pudge','Novo':'Pudge','humanerror':'Pudge','GozPacho':'B-2','gall.P':'B-2','Tomo009':'B-2','ramble':'B-2','Googers':'Dr Omega','Eternal':'Dr Omega','Proph':'Dr Omega','Cygnus':'Ignis','Delve':'Ignis','Kebab':'Sandman','Waveguider':'Cherry','quen':'Cherry','Scarpian':'Asiatic','RosalinaSama':'Asiatic','Ttam':'Asiatic','Lion (Mec)':'Asiatic','Sundowns':'Asiatic','Chappos':'Asiatic','Ninjarisu':'Asiatic','Lalafell':'Asiatic','Hobobloke':'Asiatic','Benjo':'Turn Up','Rocky':'Turn Up','Jezzus':'Turn Up','KIC':'Turn Up','Quindaddy-Sensei':'Turn Up','Vlade':'Turn Up','KhoiFish':'Booper','Chin':'Skitter','CMoon':'Skitter','UBOA':'Skitter','BigWin | Beer':'Skitter','TinkFloyd':'Skitter','Speedster':'Skitter','Kraw':'Skitter','Alpal':'Skitter','Krasic':'Skitter','Raid':'Skitter','antzo':'Skitter','Umtard':'Skitter','Yorin':'P9','Jax':'P9','Dirty Hani':'P9','JEANS':'P9','420blazeit':'Aluf','Spotyus':'Aluf','Ichigo':'Aluf','KFC':'Aluf','Uepa':'Aluf','ORG Red':'Aluf','0cha':'Aluf','ABXY':'Shen','Darkness':'Shen','nihao':'Shen','Tekk':'Piski','Denz':'Piski','Nicks':'Piski','Flum':'Dylba','The Future':'4par','Framah':'4par','Kovie':'4par','DoorBashr':'4par','Abard':'4par','Lanatra':'4par','Party Cats':'4par','Thrillhouse':'4par','Loza':'4par','Connector':'4par','Gords':'4par','Joey':'4par','KizzaBam':'4par','T.boy':'Arnie','Darr':'Mar','Ace  Vic':'Mar','Oscar':'Stabby J','Andre':'Stabby J','Vermanubis':'Stabby J','Jack':'Stabby J','Splatter':'Stabby J','Dubs':'Stabby J','F1erce':'Loki','Money_Doller':'Loki','Djurwny':'Loki','Crawfish':'Loki','Nao-Cakes':'Nikes','Dog Fort':'Nikes','Ninhon':'Nikes','Taco':'Nikes','Aetos':'Nikes','Barney':'Poppt1','HBTV':'Poppt1','Sad':'Poppt1','Dealta':'Little Z','Coney':'Little Z','Pr3zz':'Little Z','Cruzybecks':'Little Z','Johan':'Little Z','Zivhayr':'Little Z','Dragunov':'Pat Sanders','Kevvlar':'Pat Sanders','Smash.dog':'Pat Sanders','Eagle':'Dogivet','Horde':'Dogivet','Breadstick':'weed7','Shaidy':'Danklin','Chibi':'Danklin','cuminpant':'Danklin','Orphen':'Danklin','blas':'MasterofDisaster','Vostok':'Chipotle','Sylem':'Chipotle','Suntide':'Chipotle','LeoJoeD':'Chipotle','Kinaji':'Aya','ggesus':'Aya','InKognito':'Aya','Copycat':'Aya','dodo':'Flow','kenpai':'Flow','Goofis':'Jarr','HoAN':'Jarr','Nabnut':'Jarr','Nommad':'Jarr','YGOduelistkosc':'Jarr','Zobby':'Jarr','Luggy':'VineGreen','St. Avalon':'VineGreen','Bijou':'VineGreen','pk':'Whis Dom','SBOmega':'BigChilli','Dashie':'BigChilli','Doozy':'BigChilli','The Lag':'BigChilli','ontik':'BigChilli','Justn':'BigChilli','StrangerDanger':'BigChilli','dollarydoos':'BigChilli','Blackheart':'BigChilli','AirwickGG':'BigChilli','Biggles':'BigChilli','Pretzel':'BigChilli','FierceOni':'BigChilli','BigNasty':'El','Mistletoe':'El','Seer':'El','Zhalfrin':'El','Yehya':'El','Lord Snackington':'Princess','Jash':'Princess','Whissle':'Haris','Jonut':'Troongy','Daybo':'yarb sarb','Chat':'yarb sarb','Flyingcat':'yarb sarb','Frog':'yarb sarb','Zowayix':'yarb sarb','Bananafish':'yarb sarb','Thegoras':'yarb sarb','Inf':'yarb sarb',"J'san":'yarb sarb','Zxv':'yarb sarb','MAMP':'yarb sarb','Hugh Jass':'yarb sarb','Struz':'yarb sarb','Zesty':'yarb sarb','GVOL3':'yarb sarb','Bruh':'yarb sarb','Pyren':'yarb sarb','Radio#1117':'Havok','FoxStar':'Havok','Bubby':'Havok','selebu':'Havok','Andrew':'Neoblade','Naomi Campbelltown':'Gabe','Jim Cool':'Gabe','Sketch':'Gabe','2Simple':'Ergon','ParaboliC':'Ergon','Greenhood':'Ergon','Milun':'Ergon','Filthy':'Sim','Dekartea':'Sim','cmk':'Catburger','Fishy':'Catburger','Legato':'Catburger','Jman':'Catburger','Dese':'Catburger','Snoc':'Catburger','Snitto':'Catburger','Kyeean':'JASP','Jmez':'JASP','Sock':'JASP','Funk':'Jamwa','chuan':'Toffee','Tibs':'Toffee','Mozart':'Nothing','Chris G':'w00tkins','AND':'w00tkins','TheListerMr':'No Skills','Fletchaa':'Amaterasu','Matty':'Amaterasu','RAMBO':'Dampé','Cabbage':'Dampé','Dennis':'Dampé','Baz':'Dampé','Knack':'SKG','R.R.G.I.':'Dom','arch':'Dom','Sweens':'KmS','baggy':'KmS','Maccamass':'KmS','haiku':'Shenny','Darce':'Lizam','Fess':'Lizam','Spewis':'Taicho','WhitePointer':'Recon','Boonsong':'Recon','Switch':'Recon','Zen':'Glace','Guava':'Glace','K Fool':'Glace','Rozzo':'Glace','Jackpot':'Glace','Zoltan':'Day','Mega':'Day','Jang':'Day','Moo':'conso','THE SAME':'UMKO','Serein':'Kaboose','Mastodon':'Kaboose','Michi':'Joser','Floating Stools':'Joser','Kazuma':'Joser','Boost':'Joser','Seal':'Joser','hack1?':'Joser','Cal':'Joser','Brennn':'Joser','Cancer':'Joser','STeev':'Joser','Narcissus':'Joser','Tim':'Joser','Clown':'Talie','Diddle':'Talie','RedRider65':'Talie','Jarrod':'Talie','Bellboi':'Talie','Gravydice':'Talie','System':'Talie','TRex':'Talie','Taishi':'SpaZzy','Antec':'SpaZzy','Aki':'SpaZzy','Breezy':'SpaZzy','DaddyMD':'SpaZzy','lenny':'SpaZzy','MrHoboBob':'SpaZzy','Facetious':'SpaZzy','NQuad1Zero':'SpaZzy','noobar':'SpaZzy','Maui and the Giant Fish':'SpaZzy','JuicyPenguin':'SpaZzy','Spam':'SpaZzy','Glint':'SpaZzy','Fabio':'Pinkie','Blizzy':'Wildermold','JBirds':'Wildermold','PapaCheese':'BattleDolphin','Sabess':'BattleDolphin','Nights':'BattleDolphin','Yoyo':'BattleDolphin','Versky':'Verse','Grizz':'KaiDASH','PAleX':'KaiDASH','Branyb':'Squeegee','Unethical':'Squeegee','Stacked':'Squeegee','Atare':'Squeegee','Zenzlia':'Squeegee','Faora':'Squeegee','Stilts':'Squeegee','Easy':'Squeegee','Rews':'Squeegee','C_Flame':'Squeegee','FreeXP':'Squeegee','why_juh':'Cool Mum','unrealsora':'Cool Mum','Yellow':'Cool Mum','Moth Plague':'Cool Mum','Phyco':'Cool Mum','JML James':'Cool Mum','Nevarc':'Leliel','FumbleJr':'Leliel','Jimbles':'Leliel','AboRoza':'Leliel','Quack':'Leliel','RenderedSpy':'Leliel','Nerpna':'Leliel','Cyanide':'Leliel','Muffstuff':'Leliel','D4C':'Leliel','JML Spoonie':'Leliel','Angelican':'Leliel','Radiant Pheonix':'Aurion','Jay Gee':'Aurion','TDEE':'Aurion','S3ruM':'Aurion','Sean':'Aurion','Pipelin12':'Aurion','Calculator':'Aurion','Crab':'Crimson','Rainth':'Tom','RoZ':'CroW','NaCl':'MetaBhreat','Aaron':'MetaBhreat','Hill':'squidfist-','Yo-Yo':'squidfist-','Saltion':'squidfist-','Fady':'Umbrella','Toki':'Umbrella','Dragonmilkman':'Vye','Pat':'Vye','BemaniAK':'Vye','Smasio':'Waz','Figaro':'Waz','Jeree':'Waz','Semore':'Waz','Sweetchilli':'Blaze','Scrail':'Blaze','Eiite':'Joz.','cAKE':'Joz.','theninja420':'Spoony','hezzadude12':'Iroh','Sweet':'Iroh','Tripped':'Iroh','Poporun':'Jyoshi','katoptron':'Swate','ATom':'Swate','Sc0ttyP':'Swate','Ashley':'Sifo1','Zellon':'Mint2','Baead':'Code_E','CarrotAxe':'Raibok','Chingus':'Aidento','Prison Mike':'Aidento','drSlump':'Aidento','WeedLan':'Aidento','Scott':'Aidento','Sway_DWL':'Aidento','Kie':'Aidento','Slash':'Aidento','T-ReX':'Aidento','Glyph':'Aidento','Flurkin':'Spike','Hyper':'Spike','GumbleGore':'Spike','The Chuckstah':'Spike','Sass':'Spike','Dreep':'Spike','Lostish':'Spike','Revman':'Spike','Dreamcaster':'Shaoweater','Cyanide326':'Omta','Forrest':'ft','DarkSlayer':'ft','Sloshi':'Jacko','Flow Rats':'Jacko','Nincata':'Bless','TJslash':'Bless','Tommy':'Bless','Victor':'Bless','<-2cm':'Bless','Hak1?':'Timtam','Fool2':'Timtam','Stroodleornah':'Grumbley','Dean':'Deez','MinkZ':'Modest','Kira':'Lucijutsu','Waffles':'Lucijutsu','BIG_UNKZ':'Cava','PKBeam':'Star','Jisp':'Shmu','Tatts':'Cap','Dizzzy':'Cap','Lovestain':'Python','LlTheos':'Murke','Thixsev':'Murke','SoMa':'Murke','Krysell':'Murke','Bass':'Murke','Will05thom':'Murke','Thompsinus':'Murke','JEP':'Murke','Yuzu':'Murke','K':'Murke','Arby':'Murke','Yuki':'Zuko','Snowpoint':'Zuko','Slayden':'Zuko','Nick':'Zuko','Scube':'Zuko','Gooch':'Zuko','Peco':'Zuko','Borris':'Zuko','JackJack':'Zuko','Douchedag':'Zuko','uwu':'Zuko','FreeLyn':'Zuko','Ipkiss':'Zuko','Eclipse':'Delve','Egg':'JANGLIO!','Ed':'JANGLIO!','Sam':'JANGLIO!','Mint':'Lomar','eggggg':'Lomar','Xondrell':'Lomar','Patv':'Jeese','Cap Supreme':'Robit','Hexicate':'Robit','Åsh':'HikerNob','ImSoChove':'HikerNob','Knarf97':'HikerNob','Flatfeet':'HikerNob','stantheyeti':'HikerNob','Bozzie':'HikerNob','leongrav':'HikerNob','eGo':'HikerNob','British Rice':'HikerNob','Taka':'HikerNob','Durameter':'HikerNob','Blaz':'HikerNob','dingdongkid':'HikerNob','J2':'HikerNob','mizu':'HikerNob','E-Dude':'HikerNob','Double A':'HikerNob','Shlamp':'HikerNob','Harald':'HikerNob','Seliph':'HikerNob','Toash':'HikerNob','IntenseQuack':'Kanga.exe','chizzL':'Kanga.exe','Mildsome':'Kanga.exe','Favi':'Kanga.exe','Manta':'Kanga.exe','Jumboj1m':'Kanga.exe','Llamas':'Kanga.exe','6116':'Kanga.exe','Misenka':'Patchy','a1':'Patchy','XDDD':'Danzah','Ambrosia':'Ryan','Staunch':'Ryan','GrayPerson':'Ryan','DeDeDez Nutz':'BOOTYMEAT','Baler_23':'Ash','Kirrah':'Ash','Queen':'Spicy','Red':'Jem','Thr333':'Jem','South Boon':'MP','4Lamarck':'Exist','namnam':'Blurry','funky soup':'Blurry','Level100Mudkip':'Blurry','TDUM':'Blurry','Jewbs':'Blurry','Tak-Tics':'Blurry','Christolaki':'Rababity','Retro':'Rababity','actus reus':'Rababity','Smog':'Rababity','Conductus':'Rababity','Crozzy':'Rababity','Jonkey':'Rababity','tohmais':'Rababity','Doa':'Rababity','Saint':'Rababity','Homer':'HeaL','Slako':'HeaL','DJCat':'HeaL','Wilko':'HeaL','Gravitas':'HeaL','SLFB':'HeaL','Vorb':'Johzyn','Genghis Khant':'Johzyn','Dimi Fili':'Skitz','Jakalanche':'Darkfire','Guts':'Johtothan','Lain':'Johtothan','BD':'Johtothan','Hippo Mode':'Johtothan','Rainbow':'Johtothan','Haber':'Johtothan','Newiee':'Johtothan','Swish':'Johtothan','Smoog':'Johtothan','Gumbo':'Johtothan','NINjA':'Johtothan','Abadingo':'Johtothan','Tea Bee':'Johtothan','Gibson':'MegaloManiAsh','Metal Force':'MegaloManiAsh','Techlord':'MegaloManiAsh','Speedy Geblin':'MegaloManiAsh','Atyeo':'MegaloManiAsh','MOhVillain':'2Girls1Gus','El Chimpe':'2Girls1Gus','SpacemanBad':'2Girls1Gus','Alumina':'2Girls1Gus','Kelp':'2Girls1Gus','ALMAO':'Invisi','SJ Groose':'Invisi','Primed':'Lumidyne','Hurleycopter':'Pat','Ben':'Pat','Ulticow':'Pat','Dundo':'Pat','Wayward':'Pat','THE247GENIOUS':'Pat','Half Baked':'Pat','Beet':'Delta','Cotton':'Delta','Schnitzel':'Delta','Deku Meister':'Bussy','Jack':'Bussy','Phazonizer':'Fruit','Ceej':'Fruit','333':'Snake','Eden':'Snake','Jeet':'Snake','Macka':'Snake','King':'Snake','Dom':'Snake','TG4062':'Snake','ESPizza':'Snake','CaptainCoolade':'Vivi','TacoSpartan':'Vivi','Bizz':'Vivi','Paulek':'Vivi','TJ':'Vivi','Muscat':'Vivi','Calm':'Vivi','ASD':'Vivi','Daz':'Vivi','Bloom':'Reshi','Cameroni':'Reshi','Boghara Stroganov':'Reshi','Treesus':'Reshi','Mosa':'Reshi','4DT':'Reshi','Eight':'Reshi','Juan':'Dumpy','Nexus':'Dumpy','Zac':'Pazx','djani':'TurtleCat','Jerry Swan':'TurtleCat','Fontana':'TurtleCat','Moog':'SaucyDancer','Abhi':'Joey','Jumbuck':'Jix','Thatch':'Jix','Stern':'G','Pickle':'BoingBoing','Spinny':'BoingBoing','Decaaa':'BoingBoing','Hansel':'asa','Oreo':'asa','Fahkim':'asa','Tom_K':'asa','Dandi':'asa','Cameron':'asa','Habble':'asa','Nitzayra':'Jett','EJ':'Jett','ras':'Jett','GrindGod':'Jett','Truckaz':'Jett','Ryan':'Jett','keenanmod':'Jett','Skullkid':'Jett','Mustella':'Jett','Ken':'Jett','MrJibs':'Spaz','Derek':'Spaz','Cryptic':'Spaz','ChuJelly?~':'Sable','BigSizzle':'Sable','skduk':'VeloCitY','Naga':'VeloCitY','Acat':'VeloCitY','PrankN':'Jazzy','DehDehBeh':'Jazzy','Rainbews':'Jazzy','SP-lit':'Jazzy','Migs':'Jazzy','Hanime':'Jazzy','Catalyst':'Ledge','Ultra Instinct':'Ledge','Kong':'John','Melotech':'Hazzacka','BlitzkrieG':'Hazzacka','Vio':'Hazzacka','PracticalTAS':'Hazzacka','Epitome':'Static','BrentonMcBJJ':'Static','China':'nate','Dan':'nate','james':'nate','AmiiboKing':'nate','T-Bone':'nate','Abel':'nate','Gwola':'nate','Rhombus':'Jayd','Donkey Konk':'Jayd','Dekar':'Jayd','Lenti':'Gary','Gekk':'Toketchan','Gekk-0h':'Toketchan','Dugongs':'Veness','Ablice':'Veness','Kitt':'Veness','Atlas':'Veness','IceyFire':'Veness','BahamutType0':'Veness','EiRiK':'Veness','Scrandyy':'Veness','Pandax3':'Veness','Sandro':'Veness','Adura':'Veness','FAir Jordans':'Veness','HamNEggs':'Veness','Nyantic':'Veness','Anubys':'Veness','PSI_Presto':'Andrew Lin','Justiiin':'TWIRLY','Kevin':'Matter','Weed':'Matter','Zone':'Matter','SuperHiero':'Matter','Kace Mono':'Mukora','Dapto Dog':'Mukora','Blackhawk':'JDfreeUZI','Banan':'Palooka','Oliman':'Freelandor','Evil Olive':'Freelandor','Skin':'Adeptus','Tdoge':'Rog','MishaL':'Muzzard','Kaznec':'Enn','Cactx':'Falchion','Banjo String':'Falchion','RadoHaribo':'Falchion','Shiva':'Falchion','More Chilli':'Falchion','King':'Falchion','KENSHIN':'Falchion','Tim':'Falchion','Jtrain':'Temper','Hugh G Rection':'Temper','nmne':'Temper','Big Al':'Temper','Spiffy':'Temper','RMD':'Temper','Gresh':'Temper','huske':'Temper','Potanox':'Temper','TPZ':'Temper','Magnus':'Temper','Futurecow':'Temper','Kit Coffee':'Temper','M':'Temper','toomuchdog':'Temper','Neepson':'Temper','Keutz':'Temper','BDawg':'Temper','OKCOOL':'Temper','Baeden':'Temper','Veraxana':'Temper','Ace':'Temper','Charcoal':'Temper','That Child':'Temper','Wilson':'Temper','Gogo':'Temper','Avosc':'Temper','Mr G':'Temper','shane3x':'Temper','Krystal':'Temper','Milkshake':'Temper','Chewy':'Temper','davinchau':'Temper','Zedi':'Lunchy','Fabcat':'Lunchy','jacky chung':'Lunchy','Blink':'Lunchy','GreenMario':'Lunchy','Sponge':'Lunchy','Pedroses':'Lunchy','Kylar Alice':'Lunchy','Yoyo':'Microsoft J','Glaceon':'Nazzer','JJack':'Nazzer','JonCheee':'Nazzer','Big Green':'Nazzer','PudgyBoy':'Nazzer','Chrisak':'Nazzer','Cupu':'Mx','Mecha Duck':'Mx'}

var fourth = {'UltimentM':'Yauhyeah','Faelyon':'Yauhyeah','Wowser':'Yauhyeah','Ness':'Yauhyeah','Rasputin':'Yauhyeah','Kaeser':'Yauhyeah','Shaya':'Merebry','Sayhnim':'Splice','ACE':'Pat Cash','Pho':'Pat Cash','Abrahamilton':'Pat Cash','Quack':'Pat Cash','Keo 3k':'Pat Cash','Vigridian':'dunkMATTic','Nove':'dunkMATTic','JoE-mAn!':'Crozzy','JOKER':'Crozzy','jordenjorden':'P8','DD_':'P8','Neeson':'P8','GGP':'Hunta','Big Mack':'Simple','Legion':'Simple','xchan':'Simple','VP4':'Simple','FireFly':'Simple','45°!':'Simple','Timic83':'TheWalshinator','Joeyboi':'TheWalshinator','Callibar':'TheWalshinator','Fiskit':'TheWalshinator','Kronk':'TheWalshinator','Gerald':'Soda','Six':'Murkiri','Zedd':'Murkiri','StrawhatLui':'Orion','Foulbeast':'Orion','End Me':'Orion','Shae':'YukiDraco','Coogs':'YukiDraco','Shikasama':'YukiDraco','Swollen':'YukiDraco','SpiltSpaghetti':'YukiDraco','Mimibon':'YukiDraco','Hellhammer':'Tempest','Shadowbolt':'Tempest','Elemental':'Ever','DMC':'Slimboy17','chan':'Slimboy17','Rafe':'Slimboy17','Bear':'Slimboy17','Cryptid':'Slimboy17','Arkio':'Slimboy17','dunccy':'Slimboy17','Mad Resetti':'Sodaman','Techless':'Sodaman','Samsungintheshower':'Sodaman','Kodos':'Sodaman','MarchOfHell':'Sodaman','KingKobruh':'Sodaman','KrisP':'Yellow','Instum':'Yellow','Kappacman':'Yellow','Skeleduck':'Yellow','Chex':'ramble','Ardeor':'ramble','MortaL':'ramble','Arrowskee':'ramble','StarLeo':'ramble','GammaFox':'ramble','Josto':'ramble','VB':'Googers','Akino':'Kebab','Agnn':'Kebab','Saizo':'Scarpian','Heckko':'Scarpian','Bjay':'Scarpian','Apollo':'RosalinaSama','Ravia':'RosalinaSama','NRC':'RosalinaSama','Peahnuts':'RosalinaSama','Myxthio':'RosalinaSama','Bean':'Lion (Mec)','TipsPlz':'Lion (Mec)','Radz':'Lion (Mec)','AlvisCPU':'Lion (Mec)','Nerdology':'Lion (Mec)','Tails':'Lion (Mec)','Rooster':'Lion (Mec)','Nrc196':'Sundowns','Harambe':'Sundowns','PG Khan':'Chappos','Iggy Gee':'Ninjarisu','Trextar':'Ninjarisu','Baehunter':'Ninjarisu','JayVoltage':'Lalafell','Larry W':'Rocky','Jerg':'Rocky','Lil yeo':'Rocky','Random':'Rocky','Shomtan':'Rocky','Misty':'Rocky','TWIDDLY':'Rocky','Duibs':'Rocky','Soulbound':'Rocky','Momo':'Jezzus','Jason':'Jezzus','Almenara':'Jezzus','Mattawho':'Jezzus','GreyMatter':'Jezzus','Potensh!':'Jezzus','Quetz':'Jezzus','TurboGarbage':'Jezzus','Twiggy':'Quindaddy-Sensei','Big Pinch':'CMoon','grapesoda':'BigWin | Beer','Rap Breon':'BigWin | Beer','Chef':'BigWin | Beer','Sep':'BigWin | Beer','Elka':'BigWin | Beer','Dalmnation':'TinkFloyd','Penn':'TinkFloyd','Chins':'Kraw','Tigurr':'Alpal','Jypr':'Alpal','Firestorm':'Alpal','drinkwater':'Alpal','Crimson':'Alpal','Wack-Man':'Alpal','Sindocus':'Alpal','Stringsona':'Alpal','Elron':'Alpal','xardov':'Alpal','Jayce':'Alpal','Sbeve':'Krasic','Chip':'Krasic','Comma':'Krasic','Homeslice':'Umtard','Pingin':'Umtard','Bennyboy':'Umtard','Rustyspoon':'Umtard','Crunkle':'KFC','Big Schmango':'ORG Red','Swanji':'ORG Red','Plaz':'ORG Red','Goosey Boy':'ORG Red','Kingonian':'ORG Red','Noisy Boy':'ORG Red','Thecooks':'Tekk','Futtbucker':'Tekk','Drak':'Nicks','Flx':'Framah','Ozz':'Framah','.tom':'DoorBashr','Captain Multishine':'Abard','Bamboozled':'Abard','Bizzy':'Lanatra','Strange':'Thrillhouse','XatuXach':'Loza','Jojo':'Gords','DB':'Gords','JTheHedgehog':'Gords','cubes!':'Gords','Will':'KizzaBam','H':'KizzaBam','Auselote':'T.boy','Sephlia':'T.boy','longboy':'T.boy','Nova':'T.boy','Suugarnips':'Darr','Laf':'Darr','Legacy':'Darr','F1shy':'Oscar','Uforia':'Oscar','Mimco':'Nao-Cakes','Bonk':'Nao-Cakes','Nash':'Nao-Cakes','Balzac':'Nao-Cakes','Blackshadow':'Nao-Cakes','Expand__Dong':'Aetos','JDash':'Aetos','DrZu':'Barney','Driver':'Barney','some_dingus':'HBTV','Han':'HBTV','SWOFT':'HBTV','cynical':'Sad','kangabanga':'Sad','Bamfudge':'Pr3zz','Harusame':'Dragunov','Heterozygous':'Shaidy','Skyreth':'Suntide','MCTimmyD':'Kinaji','Servofood':'Kinaji','Akechi':'Kinaji','Dear_info':'ggesus','Jack':'ggesus','Sleepy':'Copycat','Pippy_Pal':'Copycat','Subwaytime':'Goofis','KingKing10':'HoAN','Pretzel':'HoAN','Destorum':'HoAN','Bizzarolame':'HoAN','Dascuugen':'HoAN','Tetters':'HoAN','TinTin':'Nabnut','jyetheguy':'YGOduelistkosc','Gnelf':'YGOduelistkosc','porkhub':'YGOduelistkosc','kerry':'YGOduelistkosc','BigBlack':'YGOduelistkosc','Harfi':'YGOduelistkosc','Iyavana1':'Luggy','OldMate':'Luggy','Bobby':'St. Avalon','Staunch':'St. Avalon','Rez':'pk','Elegy':'pk','Julian K':'pk','Dyl':'SBOmega','Damo':'Doozy','C+':'The Lag','Myth':'ontik','Churro':'dollarydoos','pinknerd':'dollarydoos','MAT2':'dollarydoos','Aatu':'dollarydoos','Tremelo':'AirwickGG','Isyuhaye':'AirwickGG','Applerod':'AirwickGG','SlaniaMJL':'Biggles','Entei':'Biggles','Will Smith':'Biggles','Snackurai':'Pretzel','tony1c':'Pretzel','Kanako':'Pretzel','Vanilla Vanish':'Pretzel','Shivamsdad':'Pretzel','Glacie':'FierceOni','Just Daniel':'BigNasty','PartyGrappler':'Jash','Ladle':'Jash','Lewbags':'Jash','RATGOD':'Jash','Dave':'Daybo','JP':'Chat','renagadez':'Chat','Lionel':'Chat','Zarmega':'Chat','melodiic':'Chat','DracoKnight':'Flyingcat','Loco Joe':'Flyingcat','Ash':'Frog','Cammy':'Frog','ZEUS':'Frog','JJH':'Frog','Blue22':'Zowayix','prto':'Zowayix','IcKc':'Zowayix','Darwin':'Zowayix','Inxtnc':'Zowayix','ProfTeak':'Zowayix','Mikey':'Zowayix','Jamberry':'Zowayix','JJ':'Zowayix','Radical man':'Zowayix','Ryuuji1901':'Zowayix','Nardia':'Zowayix','Mikael':'Zowayix','Powar':'Zowayix','Dee.Kay':'Zowayix','NiceNice':'Zowayix','Nilrasha':'Zowayix','snz':'Thegoras','6000j':'Inf','100':'Inf','Spaceghost':'Zxv','Donk':'MAMP','PhDDD':'MAMP','RhythmEcho':'MAMP','Succ':'MAMP','Dr Niceyum':'MAMP','Gracetail':'MAMP','House':'MAMP','FLWal':'Hugh Jass','az':'Struz','bp':'Radio#1117','Ushi':'Bubby','Dexter':'Bubby','Pierce':'Naomi Campbelltown','bams':'Jim Cool','177013':'Jim Cool','Korotai':'Jim Cool','Dag':'Sketch','CORG':'Sketch','kmw':'Sketch','Rocket':'Sketch','Fortnite':'Sketch','Billy Mack':'Sketch','Stove':'Sketch','Sir KeensWorth':'Sketch','Gregalope':'Sketch','BreakVG':'2Simple','Faulty':'2Simple','James':'2Simple','Riley':'2Simple','MeatPi':'2Simple','Kelan':'2Simple','Nick':'2Simple','lvl 100':'2Simple','J Clarkson':'2Simple','Butt':'2Simple','Oli':'2Simple','SlamFrunk!':'2Simple','Jamus7':'2Simple','Wazikamawata':'ParaboliC','Midori':'Greenhood','Malx':'Greenhood','Vish':'Filthy','Leapo':'Filthy','Foz':'Dekartea','YoshiPkz':'cmk','Floopiez':'Fishy','Dyna_Hole':'Snitto','Mamba':'Snitto','Cunchy':'Chris G','Deep Magic':'Chris G','Razor':'Cabbage','Ryley':'Cabbage','suh':'Knack','PlacentaMilkshake':'Knack','Stoddy':'Sweens','Salad':'Sweens','Pez':'Sweens','Virgil':'Sweens','Gooey':'baggy','ManBaby247':'baggy','Snowii':'baggy','Aron':'haiku','Bluetown':'Darce','Chimoshi':'Darce','Yan':'WhitePointer','charies':'Zen','Toonara':'K Fool','Jnuts':'Rozzo','Kinky boots':'Jackpot','maGs':'Zoltan','snipi':'Zoltan','Gameraid453':'Michi','TheJazzyman':'Michi','ArcaneCloud':'Michi','ube':'Floating Stools','Benton':'Cal','Magic':'Cal','Loretta':'Brennn','Ethanos':'Diddle','Lanzy':'Diddle','Astra+':'Diddle','Doppelganger':'Diddle','Toilet Store':'Bellboi','Jetfantastic':'Gravydice','Patch':'Gravydice','Yasuo':'Gravydice','DC':'Gravydice','FlyingLuigis':'Gravydice','D4C':'System','Bem':'TRex','Leaf':'Antec','Flamboyanthamster':'Antec','Viktor':'Antec','Lean':'DaddyMD','ZipperTheRipper':'DaddyMD','Senky':'DaddyMD','CLEH':'DaddyMD','Parralize':'DaddyMD','KARLOS':'DaddyMD','Buckwheat':'DaddyMD','Crossbow':'noobar','bigc':'JuicyPenguin','Sharnypooza':'Fabio','Thrash':'Fabio','Fern':'Fabio','FLOB':'Fabio','Arahpthos':'Blizzy','Garen':'Blizzy','EpicTiffy':'Blizzy','Gittinggud':'Blizzy','Swagdaddy McYolo':'Blizzy','Cetro':'Yoyo','L33':'Versky','Fan2Fromage':'Versky','Sublime':'Grizz','Moeysabra':'Grizz','JLPT':'Grizz','Bleakk':'Grizz','EVILM0J0':'Grizz','UltimateScrappy':'Grizz','Kodi':'Branyb','Crabfish':'Unethical','Crepto':'Unethical','ApolloCJ':'Stacked','Boru':'Zenzlia','Apyr':'Stilts','ZethG':'Rews','Snuggles':'Rews','Monarch':'Rews','Archer':'unrealsora','Smid':'Yellow','Villadale':'Yellow','Katherine':'Yellow','Tommy':'Nevarc','Seb':'Nevarc','paradox':'Nevarc','Naru':'Nevarc','Antwerp':'Nevarc','Prism':'Nevarc','Sei':'Nevarc','Obscurity':'Nevarc','Umbra':'Nevarc','Billams':'Nevarc','Redux':'Nevarc','Winter':'FumbleJr','CureWounds':'FumbleJr','Tallow':'FumbleJr','CheMarama':'FumbleJr','Trade':'FumbleJr','Dacksonjann':'Jimbles','Stawz':'Jimbles','Zekora':'Jimbles','Max Champion':'AboRoza','Warlordhero':'AboRoza','Frosty':'AboRoza','Mad_clwn':'AboRoza','Aidycus':'Quack','Neo Aether':'Cyanide','NightWolf':'Cyanide','Jake':'Cyanide','Rose':'D4C','Chondeus':'D4C','Davinh':'D4C','Meddle':'Radiant Pheonix','Jojo':'Radiant Pheonix','Dooty McFrooty':'Calculator','Mondrow':'Crab','Zboi1':'Crab','David (Boganamon Stadium)':'Rainth','Karnu':'Rainth','MaxXlevel':'Rainth','B-B-Ron':'RoZ','Saemon':'Hill','Kegstand':'Hill','Huffin':'Hill','Keshi':'BemaniAK','LachlanF':'BemaniAK','Scylla':'Figaro',"Dom's Tomato":'Semore','Sebcell':'Sweetchilli','LilR0otin':'Sweetchilli','Loco':'hezzadude12','Dosromos':'katoptron','S.S.S. Jester':'Sc0ttyP','Kyle':'Sc0ttyP','Tom K':'Zellon','Will':'WeedLan','Addo':'Flurkin','Kruz':'Flurkin','Dozza':'Hyper','Goon':'GumbleGore','Krisspear':'The Chuckstah','Buttsy':'Sass','Agent Orange':'Sass','Mixana':'Dreep','Bird':'Dreep','Akhadse':'Dreamcaster','Arcturiel':'Dreamcaster','Dynasty':'Sloshi','Bentley':'Flow Rats','Nangs':'Flow Rats','Magpie':'Nincata','Angel':'Nincata','Dankmeme':'Nincata','LobsterGuy':'Nincata','Wow':'Nincata','Flex':'Nincata','Scanis':'TJslash','Fetch':'Victor','Wonderstale':'Victor','pingu':'<-2cm','McGraw':'<-2cm','Wertz':'Lovestain','Poless':'Thixsev','Daddy.':'SoMa','cornchip':'SoMa','Seamus':'SoMa','KenoshaKiD':'Bass','Profile Name':'Bass','NV':'JEP','Wumbology':'JEP','Toxic':'Yuzu','Deckard':'Yuzu','BANDIT':'Yuzu','MehMuchi':'Yuzu','Revlis':'K','X-Calibur':'K','Fidilduck':'Snowpoint','barcus':'Slayden','RedMatter13':'Slayden','Twoflour':'Slayden','Crept0':'Gooch','Xylo':'Gooch','Jasm0':'Borris','Droop':'Douchedag','Murray':'Douchedag','TheGameRogue':'Sam','flak street':'Xondrell','SnowiestAngeman':'Xondrell','LT4':'Xondrell','Bmxmann101':'Xondrell','CornDawg':'Cap Supreme','Tom':'Hexicate','dcs':'Åsh','cheese':'Åsh','iDeeKay':'Åsh','Akabird':'Åsh','AbysmalAngel':'Åsh','Jogh':'Åsh','Gooley':'Åsh','BlueVapour':'Åsh','Ayowddupmang':'Åsh','eSpi':'ImSoChove','Snow':'ImSoChove','AIR':'ImSoChove','Currypuffs':'ImSoChove','JoXaZe':'Knarf97','TREE':'Flatfeet','joe':'Flatfeet','Wezley':'Flatfeet','Ignis Fates':'stantheyeti','Hoja Santa':'stantheyeti','Noamit':'stantheyeti','Viny':'stantheyeti','beachnik':'leongrav','Vontell':'eGo','Aesthetics':'eGo','CubT':'eGo','Dolo':'eGo','HarshJello':'eGo','trippymane':'eGo','Scala':'eGo','Killa Te':'eGo','Jarcino':'eGo','pap5er':'British Rice','Maruu':'Taka','Mook':'Blaz','uprightman':'Blaz','MiyKam':'dingdongkid','alpacas':'dingdongkid','CallMeHoju':'dingdongkid','Cusmo':'dingdongkid','Axorr':'mizu','iBexal':'mizu','Luckcio':'E-Dude','lagan':'E-Dude','Lunchbillion':'E-Dude','Duoface':'Double A','Angel':'Double A','Kairus':'Double A','Zubola':'Shlamp','DunedinSmashWinner':'Shlamp','Spoo':'Seliph','Valadus':'IntenseQuack','doon':'IntenseQuack','Juan':'chizzL','Nacholad':'chizzL','Halosydne':'Favi','OnionRing':'Favi','Sinkusm':'Manta','Pataron':'Manta','tyomie':'Manta','Nam':'Jumboj1m','Olag':'Llamas','You':'6116','Gooey':'6116','angelcoolchomp':'Staunch','Squeeze':'Staunch','Dyer':'Red','E':'Red','Alex GC':'Thr333','Windows98':'Thr333','Choco':'namnam','GC':'TDUM','E.':'TDUM','GRAMMY':'TDUM','Ghengis Kant':'actus reus','Chow':'Conductus','braydoz':'Crozzy','Greg':'Wilko','Pyro':'Genghis Khant','Unkindleech':'Jakalanche','Ninsai':'Guts','TrogboSlice':'Lain','Cheekimelon':'Lain','Klerke':'Lain','AmaliKada':'Lain','Pedro':'Lain','Mechlord':'Lain','Roz':'Lain','Jackson':'Lain','igNITR0':'Hippo Mode','Lunacy':'Swish','Darklurker':'NINjA','Goatmilkin3d':'Tea Bee','Pomelo <3':'El Chimpe','Pete':'Ulticow','Mal':'Dundo','Grimz':'Dundo','Yecob':'Dundo','Yosh':'Dundo','JBird':'Dundo','Melandor':'Dundo','Aden':'Dundo','Campy':'Dundo','Paranoid':'Half Baked','King K Cuk':'Jack','porkyy':'Phazonizer','Gong - Samuel Maldon':'Phazonizer','HTem':'333','FlowerBoy':'Eden','Calzy':'TG4062','Tideray':'TG4062','Saikou':'TacoSpartan','Phong':'TacoSpartan','Qui':'Bizz','Ciarda':'Boghara Stroganov','Nuke':'Treesus','Rek':'Mosa','Simon':'Juan','Fej':'Juan','Patrya':'Juan','SJ Roasted':'Juan','Swampy':'Juan','Calamity':'Juan','SoupyTwist':'Juan','Poklon':'Zac','Flynn':'Zac','WorseThan2cm':'Zac','Troten':'Zac','Dennis':'Jerry Swan','Sbcreepy':'Jumbuck','Knight shadow':'Jumbuck','Enigma':'Jumbuck','XuDong':'Pickle','MOTY_BaeGhouls':'Nitzayra','Jethee':'Nitzayra','Yoshi':'ras','toucan man':'ras','Sumph':'ras','Yean':'GrindGod','Sleepmode':'Skullkid','Gringo':'Cryptic','eltoNNNNNN':'ChuJelly?~','Alfonzo':'Naga','Skip':'Acat','Sump':'DehDehBeh','Nebula':'Rainbews','K':'Rainbews','Cale, a vegetable':'Rainbews','SpongeBev':'Melotech','Spacebop':'BrentonMcBJJ','AquaClaw':'T-Bone','Gordo':'Rhombus','clancybreaux':'Dugongs','CAOTIC':'Ablice','MV33':'Ablice','BroKeN':'Kitt','Kessler':'Kitt','Elron':'Kitt','Razalavent':'Kitt','Recordio':'Kitt','Lem':'IceyFire','Nintenboy':'IceyFire','DiabloPacket':'IceyFire','stroodledoodle':'IceyFire','Turtle':'IceyFire','Mr VGA':'IceyFire','Yettii':'IceyFire','Maurr':'BahamutType0','Yam':'BahamutType0','Panda':'Scrandyy','Powar':'Scrandyy','Froppy':'Scrandyy','Mangi':'Pandax3','GarbageDog':'Pandax3','MDerp':'Adura','EVAL':'Nyantic','Faust':'Weed','Esto':'Kace Mono','Savino':'Dapto Dog','Ploggin':'Dapto Dog','Aron':'Dapto Dog','Rakuda':'Dapto Dog','Zenpai':'Dapto Dog','Ash':'Blackhawk','EmBrace':'Banan','Bowles':'Evil Olive','Ventross':'Skin','Zeus (new)':'Skin','Lambo':'Skin','Uncolect':'Skin','Justin':'Skin','Hush':'Skin','Sif Bug':'Kaznec','Icy':'Banjo String','Portgas D. George':'Banjo String','Grey Waves':'Shiva','Chub':'Hugh G Rection','Jaeger':'Gresh','*Asterix*':'Gresh','Blenny27':'huske','Xerophyte':'huske','Ash':'huske','Hoodwink':'Potanox','Mr Maple':'TPZ','Gray Waves':'TPZ','Jake the Snake':'Futurecow','lukia':'Kit Coffee','Mashu':'M','Larry':'M','TinselMikado':'M','Fool':'M','Spin2Win':'M','SUPERDOG':'toomuchdog','DaNg':'toomuchdog','Dav':'toomuchdog','Happy_Mc_Hap_Hap':'BDawg','Maxx Wizel':'BDawg','Hopcat':'OKCOOL','Morbid':'Baeden','De De Destroyer':'That Child','xxsniperl0rdxx':'That Child','Dogforpm':'That Child','Shraeve':'That Child','SaltyParis':'That Child','Griff':'That Child','Mousen':'Gogo','Bullywog':'Gogo','Jacob':'Gogo','Jroz':'Avosc','the heron':'shane3x','Smelly Boy':'Krystal','Omni':'Milkshake','Wntr':'Fabcat','Rukai':'jacky chung','Shlimeball':'Sponge','Deku':'Sponge','Veraxana':'Sponge','Linconius':'Sponge','PurplePant73':'Cupu','Hu Januce':'Cupu','BelowAverageStepMum':'Cupu','Zug':'Cupu','Sloth':'Cupu'}

function getReason() {
    switch (tierNum) {
        case 0:
            reason = "have beaten Kameme who has beaten Mkleo. Aka you are Ben Gold";
            break;
        case 1:
            reason = "beaten Ben Gold who has beaten Kameme who has beaten Mkleo";
            break;
        case 2:
            reason = "beaten " + defeatOrder[0] + " who has beaten Ben Gold who has beaten Kameme who has beaten Mkleo";
            break;
        case 3:
            reason = "beaten " +  defeatOrder[0] +  " who has beaten " +  defeatOrder[1] + " who has beaten Ben Gold who has beaten Kameme who has beaten Mkleo";
            break;
        case 4:
            reason = "beaten " + defeatOrder[0] + " who has beaten " + defeatOrder[1] + " who has beaten " + defeatOrder[2] + " who has beaten Ben Gold who has beaten Kameme who has beaten Mkleo"
    }
}

function getTierNum(toParse, name) {
    if (name == "Ben Gold") {
        tierNum = 0;
    } else if (tierNum == -1) {
        if (typeof toParse[name] !== 'undefined') {
            defeatOrder.push(toParse[name]);
            tierNum = counter;
            return;
        }

        for (var i = 0; i < toParse.length; i++) {
            if (toParse[i] == name) {
                tierNum = counter;
                return;
            }
        }

        counter++;
    }
}

function getOtherLosses() {
    var popNum = tiers.length - tierNum;

    for (var i = 0; i < popNum + 1; i++) {
        tiers.pop();
    }
    var rev = tiers.reverse();

    for (var i = 0; i < tierNum - 1; i++) {
        defeatOrder.push(rev[i][defeatOrder[i]]);
    }
}

var tiers = [first, second, third, fourth];


$(document).ready(function() {

    $("#submit" ).mousedown(function() {
        counter = 1;
        tierNum = -1;
        reason = error;
        defeatOrder = [];
        tiers = [first, second, third, fourth];

        var tag = $("#smashTag")[0]["value"];

        for (var i = 0; i < tiers.length; i++) {
             getTierNum(tiers[i], tag);
        }

        getOtherLosses();
        getReason();

        if (tierNum == -1) {
            $("h1")[0].innerHTML = reason;
            $("#results")[0].innerHTML = "Please try again!";
        } else {
            $("h1")[0].innerHTML = "Congrats " + tag + ", your tier is " + tierNum + " and your Mkleo number is " + parseInt(tierNum + 2);
            $("#results")[0].innerHTML = "This means that you have " + reason;
        }        
    });
});
