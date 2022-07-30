<template>
	<div class="ticket">
		<q-a
			v-for="l in lista"
			:key="l._id"
			:question="l.question"
			:answer="l.answer"
		/>
	</div>
</template>
<script>
	import HeaderTicket from "../components/HeaderTicket.vue";
	import QA from "../components/QA.vue";

	export default {
		name: "Questions",
		components: {
			HeaderTicket,
			QA,
		},
		data() {
			return { lista: [] };
		},
		methods: {
			async getQA() {
				try {
					let lista1 = await axios.get(
						`http://localhost:5000/questions/${this.$route.params.us}`
					);
					this.lista = lista1.data;
					console.log(this.lista);
				} catch (error) {
					console.log(error);
				}
			},
			mounted() {
				this.getQA();
			},
		},
	};
</script>
