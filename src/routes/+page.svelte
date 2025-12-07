<script lang="ts">
    import mirrorsEdge1 from '$lib/assets/game-me.jpg';
    import mirrorsEdge2 from '$lib/assets/game-me2.jpg';
    import guiltyGear from '$lib/assets/header-bg.jpg';
    import profitPlayground from '$lib/assets/profit-playground.png'

    function mail() {
        window.location.href = 'mailto:presidentcooginteractive@gmail.com';
    }
</script>

<div class="row">
    <div class="picture-collumn">
        <img src={ mirrorsEdge1 } alt="Mirror's Edge by EA DICE" class="left-image"/>
    </div>
    <section class="info-section">
        <h1>GAMES GAMES GAMES.</h1>
        <p>
            Coog Interactive provides a space for students who want to join the game development community where they can learn about the field through workshops, events and collaborating with peers. All fields of game development are welcome; regardless of skill level!
        </p>
        <ul>
            <li>2D & 3D Artists</li>
            <li>Audio Engineers</li>
            <li>Designers</li>
            <li>Multimedia Specialists</li>
            <li>Producers</li>
            <li>Programmers</li>
            <li>Writers</li>
            <li><strong>YOU!</strong></li>
        </ul>
        <a href="https://discord.gg/ZBwh4YgxRA" target="_blank">
            <button>JOIN THE DISCORD</button>
        </a>
    </section>
</div>
<div class="reverse row">
    <div class="picture-collumn">
        <img src={ mirrorsEdge2 } alt="Mirror's Edge by EA DICE" class="right-image"/>
    </div>
    <section class="info-section">
        <h1>BRING YOUR GAME TO LIFE</h1>
        <p>
            We operate a student-led game studio branch within the organization, producing official, collaborative games credited to contributors, with proceeds used to further the progress of game development programs at UH and the opportunities it provides to students interested in game development.
        </p>
        <a href="/studio">
            <button>LEARN MORE</button>
        </a>
    </section>
</div>
<div class="row">
    <div class="picture-collumn">
        <img src={ guiltyGear } alt="Guilty Gear -STRIVE- by ArcSystemWorks" class="left-image"/>
    </div>
    <section class="info-section">
        <h1>CLUB OFFICERS</h1>
        <p>Learn about the team that keeps the club ticking! Officer openings are also disclosed below.</p>
        <a href="/club#meet-the-team">
            <button>MEET THE TEAM</button>
        </a>
    </section>
</div>
<div class="reverse row">
    <div class="picture-collumn">
        <img src={ profitPlayground } alt="TT Profit Playground by unknown" class="right-image" style="object-position: 10%;"/>
    </div>
    <section class="info-section">
        <h1>SUPPORT US</h1>
        <p>
            Support our efforts in making game development more accessible for students at the University of Houston. Anything and everything helps.
        </p>
        <button onclick={mail}>CONTACT US</button>
    </section>
</div>
<div style="text-align: center;">
    <h1>MEMBER SHOWCASE</h1>
    <p>Video coming soon...</p>
    <a href="/games">
        <button class="center-button">CHECK OUT THE GAMES</button>
    </a>
</div>

<style>
    section {
        display: flex;
        flex-flow: column;
        justify-content: center;

        height: 100%;
        padding-left: 5vw;
        padding-right: 5vw;
    }
    section h1 {
        margin-top: 0px;
        margin-bottom: 5px;
    }
</style>