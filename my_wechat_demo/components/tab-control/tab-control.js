// components/tab-control/tab-control.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles: {
            type: Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * @description 选中方法，处理点击事件
         */
        handleItemClick (event) {
            const index = event.currentTarget.dataset.index
            this.setData({
                currentIndex: index
            })
            // console.log(index);
            // 通知页面内部的点击事件
            this.triggerEvent('itemclick', { index, title: this.properties.titles[index] }, {name:'点击事件'})
        }
    }
})
