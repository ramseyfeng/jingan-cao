import { onMounted, reactive, ref } from 'vue'
import { getRandomNumber } from "@/utils/math";
import { useGifts } from "@/hooks/gifts";

const speed = function () {
  return [0.1, -0.1]
}

export const useLottery = () => {
  const lotteryData = reactive<any>({});
  onMounted(() => {
    window.TagCanvas.Start('myCanvas', '', {
      noTagsMessage: '请先配置奖品',
      textColour: null,
      initial: speed(),
      dragControl: 1,
      textHeight: 20
    })
  })
  const selected = ref(false)
  const isRunning = ref<boolean>(false)

  const start = () => {
    selected.value = false
    isRunning.value = true
    window.TagCanvas.SetSpeed('myCanvas', [5, 1])
  }

  const stop = () => {
    window.TagCanvas.SetSpeed('myCanvas', speed())
    const {gifts: formData, rawContent} = useGifts();
            const selectedIdx = getRandomNumber(rawContent.value.length)
    lotteryData.selectedGift= rawContent.value.splice(selectedIdx, 1)[0]

        for (let j = formData.length - 1; j >= 0; j--) {
            if (formData[j].idx === lotteryData.selectedGift.idx) {
                const found = formData[j]
                found.count && found.count--
            }
        }
    isRunning.value = false
    selected.value = true
    refresh()
  }
  const refresh = () => {
    setTimeout(() => window.TagCanvas.Reload('myCanvas'))
  }
  return {
    lotteryData,
    selected,
    isRunning,
    start,
    stop,
    refresh
  }
}
