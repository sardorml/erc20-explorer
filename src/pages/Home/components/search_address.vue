<template>
    <div>
        <div class="flex flex-col justify-center p-2 relative">
            <div class="flex justify-center">
                <input 
                v-model="address"
                class="focus:outline-none focus:ring focus:border-blue-300 border p-2 rounded-lg" 
                type="text" placeholder="Input address"> 
            <button 
                @click="handleClick"
                class="bg-green-400 hover:bg-green-700 border rounded-lg p-2 ml-2 text-white">
                Search
            </button></div>
            <span class="flex justify-center text-red-600">{{error}}</span>
        </div>
        <div class="shadow rounded-lg p-4">
            <span v-if="balance == ''">No results</span>
            <div v-else>
                <span>Adress: {{address}}</span> <br>
                <span>Balance: {{balance}} Ether</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            balance:'',
            address: '',
            error: ''
        }
    },
    computed:{
        ...mapGetters({
            addressSelected: 'getAddress'
        })
    },
    watch: {
        addressSelected(newAddr){
            this.address = newAddr
            this.handleClick()
        }
    },
    methods:{
        async handleClick(){
            try {
                if(this.address == ''){
                    this.error = 'Enter address'
                } else {
                    this.error = ''
                    let res = await this.$web3.eth.getBalance(this.address.replaceAll(' ',''))
                    this.balance = this.$web3.utils.fromWei(res, 'ether');
                }
            } catch(e){
                console.log(e)
                this.error = e
            }
        }
    },
    mounted(){
    }
}
</script>