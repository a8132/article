<template>
	<div class="c-box">
		<div class="art-title">
			{{data.title}}
		</div>
		<div class="art-time">
			{{data.time}}
		</div>
		<div class="cen">
			{{data.content}}
		</div>
		<div class="zwd"></div>
	</div>
</template>
<style lang="scss" scoped>
	@import "/app-article.scss";
</style>
<script>
  import utils from './app-article'
  import api from './request'
  export default {
    data() {
      return {
        data: {
					title : '',
          time : '',
          content : '',
				}
      }
    },
    methods: {
      fetch() {
        let params = {
					
				}
        api.get('http://api.bogerizhi.com/ix/index?op=getArticleInfo', {
					title : data.title,
          time : data.pubtime,
          content : data.content,
        }).then(resp => {
          this.data = resp.data
        })
      }
    },
    created() {
      this.fetch()
    },
  }
</script>