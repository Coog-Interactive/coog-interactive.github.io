<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/style.css'

	import logo from '$lib/assets/logo.png';
	import discord from "$lib/assets/discord.png";
	import instagram from "$lib/assets/instagram.png";
	import linkedin from "$lib/assets/linkedin.png";
	import uh from "$lib/assets/uh.png";

	let { children } = $props();
</script>

<header>
    <!-- Make a "Skip to Main Content" button for accessibility/People who tab-->
    <img src={ logo } alt="Logo"/>

    <div class="desktop-only social-media-banner">
        <h2>Connect With Us:</h2>
        <div class="logos">
            <a href="https://discord.gg/ZBwh4YgxRA" target="_blank"><img src={ discord } alt="Discord" /></a>
            <a href="https://www.instagram.com/cooginteractive/" target="_blank"><img src={ instagram } alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/coog-interactive" target="_blank"><img src={ linkedin } alt="Linkedin" /></a>
            <a href="https://uh.campuslabs.com/engage/organization/cooginteractive" target="_blank"><img src={ uh } alt="UH Get Involved" /></a> <!-- Placeholder -->
        </div>
    </div>
</header>

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