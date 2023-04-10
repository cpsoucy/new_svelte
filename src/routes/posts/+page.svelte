<script>
    export let data;
  </script>

  <aside>
    <nav class="sidebar">
        {#each data.summaries as {slug, title}}
          <a href="/posts/{slug}">{title}</a>
        {/each}
      </nav>
  </aside>