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
						<v-text-field v-model="email" label="Email.."></v-text-field>
						<i
							><v-text-field v-model="pitanje" label="Question.."></v-text-field
						></i>
						<v-btn class="ma-2" outlined color="indigo" @click="SendQuestion">
							Send
						</v-btn>
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
		data: () => ({
			lista: [],
			email: "",
			pitanje: "",
		}),
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
			async SendQuestion() {
				console.log(this.$route.params.us, this.email, this.pitanje);
				if (!this.pitanje || !this.email) {
					this.$toast.error("Fill in all fields", {
						position: "top-center",
						timeout: 5000,
						closeOnClick: true,
						pauseOnFocusLoss: true,
						pauseOnHover: true,
						draggable: true,
						draggablePercent: 0.6,
						showCloseButtonOnHover: false,
						hideProgressBar: true,
						closeButton: "button",
						icon: true,
						rtl: false,
					});
				} else {
					try {
						await axios.post("http://localhost:5000/send", {
							user: this.$route.params.us,
							email: this.email,
							question: this.pitanje,
						});
						this.$toast.success("Questeion successfully sent", {
							position: "bottom-right",
							timeout: 5000,
							closeOnClick: true,
							pauseOnFocusLoss: true,
							pauseOnHover: true,
							draggable: true,
							draggablePercent: 0.6,
							showCloseButtonOnHover: false,
							hideProgressBar: true,
							closeButton: "button",
							icon: true,
							rtl: false,
						});
						this.email = "";
						this.pitanje = "";
					} catch (error) {
						console.log(error);
					}
				}
			},
		},
		created() {
			this.getQA();
		},
	};
</script>
