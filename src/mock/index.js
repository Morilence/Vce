export default {
    project: {
        name: "Untitled",
        isdir: true,
        children: [
            {
                name: "assets",
                isdir: true,
                children: [
                    {
                        name: "images",
                        isdir: true,
                        children: [
                            { name: "logo.ico", isdir: false },
                            { name: "zxy.png", isdir: false },
                            { name: "myx.jpg", isdir: false }
                        ]
                    },
                    {
                        name: "videos",
                        isdir: true,
                        children: []
                    },
                    {
                        name: "fonts",
                        isdir: true,
                        children: []
                    }
                ]
            },
            {
                name: "libs",
                isdir: true,
                children: [
                    {
                        name: "jQuery",
                        isdir: true,
                        children: [
                            {
                                name: "jquery-3.4.1.min.js",
                                isdir: false
                            }
                        ]
                    },
                    {
                        name: "Swiper",
                        isdir: true,
                        children: [
                            {
                                name: "swiper-bundle.min.js",
                                isdir: false
                            },
                            {
                                name: "swiper-bundle.min.css",
                                isdir: false
                            }
                        ]
                    },
                    {
                        name: "videojs",
                        isdir: true,
                        children: [
                            {
                                name: "video.min.js",
                                isdir: false
                            },
                            {
                                name: "video-css.js",
                                isdir: false
                            }
                        ]
                    },
                    { name: "anime.js", isdir: false },
                    { name: "normalize.css", isdir: false },
                    { name: "template-web.js", isdir: false },
                    { name: "vue.js", isdir: false }
                ]
            },
            {
                name: "index.html",
                isdir: false,
                content: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="favicon.ico">
        <title>Vce</title>
    <link href="assets/js/chunk-vendors.js" rel="preload" as="script"><link href="assets/js/index.js" rel="preload" as="script">
    </head>
    <body>
        <noscript>
        <strong>We're sorry but Vce doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
        <script type="text/javascript" src="assets/js/chunk-vendors.js"></script>
        <script type="text/javascript" src="assets/js/index.js"></script>
    </body>
</html>`
            },
            {
                name: "index.css",
                isdir: false,
                content: `/* :root {
    --tp_width: 100%;
    --tp_height: 5px;
    --tp_border_width: 0px;
    --tp_border_radius: 5px;
    --tp_border_color: transparent;
    --tp_inner_color: white;
    --tp_loaded_color: rgba(0, 0, 0, 0.15);
    --tp_played_color: greenyellow;
    --tp_thumb_diam: 12px;
    --tp_thumb_color: greenyellow;
} */

.tiny-progress {
    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
}

.tiny-progress .tp__wrapper {
    position: relative;

    width: var(--tp_width);
    height: var(--tp_height);
    border-width: var(--tp_border_width);
    border-color: var(--tp_border_color);
    border-radius: var(--tp_border_radius);
    background-color: var(--tp_inner_color);

    z-index: 1;
}

.tiny-progress .tp__wrapper .tp__loaded {
    position: relative;
    top: 0;
    left: 0;

    width: 60%;
    height: 100%;
    border-radius: var(--tp_border_radius);
    background-color: var(--tp_loaded_color);

    pointer-events: none;
    z-index: 1;
}

.tiny-progress .tp__wrapper .tp__played {
    position: absolute;
    top: 0;
    left: 0;

    width: 30%;
    height: 100%;
    border-radius: var(--tp_border_radius);
    background-color: var(--tp_played_color);

    pointer-events: none;
    z-index: 1;
}

.tiny-progress .tp__wrapper .tp__played .tp__thumb {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);

    width: var(--tp_thumb_diam);
    height: var(--tp_thumb_diam);
    border-radius: var(--tp_thumb_diam);

    background-color: var(--tp_thumb_color);

    z-index: 2;
    cursor: pointer;
    pointer-events: auto;
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
    }
};
