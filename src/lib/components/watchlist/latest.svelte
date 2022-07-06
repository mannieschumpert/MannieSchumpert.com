<script lang="ts">
  import Item from './item.svelte'
  export let item: Item
</script>

<div>
  <h1 class="mb-4">👀 The latest item on my <a href="/watchlist" class="font-bold text-sky-600">Tech Watchlist</a>:</h1>
  <Item {item} />
</div>