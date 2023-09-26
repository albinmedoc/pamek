<script>
    import Nav from "./Nav.svelte";

    export let segment;
</script>

<style>
	.mod {
		text-align: center;
	}

	.mod * {
		color: #333333;
	}
</style>

<header>
    <div class="mod">
        <h2><a rel="prefetch" href="/kontakt">Har du problem? Vi har jour 24/7</a></h2>
    </div>
    <Nav {segment}/>
</header>
