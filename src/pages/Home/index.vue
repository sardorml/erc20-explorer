<template>
    <div>
        <div class="text-center pt-3">
            <span class="text-xl">Ethereum explorer</span>
        </div>
        <div class="p-4">
            <SearchAddress/>
        </div>
        <div class="flex flex-col md:flex-row">
            <LatestBlocks/>
            <Transactions :transactions="transactions" />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LatestBlocks from './components/blocks'
import Transactions from './components/transactions'
import SearchAddress from './components/search_address'

export default {
    components:{
        LatestBlocks,
        Transactions,
        SearchAddress
    },
    computed:{
        ...mapGetters({
            transactions: 'getTransactions'
        })
    },
    data(){
        return {
        }
    },
    methods:{
    },
    async mounted(){
    }
}
</script>
