"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lappview.ts":
/*!*************************!*\
  !*** ./src/lappview.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppView = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var cubismviewmatrix_1 = __webpack_require__(/*! @framework/math/cubismviewmatrix */ "../../../Framework/src/math/cubismviewmatrix.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappsprite_1 = __webpack_require__(/*! ./lappsprite */ "./src/lappsprite.ts");
var touchmanager_1 = __webpack_require__(/*! ./touchmanager */ "./src/touchmanager.ts");
var LAppView = (function () {
    function LAppView() {
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        this.eyeLOpen = 0;
        this.eyeLSmile = 0;
        this.eyeROpen = 0;
        this.eyeRSmile = 0;
        this.eyeBallX = 0;
        this.eyeBallY = 0;
        this.eyeBallForm = 0;
        this.browLY = 0;
        this.browRY = 0;
        this.browLX = 0;
        this.browRX = 0;
        this.browLAngle = 0;
        this.browRAngle = 0;
        this.browLForm = 0;
        this.browRForm = 0;
        this.mouthForm = 0;
        this.mouthOpenY = 0;
        this.cheek = 0;
        this.bodyAngleX = 0;
        this.bodyAngleY = 0;
        this.bodyAngleZ = 0;
        this.breath = 0;
        this.armLA = 0;
        this.armRA = 0;
        this.armLB = 0;
        this.armRB = 0;
        this.handL = 0;
        this.handR = 0;
        this.hairFront = 0;
        this.hairSide = 0;
        this.hairBack = 0;
        this.hairFluffy = 0;
        this.shoulderY = 0;
        this.bustX = 0;
        this.bustY = 0;
        this.baseX = 0;
        this.baseY = 0;
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._touchManager = new touchmanager_1.TouchManager();
        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();
        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();
    }
    LAppView.prototype.initialize = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var ratio = width / height;
        var left = -ratio;
        var right = ratio;
        var bottom = LAppDefine.ViewLogicalLeft;
        var top = LAppDefine.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top);
        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            var screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            var screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale);
        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale);
        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);
    };
    LAppView.prototype.release = function () {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        lappdelegate_1.gl.deleteProgram(this._programId);
        this._programId = null;
    };
    LAppView.prototype.render = function () {
        lappdelegate_1.gl.useProgram(this._programId);
        if (this._back) {
            this._back.render(this._programId);
        }
        if (this._gear) {
            this._gear.render(this._programId);
        }
        lappdelegate_1.gl.flush();
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.angleX = this.angleX;
        live2DManager.angleY = this.angleY;
        live2DManager.angleZ = this.angleZ;
        live2DManager.eyeLOpen = this.eyeLOpen;
        live2DManager.eyeLSmile = this.eyeLSmile;
        live2DManager.eyeROpen = this.eyeROpen;
        live2DManager.eyeRSmile = this.eyeRSmile;
        live2DManager.eyeBallX = this.eyeBallX;
        live2DManager.eyeBallY = this.eyeBallY;
        live2DManager.eyeBallForm = this.eyeBallForm;
        live2DManager.browLY = this.browLY;
        live2DManager.browRY = this.browRY;
        live2DManager.browLX = this.browLX;
        live2DManager.browRX = this.browRX;
        live2DManager.browLAngle = this.browLAngle;
        live2DManager.browRAngle = this.browRAngle;
        live2DManager.browLForm = this.browLForm;
        live2DManager.browRForm = this.browRForm;
        live2DManager.mouthForm = this.mouthForm;
        live2DManager.mouthOpenY = this.mouthOpenY;
        live2DManager.cheek = this.cheek;
        live2DManager.bodyAngleX = this.bodyAngleX;
        live2DManager.bodyAngleY = this.bodyAngleY;
        live2DManager.bodyAngleZ = this.bodyAngleZ;
        live2DManager.breath = this.breath;
        live2DManager.armLA = this.armLA;
        live2DManager.armRA = this.armRA;
        live2DManager.armLB = this.armLB;
        live2DManager.armRB = this.armRB;
        live2DManager.handL = this.handL;
        live2DManager.handR = this.handR;
        live2DManager.hairFront = this.hairFront;
        live2DManager.hairSide = this.hairSide;
        live2DManager.hairBack = this.hairBack;
        live2DManager.hairFluffy = this.hairFluffy;
        live2DManager.shoulderY = this.shoulderY;
        live2DManager.bustX = this.bustX;
        live2DManager.bustY = this.bustY;
        live2DManager.baseX = this.baseX;
        live2DManager.baseY = this.baseY;
        live2DManager.onUpdate();
    };
    LAppView.prototype.initializeSprite = function () {
        var _this = this;
        var width = lappdelegate_1.canvas.width;
        var height = lappdelegate_1.canvas.height;
        var textureManager = lappdelegate_1.LAppDelegate.getInstance().getTextureManager();
        var resourcesPath = LAppDefine.ResourcesPath;
        var imageName = '';
        imageName = LAppDefine.BackImageName;
        var initBackGroundTexture = function (textureInfo) {
            var x = width * 0.5;
            var y = height * 0.5;
            var fwidth = textureInfo.width * 2.0;
            var fheight = height * 0.95;
            _this._back = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
        imageName = LAppDefine.GearImageName;
        var initGearTexture = function (textureInfo) {
            var x = width - textureInfo.width * 0.5;
            var y = height - textureInfo.height * 0.5;
            var fwidth = textureInfo.width;
            var fheight = textureInfo.height;
            _this._gear = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
        if (this._programId == null) {
            this._programId = lappdelegate_1.LAppDelegate.getInstance().createShader();
        }
    };
    LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
        this._touchManager.touchesBegan(pointX, pointY);
    };
    LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
        var viewX = this.transformViewX(this._touchManager.getX());
        var viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX, pointY);
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(viewX, viewY);
    };
    LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(0.0, 0.0);
        {
            var x = this._deviceToScreen.transformX(this._touchManager.getX());
            var y = this._deviceToScreen.transformY(this._touchManager.getY());
            if (LAppDefine.DebugTouchLogEnable) {
                lapppal_1.LAppPal.printMessage("[APP]touchesEnded x: ".concat(x, " y: ").concat(y));
            }
            live2DManager.onTap(x, y);
            if (this._gear.isHit(pointX, pointY)) {
                live2DManager.nextScene();
            }
        }
    };
    LAppView.prototype.transformViewX = function (deviceX) {
        var screenX = this._deviceToScreen.transformX(deviceX);
        return this._viewMatrix.invertTransformX(screenX);
    };
    LAppView.prototype.transformViewY = function (deviceY) {
        var screenY = this._deviceToScreen.transformY(deviceY);
        return this._viewMatrix.invertTransformY(screenY);
    };
    LAppView.prototype.transformScreenX = function (deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    };
    LAppView.prototype.transformScreenY = function (deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    };
    return LAppView;
}());
exports.LAppView = LAppView;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f9a7eceb4f15ae7a3237"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MDMwZDcxM2U2OWM3MzJjNzc2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esa0lBQWdFO0FBQ2hFLHdJQUFvRTtBQUVwRSw4RkFBMkM7QUFDM0Msd0ZBQTBEO0FBQzFELHVHQUF3RDtBQUN4RCx5RUFBb0M7QUFDcEMsa0ZBQTBDO0FBRTFDLHdGQUE4QztBQUs5QztJQUlFO1FBc1NPLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsY0FBUyxHQUFVLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVEsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFRLENBQUMsQ0FBQztRQUVuQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFVLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFRLENBQUMsQ0FBQztR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VUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFPTSxtQ0FBZ0IsR0FBdkIsVUFBd0IsT0FBZTtRQUNyQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF1REgsZUFBQztBQUFELENBQUM7QUFyVlksNEJBQVE7Ozs7Ozs7OztVQ3JCckIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHB2aWV3LnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTWF0cml4NDQgfSBmcm9tICdAZnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHsgQ3ViaXNtVmlld01hdHJpeCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc212aWV3bWF0cml4JztcblxuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICcuL2xhcHBkZWZpbmUnO1xuaW1wb3J0IHsgY2FudmFzLCBnbCwgTEFwcERlbGVnYXRlIH0gZnJvbSAnLi9sYXBwZGVsZWdhdGUnO1xuaW1wb3J0IHsgTEFwcExpdmUyRE1hbmFnZXIgfSBmcm9tICcuL2xhcHBsaXZlMmRtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuaW1wb3J0IHsgTEFwcFNwcml0ZSB9IGZyb20gJy4vbGFwcHNwcml0ZSc7XG5pbXBvcnQgeyBUZXh0dXJlSW5mbyB9IGZyb20gJy4vbGFwcHRleHR1cmVtYW5hZ2VyJztcbmltcG9ydCB7IFRvdWNoTWFuYWdlciB9IGZyb20gJy4vdG91Y2htYW5hZ2VyJztcblxuLyoqXG4gKiDmj4/nlLvjgq/jg6njgrnjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBWaWV3IHtcbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJvZ3JhbUlkID0gbnVsbDtcbiAgICB0aGlzLl9iYWNrID0gbnVsbDtcbiAgICB0aGlzLl9nZWFyID0gbnVsbDtcblxuICAgIC8vIOOCv+ODg+ODgemWouS/guOBruOCpOODmeODs+ODiOeuoeeQhlxuICAgIHRoaXMuX3RvdWNoTWFuYWdlciA9IG5ldyBUb3VjaE1hbmFnZXIoKTtcblxuICAgIC8vIOODh+ODkOOCpOOCueW6p+aomeOBi+OCieOCueOCr+ODquODvOODs+W6p+aomeOBq+WkieaPm+OBmeOCi+OBn+OCgeOBrlxuICAgIHRoaXMuX2RldmljZVRvU2NyZWVuID0gbmV3IEN1YmlzbU1hdHJpeDQ0KCk7XG5cbiAgICAvLyDnlLvpnaLjga7ooajnpLrjga7mi6HlpKfnuK7lsI/jgoTnp7vli5Xjga7lpInmj5vjgpLooYzjgYbooYzliJdcbiAgICB0aGlzLl92aWV3TWF0cml4ID0gbmV3IEN1YmlzbVZpZXdNYXRyaXgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJbjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xuXG4gICAgY29uc3QgcmF0aW86IG51bWJlciA9IHdpZHRoIC8gaGVpZ2h0O1xuICAgIGNvbnN0IGxlZnQ6IG51bWJlciA9IC1yYXRpbztcbiAgICBjb25zdCByaWdodDogbnVtYmVyID0gcmF0aW87XG4gICAgY29uc3QgYm90dG9tOiBudW1iZXIgPSBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTGVmdDtcbiAgICBjb25zdCB0b3A6IG51bWJlciA9IExBcHBEZWZpbmUuVmlld0xvZ2ljYWxSaWdodDtcblxuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0U2NyZWVuUmVjdChsZWZ0LCByaWdodCwgYm90dG9tLCB0b3ApOyAvLyDjg4fjg5DjgqTjgrnjgavlr77lv5zjgZnjgovnlLvpnaLjga7nr4Tlm7LjgIIgWOOBruW3puerr+OAgVjjga7lj7Pnq6/jgIFZ44Gu5LiL56uv44CBWeOBruS4iuerr1xuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2NhbGUoTEFwcERlZmluZS5WaWV3U2NhbGUsIExBcHBEZWZpbmUuVmlld1NjYWxlKTtcblxuICAgIHRoaXMuX2RldmljZVRvU2NyZWVuLmxvYWRJZGVudGl0eSgpO1xuICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgY29uc3Qgc2NyZWVuVzogbnVtYmVyID0gTWF0aC5hYnMocmlnaHQgLSBsZWZ0KTtcbiAgICAgIHRoaXMuX2RldmljZVRvU2NyZWVuLnNjYWxlUmVsYXRpdmUoc2NyZWVuVyAvIHdpZHRoLCAtc2NyZWVuVyAvIHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NyZWVuSDogbnVtYmVyID0gTWF0aC5hYnModG9wIC0gYm90dG9tKTtcbiAgICAgIHRoaXMuX2RldmljZVRvU2NyZWVuLnNjYWxlUmVsYXRpdmUoc2NyZWVuSCAvIGhlaWdodCwgLXNjcmVlbkggLyBoZWlnaHQpO1xuICAgIH1cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2xhdGVSZWxhdGl2ZSgtd2lkdGggKiAwLjUsIC1oZWlnaHQgKiAwLjUpO1xuXG4gICAgLy8g6KGo56S656+E5Zuy44Gu6Kit5a6aXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRNYXhTY2FsZShMQXBwRGVmaW5lLlZpZXdNYXhTY2FsZSk7IC8vIOmZkOeVjOaLoeW8teeOh1xuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWluU2NhbGUoTEFwcERlZmluZS5WaWV3TWluU2NhbGUpOyAvLyDpmZDnlYznuK7lsI/njodcblxuICAgIC8vIOihqOekuuOBp+OBjeOCi+acgOWkp+evhOWbslxuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWF4U2NyZWVuUmVjdChcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhMZWZ0LFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heFJpZ2h0LFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heEJvdHRvbSxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhUb3BcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fdmlld01hdHJpeCA9IG51bGw7XG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbiA9IG51bGw7XG5cbiAgICB0aGlzLl9nZWFyLnJlbGVhc2UoKTtcbiAgICB0aGlzLl9nZWFyID0gbnVsbDtcblxuICAgIHRoaXMuX2JhY2sucmVsZWFzZSgpO1xuICAgIHRoaXMuX2JhY2sgPSBudWxsO1xuXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtSWQpO1xuICAgIHRoaXMuX3Byb2dyYW1JZCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog5o+P55S744GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgIGdsLnVzZVByb2dyYW0odGhpcy5fcHJvZ3JhbUlkKTtcblxuICAgIGlmICh0aGlzLl9iYWNrKSB7XG4gICAgICB0aGlzLl9iYWNrLnJlbmRlcih0aGlzLl9wcm9ncmFtSWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ2Vhcikge1xuICAgICAgdGhpcy5fZ2Vhci5yZW5kZXIodGhpcy5fcHJvZ3JhbUlkKTtcbiAgICB9XG5cbiAgICBnbC5mbHVzaCgpO1xuXG4gICAgY29uc3QgbGl2ZTJETWFuYWdlcjogTEFwcExpdmUyRE1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgbGl2ZTJETWFuYWdlci5zZXRWaWV3TWF0cml4KHRoaXMuX3ZpZXdNYXRyaXgpO1xuLy/ntoHlrprlj4PmlbhcbmxpdmUyRE1hbmFnZXIuYW5nbGVYID0gdGhpcy5hbmdsZVg7XG5saXZlMkRNYW5hZ2VyLmFuZ2xlWSA9IHRoaXMuYW5nbGVZO1xubGl2ZTJETWFuYWdlci5hbmdsZVogPSB0aGlzLmFuZ2xlWjtcbmxpdmUyRE1hbmFnZXIuZXllTE9wZW4gPSB0aGlzLmV5ZUxPcGVuO1xubGl2ZTJETWFuYWdlci5leWVMU21pbGUgPSB0aGlzLmV5ZUxTbWlsZTtcbmxpdmUyRE1hbmFnZXIuZXllUk9wZW4gPSB0aGlzLmV5ZVJPcGVuO1xubGl2ZTJETWFuYWdlci5leWVSU21pbGUgPSB0aGlzLmV5ZVJTbWlsZTtcbmxpdmUyRE1hbmFnZXIuZXllQmFsbFggPSB0aGlzLmV5ZUJhbGxYO1xubGl2ZTJETWFuYWdlci5leWVCYWxsWSA9IHRoaXMuZXllQmFsbFk7XG5saXZlMkRNYW5hZ2VyLmV5ZUJhbGxGb3JtID0gdGhpcy5leWVCYWxsRm9ybTtcbmxpdmUyRE1hbmFnZXIuYnJvd0xZID0gdGhpcy5icm93TFk7XG5saXZlMkRNYW5hZ2VyLmJyb3dSWSA9IHRoaXMuYnJvd1JZO1xubGl2ZTJETWFuYWdlci5icm93TFggPSB0aGlzLmJyb3dMWDtcbmxpdmUyRE1hbmFnZXIuYnJvd1JYID0gdGhpcy5icm93Ulg7XG5saXZlMkRNYW5hZ2VyLmJyb3dMQW5nbGUgPSB0aGlzLmJyb3dMQW5nbGU7XG5saXZlMkRNYW5hZ2VyLmJyb3dSQW5nbGUgPSB0aGlzLmJyb3dSQW5nbGU7XG5saXZlMkRNYW5hZ2VyLmJyb3dMRm9ybSA9IHRoaXMuYnJvd0xGb3JtO1xubGl2ZTJETWFuYWdlci5icm93UkZvcm0gPSB0aGlzLmJyb3dSRm9ybTtcbi8vbW91dGggZm9ybVxubGl2ZTJETWFuYWdlci5tb3V0aEZvcm0gPSB0aGlzLm1vdXRoRm9ybTtcbi8vbW91dGggb3BlbllcbmxpdmUyRE1hbmFnZXIubW91dGhPcGVuWSA9IHRoaXMubW91dGhPcGVuWTtcbmxpdmUyRE1hbmFnZXIuY2hlZWsgPSB0aGlzLmNoZWVrO1xubGl2ZTJETWFuYWdlci5ib2R5QW5nbGVYID0gdGhpcy5ib2R5QW5nbGVYO1xubGl2ZTJETWFuYWdlci5ib2R5QW5nbGVZID0gdGhpcy5ib2R5QW5nbGVZO1xubGl2ZTJETWFuYWdlci5ib2R5QW5nbGVaID0gdGhpcy5ib2R5QW5nbGVaO1xubGl2ZTJETWFuYWdlci5icmVhdGggPSB0aGlzLmJyZWF0aDtcbmxpdmUyRE1hbmFnZXIuYXJtTEEgPSB0aGlzLmFybUxBO1xubGl2ZTJETWFuYWdlci5hcm1SQSA9IHRoaXMuYXJtUkE7XG5saXZlMkRNYW5hZ2VyLmFybUxCID0gdGhpcy5hcm1MQjtcbmxpdmUyRE1hbmFnZXIuYXJtUkIgPSB0aGlzLmFybVJCO1xubGl2ZTJETWFuYWdlci5oYW5kTCA9IHRoaXMuaGFuZEw7XG5saXZlMkRNYW5hZ2VyLmhhbmRSID0gdGhpcy5oYW5kUjtcbmxpdmUyRE1hbmFnZXIuaGFpckZyb250ID0gdGhpcy5oYWlyRnJvbnQ7XG5saXZlMkRNYW5hZ2VyLmhhaXJTaWRlID0gdGhpcy5oYWlyU2lkZTtcbmxpdmUyRE1hbmFnZXIuaGFpckJhY2sgPSB0aGlzLmhhaXJCYWNrO1xubGl2ZTJETWFuYWdlci5oYWlyRmx1ZmZ5ID0gdGhpcy5oYWlyRmx1ZmZ5O1xubGl2ZTJETWFuYWdlci5zaG91bGRlclkgPSB0aGlzLnNob3VsZGVyWTtcbmxpdmUyRE1hbmFnZXIuYnVzdFggPSB0aGlzLmJ1c3RYO1xubGl2ZTJETWFuYWdlci5idXN0WSA9IHRoaXMuYnVzdFk7XG5saXZlMkRNYW5hZ2VyLmJhc2VYID0gdGhpcy5iYXNlWDtcbmxpdmUyRE1hbmFnZXIuYmFzZVkgPSB0aGlzLmJhc2VZO1xuXG4gICAgbGl2ZTJETWFuYWdlci5vblVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruWIneacn+WMluOCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemVTcHJpdGUoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQ6IG51bWJlciA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjb25zdCB0ZXh0dXJlTWFuYWdlciA9IExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLmdldFRleHR1cmVNYW5hZ2VyKCk7XG4gICAgY29uc3QgcmVzb3VyY2VzUGF0aCA9IExBcHBEZWZpbmUuUmVzb3VyY2VzUGF0aDtcblxuICAgIGxldCBpbWFnZU5hbWUgPSAnJztcblxuICAgIC8vIOiDjOaZr+eUu+WDj+WIneacn+WMllxuICAgIGltYWdlTmFtZSA9IExBcHBEZWZpbmUuQmFja0ltYWdlTmFtZTtcblxuICAgIC8vIOmdnuWQjOacn+OBquOBruOBp+OCs+ODvOODq+ODkOODg+OCr+mWouaVsOOCkuS9nOaIkFxuICAgIGNvbnN0IGluaXRCYWNrR3JvdW5kVGV4dHVyZSA9ICh0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8pOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHdpZHRoICogMC41O1xuICAgICAgY29uc3QgeTogbnVtYmVyID0gaGVpZ2h0ICogMC41O1xuXG4gICAgICBjb25zdCBmd2lkdGggPSB0ZXh0dXJlSW5mby53aWR0aCAqIDIuMDtcbiAgICAgIGNvbnN0IGZoZWlnaHQgPSBoZWlnaHQgKiAwLjk1O1xuICAgICAgdGhpcy5fYmFjayA9IG5ldyBMQXBwU3ByaXRlKHgsIHksIGZ3aWR0aCwgZmhlaWdodCwgdGV4dHVyZUluZm8uaWQpO1xuICAgIH07XG5cbiAgICB0ZXh0dXJlTWFuYWdlci5jcmVhdGVUZXh0dXJlRnJvbVBuZ0ZpbGUoXG4gICAgICByZXNvdXJjZXNQYXRoICsgaW1hZ2VOYW1lLFxuICAgICAgZmFsc2UsXG4gICAgICBpbml0QmFja0dyb3VuZFRleHR1cmVcbiAgICApO1xuXG4gICAgLy8g5q2v6LuK55S75YOP5Yid5pyf5YyWXG4gICAgaW1hZ2VOYW1lID0gTEFwcERlZmluZS5HZWFySW1hZ2VOYW1lO1xuICAgIGNvbnN0IGluaXRHZWFyVGV4dHVyZSA9ICh0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8pOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHggPSB3aWR0aCAtIHRleHR1cmVJbmZvLndpZHRoICogMC41O1xuICAgICAgY29uc3QgeSA9IGhlaWdodCAtIHRleHR1cmVJbmZvLmhlaWdodCAqIDAuNTtcbiAgICAgIGNvbnN0IGZ3aWR0aCA9IHRleHR1cmVJbmZvLndpZHRoO1xuICAgICAgY29uc3QgZmhlaWdodCA9IHRleHR1cmVJbmZvLmhlaWdodDtcbiAgICAgIHRoaXMuX2dlYXIgPSBuZXcgTEFwcFNwcml0ZSh4LCB5LCBmd2lkdGgsIGZoZWlnaHQsIHRleHR1cmVJbmZvLmlkKTtcbiAgICB9O1xuXG4gICAgdGV4dHVyZU1hbmFnZXIuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKFxuICAgICAgcmVzb3VyY2VzUGF0aCArIGltYWdlTmFtZSxcbiAgICAgIGZhbHNlLFxuICAgICAgaW5pdEdlYXJUZXh0dXJlXG4gICAgKTtcblxuICAgIC8vIOOCt+OCp+ODvOODgOODvOOCkuS9nOaIkFxuICAgIGlmICh0aGlzLl9wcm9ncmFtSWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcHJvZ3JhbUlkID0gTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuY3JlYXRlU2hhZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBleOCjOOBn+aZguOBq+WRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzQmVnYW4ocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyLnRvdWNoZXNCZWdhbihwb2ludFgsIHBvaW50WSk7XG4gIH1cblxuICAvKipcbiAgICog44K/44OD44OB44GX44Gm44GE44KL44Go44GN44Gr44Od44Kk44Oz44K/44GM5YuV44GE44Gf44KJ5ZG844Gw44KM44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludFgg44K544Kv44Oq44O844OzWOW6p+aomVxuICAgKiBAcGFyYW0gcG9pbnRZIOOCueOCr+ODquODvOODs1nluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvblRvdWNoZXNNb3ZlZChwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2aWV3WDogbnVtYmVyID0gdGhpcy50cmFuc2Zvcm1WaWV3WCh0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WCgpKTtcbiAgICBjb25zdCB2aWV3WTogbnVtYmVyID0gdGhpcy50cmFuc2Zvcm1WaWV3WSh0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WSgpKTtcblxuICAgIHRoaXMuX3RvdWNoTWFuYWdlci50b3VjaGVzTW92ZWQocG9pbnRYLCBwb2ludFkpO1xuXG4gICAgY29uc3QgbGl2ZTJETWFuYWdlcjogTEFwcExpdmUyRE1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIGxpdmUyRE1hbmFnZXIub25EcmFnKHZpZXdYLCB2aWV3WSk7XG4gIH1cblxuICAvKipcbiAgICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludFgg44K544Kv44Oq44O844OzWOW6p+aomVxuICAgKiBAcGFyYW0gcG9pbnRZIOOCueOCr+ODquODvOODs1nluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvblRvdWNoZXNFbmRlZChwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyDjgr/jg4Pjg4HntYLkuoZcbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTGl2ZTJETWFuYWdlciA9IExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgbGl2ZTJETWFuYWdlci5vbkRyYWcoMC4wLCAwLjApO1xuXG4gICAge1xuICAgICAgLy8g44K344Oz44Kw44Or44K/44OD44OXXG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKFxuICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WCgpXG4gICAgICApOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoXG4gICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5nZXRZKClcbiAgICAgICk7IC8vIOirlueQhuW6p+aomeWkieWMluOBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuXG4gICAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z1RvdWNoTG9nRW5hYmxlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXXRvdWNoZXNFbmRlZCB4OiAke3h9IHk6ICR7eX1gKTtcbiAgICAgIH1cbiAgICAgIGxpdmUyRE1hbmFnZXIub25UYXAoeCwgeSk7XG5cbiAgICAgIC8vIOatr+i7iuOBq+OCv+ODg+ODl+OBl+OBn+OBi1xuICAgICAgaWYgKHRoaXMuX2dlYXIuaXNIaXQocG9pbnRYLCBwb2ludFkpKSB7XG4gICAgICAgIGxpdmUyRE1hbmFnZXIubmV4dFNjZW5lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFjluqfmqJnjgpJWaWV35bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBkZXZpY2VYIOODh+ODkOOCpOOCuVjluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1WaWV3WChkZXZpY2VYOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcmVlblg6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVgoZGV2aWNlWCk7IC8vIOirlueQhuW6p+aomeWkieaPm+OBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuICAgIHJldHVybiB0aGlzLl92aWV3TWF0cml4LmludmVydFRyYW5zZm9ybVgoc2NyZWVuWCk7IC8vIOaLoeWkp+OAgee4ruWwj+OAgeenu+WLleW+jOOBruWApOOAglxuICB9XG5cbiAgLyoqXG4gICAqIFnluqfmqJnjgpJWaWV35bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBkZXZpY2VZIOODh+ODkOOCpOOCuVnluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1WaWV3WShkZXZpY2VZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcmVlblk6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoZGV2aWNlWSk7IC8vIOirlueQhuW6p+aomeWkieaPm+OBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuICAgIHJldHVybiB0aGlzLl92aWV3TWF0cml4LmludmVydFRyYW5zZm9ybVkoc2NyZWVuWSk7XG4gIH1cblxuICAvKipcbiAgICogWOW6p+aomeOCklNjcmVlbuW6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKiBAcGFyYW0gZGV2aWNlWCDjg4fjg5DjgqTjgrlY5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtU2NyZWVuWChkZXZpY2VYOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKGRldmljZVgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFnluqfmqJnjgpJTY3JlZW7luqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGRldmljZVkg44OH44OQ44Kk44K5WeW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVNjcmVlblkoZGV2aWNlWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWShkZXZpY2VZKTtcbiAgfVxuXG4gIF90b3VjaE1hbmFnZXI6IFRvdWNoTWFuYWdlcjsgLy8g44K/44OD44OB44Oe44ON44O844K444Oj44O8XG4gIF9kZXZpY2VUb1NjcmVlbjogQ3ViaXNtTWF0cml4NDQ7IC8vIOODh+ODkOOCpOOCueOBi+OCieOCueOCr+ODquODvOODs+OBuOOBruihjOWIl1xuICBfdmlld01hdHJpeDogQ3ViaXNtVmlld01hdHJpeDsgLy8gdmlld01hdHJpeFxuICBfcHJvZ3JhbUlkOiBXZWJHTFByb2dyYW07IC8vIOOCt+OCp+ODvOODgElEXG4gIF9iYWNrOiBMQXBwU3ByaXRlOyAvLyDog4zmma/nlLvlg49cbiAgX2dlYXI6IExBcHBTcHJpdGU7IC8vIOOCruOCoueUu+WDj1xuICBfY2hhbmdlTW9kZWw6IGJvb2xlYW47IC8vIOODouODh+ODq+WIh+OCiuabv+OBiOODleODqeOCsFxuICBfaXNDbGljazogYm9vbGVhbjsgLy8g44Kv44Oq44OD44Kv5LitXG5cbiAgLy8g5Y+D5pW45pW45YC85Yid5aeLXG4gIHB1YmxpYyBhbmdsZVg6bnVtYmVyID0gMDtcbiAgcHVibGljIGFuZ2xlWTpudW1iZXIgPSAwO1xuICBwdWJsaWMgYW5nbGVaOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVMT3BlbjpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllTFNtaWxlOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVST3BlbjpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllUlNtaWxlOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVCYWxsWDpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllQmFsbFk6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUJhbGxGb3JtOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xZOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JZOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xYOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JYOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xBbmdsZTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dSQW5nbGU6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93TEZvcm06bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93UkZvcm06bnVtYmVyPTA7XG4gIC8vbW91dGggZm9ybVxuICBwdWJsaWMgbW91dGhGb3JtOiBudW1iZXIgPSAwO1xuICAvL21vdXRoIG9wZW5ZXG4gIHB1YmxpYyBtb3V0aE9wZW5ZOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2hlZWs6bnVtYmVyPTA7XG4gIHB1YmxpYyBib2R5QW5nbGVYOm51bWJlciA9IDA7XG4gIHB1YmxpYyBib2R5QW5nbGVZOm51bWJlciA9IDA7XG4gIHB1YmxpYyBib2R5QW5nbGVaOm51bWJlciA9IDA7XG4gIHB1YmxpYyBicmVhdGg6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1MQTpudW1iZXI9MDtcbiAgcHVibGljIGFybVJBOm51bWJlcj0wO1xuICBwdWJsaWMgYXJtTEI6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1SQjpudW1iZXI9MDtcbiAgcHVibGljIGhhbmRMOm51bWJlcj0wO1xuICBwdWJsaWMgaGFuZFI6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyRnJvbnQ6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyU2lkZTpudW1iZXI9MDtcbiAgcHVibGljIGhhaXJCYWNrOm51bWJlcj0wO1xuICBwdWJsaWMgaGFpckZsdWZmeTpudW1iZXI9MDtcbiAgcHVibGljIHNob3VsZGVyWTpudW1iZXI9MDtcbiAgcHVibGljIGJ1c3RYOm51bWJlcj0wO1xuICBwdWJsaWMgYnVzdFk6bnVtYmVyPTA7XG4gIHB1YmxpYyBiYXNlWDpudW1iZXI9MDtcbiAgcHVibGljIGJhc2VZOm51bWJlcj0wO1xuXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZjlhN2VjZWI0ZjE1YWU3YTMyMzdcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==