/* Ticker表示する文字の定義
 * =====================================*/
var string_c = [
    '_***__',
    '*___*_',
    '*_____',
    '*___*_',
    '_***__'
];

var string_o = [
    '_***__',
    '*___*_',
    '*___*_',
    '*___*_',
    '_***__'
];

var string_d = [
    '****__',
    '*___*_',
    '*___*_',
    '*___*_',
    '****__'
];

var string_e = [
    '*****_',
    '*_____',
    '*****_',
    '*_____',
    '*****_'
];

var string_j = [
    '____*_',
    '____*_',
    '*___*_',
    '*___*_',
    '_***__'
];

var string_p = [
    '****__',
    '*___*_',
    '****__',
    '*_____',
    '*_____'
];

var string_2 = [
    '*****_',
    '____*_',
    '*****_',
    '*_____',
    '*****_'
];

var string_0 = [
    '*****_',
    '*___*_',
    '*___*_',
    '*___*_',
    '*****_'
];

var string_1 = [
    '____*_',
    '____*_',
    '____*_',
    '____*_',
    '____*_'
];

var string_4 = [
    '*___*_',
    '*___*_',
    '*****_',
    '____*_',
    '____*_'
];

var string_pattern = [
    string_c,
    string_o,
    string_d,
    string_e,
    string_j,
    string_p,
    string_2,
    string_0,
    string_1,
    string_4,
];

/* global 変数
 * =====================================*/
var disp_string_length = 5;
var interval = 300;
var slide_pos = 0;

/* Tickerさせた文字を表示
 * =====================================*/
function show_tinker_string() {
    document.body.innerHTML = '';
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 6 * disp_string_length; j++) {
            var string_index = parseInt((slide_pos + j) / 6);
            while (string_index >= string_pattern.length) {
                string_index = string_index - string_pattern.length;
            }
            var string = string_pattern[string_index];

            var char_index = slide_pos + j;
            while (char_index >= string[i].length) {
                char_index = char_index - string[i].length;
            }
            document.body.innerHTML += string[i][char_index];
        }
        document.body.innerHTML += '<br />';
    }
}

/* 一定時間ごとに呼び出す
 * =====================================*/
var setTimer = function() {
   var repeat_function = function() {
       show_tinker_string()
       slide_pos++;

       if (slide_pos > 2 * 6 * disp_string_length - 1) {
           slide_pos = 0;
       }
       setTimeout(repeat_function, interval);
   }
   repeat_function();
}
setTimer();