<script lang="ts">
    interface Props {
        symbol: string;
        size?: number;
        className?: string;
    }

    let { symbol, size = 20, className = "" }: Props = $props();
</script>

<img
    src="https://emojicdn.elk.sh/{symbol}?style=apple"
    alt={symbol}
    class="inline-block align-middle select-none pointer-events-none {className}"
    style="width: {size}px; height: {size}px;"
    draggable="false"
    loading="lazy"
/>
