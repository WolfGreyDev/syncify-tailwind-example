module.exports = {
    plugins: [
        require('tailwindcss')(),
        // require('postcss-nested')(), // This is in the docs, but not needed for the example
        require('autoprefixer')()
    ]
};
