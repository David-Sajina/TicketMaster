<template>
	<div class="about">
		<v-app>
			<v-container
				><i
					>As technology advances more and more, so does the number of websites.
					Many sites do not have their own ticket support system thereby slowing
					down their work. To have all the questions and answers in one place
					place, the TicketMaster web application was designed. This web
					application it is intended as a help provided to customers of various
					sites that they don't have their own ticket support. The target market
					of the application is all sites which do not have any form of support
					for their users and want them to quite simple, fast and effective way
					to display generic questions and answers.</i
				></v-container
			>
		</v-app>
	</div>
</template>
<script>
	import QA from "@/components/QA.vue";
	export default {
		name: "About",
		components: {
			QA,
		},
	};
</script>
