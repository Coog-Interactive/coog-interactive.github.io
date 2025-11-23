<script lang="ts">
    import logo from '$lib/assets/logo.png';
</script>

<footer>
    <img class="desktop-only" src={ logo } alt="Coog Interactive Logo"/>
    <section class="desktop-only" id="navigate">
        <h3>NAVIGATE</h3>
        <a href="/">Home</a>
        <a href="/club">Club</a>
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

<style>
    footer {
        background-color: var(--cougar-red);
        color: white;
        display: flex;
        padding: 30px;
        margin-top: 50px; /* Give it some spacing from the main content */
    }
    footer section a {
        color: white;
        margin-top: 15px;
    }

    /* Mobile Layout */
    @media (width <= 800px) {
        footer {
            display: flex;
            flex-flow: row;
            justify-content: space-evenly;
        }
        footer section {
            display: flex;
            flex-flow: column;
            text-align: center;
        }
        footer .desktop-only {
            display: none;
        }
    }

    /* Desktop Layout */
    @media (width >= 800px) {
        footer {
            flex-flow: row;
            justify-content: center;

            height: 300px;
        }
        footer section {
            display: flex;
            justify-content: start;

            width: 100px;
        }
    }

    section {
        display: flex;
        flex-flow: column;
        justify-content: center;

        height: 100%;
        width: 45vw;
        padding-left: 5vw;
        padding-right: 5vw;
    }
</style>