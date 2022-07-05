class HandleCache {
  /**
   * 设置存储
   */
  setCache(key: string, value: any) {
    if (key) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  /**
   * 获取存储
   */
  getCache(key: string) {
    if (key) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      } else {
        return '该值为空!'
      }
    } else {
      return '请输入键名!'
    }
  }

  /**
   * 清空存储
   */
  clearCache() {
    window.localStorage.clear()
  }

  /**
   * 根据键名清除缓存
   */
  removeCacheByKeyName(key: string) {
    if (key) {
      window.localStorage.removeItem(key)
    }
  }
}

export default new HandleCache()
