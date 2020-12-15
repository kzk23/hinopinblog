<template>
  <div class="m-8">
    <div class="content has-text-centered">
      <h1>
        <strong>&nbsp;&nbsp;#hinopin blog</strong>
      </h1>
      <p>
        <strong>&nbsp;&nbsp;&nbsp;print("hello, my world")</strong>
      </p>
      <br />
      <br />
      <p>&nbsp;&nbsp;about me</p>
      <p>&nbsp;&nbsp;↓</p>
      <a
        class="icon"
        href="https://www.twitter.com/KzkTweet"
        style="margin-right: 10px; margin-left: 20px"
      >
        <i class="fab fa-twitter fa-2x faa-vertical animated"></i>
      </a>
      <a
        class="icon"
        href="https://www.instagram.com/hinopin.0203"
        style="margin-right: 10px; margin-left: 20px"
      >
        <i class="fab fa-instagram fa-2x faa-wrench animated"></i>
      </a>
      <a
        class="icon"
        href="https://www.youtube.com/channel/UCvpJwJPTWm4CjZAohluNOhw"
        style="margin-right: 10px; margin-left: 20px"
      >
        <i class="fab fa-youtube fa-2x faa-horizontal animated"></i>
      </a>
      <a
        class="icon"
        href="https://www.tiktok.com/@hinopin"
        style="margin-right: 10px; margin-left: 20px"
      >
        <i class="fab fa-tiktok fa-2x faa-spin animated"></i>
      </a>
      <br />
      <br />
      <br />
    </div>
    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            style="border-top-left-radius: 10px; border-top-right-radius: 10px"
            :src="article.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h1 class="font-bold">{{ article.title }}</h1>
            <p>by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Categories</h3>
    <ul class="flex flex-wrap mb-4 text-center">
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
      >
        <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
          <p
            class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
          >
            {{ tag.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <footer class="flex justify-center border-gray-500 border-t-2">
      <p class="mt-4">
        Created by
        <a
          href="https://www.instagram.com/hinopin.0203"
          class="font-bold hover:underline"
          >hinopin</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  }
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
