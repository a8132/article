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
import api from './request'
import { debug } from 'util';
export default {
  data () {
    return {
      data: {
        artid: this.$route.query.id,
        title: '',
        time: '',
        content: '',
        next_article_url: ''
      }
    }
  },
  methods: {
    fetch () {
      let params = {}
      api.get('http://api.bogerizhi.com/ix/articleforh5' + '?artid=' + this.$route.query.id, params).then(resp => {
        this.data = resp.article_info
        console.log(resp)
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>
