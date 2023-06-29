<script setup></script>

<template>
    <div class="border">
        <!-- <img src="/favicon.svg"  alt="Atomission logo" /> -->
        <svg width="100%" height="100%" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M124 72L120.186 64.3721L80 56L118.4 51.2L128 32L137.6 51.2L176 56L135.814 64.3721L132 72L129.477 65.6923L128.696 65.8551L134 80L144 208L128 224L112 208L122 80L127.304 65.8551L126.523 65.6923L124 72ZM118.27 51.4595L116 56L119.111 62.2222L88 56L118.27 51.4595ZM128 64L128.741 63.8519L128 62L127.259 63.8519L128 64ZM168 56L136.889 62.2222L140 56L137.73 51.4595L168 56Z"
                    fill="url(#svg-lineGradient)" />
                <path d="M112 208L88 196L112 78L108 62L102 88L64 192L112 208Z" fill="url(#svg-lineGradient)" />
                <path d="M144 208L192 192L154 88L148 62L144 78L168 196L144 208Z" fill="url(#svg-lineGradient)" />
            </g>
            <defs>
                <linearGradient id="svg-lineGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="var(--color-stop)" />
                    <stop offset="100%" stop-color="var(--color-bot)" />
                </linearGradient>
            </defs>
        </svg>

    </div>
</template>

<style scoped>
#svg-lineGradient {
    --color-stop: var(--border-color);
    --color-bot: var(--border-variant-color);
}
</style>