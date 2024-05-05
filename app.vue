<template>
	<div>
		<h1>Weather Forecast</h1>
		<div v-if="weather">
			<div>City: {{ weather.name }}</div>
			<div>Tempreature: {{ weather.main.temp }}</div>
			<div>Description: {{ weather.weather[0].description }}</div>
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
			"https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
		);
		this.weather = response.data;
	},
};
</script>
