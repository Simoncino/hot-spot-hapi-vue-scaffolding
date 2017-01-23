<template>
	<div class="erore">
		Messaggio: {{messaggio}}
	</div>
</template>

<script>
	export default {
		props: {
			messaggio: ''
		}
	}
</script>

<style lang="scss">
	.erore{
		margin: 0 auto;
		color: red;
	}

</style>