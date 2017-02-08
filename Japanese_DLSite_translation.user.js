// ==UserScript==
// @name           Japanese DLSite translation
// @namespace      http://userscripts.org/users/23652
// @description    Replaces Japanese text on DLSite
// @include        http*://*.dlsite.com/*
// @exclude        http*://*.dlsite.com/*eng*
// @grant          none
// @copyright      JoeSimmons
// @version        1.1.7b
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @project page   https://github.com/Anon7404/DLStrans
// @downloadURL    https://raw.github.com/Anon7404/DLStrans/master/Japanese_DLSite_translation.user.js
// @updateURL      https://raw.github.com/Anon7404/DLStrans/master/Japanese_DLSite_translation.user.js
// ==/UserScript==
(function () {
    'use strict';


    /*
        NOTE: 
            You can use \\* to match actual asterisks instead of using it as a wildcard!
            The examples below show a wildcard in use and a regular asterisk replacement.

            '/(?:^|\\W)word(?:\\W|$)/g' : 'word',
            '/(?:^|\\s)word/g' : 'word',
            '/(|\\s)word\\s/g' : 'word',
            '/(\\W:|)word(:\\W|$)/g' : 'word',
            '/\\bword\\b/g' : 'word',
            '/\\bword/g' : 'word',
            '/(:|^)word/g' : 'word',
            '/(:|^)word(:|$)/g' : 'word',
            '/(:|^)word(|| )(:|$)/g' : 'word ',

    */

    var words = {
    ///////////////////////////////////////////////////////


        // Syntax: 'Search word' : 'Replace word',
//game page
        '24時間ランキング' : 'Daily Ranking',
        '7日間ランキング' : 'Weekly Ranking',
        'ランキングをもっと見る' : 'See More Details',
        '発売予告作品をもっと見る' : 'See More Details',
        '発売予告作品' : 'Upcoming Works',
        '男性成人向け作品へ' : 'Works for Adults',
        '/(:|^)同人誌(:|$)/g' : 'Doujinshi',
        '対象性別' : 'Audience',
        '男性向け' : 'Males',
        '活動ジャンル' : 'Main categories',
        '/(:|^)(||\\W)ロールプレイング(||ゲーム)(||\\W)(:|$)/g' : 'RPG',
        'サークル一覧' : 'Circles',
        '成人向けすべて' : 'Adult All',
        '成人向け同人' : 'Adult Doujin',
        '成人向けPCソフト' : 'Adult PC soft',
        '同人ゲーム' : 'Doujin Game',
        'アプリケーション' : 'Executable File',
        'バージョンアップ情報' : 'Upgrade Information',
        '販売日' : 'Release',
        '最終更新日' : 'Last Modified',
        '年齢指定' : 'Age Ratings',
        '18禁' : 'R18+',
        '作品形式' : 'Categories',
        'ファイル形式' : 'File Format',
        '/(:|^)対応OS(:|$)/g' : 'OS Platforms',
        'その他オプション' : 'Additional Options',
        'その他同人誌' : 'Other Doujins',
        'その他同人ソフト' : 'Other Doujin Soft',
        'その他ゲーム' : 'Other Games',
        '/(:|^)マイジャンル登録(:|$)/g' : 'Add to My Tags',
        'マイジャンル' : 'My Tags',
        'サンプル' : 'Samples',
        'HTML版で表示' : 'Display in HTML format',
        'ホームページ' : 'Website',
        'サークル名' : 'Circle',
        '並び替え' : 'Sort by',
        '件中' : 'Total',
        '件目' : 'Showing',
        '発売日が新しい順' : 'Release date - New to Old',
        '発売日が古い順' : 'Release date - Old to New',
        'DL数が多い順' : 'Number of Downloads',
        '価格が安い順' : 'Price - Low to High',
        '価格が高い順' : 'Price - High to Low',
        '評価が高い順' : 'Rating - High to Low',
        'レビューが多い順' : 'Reviews - High to Low',
        '表示件数' : 'Display',
        '表示形式' : 'View',
        '/(:|^)次へ(:|$)/g' : 'Next',
        '/(:|^)最後へ(:|$)/g' : 'Last Page',
        '/(:|^)最初へ(:|$)/g' : 'First Page',
        '/(:|^)前へ(:|$)/g' : 'Previous',
        'お気に入りに追加' : 'Favorite',
        '/(:|^)キーワード(:|$)/g' : 'Keywords',
        '検索条件を変更する' : 'Modify search conditions',
        '/\\b年\\b/g' : '/',
        '/\\b月\\b/g' : '/',
        '/\\b日/g' : '',
        '保存した検索条件' : 'My Favorite',
        '/(:|^)検索条件(:|$)/g' : 'Search for',
        '/(:|^)ジャンル/g' : 'Tags',
        'の検索結果' : 'Results',
        '検索結果' : 'Results',
        '他の趣味嗜好で探す' : 'See more…',
        '他の作品形式で探す' : 'See more…',
        '専売/独占/先行作品' : 'DLsite Exclusive',
        'ツール/アクセサリ' : 'Utility / Tool',
        'こだわり/アピール' : 'Focus / Appeals',
        '淡白/あっさり' : 'Plain/Nonpersisting',
        'お尻/ヒップ' : 'Buttocks',
        'ベタ/コテコテ' : 'Predictable Story',
        '汁/液大量' : 'Lots of Cum',
        'アイテム/道具' : 'Featured Items/Tools',
        'ピアス/装飾品' : 'Earrings',
        '首輪/鎖/拘束具' : 'Collar/Chain/Hamper',
        'ムチ/縄/蝋燭' : 'Whip/Rope/Candle',
        '包帯/注射器' : 'Bandage/Injector',
        '道具/異物' : 'Foreign Object',
        '叔父/義父' : 'Uncle/Stepfather',
        '男性/おやじ' : 'Man/Middle-age',
        '同級生/同僚' : 'Classmate',
        '先輩/後輩' : 'Junior & Senior Students',
        '女王様/お姫様' : 'Queen/Princess',
        'エルフ/妖精' : 'Elf/Fairy',
        '天使/悪魔' : 'Angel/Demon',
        '魔法使い/魔女' : 'Witch',
        '人外娘/モンスター娘' : 'Nonhuman/Monster Girl',
        'レトロ/耽美' : 'Retro/Aesthetic',
        '芸能人/アイドル/モデル' : 'Entertainer/Idol/Model',
        '警察/刑事' : 'Police',
        'ヤクザ/裏社会' : 'Crime/Gangster',
        '不良/ヤンキー' : 'Bad Boy/Hoodlum',
        'レスラー/格闘家' : 'Wrestler/Fighter',
        'ヤリチン/プレイボーイ' : 'Playboy',
        'けもの/獣化' : 'Animalize',
        'コスチューム/衣装/職業' : 'Outfits / Occupations',
        'レース/フリル' : 'Lacy/Frilled',
        '着物/和服' : 'Kimono/Japanese Dress',
        'シチュエーション/系統' : 'Situations / Tastes',
        '学校/学園' : 'School',
        'オフィス/職場' : 'Office',
        'ラブラブ/あまあま' : 'Romance',
        '退廃/背徳/インモラル' : 'Decadent/Immoral',
        '日常/生活' : 'Drama/Daily Living',
        '風俗/ソープ' : 'Soapland',
        '歴史/時代物' : 'Epic/Historical',
        'ノンフィクション/体験談' : 'Non-fiction/Real Story',
        'プレイ/えっち傾向' : 'Actions / Sexual Pref.',
        '妊娠/孕ませ' : 'Pregnancy/Impregnation',
        'レズ/女同士' : 'Lesbian',
        'ホモ/男同士' : 'Homosexual',
        '複数プレイ/乱交' : 'Orgy',
        '強制/無理矢理' : 'Coercion/Compulsion',
        '放尿/おしっこ' : 'Urination',
        'ごっくん/食ザー' : 'Cum Swallow',
        '外見/身体的特徴' : 'Appearance',
        '巨乳/爆乳' : 'Big Breasts',
        '貧乳/微乳' : 'Tiny Breasts',
        '複乳/怪乳/超乳' : 'Multiple Breasts',
        '乳首/乳輪' : 'Nipples',
        'ぼて腹/妊婦' : 'Pregnant Woman',
        'スリム/スレンダー' : 'Slim/Slender',
        '陰毛/腋毛' : 'Pubic Hair',
        '褐色/日焼け' : 'Tanned Skin/Suntan',
        'タトゥー/刺青' : 'Tattoo',
        '残酷系/異常系' : 'Violence / Guro',
        '血液/流血' : 'Blood',
        '売春/援交' : 'Prostitution',

//common words
//Advanced Search
        '/(:|^)その他/g' : 'Option',
        '/(:|^)カップリング/g' : 'Pairings',
        '/(:|^)シリーズ名/g' : 'Series',
        '/(:|^)イベント/g' : 'Event',
        '/(:|^)作品名(:|$)/g' : 'Title',
        '/(:|^)オプション(:|$)/g' : 'Option',
        '/(:|^)ページ数/g' : 'Page Count',
        '/\\bページ/g' : ' pages',
        '割引中の作品' : 'Items at Discount',
        '販売開始日' : 'Release Date',
        '指定なし' : 'All',
        '1週間以内' : 'Last 7 days',
        '1ヶ月以内' : 'Last 30 days',
        '1年以内' : 'Past 12 months',
        'それ以前' : 'Older',
        '価格帯' : 'Price Range',
        '円以下' : ' JPY and less',
        '円以上' : ' JPY and more',
        '/\\b円/g' : ' JPY',
        '販売状況' : 'Sale status',
        '販売中' : 'Works available for sale',
        '予告中' : 'Upcoming works',
        '指定しない' : 'All',
        '/(:|^)対象作品(:|$)/g' : 'Target work',
        '同人作品' : 'Doujin',
        'PCゲーム' : 'PC game',
        '電子書籍' : 'E-book',
        '全年齢向け' : 'All ages',
        'R指定' : 'R-15',
        '成人向け' : 'Adult ',
        '表示順序' : 'Sort by',
        '通常表示' : 'Standard view',
        '画像のみ' : 'Gallery view',
        '/\\b件/g' : ' pages',
//Categories
        '/(:|^)(||\\W)デジタルコミック(||\\W)(:|$)/g' : 'Digital Comic',
        '/(:|^)(||\\W)劇画(||\\W)(:|$)/g' : 'Gekiga',
        '/(:|^)(||\\W)マンガ(||\\W)(:|$)/g' : 'Manga',
        '/(:|^)(||\\W)CG集(||\\W)(:|$)/g' : 'CG Collection',
        '/(:|^)(||\\W)イラスト集(||\\W)(:|$)/g' : 'Illustration',
        'イラスト\＋ノベル' : 'Illust\+Novel',
        'CG+ノベル' : 'C\G\+Novel',
        'イラスト+ノベル' : 'Illust+Novel',
        '/(:|^)(||\\W)ノベル(||\\W)(:|$)/g' : 'Novel',
        '/(:|^)(||\\W)同人ソフトノベル(||\\W)(:|$)/g' : 'Doujin Software Novel',
        '/(:|^)(||\\W)同人誌ノベル(||\\W)(:|$)/g' : 'Doujin Novel',
        '/(:|^)(||\\W)写真集(||\\W)(:|$)/g' : 'Photo Album',
        '/(:|^)(||\\W)素材(||\\W)(:|$)/g' : 'Materials',
        '/(:|^)(||\\W)画像(||\\W)(:|$)/g' : 'Image ',
        '/(:|^)(||\\W)オーディオ(||\\W)(:|$)/g' : 'Audio',
        '/(:|^)(||\\W)動画(||\\W)(:|$)/g' : 'Video',
        '/(:|^)(||\\W)動画作品(||\\W)(:|$)/g' : 'Video',
        '/(:|^)(||\\W)音声(||\\W)(:|$)/g' : 'Voice',
        '/(:|^)(||\\W)音声作品(||\\W)(:|$)/g' : 'Voice',
        '/(:|^)(||\\W)音楽(||\\W)(:|$)/g' : 'Music',
        '/(:|^)(||\\W)音楽作品(||\\W)(:|$)/g' : 'Music',
        '/(:|^)(||\\W)アクション(||\\W)(:|$)/g' : 'Action',
        '/(:|^)(||\\W)クイズ(||\\W)(:|$)/g' : 'Quiz',
        '/(:|^)(||\\W)アドベンチャー(||\\W)(:|$)/g' : 'Adventure',
        '/(:|^)(||\\W)テーブルゲーム(||\\W)(:|$)/g' : 'Table',
        '/(:|^)(||\\W)デジタルノベル(||\\W)(:|$)/g' : 'Digital Novel',
        '/(:|^)(||\\W)シミュレーション(||\\W)(:|$)/g' : 'Simulation',
        '/(:|^)(||\\W)タイピング(||\\W)(:|$)/g' : 'Typing',
        '/(:|^)(||\\W)シューティング(||\\W)(:|$)/g' : 'Shooter',
        '/(:|^)(||\\W)パズル(||\\W)(:|$)/g' : 'Puzzle',
        '/(:|^)(||\\W)ゲーム(||\\W)(:|$)/g' : 'Game',
        '/(:|^)(||\\W)画集(||\\W)(:|$)/g' : 'Artbooks',
//Preferences
        '趣味嗜好' : 'Preferences',
        'いずれかを含む' : 'One or more of these words',
        '全てを含む' : 'All these words',
//Focus / Appeals
        '/(:|^)萌え(|| )(:|$)/g' : 'Moe ',
        '/(:|^)ツンデレ(|| )(:|$)/g' : 'Tsundere ',
        '/(:|^)燃え(|| )(:|$)/g' : 'Hot ',
        '/(:|^)感動(|| )(:|$)/g' : 'Tearjerker ',
        '/(:|^)癒し(|| )(:|$)/g' : 'Healing ',
        '/(:|^)鬱(|| )(:|$)/g' : 'Depression ',
        '/(:|^)オールハッピー(|| )(:|$)/g' : 'Totally Happy ',
        '/(:|^)着衣(|| )(:|$)/g' : 'Clothed ',
        '/(:|^)チラリズム(|| )(:|$)/g' : 'Peeping ',
        '/(:|^)フェチ(|| )(:|$)/g' : 'Fetish ',
        '/(:|^)女性視点(|| )(:|$)/g' : 'Woman\'s Viewpoint ',
        '/(:|^)女主人公のみ(|| )(:|$)/g' : 'Female Heroine Only ',
        '/(:|^)男無(|| )(:|$)/g' : 'No Male ',
        '/(:|^)逆転無し(|| )(:|$)/g' : 'No Reverse ',
        '/(:|^)マニアック(|| )(:|$)/g' : 'Maniac ',
        '/(:|^)アブノーマル(|| )(:|$)/g' : 'Abnormal ',
        '/(:|^)おさわり(|| )(:|$)/g' : 'Touching ',
        '/(:|^)きせかえ(|| )(:|$)/g' : 'Clothes Changing  ',
        '/(:|^)脚(|| )(:|$)/g' : 'Legs ',
        '/(:|^)おっぱい(|| )(:|$)/g' : 'Breasts ',
        '/(:|^)淫語(|| )(:|$)/g' : 'Dirty Talk ',
        '/(:|^)連続絶頂(|| )(:|$)/g' : 'Successive Orgasms ',
        '/(:|^)断面図(|| )(:|$)/g' : 'Inside View ',
        '/(:|^)ドット(|| )(:|$)/g' : 'Pixel Art  ',
        '/(:|^)ポリゴン(|| )(:|$)/g' : '3D ',
        '/(:|^)アニメ(|| )(:|$)/g' : 'Anime ',
        '/(:|^)催眠音声(|| )(:|$)/g' : 'Hypnotic Voice ',
        '/(:|^)アンソロジー(|| )(:|$)/g' : 'Anthology ',
//Featured Items / Tools
        '/(:|^)リボン(|| )(:|$)/g' : 'Ribbon ',
        '/(:|^)カチューシャ(|| )(:|$)/g' : 'Headband ',
        '/(:|^)メガネ(|| )(:|$)/g' : 'Glasses ',
        '/(:|^)靴下(|| )(:|$)/g' : 'Socks ',
        '/(:|^)薬物(|| )(:|$)/g' : 'Drug ',
        '/(:|^)ローション(|| )(:|$)/g' : 'Lotion ',
        '/(:|^)スタンガン(|| )(:|$)/g' : 'Stun Gun ',
        '/(:|^)おむつ(|| )(:|$)/g' : 'Diaper ',
        '/(:|^)おもちゃ(|| )(:|$)/g' : 'Toy ',
//Characters
        '/(:|^)キャラクター(|| )(:|$)/g' : 'Characters ',
        '/(:|^)少女(|| )(:|$)/g' : 'Girl ',
        '/(:|^)ぷに(|| )(:|$)/g' : 'Puni ',
        '/(:|^)少年(|| )(:|$)/g' : 'Boy ',
        '/(:|^)ショタ(|| )(:|$)/g' : 'Shota  ',
        '/(:|^)年上(|| )(:|$)/g' : 'Senior ',
       '/(:|^)母親(|| )(:|$)/g' : 'Mother ',
        '/(:|^)義妹(|| )(:|$)/g' : 'Younger Stepsister ',
        '/(:|^)娘(|| )(:|$)/g' : 'Daughter  ',
        '/(:|^)妹(|| )(:|$)/g' : 'Younger Sister  ',
        '/(:|^)兄(|| )(:|$)/g' : 'Older Brother  ',
        '/(:|^)弟(|| )(:|$)/g' : 'Younger Brother  ',
        '/(:|^)父(|| )(:|$)/g' : 'Father  ',
        '/(:|^)義母(|| )(:|$)/g' : 'Stepmother ',
        '/(:|^)実姉(|| )(:|$)/g' : 'Real Older Sister ',
        '/(:|^)義姉(|| )(:|$)/g' : 'Older Stepsister ',
        '/(:|^)熟女(|| )(:|$)/g' : 'Mature Woman ',
        '/(:|^)人妻(|| )(:|$)/g' : 'Married Woman ',
        '/(:|^)お姉さん(|| )(:|$)/g' : 'Older Girl/Older Sister ',
        '/(:|^)未亡人(|| )(:|$)/g' : 'Widow ',
        '/(:|^)既婚者(|| )(:|$)/g' : 'Married Person ',
        '/(:|^)幼なじみ(|| )(:|$)/g' : 'Childhood Friend ',
        '/(:|^)双子(|| )(:|$)/g' : 'Twins ',
        '/(:|^)姉妹(|| )(:|$)/g' : 'Sisters ',
        '/(:|^)保健医(|| )(:|$)/g' : 'School Nurse ',
        '/(:|^)女医(|| )(:|$)/g' : 'Female Doctor ',
        '/(:|^)女教師(|| )(:|$)/g' : 'Female Teacher ',
        '/(:|^)教師(|| )(:|$)/g' : 'Teacher ',
        '/(:|^)学生(|| )(:|$)/g' : 'Student ',
        '/(:|^)委員長(|| )(:|$)/g' : 'Class President ',
        '/(:|^)先輩(|| )(:|$)/g' : 'Senpai  ',
        '/(:|^)上司(|| )(:|$)/g' : 'Boss ',
        '/(:|^)OL(|| )(:|$)/g' : 'Office Lady ',
        '/(:|^)秘書(|| )(:|$)/g' : 'Secretary ',
        '/(:|^)サラリーマン(|| )(:|$)/g' : 'Salaried Worker ',
        '/(:|^)ホスト(|| )(:|$)/g' : 'Host ',
        '/(:|^)リーマン(|| )(:|$)/g' : 'Salariman ',
        '/(:|^)お嬢様(|| )(:|$)/g' : 'Upper-class Girl ',
        '/(:|^)ギャル(|| )(:|$)/g' : 'Gal ',
        '/(:|^)ビッチ(|| )(:|$)/g' : 'Bitch ',
        '/(:|^)天然(|| )(:|$)/g' : 'Natural ',
        '/(:|^)電波(|| )(:|$)/g' : 'Frantic ',
        '/(:|^)主従(|| )(:|$)/g' : 'Master and Servant ',
        '/(:|^)執事(|| )(:|$)/g' : 'Butler ',
        '/(:|^)変身ヒロイン(|| )(:|$)/g' : 'Transforming Girl ',
        '/(:|^)魔法少女(|| )(:|$)/g' : 'Magical Girl ',
        '/(:|^)男の娘(|| )(:|$)/g' : 'Trap ',
        '/(:|^)妖怪(|| )(:|$)/g' : 'Specter ',
        '/(:|^)擬人化(|| )(:|$)/g' : 'Personification ',
        '/(:|^)ヤンデレ(|| )(:|$)/g' : 'Yandere ',
        '/(:|^)モンスター娘(|| )(:|$)/g' : 'Monster Girl  ',
        '/(:|^)ロボッ娘(|| )(:|$)/g' : 'Robogirl  ',
        '/(:|^)ドジっ娘(|| )(:|$)/g' : 'Clumsy Girl ',
        '/(:|^)ロボット(|| )(:|$)/g' : 'Robot ',
        '/(:|^)ガテン系(|| )(:|$)/g' : 'Blue-collar Worker ',
        '/(:|^)幽霊(|| )(:|$)/g' : 'Ghost ',
        '/(:|^)ゾンビ(|| )(:|$)/g' : 'Zombie ',
        '/(:|^)同性愛者(|| )(:|$)/g' : 'Homosexual ',
        '/(:|^)ショタケモ(|| )(:|$)/g' : 'Furry (Shota) ',
        '/(:|^)インテリ(|| )(:|$)/g' : 'Intellectual ',
        '/(:|^)外国人(|| )(:|$)/g' : 'Foreigner ',
        '/(:|^)体育会系(|| )(:|$)/g' : 'Jock ',
        '/(:|^)スポーツ選手(|| )(:|$)/g' : 'Athlete ',
        '/(:|^)ニューハーフ(|| )(:|$)/g' : 'Shemale ',
        '/(:|^)戦士(|| )(:|$)/g' : 'Warrior ',
        '/(:|^)俺様攻め(|| )(:|$)/g' : 'Lordly Manner (Dominant) ',
        '/(:|^)クール攻め(|| )(:|$)/g' : 'Cool Man (Dominant) ',
        '/(:|^)ヘタレ攻め(|| )(:|$)/g' : 'Lazy (Dominant) ',
        '/(:|^)強気受け(|| )(:|$)/g' : 'Tough Guy (Submissive) ',
        '/(:|^)誘い受け(|| )(:|$)/g' : 'Seduce (Submissive) ',
        '/(:|^)やんちゃ受け(|| )(:|$)/g' : 'Mischievous (Submissive) ',
        '/(:|^)オヤジ受け(|| )(:|$)/g' : 'Older Man (Submissive) ',
        '/(:|^)クール受け(|| )(:|$)/g' : 'Cool Man (Submissive) ',
        '/(:|^)健気受け(|| )(:|$)/g' : 'Diligent Man (Submissive) ',
        '/(:|^)乙女受け(|| )(:|$)/g' : 'Girl (Submissive) ',
//Outfits / Occupations
        '/(:|^)制服(|| )(:|$)/g' : 'Uniform ',
        '/(:|^)セーラー服(|| )(:|$)/g' : 'Sailor-style Uniform ',
        '/(:|^)体操着(|| )(:|$)/g' : 'Gym Clothes ',
        '/(:|^)道着(|| )(:|$)/g' : 'Judo Uniform ',
        '/(:|^)スポユニ(|| )(:|$)/g' : 'Sports Uniform ',
        '/(:|^)メイド(|| )(:|$)/g' : 'Maid ',
        '/(:|^)ナース(|| )(:|$)/g' : 'Nurse ',
        '/(:|^)巫女(|| )(:|$)/g' : 'Shrine Maiden ',
        '/(:|^)軍服(|| )(:|$)/g' : 'Army Uniform ',
        '/(:|^)下着(|| )(:|$)/g' : 'Underwear ',
        '/(:|^)パンツ(|| )(:|$)/g' : 'Panties ',
        '/(:|^)ふんどし(|| )(:|$)/g' : 'Loincloth ',
        '/(:|^)ゴスロリ(|| )(:|$)/g' : 'Gothic Lolita ',
        '/(:|^)ロリ(|| )(:|$)/g' : 'Loli ',
        '/(:|^)コスプレ(|| )(:|$)/g' : 'Cosplay ',
        '/(:|^)ボンデージ(|| )(:|$)/g' : 'Bondage ',
        '/(:|^)ブルマ(|| )(:|$)/g' : 'Gym Shorts ',
        '/(:|^)チャイナ(|| )(:|$)/g' : 'Chinese Dress ',
        '/(:|^)ミニスカ(|| )(:|$)/g' : 'Short Skirt ',
        '/(:|^)エプロン(|| )(:|$)/g' : 'Apron ',
        '/(:|^)ラバー(|| )(:|$)/g' : 'Rubber ',
        '/(:|^)レオタード(|| )(:|$)/g' : 'Leotard ',
        '/(:|^)白衣(|| )(:|$)/g' : 'White coat ',
        '/(:|^)シスター(|| )(:|$)/g' : 'Nun ',
        '/(:|^)ワイシャツ(|| )(:|$)/g' : 'Dress Shirt ',
        '/(:|^)ウェイトレス(|| )(:|$)/g' : 'Waitress ',
        '/(:|^)バニーガール(|| )(:|$)/g' : 'Bunny Girl ',
        '/(:|^)スパッツ(|| )(:|$)/g' : 'Leggings ',
        '/(:|^)ニーソックス(|| )(:|$)/g' : 'Knee Socks ',
        '/(:|^)ストッキング(|| )(:|$)/g' : 'Stockings ',
        '/(:|^)ローレグ(|| )(:|$)/g' : 'Low-cut Legs ',
        '/(:|^)スクール水着(|| )(:|$)/g' : 'School Swimsuit ',
        '/(:|^)水着(|| )(:|$)/g' : 'Swimsuit ',
        '/(:|^)スーツ(|| )(:|$)/g' : 'Suit ',
        '/(:|^)ガードル(|| )(:|$)/g' : 'Girdle ',
        '/(:|^)ガーター(|| )(:|$)/g' : 'Garter ',
        '/(:|^)半ズボン(|| )(:|$)/g' : 'Breeches ',
        '/(:|^)ブレザー(|| )(:|$)/g' : 'Blazer ',
        '/(:|^)男装(|| )(:|$)/g' : 'Cross-dressed Woman ',
        '/(:|^)女装(|| )(:|$)/g' : 'Crossdress ',
        '/(:|^)社長(|| )(:|$)/g' : 'President ',
        '/(:|^)医者(|| )(:|$)/g' : 'Doctor ',
        '/(:|^)アイドル(|| )(:|$)/g' : 'Idol ',
//Situations / Tastes
        '/(:|^)ラブコメ(|| )(:|$)/g' : 'Funny Love Story ',
        '/(:|^)耳かき(|| )(:|$)/g' : 'Ear Cleaning ',
        '/(:|^)屋外(|| )(:|$)/g' : 'Outdoor ',
        '/(:|^)ギャグ(|| )(:|$)/g' : 'Hilarious ',
        '/(:|^)憑依(|| )(:|$)/g' : 'Possession ',
        '/(:|^)石化(|| )(:|$)/g' : 'Petrifaction ',
        '/(:|^)家族(|| )(:|$)/g' : 'Family ',
        '/(:|^)コメディ(|| )(:|$)/g' : 'Comedy ',
        '/(:|^)時間停止(|| )(:|$)/g' : 'Time Stopping ',
        '/(:|^)ミリタリー(|| )(:|$)/g' : 'Military ',
        '/(:|^)SF(|| )(:|$)/g' : 'Sci Fi ',
        '/(:|^)スポーツ(|| )(:|$)/g' : 'Sports ',
        '/(:|^)格闘(|| )(:|$)/g' : 'Fight ',
        '/(:|^)ほのぼの(|| )(:|$)/g' : 'Heartwarming ',
        '/(:|^)同棲(|| )(:|$)/g' : 'Cohabitation ',
        '/(:|^)恋人同士(|| )(:|$)/g' : 'Lovers ',
        '/(:|^)遠距離恋愛(|| )(:|$)/g' : 'Long-distance Love ',
        '/(:|^)初体験(|| )(:|$)/g' : 'First Experience ',
        '/(:|^)出会い(|| )(:|$)/g' : 'Encounter ',
        '/(:|^)サークル(|| )(:|$)/g' : 'Circle ',
        '/(:|^)色仕掛け(|| )(:|$)/g' : 'Coquettish ',
        '/(:|^)女体化(|| )(:|$)/g' : 'Feminization ',
        '性転換(TS)' : 'Transsexual ',
        '/(:|^)浮気(|| )(:|$)/g' : 'Cheating ',
        '/(:|^)三角関係(|| )(:|$)/g' : 'Love Triangle ',
        '/(:|^)シリアス(|| )(:|$)/g' : 'Serious ',
        '/(:|^)ファンタジー(|| )(:|$)/g' : 'Fantasy ',
        '/(:|^)パラレル(|| )(:|$)/g' : 'Parallel ',
        '/(:|^)ホラー(|| )(:|$)/g' : 'Horror ',
        '/(:|^)キャットファイト(|| )(:|$)/g' : 'Cat Fight ',
        '/(:|^)スプラッター(|| )(:|$)/g' : 'Splatter ',
        '/(:|^)サスペンス(|| )(:|$)/g' : 'Suspense ',
        '/(:|^)ハードボイルド(|| )(:|$)/g' : 'Hard-boiled ',
        '/(:|^)バイオレンス(|| )(:|$)/g' : 'Violence ',
        '/(:|^)ギャンブル(|| )(:|$)/g' : 'Gambling ',
        '/(:|^)ヤキモチ(|| )(:|$)/g' : 'Jealousy ',
        '/(:|^)オカルト(|| )(:|$)/g' : 'Occult ',
        '/(:|^)歳の差(|| )(:|$)/g' : 'May and December ',
        '/(:|^)魔法(|| )(:|$)/g' : 'Magic ',
        '/(:|^)芸能(|| )(:|$)/g' : 'Entertainment ',
        '/(:|^)同居(|| )(:|$)/g' : 'Roommate ',
        '/(:|^)純愛(|| )(:|$)/g' : 'Pure Love ',
        '/(:|^)耽美(|| )(:|$)/g' : 'Shonen-ai ',
        '/(:|^)戦場(|| )(:|$)/g' : 'War ',
        '/(:|^)おもらし(|| )(:|$)/g' : 'Wetting ',
        '/(:|^)伝奇(|| )(:|$)/g' : 'Marvel Tales ',
        '/(:|^)ティーンズラブ(|| )(:|$)/g' : 'Teens Love ',
        '/(:|^)ボーイズラブ(|| )(:|$)/g' : 'Boys Love ',
        '/(:|^)年下攻(|| )(:|$)/g' : 'Younger Man (Dominant) ',
        '/(:|^)ハーレム(|| )(:|$)/g' : 'Harem ',
        '/(:|^)やおい(|| )(:|$)/g' : 'Yaoi ',
        '/(:|^)寝取られ(|| )(:|$)/g' : 'Netorare ',
        '/(:|^)百合(|| )(:|$)/g' : 'Yuri ',
        '/(:|^)ミステリー(|| )(:|$)/g' : 'Mystery ',
        '/(:|^)丸呑み(|| )(:|$)/g' : 'Vore ',
        '/(:|^)電車(|| )(:|$)/g' : 'Train ',
        '/(:|^)寝取り(|| )(:|$)/g' : 'Netori ',
        '/(:|^)歴史(|| )(:|$)/g' : 'History ',
//Actions / Sexual Pteferences
        '/(:|^)手コキ(|| )(:|$)/g' : 'Hand Job ',
        '/(:|^)足コキ(|| )(:|$)/g' : 'Foot Job ',
        '/(:|^)ぶっかけ(|| )(:|$)/g' : 'Bukkake ',
        '/(:|^)顔射(|| )(:|$)/g' : 'Facial ',
        '/(:|^)中出し(|| )(:|$)/g' : 'Internal Cumshot ',
        '/(:|^)パイズリ(|| )(:|$)/g' : 'Breast Sex ',
        '/(:|^)母乳(|| )(:|$)/g' : 'Breast Milk ',
        '/(:|^)搾乳(|| )(:|$)/g' : 'Milking ',
        '/(:|^)出産(|| )(:|$)/g' : 'Childbirth ',
        '/(:|^)産卵(|| )(:|$)/g' : 'Egg Production ',
        '/(:|^)陵辱(|| )(:|$)/g' : 'Violation ',
        '/(:|^)オナニー(|| )(:|$)/g' : 'Masturbation ',
        '/(:|^)緊縛(|| )(:|$)/g' : 'Tight Binding ',
        '/(:|^)フェラチオ(|| )(:|$)/g' : 'Blowjob ',
        '/(:|^)痴漢(|| )(:|$)/g' : 'Molestation ',
        '/(:|^)調教(|| )(:|$)/g' : 'Sexual Training ',
        '/(:|^)変態(|| )(:|$)/g' : 'Hentai ',
        '/(:|^)淫乱(|| )(:|$)/g' : 'Naughty ',
        '/(:|^)露出(|| )(:|$)/g' : 'Outdoor Exposure ',
        '/(:|^)言葉責め(|| )(:|$)/g' : 'Oral Assault ',
        '/(:|^)青姦(|| )(:|$)/g' : 'Outdoor Sex ',
        '/(:|^)拘束(|| )(:|$)/g' : 'Restraint ',
        '/(:|^)奴隷(|| )(:|$)/g' : 'Slave ',
        '/(:|^)浣腸(|| )(:|$)/g' : 'Enema ',
        '/(:|^)羞恥(|| )(:|$)/g' : 'Ashamed ',
        '/(:|^)恥辱(|| )(:|$)/g' : 'Humiliation ',
        '/(:|^)監禁(|| )(:|$)/g' : 'Captivity ',
        '/(:|^)焦らし(|| )(:|$)/g' : 'Tease ',
        '/(:|^)くすぐり(|| )(:|$)/g' : 'Tickling ',
        '/(:|^)鬼畜(|| )(:|$)/g' : 'Pervert ',
        '/(:|^)ノーマルプレイ(|| )(:|$)/g' : 'Vanilla Sex ',
        '/(:|^)放置プレイ(|| )(:|$)/g' : 'Neglect Play ',
        '/(:|^)無理矢理(|| )(:|$)/g' : 'Coercion ',
        '/(:|^)輪姦(|| )(:|$)/g' : 'Gangbang ',
        '/(:|^)和姦(|| )(:|$)/g' : 'Consensual Sex ',
        '/(:|^)近親相姦(|| )(:|$)/g' : 'Incest ',
        '/(:|^)逆レイプ(|| )(:|$)/g' : 'Woman Rapes Man ',
        '/(:|^)盗撮(|| )(:|$)/g' : 'Upskirt/Spy Photo ',
        '/(:|^)男性受け(|| )(:|$)/g' : 'Submissive Man ',
        '/(:|^)催眠(|| )(:|$)/g' : 'Hypnosis ',
        '/(:|^)アナル(|| )(:|$)/g' : 'Anal ',
        '/(:|^)スカトロ(|| )(:|$)/g' : 'Scatology ',
        '/(:|^)尿道(|| )(:|$)/g' : 'Urethra ',
        '/(:|^)触手(|| )(:|$)/g' : 'Tentacle ',
        '/(:|^)獣姦(|| )(:|$)/g' : 'Bestiality ',
        '/(:|^)機械姦(|| )(:|$)/g' : 'Robot Sex ',
        '/(:|^)拡張(|| )(:|$)/g' : 'Stretch/Expansion ',
        '/(:|^)下克上(|| )(:|$)/g' : 'Junior\'s Domination ',
        '/(:|^)ソフトエッチ(|| )(:|$)/g' : 'Soft Erotic ',
        '/(:|^)アヘ顔(|| )(:|$)/g' : 'Ahegao ',
        '/(:|^)モブ姦(|| )(:|$)/g' : 'Nameless Sex ',
        '/(:|^)異種姦(|| )(:|$)/g' : 'Interspecies Sex ',
        '/(:|^)悪堕ち(|| )(:|$)/g' : 'Corrupted Morals ',
        '/(:|^)洗脳(|| )(:|$)/g' : 'Brainwashing ',
        '/(:|^)口内射精(|| )(:|$)/g' : 'Oral Cumshot ',
        '/(:|^)イラマチオ(|| )(:|$)/g' : 'Forced Oral ',
        '/(:|^)スパンキング(|| )(:|$)/g' : 'Spanking ',
        '/(:|^)バイ(|| )(:|$)/g' : 'Bisexual ',
        '/(:|^)レイプ(|| )(:|$)/g' : 'Rape ',
//Appearance
        '/(:|^)ショートカット(|| )(:|$)/g' : 'Short hair ',
        '/(:|^)ロングヘア(|| )(:|$)/g' : 'Long Hair ',
        '/(:|^)おかっぱ(|| )(:|$)/g' : 'Bobbed Hair ',
        '/(:|^)茶髪(|| )(:|$)/g' : 'Brown Hair ',
        '/(:|^)金髪(|| )(:|$)/g' : 'Blonde Hair ',
        '/(:|^)黒髪(|| )(:|$)/g' : 'Brunet Hair ',
        '/(:|^)三つ編み(|| )(:|$)/g' : 'Braid ',
        '/(:|^)ポニーテール(|| )(:|$)/g' : 'Ponytail ',
        '/(:|^)ツインテール(|| )(:|$)/g' : 'Twin Tail ',
        '/(:|^)ネコミミ(|| )(:|$)/g' : 'Cat Ears ',
        '/(:|^)獣耳(|| )(:|$)/g' : 'Animal Ears ',
        '/(:|^)長身(|| )(:|$)/g' : 'Tall Woman ',
        '/(:|^)羽根(|| )(:|$)/g' : 'Wings ',
        '/(:|^)筋肉(|| )(:|$)/g' : 'Muscular ',
        '/(:|^)スレンダー(|| )(:|$)/g' : 'Slender ',
        '/(:|^)つるぺた(|| )(:|$)/g' : 'Childlike Build ',
        '/(:|^)パイパン(|| )(:|$)/g' : 'Hairless ',
        '/(:|^)ふたなり(|| )(:|$)/g' : 'Futanari ',
        '/(:|^)巨根(|| )(:|$)/g' : 'Large Cock ',
        '/(:|^)童貞(|| )(:|$)/g' : 'Virgin/Intact Male ',
        '/(:|^)処女(|| )(:|$)/g' : 'Virgin Female ',
        '/(:|^)巨大化(|| )(:|$)/g' : 'Supersize ',
        '/(:|^)しっぽ(|| )(:|$)/g' : 'Tail ',
        '/(:|^)関西弁(|| )(:|$)/g' : 'Kansai Dialect ',
        '/(:|^)ボクっ娘(|| )(:|$)/g' : 'Tomboy ',
        '/(:|^)無表情(|| )(:|$)/g' : 'Deadpan ',
        '/(:|^)包茎(|| )(:|$)/g' : 'Phimosis ',
        '/(:|^)むちむち(|| )(:|$)/g' : 'Chubby/Plump ',
        '/(:|^)太め(|| )(:|$)/g' : 'Chubby ',
        '/(:|^)デブ(|| )(:|$)/g' : 'Fat ',
        '/(:|^)爺(|| )(:|$)/g' : 'Old Man ',
//Violence / Guro
        '/(:|^)腹パン(|| )(:|$)/g' : 'Gut Punch ',
        '/(:|^)猟奇(|| )(:|$)/g' : 'Psychotic ',
        '/(:|^)人体改造(|| )(:|$)/g' : 'Body Modification ',
        '/(:|^)拷問(|| )(:|$)/g' : 'Torture ',
        '/(:|^)フィストファック(|| )(:|$)/g' : 'Fist Sex ',
        '/(:|^)ニプルファック(|| )(:|$)/g' : 'Nipple Sex ',
        '/(:|^)狂気(|| )(:|$)/g' : 'Madness ',
        '/(:|^)リョナ(|| )(:|$)/g' : 'Ryona/Brutal ',
        '/(:|^)蟲姦(|| )(:|$)/g' : 'Worm Sex ',
//Additional Options
        'グロテスクな表現を含む作品' : 'Contains grotesque imagery',
        'ホモセクシャルな表現を含む作品' : 'Contains homosexual imagery',
        'プロテクト作品を除外する' : 'Exclude copy-controlled works',
        '体験版あり' : 'Trial version',
        'レビューあり' : 'User reviews',
        '音声あり' : 'Voiced',
        '音楽あり' : 'With Music',
        '動画あり' : 'With Video',
        '3D作品' : '3D',
        'PDF同梱' : 'PDF File',
        'APK同梱' : 'APK File',
        'almight対応' : 'Almight engine',
        'ブラウザ試聴' : 'Browser streaming',
        '平均評価' : 'Average rating',
//Event
        'コミックマーケット' : 'Comic Market ',
//File Format
        'HTMLファイル' : 'HTML file',
        'HTML\(+画像\)' : 'HTML+Image',
        'HTML\(+動画\)' : 'HTML+Video',
        '画像ファイル' : 'Image file',
        '動画ファイル' : 'Video file',
        'ムービーファイル' : 'Video file',
        'オーディオファイル' : 'Image file',
        'Flashファイル' : 'FLASH file',
        'PDFファイル' : 'PDF file',
        'TEXTファイル' : 'TEXT file',
        'Androidアプリファイル' : 'App file for Android',
        'APKファイル' : 'APK file',
        '\)ファイル' : '\)',
        '画像\(' : 'Image \(',
        'オーディオ\(' : 'Audio \(',
        'ムービー\(' : 'Video \(',
//end of Advanced Search
//other
        'ランキング' : 'Ranking',
        'DLsite専売作品' : 'Exclusives',
        'おすすめ特集' : 'Recommend',
        '発売カレンダー' : 'Releases',
        '詳細検索' : 'Advanced Search',
        '/(:|^)料理(:|$)/g' : 'Cooking',
        '\[スマホ' : '\[Phone',
        'ブラウザ視聴' : 'Browser streaming',
        '同人ソフト' : 'Doujin soft',
        '作品番号' : 'Work Number',
        'ファイル名/ファイル容量' : 'File / Size',
        '以上推奨' : ' or greater recommend',
        '相当以上' : ' or greater',
        '/(:|^)メモリ(:|$)/g' : 'Memory',
        '/(:|^)空き容量/g' : 'Free spase ',
        '/B以上の空き容量(:|$)/g' : 'B or greater recommend',
        '/B以上の空き(:|$)/g' : 'B or greater required',
        '/B 利用可能(:|$)/g' : 'B required',
        '/B以上(:|$)/g' : 'B or greater',
        '/(:|^)解像度/g' : 'Resolution ',
        '/\\b以上(:|$)/g' : ' or greater',
        '/\\b以降(:|$)/g' : '+',
        '/(:|^)画面解像度/g' : 'Screen resolution ',
        '/フルカラー以上表示可能(:|$)/g' : ' which can display in full color',
        '注意事項' : 'Notice',
        '/(:|^)誤字脱字修正(:|$)/g' : 'Correction: typos',
        '/(:|^)不具合修正(:|$)/g' : 'Correction: bugs/defects',
        '/(:|^)内容追加(:|$)/g' : 'Added content',
        '/(:|^)以上(:|$)/g' : '+',
        '/\\b以上導入環境推奨(:|$)/g' : '+',
        '/\\b以上 \/ /g' : '+ \/ ',
        '/(:|^)フリガナ(:|$)/g' : 'Furigana',
        'サークル ID' : 'Circle ID',
        'DLsite blogへ' : 'DLsite blog',
        '/(:|^)メンバー(:|$)/g' : 'Members',
        'の同一シリーズ作品' : ' has other works in the same series',
        'シリーズ作品' : 'Works in series',
        '「クリックゲームシリーズ」シリーズ\（' : 'Click Game Series \(',
        '作品\）' : ' works\)',
        'サークル紹介' : 'Circle introduction',
        '/(:|^)イラスト(:|$)/g' : 'Illustration',
        'ゲーム・動画' : 'Game / Video',
        '音声・音楽' : 'Voice / Music',
        '/(:|^)新着作品(:|$)/g' : 'New Titles',
        '対象年齢' : 'Audience',
        '/(:|^)すべて(:|$)/g' : 'All',
        '/(:|^)もっと見る(:|$)/g' : 'More',
        '/\\b年 /g' : '/',
        '/\\b本）/g' : ' titles)',
        '全年齢作品へ' : 'Works for All ages',
        '女性向け作品へ' : 'Works for Girls',
        'ゲイ向け作品へ' : 'Works for Gays',
        '/\\b位/g' : 'th',
        'ピックアップ' : '',
        '/(:|^)女性向け(:|$)/g' : 'Females',
        '/(:|^)カテゴリ(:|$)/g' : 'Category',
        '/(:|^)作品内容(:|$)/g' : 'Content',
        '作品情報/動作環境' : 'Operational Requirements',
        'おさわりゲーム' : 'Touching Game',
        '/(:|^)全年齢(:|$)/g' : 'For all ages',
        '/(:|^)最新の(:|$)/g' : 'Latest',
        '特集をもっと見る' : 'See more…',
        '」シリーズ（' : '」series \(',
        'シリーズをもっと見る' : 'See more…',
        '/(:|^)シリーズ(:|$)/g' : 'Series',
        'サークル作品一覧' : 'Works by the Circle',
        '作品をもっと見る' : 'See more…',
        'RPGツクール' : 'RPG Tkool ',
        'RTPが必要' : 'RTP required',
        'に対応している必要あり' : ' or greater',
        'B程度の空き容量' : 'B of free space',
        '/(:|^)不具合修正/g' : 'Bug fixes',
        '/(:|^)追加更新/g' : 'Version updates',
        '/(:|^)更新/g' : 'Version updates',
        '/(:|^)アップデート/g' : 'Version updates',
        '/(:|^)バージョンアップ/g' : 'Version updates',
        '/(:|^)バグ修正等アップデート/g' : 'Bug fixes and version updates.',
        '/に関しましては予定事項となります。(:|$)/g' : ' are planned for this product.',
        'ディーエルサイトコムがこれを保証するものではありません。' : 'Please be aware that DLsite does not guarantee',
        '現段階の作品内容にご了承を頂いた上でご購入下さい。' : 'version updates or the contents thereof.',
        '/(:|^)◆更新履歴◆(:|$)/g' : 'Change Log',
        '/(:|^)閲覧可能な環境(:|$)/g' : 'Compatible Devices',
        '/(:|^)ダウンロードして閲覧(:|$)/g' : 'Download and view',
        '/(:|^)ブラウザで閲覧(:|$)/g' : 'Stream in browser',
        '/(:|^)ダウンロード(:|$)/g' : 'Download',
        '/(:|^)ブラウザ/g' : 'Stream',
        '/視聴(:|$)/g' : '',
        '/(:|^)の対応バージョン(:|$)/g' : ' compatible version(s)',
        '/(:|^)すべての対応OSを表示する(:|$)/g' : 'View All OS Platforms',
        '/(:|^)販売作品(:|$)/g' : 'Releases',
        'この作品を買った人はこんな作品も買っています' : 'People who bought this item also bought',
        'こちらの作品も見られています' : 'Viewers of this item also viewed',
        '/(:|^)レビュー(:|$)/g' : 'User Reviews',
        'レビュアーに多く選ばれたジャンル' : 'Tags the reviewers selected',
        'レビュアーが選んだジャンル' : 'Tags the reviewer selected',
        'レビュー数 \: ' : 'User reviews\:',
        '/(:|^)内容一部削除(:|$)/g' : 'Partial deletion of contents',
        '/(:|^)シリーズもの(|| )(:|$)/g' : 'Serial ',
        '/着せ替え(:|$)/g' : 'Clothes Change',
        '/(:|^)専用ビューア(:|$)/g' : 'Special Viewer',
        '/(:|^)すべての作品を見る/g' : 'See All Works',
        '/(:|^)この作品は/g' : 'This product contains content also found in the following:',
        '/と(||一部)内容の重複があります。/g' : '',
        '予告開始日' : 'Submited date',
        'お気に入り登録数' : 'Favorited',
        '発売予定時期' : 'Scheduled Release',
        '予定価格' : 'Scheduled Price',
        '/\\b月上旬/g' : ' Early',
        '/\\b月中旬/g' : ' Middle',
        '/\\b月下旬/g' : ' Late',
        '/(:|^)未定/g' : 'TBA',
        'バージョンアップ履歴をもっと見る' : 'See more...',
        '/(:|^)体験版ダウンロード(:|$)/g' : 'Try Free Demo',
        '\%還元' : '\% back',
        '/(:|^)ポイント(:|$)/g' : 'Points',
        '/(:|^)価格(:|$)/g' : 'Price',
        '/(:|^)あたらしい画像ビューワーはいかがですか？(:|$)/g' : 'How do you like the new sample viewer?',
        '/(:|^)評価する(:|$)/g' : 'Rate',
        '/(:|^)画像ビューワーの評価(:|$)/g' : 'Rate the sample viewer',
        '新しい画像ビューワーの使い心地はいかがですか？' : 'How would you rate the usability of the new sample viewer?',
        '今後の改修の参考のためにも、以下より5段階で評価していただけますと幸いです。' : 'Your feedback is highly appreciated. Please rate it on the 5-star scale.',
        '/(:|^)全/g' : '',
        '/枚(:|$)/g' : ' images',
        '/(:|^)お気に入りに入れる(:|$)/g' : 'Add to My Favorite',
        '/(:||\\n)総計/g' : 'Total size:',
        '/(:|^)DLsite専売(:|$)/g' : 'Exclusive',
        '/(:|^)体験版でご確認ください。(:|$)/g' : 'See demo/trial to confirm.',
//account
        '/(:|^)ユーザー登録（無料）(:|$)/g' : 'Create an Account',
        '/(:|^)ユーザー登録　ユーザー情報入力(:|$)/g' : 'Create an Account : Input',
        '/(:|^)ユーザー情報入力(:|$)/g' : 'Input',
        '/(:|^)確認メール受信(:|$)/g' : 'Confirmation email',
        '/(:|^)登録完了(:|$)/g' : 'Completion',
        '入力されたメールアドレス宛に「ユーザー登録のご確認」メールが送信され、' : '',
        'メールに記載されているURLをクリックすることで登録が完了致します。' : 'A membership confirmation email will be sent.',
        'dlsite.comからのメール受信を許可してください。' : ' Please make sure your mailbox allows emails from the dlsite.com domain.',
        '/(:|^)は必須項目です/g' : 'Required field',
        '/(:|^)メールアドレス(:|$)/g' : 'E-Mail Address',
        '（半角英数字）' : '',
        '携帯メールは使用できません。' : '',
        '/(:|^)ログインID(:|$)/g' : 'Login ID',
        '/半角アルファベットで始まる4～20文字の半角英数字/g' : '4 to 20 characters \/ alphabets and numerals only',
        '/(:|^)パスワード(:|$)/g' : 'Password',
        '/確認のため、再度ご入力ください。(:|$)/g' : 'Retype to confirm.',
        '/半角英数字で8～20文字/g' : '8 to 20 characters \/ alphabets and numerals only',
        '/(:|^)生年月日(:|$)/g' : 'Date of birth',
        '/(:|^)（半角数字）(:|$)/g' : 'This information will be requested',
        '/パスワード再発行で使用しますので、正確なご入力をお願いします。/g' : 'when you retrieve your ID and password.',
        '/(:|^)キャンペーンコード(:|$)/g' : 'Promotional code',
        '/(:|^)（半角英数字）(:|$)/g' : '',
        '/キャンペーンコードをお持ちの方はご入力ください。/g' : 'Please enter a promotional code if applicable.',
        '/(:|^)ディーエルサイトコムの/g' : 'Make sure to read through our',
        '/(:|^)ユーザー規約(:|$)/g' : 'User Agreement',
        '/(:|^)個人情報の取扱いについて(:|$)/g' : 'Privacy Policy',
        '/を必ずお読みください。(:|$)/g' : 'please.',
        '/(:|^)西暦(:|$)/g' : '',
        '/(:|^)年(:|$)/g' : 'Year',
        '/(:|^)月(:|$)/g' : 'Month',
        '/(:|^)日(:|$)/g' : 'Day',
        '/(:|^)ユーザー登録　入力情報の確認(:|$)/g' : 'Create an Account : Preview',
        '/(:|^)基本情報入力(:|$)/g' : 'Input',
        '/(:|^)確認メール送信(:|$)/g' : 'Confirmation email',
        //'ユーザー登録　確認メール受信' : '',
        //'確認メールの送信が完了しました。' : '',
        //'「ユーザー登録のご確認」のメールをお送りしました。' : '',
        //'メールに記載されているURLから登録を完了してください。' : '',
        //メールが届かない場合は、迷惑メールなどに割り振られていないかご確認ください。'' : '',
        //'ユーザー登録 最終確認ページ' : '',
        //'ご入力いただいたログインIDとパスワードでログインすることでユーザー登録が完了致します。' : '',
        //'ユーザー登録　登録完了' : '',
        //'ユーザー登録が完了しました。' : '',
        //'設定が完了しました。' : '',
        //'' : '',
        //'' : '',
        //'' : '',


      
    ///////////////////////////////////////////////////////
    '':''};











    //////////////////////////////////////////////////////////////////////////////
    // This is where the real code is
    // Don't edit below this
    //////////////////////////////////////////////////////////////////////////////

    var regexs = [], replacements = [],
        tagsWhitelist = ['INPUT', 'TEXTAREA'],
        rIsRegexp = /^\/(.+)\/([gim]+)?$/,
        word, text, texts, i, userRegexp;

    // prepareRegex by JoeSimmons
    // used to take a string and ready it for use in new RegExp()
    function prepareRegex(string) {
        return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
    }

    // function to decide whether a parent tag will have its text replaced or not
    function isTagOk(tag) {
        return tagsWhitelist.indexOf(tag) === -1;
    }

    delete words['']; // so the user can add each entry ending with a comma,
                      // I put an extra empty key/value pair in the object.
                      // so we need to remove it before continuing

    // convert the 'words' JSON object to an Array
    for (word in words) {
        if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
            userRegexp = word.match(rIsRegexp);

            // add the search/needle/query
            if (userRegexp) {
                regexs.push(
                    new RegExp(userRegexp[1], 'g')
                );
            } else {
                regexs.push(
                    new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
                        return fullMatch === '\\*' ? '*' : '[^ ]*';
                    }), 'g')
                );
            }

            // add the replacement
            replacements.push( words[word] );
        }
    }

    // do the replacement
    texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
    for (i = 0; text = texts.snapshotItem(i); i += 1) {
        if ( isTagOk(text.parentNode.tagName) ) {
            regexs.forEach(function (value, index) {
                text.data = text.data.replace( value, replacements[index] );
            });
        }
    }

}());
