const Api: Record<keyof APIModule, string> = {
  getUserInfo: "GET:user/info",
  updateUserInfo: "POST:user/update",
  getDetail: "GET: user/detail"
}

export { Api }
