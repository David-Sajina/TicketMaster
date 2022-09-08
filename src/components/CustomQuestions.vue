<template>
	<div style="width: 90%" class="mx-auto">
		<v-expansion-panels
			:focusable="true"
			:tile="true"
			:hover="true"
			class="pt-1 mt-2"
		>
			<v-expansion-panel>
				<v-expansion-panel-header
					><b>{{ question }}</b></v-expansion-panel-header
				>
				<v-expansion-panel-content class="mt-3">
					Answer
					<v-text-field></v-text-field>
					<v-btn class="mx-2" fab dark small color="green">
						<v-icon dark> mdi-check </v-icon>
					</v-btn>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>
<script>
	export default {
		name: "CustomQuestions",
		props: {
			question: String,
		},
		data: () => ({}),
		methods: {},
		mounted() {},
	};
</script>
