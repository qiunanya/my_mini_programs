// components/my-event/my-event.js
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
            obj:{
                name:'小美美',
                age: 25,
                hobby: '打篮球'
            }
        },

        /**
         * 组件的方法列表
         */
        methods: {
            /**
             * @since 2020-12-15
             * @description 监听点击+1按钮事件
             */
            addNum(){
                console.log(11111)
                // 传递变化值/对象传递给父组件
                this.triggerEvent('add',{name:'邱南亚',title:'王美'},{ bubbles: true, composed: true })
            }

        }
})
