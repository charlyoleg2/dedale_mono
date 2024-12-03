<script lang="ts">
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<h1>Details of person {data.person.name}</h1>
<ol>
	<li>name: {data.person.name}</li>
	<li>age: {data.person.age}</li>
	<li>lieu: {data.person.lieu}</li>
</ol>
