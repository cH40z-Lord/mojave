import * as dateCompare from "../../date/compare";
import * as dateFormat from "../../date/format";
import * as domAttr from "../../dom/attr";
import * as domCSS from "../../dom/css";
import * as domEvents from "../../dom/events";
import * as domManipulate from "../../dom/manipulate";
import * as domTraverse from "../../dom/traverse";
import * as domUtils from "../../dom/utils";
import * as ioFile from "../../io/file";
import * as timing from "../../timing/timing";
import UrlSlug from "../../url/Slug";


window.mojave = {
    timing: timing,
    date: {
        compare: dateCompare,
        format: dateFormat,
    },
    dom: {
        attr: domAttr,
        css: domCSS,
        events: domEvents,
        manipulate: domManipulate,
        traverse: domTraverse,
        utils: domUtils,
    },
    io: {
        file: ioFile,
    },
    url: {
        Slug: UrlSlug,
    },
};
