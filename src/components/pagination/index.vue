<template>
  <div>
    <Page v-if="total>0" :total="total" :page-size-opts="pageSizeOps" :page-size="pageSize" :current.sync="currentPage" show-total
      show-sizer size="small" @on-change="onChange" @on-page-size-change="onPageSizeChange" />
  </div>
</template>

<script>

  export default {
    name: 'Pagination',
    props: {
      total: {
        type: Number,
        deault: 1
      },
      limit: {
        type: Number,
        deault: 10
      },
      page: {
        type: Number,
        deault: 1
      }
    },
    computed: {
      currentPage: {
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: {
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    },
    data() {
      return {
        pageSizeOps: [10, 20, 30, 50, 100],
      }
    },
    methods: {
      //页面发生改变
      onChange(val) {
        this.$emit("pageChange", { page: val, limit: this.pageSize })
      },
      //显示条数发送变化
      onPageSizeChange(val) {
        this.pageSize = val
        if (this.page == 1)
          this.$emit("pageChange", { page: this.currPage, limit: val })
      }
    }
  }
</script>

<style scoped>

</style>