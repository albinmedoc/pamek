<script>
	import Notifications from 'svelte-notifications';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Notifications>
	<div class="mod">
		<h2><a href="tel:+465403400">Har du problem? Vi har jour 24/7</a></h2>
	</div>
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>

	<Footer />
</Notifications>

<style>
	.mod {
		text-align: center;
	}

	.mod * {
		color: #333333;
	}
</style>