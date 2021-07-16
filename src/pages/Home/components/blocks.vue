<template>
    <div class="p-4 w-full md:w-1/2">
            <span>Latest 10 blocks</span>
            <div class="shadow rounded-lg text-sm h-64 overflow-auto">
                <!-- table header -->
                <div class="p-2 flex justify-between border-b sticky top-0 bg-white">
                    <span>#</span>
                    <span>Hash</span>
                    <span>Date</span>
                </div>
                <!-- table body -->
                <div @click="handleClick(block.transactions)" class="p-2 flex justify-between border-b hover:bg-gray-100 cursor-pointer" v-for="(block,index) in latestBlocks" :key="index">
                    <span class="pr-4">{{block.number}}</span>
                    <span class="pr-4 truncate">{{block.hash}}</span>
                    <span class="">{{new Date(block.timestamp*1000).toLocaleDateString("en-US")}}</span>
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
                // console.log(latestblock)
                for(let i=0; i <= 10; i++){
                    let newBlock = await this.$web3.eth.getBlock(latestblock-i)
                    // console.log(newBlock)
                    this.latestBlocks.push(newBlock)
                }
            } catch(e){
                console.log(e)
            }
        },
        handleClick(transactions){
            this.$store.commit('setTransactions',transactions)
        }
    },
    async mounted(){
        await this.getLatestTenBlocks()
    }
}
</script>