<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Welcome to Dedalui</h1>
<p>The dynamic pages of Dedale</p>

<h2>SSR pages</h2>
<ol>
	<li><a href={resolve('/searchingAll')}>searching-all page</a></li>
	<li><a href={resolve('/searching')}>searching page without button</a></li>
	<li><a href={resolve('/searching2')}>searching page with button</a></li>
	<li><a href={resolve('/nZaddi')}>nZ-addi page</a></li>
</ol>
