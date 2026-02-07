<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        className?: string;
    }

    let { children, className = "" }: Props = $props();
</script>

<div
    class="relative z-10 w-fit p-px rounded-[10px] bg-linear-to-tl from-[#9d8ec7] via-transparent to-[#9d8ec7] {className}"
>
    <div
        class="flex items-center justify-center gap-[5px] md:gap-[5.25px] px-3 md:px-[12.6px] py-[4.5px] md:py-[4.725px] rounded-[10px] bg-[#120b2e]/60 backdrop-blur-md leading-none"
        style="-webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); will-change: backdrop-filter;"
    >
        {@render children()}
    </div>
</div>
