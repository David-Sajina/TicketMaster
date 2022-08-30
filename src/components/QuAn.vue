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
					<i>{{ answer }}</i>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>
<script>
	export default {
		name: "QuAn",
		props: {
			question: String,
			answer: String,
		},
		data: () => ({}),
		methods: {},
		mounted() {},
	};
</script>
