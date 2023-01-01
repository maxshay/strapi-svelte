<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Posts</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#each data.posts.data as post}
    <p id={post.id}>{post.attributes.title}</p>
  {/each}
  
</section>

<section class="mt-4">
  <pre class="p-1 rounded border text-xxs whitespace-pre-wrap">
    <code>
      {JSON.stringify(data, null, 2)}
    </code>
  </pre>
</section>