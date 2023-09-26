<script>
	import Notifications from 'svelte-notifications';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Notifications>
	<Header {segment}/>

	<main>
		<slot></slot>
	</main>

	<Footer />
</Notifications>