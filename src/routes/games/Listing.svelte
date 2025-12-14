<script lang="ts">
    let showOverlay = $state(false);
    let { header, name, authors, desc, href } = $props(); 
</script>


<a id="game" { href } target="_blank">
    <img src={ header } alt={ name }/>
</a>

<style>
    #game {
        border-radius: 50px;
        box-shadow: var(--cougar-red) 0 10px;
        overflow: hidden;
        cursor: pointer;
        transition: 0.5s;
        justify-self: center;
        width: 100%;
    }
    #game:hover {
        scale: 1.05;
    }
    #game img {
        object-fit: cover;
        max-width: 500px;
        width: 100%;

        max-height: 347px;
        height: 100%;
    }
</style>