<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import logo from '$lib/assets/logo.png';
    import headerBackground from '$lib/assets/financial-frontier.png';
    
	import '$lib/assets/style.css'

    import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<Header background={headerBackground}/>

<nav>
    <a class="mobile-only" id="menu-button" onmousedown={ toggleNavbar }>≡ Menu</a> <!-- FIXME -->
    <a class="expand">Home</a> <!-- TODO -->
    <a class="expand">Club</a> <!-- TODO -->
    <a class="expand">Games</a> <!-- TODO -->
    <a class="expand">Studio</a> <!-- TODO -->
    <a class="expand">Join</a> <!-- TODO -->
</nav>

<main>
	{@render children()}
</main>

<footer>
    <img class="desktop-only" src={ logo }/>
    <section class="desktop-only" id="navigate">
        <h3>NAVIGATE</h3>
        <a>Home</a> <!-- TODO -->
        <a>About</a> <!-- TODO -->
        <a>Games</a> <!-- TODO; These pages don't exist yet -->
        <a>Studio</a> <!-- TODO -->
        <a>Join</a> <!-- TODO -->
    </section>
    <section id="connect">
        <h3>CONNECT</h3>
        <a href="https://discord.gg/ZBwh4YgxRA">Discord</a>
        <a>Youtube</a> <!-- TODO -->
        <a target="_blank" href="https://www.instagram.com/cooginteractive/">Instagram</a>
        <a target="_blank" href="https://www.linkedin.com/company/coog-interactive">LinkedIn</a>
        <a href="mailto:presidentcooginteractive@gmail.com">E-Mail</a>
    </section>
    <section id="misc">
        <h3>MISC</h3> <!-- TODO -->
        <a target="_blank" href="https://getinvolved.uh.edu/organization/cooginteractive/documents/view/2505522">Constitution</a>
    </section>
    <p class="desktop-only" id="credit">Made with ❤️ by Luke Gobin</p>
</footer>