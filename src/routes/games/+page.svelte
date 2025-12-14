<script lang="ts">
    import itch from './assets/itch.svg';
    import itch_icon from './assets/itch_icon.svg';

    import gamejolt from './assets/gamejolt.png';
    import gamejolt_icon from './assets/gamejolt_icon.png';

    import Listing from './Listing.svelte';
    let { data } = $props();
</script>

<h1>FEATURED</h1>
<div id="featured">
    {#each data.games as game}
        <Listing {...game} />
    {/each}
</div>

<h1>CHECK OUT THE REST</h1>
<div id="see-more">
    <div id="itch" class="platform">
        <img class="icon" src={ itch_icon } alt="itch.io icon" style=""/>
        <h2>Check out our games on <img src={ itch } alt="itch.io logo"/></h2>
        <a href="https://coog-interactive.itch.io/" target="_blank">
            <button>GO!</button>
        </a>
    </div>
    
    <div id="gamejolt" class="platform">
        <img class="icon" src={ gamejolt_icon } alt="GameJolt Icon" />
        <h2>Check out our games on <img src={ gamejolt } alt="GameJolt logo"/></h2>
        <a href="https://gamejolt.com/@CoogInteractive" target="_blank">
            <button>GO!</button>
        </a>
    </div>
</div>

<style>
    /* I've been looking at HTML for hours... Let me have some fun. */
    @keyframes swing {
        0%   {transform: rotate(0deg); scale: 1.3;}
        20%  {transform: rotate(45deg); scale: 1.8;}
        40%  {transform: rotate(-45deg);}
        50% {transform: rotate(0deg); scale: 1;}
    }

    #featured {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
        column-gap: 50px;
        row-gap: 30px;
    }

    #see-more {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(300px, 2fr)); /* Make sure to consider changing auto-fit back to auto-fill if adding any more platforms here. */
        row-gap: 30px; /* Row gap for mobile. */
    }
    
    .platform {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        padding: 100px;
        height: 400px;
        transition: 1s;
    }
    .platform img {
        height: 110px;
    }
    .platform .icon:hover {
        animation-name: swing;
        cursor: pointer;
        animation-duration: 2s;
    }
    .platform h2 img {
        vertical-align: middle;
        height: 2rem;
    }
    .platform a {
        width: 100%;
    }

    #itch {
        color: white;
        background-color: #fa5c5c;
        transform: rotateY();
    }
    #itch img {
        filter: invert(1); /* This turns the itch logo white. Looks much better. */
    }
    #itch button {
        color: white;
        border-color: white;
    }
    #itch button:hover {
        background-color: white;
        color: black;
    }

    #gamejolt {
        background-color: #121015;
        color: #ccff00;
    }
    #gamejolt button {
        color: #ccff00;
        border-color: #ccff00;
    }
    #gamejolt button:hover {
        background-color: #ccff00;
        color: black;
    }
</style>