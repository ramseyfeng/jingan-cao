<template>
  <div class="d-flex var--absolute actions-bar">
    <var-button type="primary" @click="showConfig = true">配置</var-button>
    <var-button type="success" @click="start" v-show="!isRunning">开始</var-button>
    <var-button type="danger" @click="stop" v-show="isRunning">停止</var-button>
  </div>
  <var-dialog
    v-model:show="showConfig"
    close-on-click-overlay
    :cancel-button="false"
    title="奖品数量配置"
    @confirm="refresh"
  >
    <var-form ref="form" class="gifts-form-config">
      <div v-for="field in formData" :key="field.idx" class="config-row">
        <label>{{ field.name }}</label>
        <var-counter v-model="field.count" />
      </div>
    </var-form>
  </var-dialog>
  <var-dialog
    v-model:show="selected"
    :cancel-button="false"
    :confirm-button="false"
    :title="lotteryData.selectedGift?.name"
  >
    <var-image :src="lotteryData.selectedGift?.img"></var-image>
  </var-dialog>
  <canvas id="myCanvas" :width="containerWidth" :height="containerHeight">
    <ul>
      <li v-for="(item, index) in rawContent" :key="index">
        <a href="#">
          <img :src="item.img" width="100" height="100" :alt="item.name" />
        </a>
      </li>
    </ul>
  </canvas>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindow } from '@/hooks/window'
import { useGifts } from '@/hooks/gifts'
import { useLottery } from '@/hooks/lottery'

const showConfig = ref(false)

const { gifts: formData, rawContent } = useGifts()

const { selected, isRunning, start, stop, refresh, lotteryData } = useLottery()

const { containerWidth, containerHeight } = useWindow()
</script>

<style lang="scss">
.actions-bar {
  z-index: 1;
  right: 0;
  padding: 0.5rem 1rem;
  button {
    margin-right: 0.5rem;
  }
}

.d-flex {
  display: flex;
}

.gifts-form-config {
  label {
    margin-right: 1rem;
  }

  .config-row {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

canvas {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
