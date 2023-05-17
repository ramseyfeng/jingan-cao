import { computed, reactive } from 'vue'
import type { IGift } from '@/model/gift.interface'
import { jpgImages } from '@/data/data'

export const useGifts = () => {
  const gifts = reactive<IGift[]>(jpgImages)

  const rawContent = computed<IGift[]>(() => {
    const results: IGift[] = []
    gifts.forEach((data) => {
      for (let i = 0; data.count && i < data.count; i++) {
        results.push(data)
      }
    })
    return results
  })

  return { gifts, rawContent }
}
