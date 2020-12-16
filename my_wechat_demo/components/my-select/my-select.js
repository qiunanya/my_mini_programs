// components/my-select/my-select.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {

        },

        /**
         * 组件的初始数据
         */
        data: {
            counter: 0
        },

        /**
         * 组件的方法列表
         */
        methods: {
            // 赋值方法
            incrementCounter(value){
                this.setData({
                    counter: this.data.counter + value
                })
            }

        }
})
