<template>
    <div>
        <lk-search-select 
            :options="dataItems()" 
            @selected="changedItem" 
            placeholder="Select an option">
            <template slot="label">Simple Example</template>
            <template slot="hint">
                <p>This simple example shows a basic search select with a list of items.</p>
            </template>
        </lk-search-select>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>
                <em>Selected Item Name:</em>
                <strong>{{selectedItem.name}}</strong>
            </p>
            <lk-divider margin-bottom="content"/>
            <p>
                <em>Selected Item ID:</em>
                <strong>{{selectedItem.id}}</strong>
            </p>
        </lk-content>
    </div>
</template>



<script>
export default {
    data() {
        return {
            selectedItem: {},
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        dataItems() {
            const dummyData = [];
            for (let index = 0; index < 50; index++) {
                dummyData.push({
                    id: index,
                    name: `Example Item ${index}`,
                });
            }
            return dummyData;
        },
    },
};
</script>
