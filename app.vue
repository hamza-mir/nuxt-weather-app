<!-- pages/weather.vue -->
<template>
	<div>
		<h1>Weather Forecast</h1>
		<div v-if="loading">Loading...</div>
		<div v-else>
			<div v-if="error" class="error">{{ error }}</div>
			<div v-else>
				<div v-if="weather">
					<div class="city">City: {{ weather.city }}</div>
					<div class="temperature">
						Temperature: {{ weather.temperature }}°C
					</div>
					<div class="description">
						Description: {{ weather.description }}
					</div>
				</div>
				<div v-else>
					<div class="error">Weather data not available.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: true,
			error: null,
			weather: null,
		};
	},
	async asyncData({ $axios }) {
		try {
			const response = await $axios.get(
				"https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
			);
			console.log("Response:", response.data);
			return { weather: response.data };
		} catch (error) {
			console.error("Error fetching weather data:", error);
			return { error: "Failed to fetch weather data" };
		}
	},
	mounted() {
		this.loading = false;
	},
};
</script>

<style>
.error {
	color: red;
}
</style>
