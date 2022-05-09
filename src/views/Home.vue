<template>
	<div class="home">
		<v-parallax img src="@/assets/back.jpg" height="730">
			<v-layout
				column
				align-center
				justify-center
				class="white--text spacing-playground pa-60"
			>
				<v-card style="background: rgba(97, 106, 118, 0.5); padding: 30px">
					<h1
						class="white--text mb-20 display-1 text-xs-center"
						style="font-weight: 900; text-shadow: 3px 2px #000000"
					>
						Welcome to Ticket Master
					</h1></v-card
				>
			</v-layout>
		</v-parallax>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "Home",
		components: {},
	};
</script>
<style>
	.transparent * {
		opacity: 1;
	}
	.transparent {
		opacity: 0.5;
		-moz-opacity: 0.5;
		filter: alpha(opacity=50);
	}
</style>
