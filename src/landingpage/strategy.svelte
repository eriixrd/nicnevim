<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#111116] overflow-hidden"
>
    <Tag className="mx-auto mt-2.5">
        <span
            class="flex items-center text-[14px] md:text-[14.7px] text-white font-medium gap-2"
        >
            <AppleEmoji symbol="📊" size={17} />
            Strategie mého portfolia
        </span>
    </Tag>
</section>
