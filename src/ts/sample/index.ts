/**
 * モジュールのテスト用
 * ※ベースコーディング時にindex.tsからの読み込みと合わせて削除してください。
 */

import { setSmoothScroll } from '../common/setSmoothScroll';
import { isSumaho } from '../common/isSumaho';
import { isTablet } from '../common/isTablet';
import { getRelPath } from '../common/getRelPath';
import { setResponsiveImg } from '../common/setResponsiveImg';
import { setSlider } from './setSlider';
import { reservation } from './reservation';
import { setResponsiveImgMaps } from '../common/setResponsiveImgMaps';
import { setMatchHeight } from '../common/setMatchHeight';
import { setGrid } from '../common/setGrid';
import { setPopup } from './setPopup';
import { Base64 } from 'js-base64';
import { setResizeAnimationStopper } from '../common/setResizeAnimationStopper';

export function test(): void {
  console.log('isSumaho実行結果:' + isSumaho());
  console.log('isTablet実行結果:' + isTablet());
  console.log('ルートからの相対パス:' + getRelPath());
  setResizeAnimationStopper();
  reservation();
  setGrid();
  setPopup();
  setResponsiveImg();
  setResponsiveImgMaps();
  setSlider();
  setMatchHeight();
  setSmoothScroll();
  base64_test();
}

/**
 * Base64のテスト
 */
function base64_test(): void {
  // エンコードボタン
  $('#encode').on('click', () => {
    let data: string = <string>$('#decode_result').val();
    $('#encode_result').val(Base64.encode(data));
  });
  // デコードボタン
  $('#decode').on('click', () => {
    let data: string = <string>$('#encode_result').val();
    $('#decode_result').val(Base64.decode(data));
  });
}
