export default {
    project: {
        version: 1.03,
        name: "Untitled",
        isdir: true,
        isfolded: false,
        children: [
            {
                name: "src",
                isdir: true,
                isfolded: true,
                children: [
                    {
                        name: "assets",
                        isdir: true,
                        isfolded: true,
                        children: [
                            {
                                name: "images",
                                isdir: true,
                                isfolded: true,
                                children: [
                                    { name: "logo.ico", isdir: false },
                                    { name: "portrait.png", isdir: false },
                                    { name: "banner.jpg", isdir: false }
                                ]
                            },
                            {
                                name: "videos",
                                isdir: true,
                                isfolded: true,
                                children: []
                            },
                            {
                                name: "fonts",
                                isdir: true,
                                isfolded: true,
                                children: []
                            }
                        ]
                    },
                    {
                        name: "libs",
                        isdir: true,
                        isfolded: true,
                        children: [
                            {
                                name: "normalize.css",
                                isdir: false,
                                content: `I don't want to copy anymore...
https://necolas.github.io/normalize.css/latest/normalize.css`
                            }
                        ]
                    },
                    {
                        name: "index.html",
                        isdir: false,
                        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tiny-progress</title>
    <link rel="stylesheet" href="https://www.morilence.com/sundries/tiny-progress/libs/tinyprogress.css">
    <link rel="stylesheet" href="./index.css">
    <script src="https://www.morilence.com/sundries/tiny-progress/libs/tinyprogress.js"></script>
    <script src="./index.js"></script>
</head>
<body>
    <div id="app">
        <div class="progress"></div>
    </div>
</body>
</html>`
                    },
                    {
                        name: "index.css",
                        isdir: false,
                        content: `html, body {
    padding: 0;
    margin: 0;
    height: 100vh;;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-width: 500px;
    height: 100%;
    margin: 0 auto;

    background-color: blueviolet;
}

.tiny-progress {
    width: 320px;
    height: 6px;
}`
                    },
                    {
                        name: "index.js",
                        isdir: false,
                        content: `const tprogress = new TinyProgress(".progress", {
    height: "8px",
    thumbDiam: "16px"
});

tprogress.on("seek", logger);
tprogress.on("slidingstart", logger);
tprogress.on("sliding", logger);
tprogress.on("slidingend", logger);
// tprogress.on("loadedchange", logger);
// tprogress.on("playedchange", logger);
tprogress.setLoaded(0.75);
tprogress.setPlayed(0.45);

function logger (evt) {
    console.log("%c"+(evt.percentage * 100).toFixed(2)+"%. %c["+evt.type+"]", "color: greenyellow;", "color: blueviolet"); 
}`
                    }
                ]
            },
            {
                name: "current files/dirs are all static.txt",
                isdir: false,
                content: "Just as the name says, but you can save your changes by Ctrl+S."
            },
            {
                name: "readme.md",
                isdir: false,
                content: `# Vce

## Intro

Vce is an online editor developed mainly on Vue and Ace.

## Why Vce ?

+ One is that developers can finish to frame simple projects in some new and temporary PC/Pad environment with this small little-smart editor.
+ The second is to be able to do some project level progress presentation or development demonstration in some emergency situations.
+ Third, the author is also expected to encapsulate it as a library so that more developers can refer to their pages and applications.

## Features

+ no backend
+ use localStorage to achieve data persistence
+ support most common editor operations (shortcut, basic tips, auto-completion...)
- irregular update and repair
- a very lonely author

## Caveats

I'm still in development, so if you come across some fantastic bug, just fuck off them.

## Epilogue

Bye...`
            }
        ]
    }
};
