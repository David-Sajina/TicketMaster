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
					<v-text-field v-model="answer"></v-text-field>
					<v-btn @click="sendA" class="mx-2" fab dark small color="green">
						<v-icon dark> mdi-check </v-icon>
					</v-btn>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		name: "CustomQuestions",
		props: {
			question: String,
			email: String,
			user: String,
		},
		data: () => ({
			answer: "",
		}),
		methods: {
			async sendA() {
				try {
					await axios.post("http://localhost:5000/senda", {
						user: this.user,
						email: this.email,
						question: this.question,
						answer: this.answer,
					});
				} catch (error) {
					console.log(error);
				}
			},
		},
		mounted() {},
	};
</script>
