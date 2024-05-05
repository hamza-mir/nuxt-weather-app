<template>
	<div>
		<h1>Weather Forecast</h1>
		<div v-if="weather">
			<div class="city">City: {{ weather.name }}</div>
			<div class="temperature">
				Temperature: {{ weather.main.temp }}°C
			</div>
			<div class="description">
				Description: {{ weather.weather[0].description }}
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			weather: null,
		};
	},
	async created() {
		const axiosInstance = axios.create();

		const response = await axiosInstance.get(
			"https://api.openweathermap.org/data/2.5/weather?q=London&appid=86f90b6cf6e79d28a502e8fbb80c1b0b&units=metric"
		);
		this.weather = response.data;
	},
};
</script>
