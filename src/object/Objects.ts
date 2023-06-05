// import { Jsons } from './Jsons';

import { Validation } from '@git8023/toolkit.validation';

export class Objects {

  /**
   * 比较两个对象是否相等
   * @param src 源对象
   * @param target 目标对象
   * @param [prop] 匹配特定值。如果没有指定则比较引用是否同一个
   */
  static equals<T = any>(
    src: T,
    target: T,
    prop?: keyof T
  ) {
    if (Validation.notNil(prop)) {
      // fixme
      // const srcVal = Jsons.get(src, `${String(prop)}`);
      // const tgtVal = Jsons.get(target, `${String(prop)}`);
      // return srcVal === tgtVal;
      return src[prop] === target[prop];
    }

    return src === target;
  }
}
