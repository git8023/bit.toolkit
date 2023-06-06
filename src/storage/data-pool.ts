import { fns } from '@git8023/toolkit.type-define';

export interface AxiosResponse<T = any> {
  data?: {
    data?: T;
    [s: string | number]: any;
  };

  [s: string | number]: any;
}

/**
 * 可配置key
 */
export enum DataPoolKey {
  /**Axios服务*/
  AXIOS_SERVICE,

  /**
   * Axios响应提取
   */
  AXIOS_EXTRACT_RESPONSE,
}

/** 公共数据池 */
export class DataPool {

  private static readonly POOL = new Map<DataPoolKey, any>();

  /**
   * 获取配置
   * @param key 配置项
   */
  static get(key: DataPoolKey) {
    return this.POOL.get(key);
  }

  /**
   * 设置Axios实例
   * @param key AXIOS_SERVICE
   * @param axiosInstance 实例对象
   */
  static set<AxiosInstance = any>(
    key: DataPoolKey.AXIOS_SERVICE,
    axiosInstance: AxiosInstance
  ): typeof DataPool;

  /**
   * 设置AxiosResponse数据前置处理
   * @param key AXIOS_EXTRACT_RESPONSE
   * @param handle 处理逻辑
   */
  static set<T>(
    key: DataPoolKey.AXIOS_EXTRACT_RESPONSE,
    handle: fns.Handler<AxiosResponse, T>
  ): typeof DataPool;

  /**
   * 设置配置
   * @param key 配置项
   * @param o 配置值
   */
  static set(
    key: DataPoolKey,
    o: any
  ): typeof DataPool {
    this.POOL.set(key, o);
    return this;
  }
}
