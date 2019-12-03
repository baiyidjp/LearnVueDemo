<template>
  <div id="goods-param">
    <div class="rule-container" v-if="isShowRule">
      <div class="rule-key">{{ paramInfo.rule.key }}</div>
      <div class="rule-disclaimer">{{ paramInfo.rule.disclaimer }}</div>
      <table class="rule-table" v-for="(table, tIndex) in paramInfo.rule.tables" :key="tIndex">
        <tr class="rule-tr" v-for="(tr, trIndex) in table" :key="trIndex">
          <td class="rule-td" v-for="(td, tdIndex) in tr" :key="tdIndex">{{ td }}</td>
        </tr>
      </table>
    </div>
    <div class="param-container" v-if="isShowInfo">
      <div class="param-key">{{ paramInfo.info.key }}</div>
      <table class="param-table">
        <tr class="param-tr" v-for="(item, trIndex) in paramInfo.info.set" :key="trIndex">
          <td class="param-td-key">{{ item.key }}</td>
          <td class="param-td-value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {

      isShowRule() {
        if (Object.keys(this.paramInfo).length === 0) {
          return false
        }
        return Object.keys(this.paramInfo.rule).length !== 0
      },
      isShowInfo() {
        if (Object.keys(this.paramInfo).length === 0) {
          return false
        }
        return Object.keys(this.paramInfo.info).length !== 0
      }
    }
  }
</script>

<style scoped lang="less">

  #goods-param {
    padding: 0 10px;
    border-bottom: 5px solid #fafafa;
  }

  .rule-key,.param-key {
    color: #4a4a4a;
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0 10px 0;
  }

  .rule-disclaimer {
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 0 10px 0;
    color: var(--color-tint);
  }

  .rule-table,.param-table {
    width: 100%;
    font-size: 14px;
    color: #9b9b9b;
    border-collapse: collapse;
  }

  .rule-tr,.param-tr {
    height: 44px;
    border-bottom: 1px solid #fafafa;
  }

  .param-td-key {
    width: 100px;
  }

  .param-td-value {
    color: var(--color-tint);
  }

</style>
