<template>
	<div class="c-box">
		<div class="art-title">
			{{data.article_info.title}}
		</div>
    <div class="art-time">
      {{data.article_info.pubtime}}
    </div>
    <div class="cen">
      {{data.article_info.content}}
    </div>
    <div class="">
      <router-link :to="'/article' + '?id=' + data.next_article_artid" class="nextlink" @click.native="refresh">载入下一篇</router-link>
    </div>
    <div class="zwd"></div>
	</div>
</template>
<style lang="scss" scoped>
@import "/app-article.scss";
</style>
<script>
import api from './request'
import { debug } from 'util';
export default {
  data () {
    return {
      data: {
        artid: this.$route.query.id,
        title: '',
        pubtime: '',
        content: '',
        next_article_artid: ''
      }
    }
  },
  methods: {
    fetch () {
      let params = {}
      api.get('http://api.bogerizhi.com/ix/articleforh5' + '?artid=' + this.$route.query.id, params).then(resp => {
        this.data = resp
        console.log(resp.next_article_artid)
      })
    },
    refresh:function(){
      this.$router.go(0);  
    }
  },
  created () {
    this.fetch()
  }
}
</script>
