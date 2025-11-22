<script lang="ts">
    import logo from '$lib/assets/logo.png';
	import discord from '$lib/assets/discord.png';
	import instagram from '$lib/assets/instagram.png';
	import linkedin from '$lib/assets/linkedin.png';
	import uh from '$lib/assets/uh.png';

    let { background = logo } = $props();
</script>

<header style="--banner-bg: url('{ background }')">
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

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;

        min-height: 30vh;

        background-image: linear-gradient(to bottom, light-dark(rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.75)), light-dark(rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.75))), var(--banner-bg);
        background-size: cover;
        background-position: center;
    }
    header img {
        height: 150px;
    }

    .social-media-banner {
        display: flex;
        flex-flow: column;
        margin: 10px;
    }
    .social-media-banner h2 {
        color: var(--cougar-red);
        font-size: 4vh;
        margin-top: 8px;
        margin-bottom: 5px;
    }

    .logos {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    .logos a {
        margin-right: 15px;
    }
    .logos a img {
        height: 5vh;
    }
</style>