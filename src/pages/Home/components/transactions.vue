<template>
    <div class="p-4 w-full md:w-1/2">
            <span>First 10 transactions by block</span>
            <div class="shadow rounded-lg text-sm h-64 overflow-auto">
                <!-- table header -->
                <div class="p-2 flex justify-between border-b sticky top-0 bg-white">
                    <span>Hash</span>
                    <span>Details</span>
                </div>
                <!-- table body -->
                <div v-if="transactions.length == 0" class="text-center">
                    <span>Choose a block</span>
                </div>
                <div v-else class="p-2 flex justify-between border-b" v-for="(transaction,index) in transactionsByBlock" :key="index">
                    <span class="pr-4 truncate w-1/2">{{transaction.hash}}</span>
                    <div class="pr-4 w-1/2 truncate text-xs">
                        <span><span class="font-bold">from:</span> {{transaction.from}}</span> <br>
                        <span><span class="font-bold">to:</span> {{transaction.to}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:{
        transactions:{
            value: Array,
            required: true
        }
    },
    data(){
        return {
            transactionsByBlock:[]
        }
    },
    watch:{
        transactions(newVal){
            this.getTransactionDetails(newVal)
        }
    },
    methods:{
        async getTransactionDetails(){
            try {
                this.transactionsByBlock = []
                for(let transaction of this.transactions){
                    let res = await this.$web3.eth.getTransaction(transaction)
                    this.transactionsByBlock.push(res)
                }
            } catch(e){
                console.log(e)
            }
        }
    },
    async mounted(){
        await this.getTransactionDetails()
    }
}
</script>