<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    let navbarExpanded = false;

    function toggleNavbar() {
        if (!navbarExpanded) {
            navbarExpanded = true;
        }
        else {
            navbarExpanded = false;
        }
    }

    // Fixes Bug where navbar is still hidden when returning to Desktop mode
    // after collapsing it in mobile mode.
    function fixNavbar() {
        if (window.innerWidth > 800) {
            navbarExpanded = true;
        }
        else {
            navbarExpanded = false;
        }
    }

    // When resized, check if we need to fix the navbar.
    // Sometimes I hate sveltekit man... Makes things harder than it should be sometimes.
    onMount(() => {
        window.addEventListener('resize', fixNavbar)
    })
</script>

<nav>
    <a class="mobile-only" id="menu-button" onclick={ toggleNavbar }>≡ Menu</a> <!-- FIXME -->
    {#if navbarExpanded || (browser && window.innerWidth > 800)}
        <a class="expand" href="/">Home</a> <!-- TODO -->
        <a class="expand" href="/club">Club</a> <!-- TODO -->
        <a class="expand" href="/games">Games</a> <!-- TODO -->
        <a class="expand">Studio</a> <!-- TODO -->
        <a class="expand">Join</a> <!-- TODO -->
    {/if}
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        background-color: #C8102E;
        color: white;
    }
    nav a {
        color: white;
        text-decoration: none; /* Removes underline under element. */
        font-size: larger;
        font-weight: bold;
        padding: 20px 20px;
        cursor: pointer;
    }
    nav a:hover {
        background-color: white;
        color: var(--cougar-red)
    }

    /* Mobile Layout */
    @media (width <= 800px) {
        nav {
            flex-flow: column;
            align-items: stretch;
            height: auto;
            margin-bottom: 30px;
        }
        nav a {
            text-align: center;
            font-size: x-large;
        }
    }

    /* Desktop Layout */
    @media (width > 800px) {
        .mobile-only {
            display: none;
        }
    }
</style>