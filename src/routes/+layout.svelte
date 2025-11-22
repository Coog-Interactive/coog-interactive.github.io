<script lang="ts">
    import Header from '$lib/Header.svelte';
    import Navbar from '$lib/Navbar.svelte';
    import Footer from '$lib/Footer.svelte';
    
    import headerBackground from '$lib/assets/financial-frontier.png';
	import '$lib/assets/style.css'

	let { children } = $props();
</script>

<Header background={headerBackground}/>
<Navbar />

<main>
	{@render children()}
</main>

<Footer />