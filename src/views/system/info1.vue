<template>
  <div>
    系统日志信息
    <pagination :page.sync="pages.page" :limit.sync="pages.limit" :total="pages.total" @pageChange="getList" />
  </div>
</template>

<script>
  import Pagination from 'components/pagination'
  export default {
    name: '',
    components: {
      Pagination
    },
    computed: {},
    created() { },
    data() {
      return {
        pages: {
          total: 100,
          limit: 10,
          page: 1
        }
      }
    },
    methods: {
      getList() {
        console.log(this.pages.page, this.pages.limit)
      }
    },
  }
</script>

<style scoped>

</style>