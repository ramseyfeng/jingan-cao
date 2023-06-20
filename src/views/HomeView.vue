<template>
  <var-uploader v-model="files" @after-read="handleAfterRead" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import jsZip from 'jszip'
// import JSZip from 'jszip'
// import { xml2js } from 'xml-js'

const files = ref([])
async function handleAfterRead(file: any) {
  // const zip: JSZip = await jsZip.loadAsync(file.file)
  // const sheetXML = await zip.files['xl/worksheets/sheet1.xml'].async('string')
  // const result = xml2js(sheetXML, { compact: false })
  console.log(file)
}
</script>
