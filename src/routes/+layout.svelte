<script lang="ts">
    import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
    import Footer from './Footer.svelte';
    
    import headerBackground from '$lib/assets/financial-frontier.png';
	import '$lib/style.css'

	let { children } = $props();
</script>

<Header background={headerBackground}/>
<Navbar />

<main>
    {@render children()}
</main>

<Footer />

<style>
    
</style>