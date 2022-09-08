<template>
	<div class="ticket">
		<v-tabs background-color="transparent" color="basil" grow>
			<v-tab> Ticket </v-tab>
			<v-tab> Questions </v-tab>
			<v-tab-item>
				<header-ticket />
			</v-tab-item>
			<v-tab-item>
				<v-app>{{ user.username }} </v-app>
			</v-tab-item>
		</v-tabs>
	</div>
</template>
<script>
	import HeaderTicket from "../components/HeaderTicket.vue";
	import { mapMutations, mapGetters, mapActions } from "vuex";

	export default {
		name: "About",
		components: {
			HeaderTicket,
		},
		computed: {
			...mapGetters({ user: "user" }),
		},
	};
</script>
