console.log("Limpador AA");
var i;
var elts = document.getElementsByTagName('p');
var dict =['anal', 'ana!', 'anus', 'arombad', 'babaca', 'bacanal', 'bacana!', 'bacura', 'bagos', 'baitola', 'ba!tola', 'baito!a', 'ba!to!a', 'bct', 'bicha', 'bisca', 'bixa', 'boazuda', 'bocet', 'boiola', 'bo!ola', 'bolagto', 'bo!agto', 'boquet', 'bolcat', 'bo!cat', 'boset', 'bosta', 'bqt', 'brioco', 'br!oco', 'bronha', 'bucet', 'bunda', 'bunduda', 'buset', 'cadel', 'cade!', 'cacet', 'caga', 'cagado', 'cagona', 'canalha', 'cana!ha', 'caralh', 'cara!h', 'caseta', 'casete', 'chana', 'chaninh', 'chavasc', 'chavask', 'chavasquinh', 'chavasqu!nh', 'chechec', 'chechek', 'chechequinh', 'chechequ!nh', 'cherec', 'cherek', 'cherequinh', 'cherequ!nh', 'chererec', 'chererek', 'chererequinh', 'chererequ!nh', 'chibiu', 'ch!biu', 'chib!u', 'ch!b!u', 'chibumb', 'ch!bumb', 'chifrud', 'ch!frud', 'chota', 'chotinh', 'chot!nh', 'chupad', 'clitoris', 'cl!toris', 'clitor!s', 'cl!tor!s', 'corna', 'corninh', 'corn!nh', 'corno', 'cornud', 'crl', 'cretin', 'cret!n', 'cusa', 'cusinho', 'cus!nho', 'cusud', 'curalho', 'cura!ho', 'cuza', 'cuzinho', 'cuz!nho', 'cuzud', 'egua', 'escrot', 'esporad', 'estupid', 'estup!d', 'fdp', 'foda', 'fode', 'fodid', 'fod!d', 'fodinha', 'fod!nha', 'fodona', 'fornica', 'forn!ca', 'fude', 'fudendo', 'fudecao', 'fudid', 'fud!d', 'furnica', 'furn!ca', 'gonore', 'gosma', 'gosment', 'grelinho', 'gre!inho', 'grel!nho', 'grelo', 'goza', 'gozo', 'idiota', '!diota', 'id!ota', '!d!ota', 'idiotice', '!diotice', 'id!otice', 'idiot!ce', '!d!otice', '!diot!ce', '!d!ot!ce', 'imbecil', '!mbecil', 'imbec!l', 'imbeci!', '!mbec!l', '!mbeci!', 'iscrot', '!scrot', 'kadel', 'kade!', 'kacet', 'kaga', 'kagado', 'kagona', 'kanalha', 'kana!ha', 'karalh', 'kara!h', 'kaseta', 'kasete', 'korna', 'korninh', 'korn!nh', 'korno', 'kornud', 'krl', 'kr!', 'kretin', 'kret!n', 'kuralh', 'kura!h', 'kusa', 'kusinho', 'kus!nho', 'kusudo', 'kuza', 'kuzinho', 'kuz!nho', 'kuzud', 'ladra', '!adra', 'ladroeira', '!adroeira', 'ladroe!ra', '!adroe!ra', 'ladrona', '!adrona', 'lepros', '!epros', 'lesbica', '!esbica', 'lesb!ca', '!esb!ca', 'lolit', '!olit', 'lo!it', 'lol!t', '!o!it', '!ol!t', 'macac', 'machona', 'machora', 'manguaca', 'masturba', 'merda', 'merdinha', 'mija', 'm!ja', 'mijo', 'm!jo', 'mocrea', 'mocreia', 'mocre!a', 'mondrong', 'nadega', 'nazi', 'ninfeta', 'n!nfeta', 'nojeira', 'noje!ra', 'nojent', 'nojo', 'olhota', 'orgia', 'org!a', 'otari', 'otar!', 'paspalh', 'pauzao', 'pauzaum', 'pemba', 'penian', 'pen!an', 'penis', 'pen!s', 'pentelh', 'pente!h', 'pepeca', 'pepeka', 'pererec', 'pererek', 'peroc', 'perok', 'peru', 'pintudo', 'p!ntudo', 'pintao', 'p!ntao', 'pintaum', 'p!ntaum', 'pintaso', 'p!ntaso', 'piranha', 'p!ranha', 'piriguet', 'p!riguet', 'pir!guet', 'p!r!guet', 'piroc', 'p!roc', 'pirok', 'p!rok', 'pora', 'porno', 'ppk', 'pqp', 'prostibulo', 'prost!bulo', 'prostibu!o', 'prost!bu!o', 'prostitut', 'prost!tut', 'punheta', 'pupunha', 'pustula', 'pustu!a', 'puta', 'putinh', 'put!nh', 'puto', 'rabao', 'rabaum', 'rabo', 'rabud', 'racha', 'retardad', 'rola', 'ro!a', 'rolinha', 'ro!inha', 'rol!nha', 'rosca', 'sacana', 'sapata', 'sapataum', 'sifili', 's!fili', 'sif!li', 'sifi!i', 'sifil!', 's!f!li', 's!fi!i', 's!fil!', 'sif!l!', 's!f!l!', 'siriric', 's!riric', 'sir!ric', 'sirir!c', 's!r!ric', 's!rir!c', 'sir!r!c', 's!r!r!c', 'tarad', 'tesao', 'testuda', 'tesud', 'tezao', 'tezaum', 'tezud', 'transa', 'transo', 'trocha', 'troucha', 'trolha', 'tro!ha', 'troucha', 'trouxa', 'troxa', 'vaca', 'vadia', 'vad!a', 'vagabund', 'vagina', 'vag!na', 'vead', 'viad', 'v!ad', 'vibrador', 'v!brador', 'xavasc', 'xavask', 'xavasquinh', 'xavasqu!nh', 'xerec', 'xerek', 'xerequinh', 'xerequ!nh', 'xererec', 'xererek', 'xererequinh', 'xererequ!nh', 'xexec', 'xexek', 'xexequinh', 'xexequ!nh', 'xibiu', 'x!biu', 'xib!u', 'x!b!u', 'xibumb', 'x!bumb', 'xifrud', 'x!frud', 'xota', 'xotinh', 'xot!nh', 'xana', 'xaninh', 'xan!nh', 'xupad'];
for(i=0;i<dict.length;i++)
{
  document.body.innerHTML = document.body.innerHTML.replace(dict[i], '*****');
}
 //for (i = 0; i < elts.length; i++) {
   //document.body.innerHTML = document.body.innerHTML.replace(dict[i], 'PASCALZÃO DA MASSA');

 //}
