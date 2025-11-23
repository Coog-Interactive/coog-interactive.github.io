<script lang="ts">
    import logo from '$lib/assets/logo.png';
    import mirrorsEdge1 from '$lib/assets/game-me.jpg';
    import garret from '$lib/assets/garret.jpg';

    import Officer from '$lib/Officer.svelte';

    const officers = [
        {
            img: logo,
            position: "President",
            name: "Ibrahim Faisal",
        },
        {
            img: logo,
            position: "Vice President",
            name: "Zachary Ellerbrock",
        },
        {
            img: logo,
            position: "Treasurer",
            name: "Kimberly Bellah",
        },
        {
            img: garret,
            position: "Studio Director",
            name: "Garrett Ward",
            desc: "Game designer and second-year graduate student specializing in Learning, Design, and Technology at the University of Houston. His professional interests include UI/UX design, gameplay design, systems design, and project management. He enjoys surfing, learning new things, playing games and music, and practicing permaculture design.",
        },
        {
            img: logo,
            position: "Workshops Director",
            name: "Ryan Stephens",
        },
        {
            img: logo,
            position: "Faculty Advisor",
            name: "Dr. Chang Yun",
        },
        {
            img: logo,
            position: "Executive Advisor",
            name: "Sammy Tawakkol",
        },
        {
            position: "Community Management",
        },
        {
            img: 'https://avatars.githubusercontent.com/u/68769498?v=4',
            position: "Marketing",
            name: "Luke Gobin",
            desc: "Hi everyone, I'm the club's marketing officer! I created and manage this website as well as our club's events and marketing! My favorite game engines are Godot and Unreal Engine Anglescript, and my favorite games are Grounded, Guilty Gear, Persona 5.",
        },
    ]
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