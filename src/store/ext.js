export default {
    table: {
        // image
        bmp: {
            ficon: ["fas", "file-image"]
        },
        gif: {
            ficon: ["fas", "file-image"]
        },
        ico: {
            ficon: ["fas", "file-image"]
        },
        jpg: {
            ficon: ["fas", "file-image"]
        },
        jpeg: {
            ficon: ["fas", "file-image"]
        },
        png: {
            ficon: ["fas", "file-image"]
        },
        svg: {
            ficon: ["fas", "file-image"]
        },
        tif: {
            ficon: ["fas", "file-image"]
        },
        webp: {
            ficon: ["fas", "file-image"]
        },
        // source
        c: {
            mode: "ace/mode/c_cpp",
            ficon: ["fas", "file"]
        },
        cpp: {
            mode: "ace/mode/c_cpp",
            ficon: ["fas", "file"]
        },
        cs: {
            mode: "ace/mode/csharp",
            ficon: ["fas", "file"]
        },
        css: {
            mode: "ace/mode/css",
            ficon: ["fas", "file"]
        },
        h: {
            mode: "ace/mode/c_cpp",
            ficon: ["fas", "file"]
        },
        html: {
            mode: "ace/mode/html",
            ficon: ["fas", "file"]
        },
        java: {
            mode: "ace/mode/java",
            ficon: ["fas", "file"]
        },
        js: {
            mode: "ace/mode/javascript",
            ficon: ["fas", "file"]
        },
        json: {
            mode: "ace/mode/json",
            ficon: ["fas", "file"]
        },
        json5: {
            mode: "ace/mode/json5",
            ficon: ["fas", "file"]
        },
        md: {
            mode: "ace/mode/markdown",
            ficon: ["fas", "file"]
        },
        php: {
            mode: "ace/mode/php",
            ficon: ["fas", "file"]
        },
        py: {
            mode: "ace/mode/python",
            ficon: ["fas", "file"]
        },
        txt: {
            mode: "ace/mode/text",
            ficon: ["fas", "file"]
        }
    },
    extname(fullname) {
        return fullname.split(".").pop();
    }
};
