<template>
	<div class="ticket" v-if="user">
		<v-tabs background-color="transparent" color="basil" grow>
			<v-tab> Ticket </v-tab>
			<v-tab> Questions </v-tab>
			<v-tab-item>
				<header-ticket />
			</v-tab-item>
			<v-tab-item v-if="lista">
				<v-app>
					<custom-questions
						v-for="l in lista"
						:key="l._id"
						:question="l.question"
						:email="l.email"
						:user="l.user"
					/>
				</v-app>
			</v-tab-item>
		</v-tabs>
	</div>
</template>
<script>
	import HeaderTicket from "../components/HeaderTicket.vue";
	import CustomQuestions from "../components/CustomQuestions.vue";
	import { mapGetters } from "vuex";
	import axios from "axios";

	export default {
		name: "About",
		components: {
			HeaderTicket,
			CustomQuestions,
		},
		data: () => ({
			lista: [],
			loaded: false,
		}),
		methods: {
			async getQ() {
				try {
					let lista1 = await axios.get(
						`http://localhost:5000/q/${this.user.username}`
					);
					this.lista = lista1.data;
					console.log(lista1.data);
				} catch (error) {
					console.log(error);
				}
			},
		},
		computed: {
			...mapGetters({ user: "user" }),
		},
		mounted() {
			this.getQ();
		},
	};
</script>
