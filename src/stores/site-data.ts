import { client } from '$lib/graphql-client'
import {
  watchlistQuery,
  latestWatchListItemQuery,
} from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const watchlistStore = writable([])
export const latestWatchlistItemStore = writable({})

export const fetchWatchlist = async () => {
  const { watchListItems } = await client.request(watchlistQuery)

  return watchlistStore.set(watchListItems)
}

export const fetchLatestWatchlistItem = async () => {
  const { watchListItems } = await client.request(latestWatchListItemQuery)

  return latestWatchlistItemStore.set(watchListItems[0])
}
