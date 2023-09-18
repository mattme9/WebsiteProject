const shoppingCart = Vue.createApp({
    data () {
        return {
            
            computer: [
                {
                    id:1,
                    name: 'Lenovo',
                    description: 'Bra prestanda',
                    image: '/resources/products/item1.jpg',
                    price: '5999'
                },
                {
                    id: 2,
                    name: 'MacBook Air',
                    description: 'Datorn för studenten',
                    image: '/resources/products/item2.png',
                    price: '10999'
                },
                {
                    id: 3,
                    name: 'Acer',
                    description: 'Bra batteritid',
                    image: '/resources/products/item3.jpg',
                    price: '7999'
                },
                {
                    id: 4,
                    name: 'HP',
                    description: 'Kontor',
                    image: '/resources/products/item4.jpg',
                    price: '5999'
                },
                {
                    id:5,
                    name: 'MacBook Pro',
                    description: 'För den krävande',
                    image: '/resources/products/item5.jpg',
                    price: '14999'
                },
                {
                    id:6,
                    name: 'Dell',
                    description: 'Prisvärd',
                    image: '/resources/products/item6.jpg',
                    price: '2999'
                },
                {
                    id:7,
                    name: 'Chromebook',
                    description: 'Smidig',
                    image: '/resources/products/item7.jpg',
                    price: '4699'
                },
                {
                    id:8,
                    name: 'Macintosh',
                    description: 'Veteran',
                    image: 'bild',
                    price: '7999'
                }
            ],

            temporaryComputerStorage: [],

        };
    },

    methods: {
        
        totalCount(){
            return this.computer.length;
        },

        totalPrice() {
            let total = 0;

            for (const item of this.computer) {
    
                const price = parseFloat(item.price);
                total += price;
            }

            return total;
        },

        shippingCost() {

            let totalPrice = 0;
            let totalShipping = 0;

            for (const item of this.computer) {
    
                const price = parseFloat(item.price.replace(',', ''));
                totalPrice += price;
            }

            if(totalPrice >= 8000) {
                return totalShipping;
            }
            else {
                totalShipping = 49;
                return totalShipping;
            }

        },

        removeFromCart(index) {
            const removedItem = this.computer.splice(index, 1)[0];
            this.temporaryComputerStorage.push(removedItem);
        },

        

    }

    
});


shoppingCart.mount('#shoppingCart');