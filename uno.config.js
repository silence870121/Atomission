import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
    presets: [
        presetIcons({
            warn: true,
            extraProperties: {
                display: 'inline-block'
            }
        }),
    ],
    content: {
        pipeline: {
            include: [
                '**/*.vue',
                'src/**/*.js'],
            exclude: ['node_modules', 'dist']
        },
    },
})
