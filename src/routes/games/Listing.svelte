<script lang="ts">
    let showOverlay = $state(false);
    let { header, name, authors, desc, href } = $props(); 
</script>


<a id="game" { href } target="_blank">
    <section>
        <img src={ header } alt={ name }/>
    </section>
    <section style="padding: 0 50px;">
        <h2>{ name }</h2>
        <ul>
            {#each authors as author}
                <li>{ author }</li>
            {/each}
        </ul>
        <p>{ desc }</p>
    </section>
</a>

<style>
    #game {
        border: 10px solid var(--cougar-red);
        border-radius: 50px;
        color: initial; /* Stops the text from being blue */
        overflow: hidden;
        text-decoration: none;
        cursor: pointer;
        transition: 0.5s;
        color: inherit;
        justify-self: center;
    }
    #game:hover {
        scale: 1.05;
    }
    #game h2 {
        color: var(--cougar-red);
    }
    #game section img {
        object-fit: cover;
        width: 100%;
    }

    /* Mobile Layout */
    @media (width <= 800px) {
        #game {
            width: 80vw;
        }
        ul {
            list-style-position: inside; /* keeping the dots right next to the text looks nice */
            padding-left: 0px; /* removes padding the dots brings */
        }
    }
</style>