<template>
	<v-app>
		<v-container
			style="margin-left: 20px margin-right: 20px"
			height="20px"
			class="my-4"
		>
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<template v-slot:default="{ open }">
							<v-row no-gutters>
								<v-col cols="4"> Name: </v-col>
								<v-col cols="8" class="text--secondary">
									<v-fade-transition leave-absolute>
										<span v-if="open" key="0"> Enter the company name </span>
										<span v-else key="1">
											{{ ticket.name }}
										</span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-text-field
							v-model="ticket.name"
							placeholder="Example: T-Com"
						></v-text-field>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-header>
						<template v-slot:default="{ open }">
							<v-row no-gutters>
								<v-col cols="4"> Location: </v-col>
								<v-col cols="8" class="text--secondary">
									<v-fade-transition leave-absolute>
										<span v-if="open" key="0">
											Enter the company location
										</span>
										<span v-else key="1">
											{{ ticket.location }}
										</span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</template>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-text-field
							v-model="ticket.location"
							placeholder="Example: Frankfurt, Germany"
						></v-text-field>
					</v-expansion-panel-content>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-header v-slot="{ open }">
						<v-row no-gutters>
							<v-col cols="4"> Ticket starting day: </v-col>
							<v-col cols="8" class="text--secondary">
								<v-fade-transition leave-absolute>
									<span v-if="open">Starting time ?</span>
									<v-row v-else no-gutters style="width: 100%">
										<v-col cols="6">
											Start date: {{ ticket.start || "Not set" }}
										</v-col>
									</v-row>
								</v-fade-transition>
							</v-col>
						</v-row>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-row justify="space-around" no-gutters>
							<v-col cols="3">
								<v-menu
									ref="startMenu"
									:close-on-content-click="false"
									:return-value.sync="ticket.start"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="ticket.start"
											label="Start date"
											prepend-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										v-model="date"
										:reactive="reactive"
										:min="nowDate"
										no-title
										scrollable
									>
										<v-spacer></v-spacer>
										<v-btn
											text
											color="primary"
											@click="$refs.startMenu.isActive = false"
										>
											Cancel
										</v-btn>
										<v-btn
											text
											color="primary"
											@click="$refs.startMenu.save(date)"
										>
											OK
										</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
						</v-row>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
			<q-a
				v-for="l in lista"
				:key="l._id"
				:question="l.question"
				:answer="l.answer"
			/>
			<v-container
				style="margin-left: 20px margin-right: 20px"
				height="20px"
				class="my-4"
			>
				<v-card>
					<div class="d-flex">
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-header
									><v-text-field
										v-model="ticket.question"
										label="Question?"
									></v-text-field>
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<v-text-field
										v-model="ticket.answer"
										label="Answer"
									></v-text-field>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels></div></v-card
			></v-container>
			<div class="text-center">
				<v-btn class="ma-2" outlined color="#404040" @click="AddTicket">
					Add ticket
				</v-btn>
			</div>
		</v-container>
	</v-app>
</template>
<script>
	import axios from "axios";
	import QA from "../components/QA.vue";
	import { mapGetters } from "vuex";

	export default {
		name: "HeaderTicket",
		components: { QA },
		data: () => ({
			date: null,
			lista: [],
			ticket: {
				name: "",
				location: "",
				start: null,
				question: "",
				answer: "",
			},
			nowDate: new Date().toISOString().slice(0, 10),
			date: new Date(),
			date: new Date().toISOString().substr(0, 10),
			reactive: false,
		}),
		computed: {
			...mapGetters({ user: "user" }),
		},
		methods: {
			async AddTicket() {
				try {
					await axios.post("http://localhost:5000/ticket", {
						user: this.user.email,
						name: this.ticket.name,
						location: this.ticket.location,
						start: this.ticket.start,
						question: this.ticket.question,
						answer: this.ticket.answer,
					});
					this.getQA();
					this.ticket.question = "";
					this.ticket.answer = "";
				} catch (error) {
					console.log(error);
				}
			},
			async getQA() {
				try {
					axios.defaults.headers.common["x-auth-header"] =
						localStorage.getItem("token");
					let lista1 = await axios.get("http://localhost:5000/ticket");
					this.lista = lista1.data;
					console.log(this.lista);
				} catch (error) {
					console.log(error);
				}
			},
		},

		mounted() {
			this.getQA();
		},
	};
</script>
