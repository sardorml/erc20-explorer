<template>
    <div class="flex flex-col md:flex-row">
        <div class="p-4 w-full md:w-1/2">
            <span>Latest blocks</span>
            <div class="shadow rounded-lg text-sm h-64 overflow-auto">
                <!-- table header -->
                <div class="p-2 flex justify-between border-b sticky top-0 bg-white">
                    <span>#</span>
                    <span>Hash</span>
                    <span>Date</span>
                </div>
                <!-- table body -->
                <div class="p-2 flex justify-between border-b" v-for="(block,index) in latestBlocks" :key="index">
                    <span class="pr-4">{{block.number}}</span>
                    <span class="pr-4 truncate">{{block.hash}}</span>
                    <span class="">{{new Date(block.timestamp*1000).toLocaleDateString("en-US")}}</span>
                </div>
            </div>
        </div>
        <div class="p-4 w-full md:w-1/2">
            <span>Latest Transactions</span>
            <div class="p-2 shadow rounded">
                blocks
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            latestBlocks:[]
        }
    },
    methods:{
        async getLatestTenBlocks(){
            try {
                let latestblock = await this.$web3.eth.getBlockNumber()
                console.log(latestblock)
                for(let i=0; i <= 10; i++){
                    let newBlock = await this.$web3.eth.getBlock(latestblock-i)
                    console.log(newBlock)
                    this.latestBlocks.push(newBlock)
                }
            } catch(e){
                console.log(e)
            }
        }
    },
    async mounted(){
        await this.getLatestTenBlocks()
    }
}
</script>
