<script lang="ts">
    interface Props {
        count?: number;
        className?: string;
    }

    let { count = 5, className = "" }: Props = $props();
</script>

<div class="z-10 flex justify-center gap-[5px] {className}">
    {#each Array(count) as _}
        <img
            src="/assets/icons/Star.svg"
            alt="Star"
            class="w-[19.47px] h-[18.92px] md:w-[19.29px] md:h-[18.72px] drop-shadow-[0_0_10px_rgba(255,186,0,0.6)] select-none pointer-events-none"
            draggable="false"
        />
    {/each}
</div>
