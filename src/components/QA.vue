<template>
	<v-container>
		<v-card>
			<div class="d-flex">
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-header
							><v-text-field
								:value="question"
								disabled
								label="Pitanje?"
							></v-text-field>
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							<v-text-field
								:value="answer"
								disabled
								label="Odgovor"
							></v-text-field>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels></div
		></v-card>
	</v-container>
</template>
<script>
	import { mapGetters } from "vuex";

	export default {
		name: "QA",
		props: {
			question: String,
			answer: String,
		},
		data: () => ({
			readonly: false,
		}),

		computed: {
			...mapGetters({ user: "user" }),
		},
	};
</script>
