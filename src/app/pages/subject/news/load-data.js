import { vodNews } from '@/store/actions/detail'
import cache from '@/utils/cache'
const { getCache, addCache } = cache

export default ({ store, match }) => {
  return new Promise(async function(resolve, reject) {
    const { id } = match.params
    const data = getCache(`vod_news_${id}`)
    if (data) {
      store.dispatch({ type: 'GET_VOD_NEWS', name: `vod_news_${id}`, data: data })
      resolve({ code: 200 })
      return
    }
    let [, res] = await vodNews({ id })(store.dispatch, store.getState)
    addCache(`vod_news_${id}`, res)
    resolve({ code: 200 })
  })
}
