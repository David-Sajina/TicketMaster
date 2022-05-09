<template>
	<v-app>
		<v-card>
			<div class="d-flex">
				<v-expansion-panels v-model="panel">
					<v-expansion-panel>
						<v-expansion-panel-header>Neko pitanje?</v-expansion-panel-header>
						<v-expansion-panel-content>
							Neki odgovor
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div></v-card
		></v-app
	>
</template>
<script>
	export default {
		name: "QA",
		data: () => ({
			readonly: false,
		}),
	};
</script>
