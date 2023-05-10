declare type APIModule = {
  getUserInfo: {
    url: string
    params: {
      test: string
    }
    response: {
      code: number
      data: {
        id: string
        name: string
        age: number
      } | null
      msg: string | null
    }
  }
  updateUserInfo: {
    url: string
    params: {
      name?: string
      age?: number
    }
    response: {
      code: number
      data: string | null
      msg: string | null
    }
  }
  getDetail: {
    url: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    params: {}
    response: {
      code: number
      data: string | null
      msg: string | null
    }
  }
}
