<script lang="ts">
    import logo from '$lib/assets/logo.png';

    let { img = logo, position = "NULL", name = "Help Wanted", desc =  (name == "Help Wanted" ? "This position is open! Apply in our discord." : "Hello, world!") } = $props();
</script>

<div class="officer">
    <img src={ img } alt="image of { name } the club's { position }" />
    <section>
        <h3>{ position }</h3>
        <h1>{ name.toUpperCase() }</h1>
        <p>{ desc }</p>
        {#if name == "Help Wanted"}
            <a href="https://discord.gg/ZBwh4YgxRA" target="_blank">
                <button>APPLY IN DISCORD</button>
            </a>
        {/if}
    </section>
</div>

<style>
    .officer {
        display: flex;
        flex-flow: column;
        overflow: hidden;
        align-items: center;
        text-align: center;
    }
    .officer img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
    h1 {
        font-size: 2em;
        color: var(--cougar-red);
        margin-top: 0px;
        margin-bottom: 5px;
    }
    h3 {
        color: light-dark(var(--lightmode-color), var(--darkmode-color));
        margin-bottom: 0px;
    }
    p {
        font-size: 18px;
    }
</style>