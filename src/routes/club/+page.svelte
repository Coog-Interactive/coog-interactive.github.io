<script lang="ts">
    import Officer from './Officer.svelte';
    import { officers } from './data.js'
</script>

<h1>CLUB MEMBERSHIPS</h1>

<div id="memberships">
    <section>
        <h1>GENERAL</h1>
        <p>Joining our club and participating is completely free!</p>
        <ul>
            <li>Access to Discord</li>
            <li>Learn how to GameDev</li>
            <li>Further hone your skills.</li>
            <li>GameDev Workshops</li>
            <li>Game Jams!!!</li>
        </ul>
        <a href="https://discord.gg/ZBwh4YgxRA" target="_blank">
            <button>JOIN THE DISCORD</button>
        </a>
    </section>
    <section>
        <h1>STUDIO</h1>
        <p>Support us and gain some extra perks!</p>
        <ul>
            <li>Participate in official, studio projects</li>
            <li>Propose game ideas and lead teams.</li>
            <li>Work in teams of 8-10 people.</li>
            <li>Publish games to Steam and Mobile Appstores.</li>
            <li>Learn how to utilize industry tools.</li>
        </ul>
        <button>PURCHASE</button>
    </section>
</div>

<h1>CLUB OFFICERS</h1>

<div id="officers">
{#each officers as officer}
    <Officer {...officer} />
{/each}
</div>

<style>
    h1 {
        text-align: center;
    }
    #memberships {
        display: flex;
        flex-flow: row;
        text-align: center;
        background-position: center;
        background-size: cover;
    }
    section {
        margin: 30px;
        padding: 0 50px;
        border: 5px solid var(--cougar-red);
        border-radius: 50px;

        height: 500px;
        width: 50vw;
    }
    ul {
        list-style-position: inside; /* keeping the dots right next to the text looks nice */
        padding-left: 0px; /* removes padding the dots brings */
    }
    ul li {
        margin-bottom: 6px;
    }

    #officers {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
        row-gap: 50px; 
    }

    /* Mobile Layout */
    @media (width <= 800px) {
        #memberships {
            flex-flow: column;
        }
        section {
            width: auto;
        }
    }
</style>