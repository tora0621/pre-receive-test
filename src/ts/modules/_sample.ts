/**
 * サンプルモジュール
 *
 * 自作モジュールは/src/ts/modulesフォルダに格納して/src/ts/index.tsから読み込んでください。
 * ※ベースコーディング時にindex.tsからの読み込みと合わせて削除してください。
 */
export function sample() {
  sample1();
  sample2();
}

/**
 * ローカル関数1
 */
function sample1() {
  console.info('sample1');
}

/**
 * ローカル関数2
 */
function sample2() {
  console.info('sample2');
}
