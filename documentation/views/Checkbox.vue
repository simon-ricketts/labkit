<template>
    <lk-content>
        <h1>Checkbox</h1>
        <p>The checkbox component (<code>lk-checkbox</code>)&hellip;</p>
        <lk-panel>
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Checkbox component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set to <code>content</code>.</p>
        <h3>[TODO]</h3>
        <ul>
            <li>Examples with and without labels and hints.</li>
        </ul>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';
import Example from '@/labkit/documentation/components/examples/checkbox/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
export default {
    computed: {
        hasError() {
            return this.selectedItems.length > 2;
        },
    },
    data() {
        return {
            selectedItems: ['Second Option Value'],
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-checkbox
    v-model="selectedItems"
    :has-error="hasError"
    :items="[
        {
            label: 'First Option Label',
            value: 'First Option Value',
        },
        {
            hint: 'This is a short hint about the option. It should be a single line.',
            label: 'Second Option Label',
            value: 'Second Option Value',
        },
        {
            label: 'Third Option Label',
            value: 'Third Option Value',
        },
        {
            label: 'Fourth Option Label',
            value: 'Fourth Option Value',
        },
    ]"
>
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>This is an example hint.</p>
        <p>This input will show an error if you select more than 2 items.</p>
    </template>
    <template slot="error">
        <p>You can select a maximum of 2 items from the list.</p>
        <p><strong><em>This error is a bit contrived:</em></strong> ideally you would disable the selection of items when the user has selected the maximum allowed rather than showing an error, however it works for the purpose of demonstrating the component.</p>
    </template>
</lk-checkbox>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p><em>Number of items selected: </em><strong>{{selectedItems.length}}</strong></p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p><em>Selected items: </em><strong v-if="selectedItems.length === 0"> None</strong></p>
    <ul v-if="selectedItems.length > 0">
        <li v-for="item in selectedItems" :key="item">{{item}}</li>
    </ul>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
