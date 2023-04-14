<script>
    export let data;
  </script>

  <p>this is posts</p>

  <article>
    <!-- {#each duck as {}}} -->
    <figure>
      <img src="https://random-d.uk/api/v2" alt="">
      <!-- {"url": "https://random-d.uk/api/images/51.jpg", "message": "Powered by random-d.uk"} -->
    </figure>
  </article>

  <aside>
    <nav class="sidebar">
        {#each data.summaries as {slug, title}}
          <a href="/posts/{slug}">{title}</a>
        {/each}
      </nav>
  </aside>