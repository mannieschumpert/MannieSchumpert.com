<script lang="ts">
  // import { marked } from 'marked';
  interface Item {
    title: string;
    link: string;
    content: {
      html: string;
    };
    dateAdded: string;
    twitter: string;
  }
  export let item: Item = {}
  // export let title: string
  // export let link: string
  // export let content: string
  // export let dateAdded: string
  const linkText = item.link.replace('https://', '')
</script>

<div class="sm:flex items-start sm:divide-x-2 sm:space-x-8 p-4 rounded bg-slate-50">
  <div class="text-xs text-gray-500 whitespace-nowrap mb-4">{item.dateAdded}</div>
  <article class="flex sm:pl-8 w-full">
    <div class="w-full">
      <h2 class="text-sky-800 font-semibold text-xl">{item.title}</h2>
      <div class="text-md flex items-center space-x-6 text-sky-600">
        <div class="flex items-center space-x-2">
          
          <div>
            <a href="{item.link}" target="_blank">{linkText}</a>
          </div>
        </div>
        {#if item.twitter}
          <div class="flex items-center space-x-2">
            <div class="text-gray-400">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </div>
            <div class="text-sm">
              <a href="https://twitter.com/{item.twitter}" target="_blank">@{item.twitter}</a>
            </div>
          </div>
        {/if}
      </div>
      <hr class="border border-gray-100 my-3" />
      <div class="prose prose-sm">
        {@html item.content.html}
      </div>
    </div>
  </article>
</div>