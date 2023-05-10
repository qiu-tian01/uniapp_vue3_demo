import { Api } from "@/api/index"
import { BASE_URL } from "@/config/index"
function useApi<T extends keyof APIModule>(api: T) {
  const [method, ...url] = Api[api].split(":")
  const _method = method as "GET" | "POST"
  const runAsync = (
    params: APIModule[T]["params"],
    header: object | null
  ): Promise<APIModule[T]["response"]> => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: BASE_URL + url,
        method: _method,
        data: params,
        header: Object.assign({}, header),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        success(res: APIModule[T]["response"]) {
          if (res && res.code === 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }

  return {
    runAsync
  }
}

export { useApi }
