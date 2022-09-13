<template>
    <div class="grid md:grid-cols-3 gap-4">

        <!-- Box 1-->
        <div class="shadow-md bg-yellow-400 p-10 text-center rounded">
            <h3 class="text-3xl font-bold text-white mb-4"><span><i class="fa fa-virus"></i></span>Cases</h3>

            <div class="text-2xl mb-4 text-white">
                <span class="font-bold">New:</span>
                {{numberWithCommas(stats.NewConfirmed)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold">Total:</span>
                {{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>

        <!-- Box 2-->
        <div class="shadow-md bg-red-600 p-10 text-center rounded">
            <h3 class="text-3xl font-bold text-white mb-4"><span><i class="fa-solid fa-skull-crossbones"></i></span> Deaths</h3>

            <div class="text-2xl mb-4 text-white">
                <span class="font-bold">New:</span>
                {{numberWithCommas(stats.NewDeaths)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold">Total:</span>
                {{numberWithCommas(stats.TotalDeaths)}}
            </div>
        </div>

        <!-- Box 3-->
        <div class="shadow-md bg-green-400 p-10 text-center rounded">
            <h3 class="text-3xl font-bold text-white mb-4"><span><i class="fa fa-kit-medical"></i></span>Recovery</h3>

            <div class="text-2xl mb-4 text-white">
                <span class="font-bold ">New:</span>
                {{numberWithCommas(stats.NewRecovered)}}
            </div>
            <div class="text-2xl mb-4 text-white">
                <span class="font-bold">Total:</span>
                {{numberWithCommas(stats.TotalRecovered)}}
            </div>
        </div>


    </div>
</template>

<script>

export default{
    name: 'DataBoxes',
    props: ['stats'],
    methods: {
        numberWithCommas(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
}
</script>