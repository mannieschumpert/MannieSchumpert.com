<script>
  import Social from '$components/home/social.svelte';
  import LatestItem from '$components/watchlist/latest.svelte';
</script>

<div
  class="overflow-hidden relative bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]"
>
  <div>
    <img
      src="https://res.cloudinary.com/dbahcfw5c/image/upload/v1656886934/website/beach-blue.jpg"
      alt="beach background"
      class="absolute w-full inset-0"
    />
    <div class="absolute inset-0 backdrop-blur-sm bg-gray-800/70" />
    <div class="py-8 sm:py-12 relative sm:px-2 lg:relative lg:py-16 lg:px-0">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-6xl lg:px-8 xl:px-12 lg:flex space-y-4 lg:space-y-0 lg:space-x-2 items-start justify-between">
        <!-- INTRO -->
        <div class="relative z-10 lg:text-left">
          <div class="sm:flex sm:space-x-4 items-center">
            <img 
              src="https://res.cloudinary.com/dbahcfw5c/image/upload/v1656886916/website/mannie-schumpert-headshot.jpg" 
              alt="Mannie Schumpert headshot"
              class="h-24 w-24 rounded-full ring-gray-900 ring-opacity-30 ring-4"
            />
            <div>
              <h1 class="leading-10 sm:whitespace-nowrap inline font-bold bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 bg-clip-text font-display text-4xl sm:text-5xl text-transparent">
                Mannie Schumpert
              </h1>
              <h2 class="text-white text-opacity-75 font-semibold text-2xl leading-8 py-1">Full-Stack JavaScript Engineer</h2>
            </div>
          </div>
          <div>
            <p class="mt-4 tracking-tight text-slate-300 text-md max-w-prose">
              I started dabbling on the web way back in 2000 😱, then took the leap into full-time web development in 2012. Since 2016 I've been focused on building web applications with JavaScript. 
              I love bringing technical order and approachable UX to complex architectural problems using Lean methodologies.
            </p>
          </div>
        </div>
        <Social />
      </div>
    </div>
  </div>
</div>

<div class="mx-auto max-w-2xl lg:max-w-6xl lg:px-8 xl:px-12">
  <div class="text-md text-gray-500 my-20">⏳ <span class="italic">Currently building a new site as of July 3rd, 2022...</span></div>
  <LatestItem />
</div>