<template>
    <div class="membersChart-container">
        <span class="membersChart-container-title">注册会员</span>
        <line-chart :listData='listData' :height='"380px"' ></line-chart>
    </div>
</template>
<script>
    import LineChart from 'components/Charts/line';
    export default {
      name: 'membersChart',
      components: { LineChart },
      props: {
        listData: {
          type: Array,
          default: [],
          require: true
        }
      },
      data() {
        return {}
      }
    }
</script>
<style>
    .membersChart-container {
        width: 100%;
    }
    .membersChart-container-title {
        color: #7F8C8D;
        font-size: 16px;
        display: inline-block;
        margin-top: 10px;
    }
</style>
