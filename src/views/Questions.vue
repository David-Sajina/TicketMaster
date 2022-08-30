<template>
	<v-app>
		<div class="ticket" style="margin-top: 15px" v-if="lista.length > 0">
			<qu-an
				v-for="l in lista"
				:key="l._id"
				:question="l.question"
				:answer="l.answer"
			/></div
	></v-app>
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
