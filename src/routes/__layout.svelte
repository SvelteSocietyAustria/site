<script lang="ts">
import Footer from "$lib/components/Footer.svelte";

import Header from "$lib/components/Header.svelte";
</script>
<Header></Header>
<main><slot/></main>
<Footer></Footer>
<style>
    main {
        padding: 1rem;
        margin-bottom: 3.5rem;
    }
</style>