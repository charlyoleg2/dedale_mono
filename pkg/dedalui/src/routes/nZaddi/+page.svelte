<script lang="ts">
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<h1>nZ addi page</h1>
<p>using services of nZ! Make sure nZ is running</p>
<p>nZ result: {data.msg}</p>
