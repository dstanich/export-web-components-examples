npm install @vue/cli-service-global --save-dev

npx vue-cli-service build --target wc --name my-element [entry]

    "build:elements": "npm run build:elements:components",
    "build:elements:components": "vue-cli-service build --target wc --name vue './src/components/*.vue'"
