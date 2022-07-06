<script context="module">
  import Head from '$lib/components/shared/head.svelte'
  import Container from '$lib/components/shared/container.svelte'
  import Navbar from '$components/shared/navbar.svelte'
  import Item from '$lib/components/watchlist/item.svelte'
  import { client } from '$lib/graphql-client'
  import { watchlistQuery } from '$lib/graphql-queries'
  import {
    fetchWatchlist,
  } from '$stores/site-data'

  export const load = async () => {
    await fetchWatchlist()
    const result = await client.request(watchlistQuery)
    // console.log(result.watchListItems)

    return {
      props: {
        items: result.watchListItems,
      },
    }
  }
</script>

<script>
  export let items = []
</script>

<Head
  title="Tech Watchlist"
  description="New technologies I think will prove transformational"
/>

<Navbar />
<Container>
  <h1 class="text-2xl text-sky-800 font-bold">👀 Tech Watchlist</h1>
  <p class="max-w-prose text-gray-700">
    {`Here are some technologies that I'm keeping a close eye on, 
    either because I might want to use them in the near future, 
    or because I think they'll be transformational to the web in general.`}
  </p>
  <div class="space-y-8 my-8 pb-20">
    {#each items as item}
      <Item {item} />
    {/each}
  </div>
</Container>