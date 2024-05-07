var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CropOriginal = /** @class */ (function (_super) {
    __extends(CropOriginal, _super);
    function CropOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropOriginal.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    CropOriginal.pluginName = "Crop";
    CropOriginal.plugin = "cordova-plugin-crop";
    CropOriginal.pluginRef = "plugins";
    CropOriginal.repo = "https://github.com/IDPLive/Mobile-Plugins/tree/main/cordova-plugin-crop-v1";
    CropOriginal.platforms = ["Android", "iOS"];
    return CropOriginal;
}(AwesomeCordovaNativePlugin));
var Crop = new CropOriginal();
export { Crop };