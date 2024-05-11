<template>
	<div>
		<h1>Weather Forecast</h1>
		<div v-if="loading" class="loading">Loading...</div>
		<div v-else>
			<div v-if="error" class="error">{{ error }}</div>
			<div v-else>
				<div v-if="weather">
					<div class="city">City: {{ weather.name }}</div>
					<div class="temperature">
						Temperature: {{ weather.main.temp }}°C
					</div>
					<div class="description">
						Description: {{ weather.weather[0].description }}
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
import axios from "axios";

export default {
	data() {
		return {
			loading: true,
			weather: null,
			error: null, // Added for error handling
		};
	},
	async created() {
		const axiosInstance = axios.create();
		try {
			const response = await axiosInstance.get(
				"https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
			);
			console.log("Response:", response.data);
			this.weather = response.data;
		} catch (error) {
			console.error("Error fetching weather data:", error);
			this.error =
				"An error occurred while fetching weather data. Please try again later."; // Set user-friendly error message
		} finally {
			this.loading = false;
		}
	},
};
</script>

<style scoped>
.loading {
	text-align: center;
	margin-top: 20px;
}
.error {
	color: red;
}
</style>
