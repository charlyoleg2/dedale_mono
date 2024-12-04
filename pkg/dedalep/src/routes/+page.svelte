<script lang="ts">
	import { backCfg } from 'back-config';
	import { base } from '$app/paths';
</script>

<h1>Welcome to Dedalep</h1>
<p>The static pages of Dedale</p>

<h2>Documentation</h2>
<ol>
	<li><a href="{base}/docs/scalability">Software scalability</a></li>
	<li><a href="{base}/docs/apidoc/" rel="external">TypeDoc</a></li>
</ol>

<h2>Swagger UI</h2>
<ol>
	<li>
		<a href="{backCfg.nA_host}:${backCfg.nA_port}/swagger" rel="external">swagger-ui of nA</a>
	</li>
	<li>
		<a href="{backCfg.nZ_host}:{backCfg.nZ_port}/swagger" rel="external">swagger-ui of nZ</a>
	</li>
</ol>

<h2>SSG pages</h2>
