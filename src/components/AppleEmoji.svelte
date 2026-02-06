<script lang="ts">
    export let symbol: string;
    export let size: number = 20;
    export let className: string = "";
</script>

<img
    src="https://emojicdn.elk.sh/{symbol}?style=apple"
    alt={symbol}
    class="inline-block align-middle select-none pointer-events-none {className}"
    style="width: {size}px; height: {size}px;"
    draggable="false"
    loading="lazy"
/>
