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
						style="
							margin-left: 20px;
							font-weight: 700;
							font-size: 35px;
							text-shadow: 2px 2px #000000;
						"
					>
						Welcome to <span style="color: #bfff00">T</span>icket<span
							style="color: #bfff00"
							>M</span
						>aster
					</h1>
					<v-btn
						:to="{ name: 'Login' }"
						style="margin-left: 10px; margin-top: 10px"
						><v-icon dark>mdi-login</v-icon>Login</v-btn
					>
					<v-btn style="float: right; margin-right: 10px; margin-top: 10px"
						><v-icon dark>mdi-plus</v-icon> Sign in</v-btn
					>
				</v-card>
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
