<template>
	<v-app>
		<div class="ticket" style="margin-top: 15px" v-if="lista.length > 0">
			<qu-an
				v-for="l in lista"
				:key="l._id"
				:question="l.question"
				:answer="l.answer"
			/>
		</div>
		<div style="width: 90%" class="mx-auto">
			<v-expansion-panels
				:focusable="true"
				:tile="true"
				:hover="true"
				class="pt-1 mt-2"
			>
				<v-expansion-panel>
					<v-expansion-panel-header
						><b>Postavi svoje pitanje..</b></v-expansion-panel-header
					>
					<v-expansion-panel-content class="mt-3">
						<v-text-field label="Unesite Vaš Email"></v-text-field>
						<i><v-text-field label="Ovdje postavi pitanje.."></v-text-field></i>
						<v-btn class="ma-2" outlined color="indigo"> Pošalji </v-btn>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</div></v-app
	>
</template>

<script>
	import HeaderTicket from "../components/HeaderTicket.vue";
	import QA from "../components/QA.vue";
	import axios from "axios";
	import QuAn from "../components/QuAn.vue";

	export default {
		name: "Questions",
		components: {
			HeaderTicket,
			QA,
			QuAn,
		},
		data() {
			return {
				lista: [],
			};
		},
		methods: {
			async getQA() {
				try {
					let lista1 = await axios.get(
						`http://localhost:5000/questions/${this.$route.params.us}`
					);
					this.lista = lista1.data;
					console.log(lista1.data);
				} catch (error) {
					console.log(error);
				}
			},
		},
		created() {
			this.getQA();
		},
	};
</script>
