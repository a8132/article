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
		<div class="">
      <router-link :to="data.next_article_url" class="nextlink">载入下一篇</router-link>
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
          artid : '',
					title : '',
          time : '',
          content : '',
          next_article_url : '',
				}
      }
    },
    methods: {
      fetch() {
        params : {
					this.$routes.query.id 
				}
        api.post('http://api.bogerizhi.com/ix/index?op=getArticleInfo', {
          title : this.title,
          time : this.pubtime,
          content : this.content,
          article : this.next_article_url,
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