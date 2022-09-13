<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />

    <DataBoxes :stats="stats" />

    <CountrySelect @get-country="getCountryData" :countries="countries" />

    <button v-if="stats.Country" @click="clearCountryData" class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600">
      Global Stats
    </button>

  </main>

  <main class="flex flex-col align-center justiy-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" alt="loading image" class="w-24 m-auto">
  </main>
</template>

<script>
import axios from 'axios'
import DataTitle from '@/components/DataTitle.vue'
import DataBoxes from '@/components/DataBoxes.vue'
import CountrySelect from '@/components/CountrySelect.vue'


export default {
  name: 'HomeView',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
},
  data(){
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      status: {},
      countries: [],
      loadingImage: require('../assets/Load.gif')
    }
  },
  methods:{
    async getCovidData(){
      const res = await axios.get('/summary')
      const data = await res
      return data
    },
    getCountryData(country){
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData(){
      this.loading = true
      const res = await axios.get('/summary')
      const data = await res
      this.title = 'Global'
      this.stats = data.data.Global
      this.loading = false
    },
  },
  async mounted(){
    const data = await this.getCovidData()
    this.dataDate = data.data.Date
    this.stats = data.data.Global
    this.countries = data.data.Countries
    this.loading = false
  },
}
</script>
