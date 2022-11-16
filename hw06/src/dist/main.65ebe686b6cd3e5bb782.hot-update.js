"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/lapplive2dmanager.ts":
/*!**********************************!*\
  !*** ./src/lapplive2dmanager.ts ***!
  \**********************************/
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
exports.LAppLive2DManager = exports.s_instance = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lappmodel_1 = __webpack_require__(/*! ./lappmodel */ "./src/lappmodel.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
exports.s_instance = null;
var LAppLive2DManager = (function () {
    function LAppLive2DManager() {
        this._finishedMotion = function (self) {
            lapppal_1.LAppPal.printMessage('Motion Finished:');
            console.log(self);
        };
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
        this._viewMatrix = new cubismmatrix44_1.CubismMatrix44();
        this._models = new csmvector_1.csmVector();
        this._sceneIndex = 0;
        this.changeScene(this._sceneIndex);
    }
    LAppLive2DManager.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppLive2DManager();
        }
        return exports.s_instance;
    };
    LAppLive2DManager.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppLive2DManager.prototype.getModel = function (no) {
        if (no < this._models.getSize()) {
            return this._models.at(no);
        }
        return null;
    };
    LAppLive2DManager.prototype.releaseAllModel = function () {
        for (var i = 0; i < this._models.getSize(); i++) {
            this._models.at(i).release();
            this._models.set(i, null);
        }
        this._models.clear();
    };
    LAppLive2DManager.prototype.onDrag = function (x, y) {
        for (var i = 0; i < this._models.getSize(); i++) {
            var model = this.getModel(i);
            if (model) {
                model.setDragging(x, y);
            }
        }
    };
    LAppLive2DManager.prototype.onTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: ".concat(x.toFixed(2), " y: ").concat(y.toFixed(2), "}"));
        }
        for (var i = 0; i < this._models.getSize(); i++) {
            if (this._models.at(i).hitTest(LAppDefine.HitAreaNameHead, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [".concat(LAppDefine.HitAreaNameHead, "]"));
                }
                this._models.at(i).setRandomExpression();
            }
            else if (this._models.at(i).hitTest(LAppDefine.HitAreaNameBody, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [".concat(LAppDefine.HitAreaNameBody, "]"));
                }
                this._models
                    .at(i)
                    .startRandomMotion(LAppDefine.MotionGroupTapBody, LAppDefine.PriorityNormal, this._finishedMotion);
            }
        }
    };
    LAppLive2DManager.prototype.onUpdate = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var modelCount = this._models.getSize();
        for (var i = 0; i < modelCount; ++i) {
            var projection = new cubismmatrix44_1.CubismMatrix44();
            var model = this.getModel(i);
            model.angleX = this.angleX;
            model.angleY = this.angleY;
            model.angleZ = this.angleZ;
            model.eyeLOpen = this.eyeLOpen;
            model.eyeLSmile = this.eyeLSmile;
            model.eyeROpen = this.eyeROpen;
            model.eyeRSmile = this.eyeRSmile;
            model.eyeBallX = this.eyeBallX;
            model.eyeBallY = this.eyeBallY;
            model.eyeBallForm = this.eyeBallForm;
            model.browLY = this.browLY;
            model.browRY = this.browRY;
            model.browLX = this.browLX;
            model.browRX = this.browRX;
            model.browLAngle = this.browLAngle;
            model.browRAngle = this.browRAngle;
            model.browLForm = this.browLForm;
            model.browRForm = this.browRForm;
            model.mouthForm = this.mouthForm;
            model.mouthOpenY = this.mouthOpenY;
            model.cheek = this.cheek;
            model.bodyAngleX = this.bodyAngleX;
            model.bodyAngleY = this.bodyAngleY;
            model.bodyAngleZ = this.bodyAngleZ;
            model.breath = this.breath;
            model.armLA = this.armLA;
            model.armRA = this.armRA;
            model.armLB = this.armLB;
            model.armRB = this.armRB;
            model.handL = this.handL;
            model.handR = this.handR;
            model.hairFront = this.hairFront;
            model.hairSide = this.hairSide;
            model.hairBack = this.hairBack;
            model.hairFluffy = this.hairFluffy;
            model.shoulderY = this.shoulderY;
            model.bustX = this.bustX;
            model.bustY = this.bustY;
            model.baseX = this.baseX;
            model.baseY = this.baseY;
            if (model.getModel()) {
                if (model.getModel().getCanvasWidth() > 1.0 && width < height) {
                    model.getModelMatrix().setWidth(2.0);
                    projection.scale(1.0, width / height);
                }
                else {
                    projection.scale(height / width, 1.0);
                }
                if (this._viewMatrix != null) {
                    projection.multiplyByMatrix(this._viewMatrix);
                }
            }
            model.update();
            model.draw(projection);
        }
    };
    LAppLive2DManager.prototype.nextScene = function () {
        var no = (this._sceneIndex + 1) % LAppDefine.ModelDirSize;
        this.changeScene(no);
    };
    LAppLive2DManager.prototype.changeScene = function (index) {
        this._sceneIndex = index;
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]model index: ".concat(this._sceneIndex));
        }
        var model = LAppDefine.ModelDir[index];
        var modelPath = LAppDefine.ResourcesPath + model + '/';
        var modelJsonName = LAppDefine.ModelDir[index];
        modelJsonName += '.model3.json';
        this.releaseAllModel();
        this._models.pushBack(new lappmodel_1.LAppModel());
        this._models.at(0).loadAssets(modelPath, modelJsonName);
    };
    LAppLive2DManager.prototype.setViewMatrix = function (m) {
        for (var i = 0; i < 16; i++) {
            this._viewMatrix.getArray()[i] = m.getArray()[i];
        }
    };
    return LAppLive2DManager;
}());
exports.LAppLive2DManager = LAppLive2DManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "93f2cf6527d5ac89a9f5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NWViZTY4NmI2Y2QzZTViYjc4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esa0lBQWdFO0FBRWhFLG1IQUFzRDtBQUV0RCw4RkFBMkM7QUFDM0Msd0ZBQXdDO0FBQ3hDLCtFQUF3QztBQUN4Qyx5RUFBb0M7QUFFekIsa0JBQVUsR0FBc0IsSUFBSSxDQUFDO0FBTWhEO0lBK05FO1FBV0Esb0JBQWUsR0FBRyxVQUFDLElBQW1CO1lBQ3BDLGlCQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUM7UUFHSyxXQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFVLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFRLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBUSxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBQ2hCLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQVEsQ0FBQyxDQUFDO1FBQ25CLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFFbkIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQUssR0FBUSxDQUFDLENBQUM7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ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBBQ3ViaXNtTW90aW9uIH0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vYWN1YmlzbW1vdGlvbic7XG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcblxuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICcuL2xhcHBkZWZpbmUnO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9sYXBwZGVsZWdhdGUnO1xuaW1wb3J0IHsgTEFwcE1vZGVsIH0gZnJvbSAnLi9sYXBwbW9kZWwnO1xuaW1wb3J0IHsgTEFwcFBhbCB9IGZyb20gJy4vbGFwcHBhbCc7XG5cbmV4cG9ydCBsZXQgc19pbnN0YW5jZTogTEFwcExpdmUyRE1hbmFnZXIgPSBudWxsO1xuXG4vKipcbiAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBq+OBiuOBhOOBpkN1YmlzbU1vZGVs44KS566h55CG44GZ44KL44Kv44Op44K5XG4gKiDjg6Ljg4fjg6vnlJ/miJDjgajnoLTmo4TjgIHjgr/jg4Pjg5fjgqTjg5njg7Pjg4jjga7lh6bnkIbjgIHjg6Ljg4fjg6vliIfjgormm7/jgYjjgpLooYzjgYbjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBMaXZlMkRNYW5hZ2VyIHtcbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkui/lOOBmeOAglxuICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnjgYznlJ/miJDjgZXjgozjgabjgYTjgarjgYTloLTlkIjjga/lhoXpg6jjgafjgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcbiAgICpcbiAgICogQHJldHVybiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTEFwcExpdmUyRE1hbmFnZXIge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcExpdmUyRE1hbmFnZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44K344O844Oz44Gn5L+d5oyB44GX44Gm44GE44KL44Oi44OH44Or44KS6L+U44GZ44CCXG4gICAqXG4gICAqIEBwYXJhbSBubyDjg6Ljg4fjg6vjg6rjgrnjg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICogQHJldHVybiDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLov5TjgZnjgILjgqTjg7Pjg4fjg4Pjgq/jgrnlgKTjgYznr4Tlm7LlpJbjga7loLTlkIjjga9OVUxM44KS6L+U44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZ2V0TW9kZWwobm86IG51bWJlcik6IExBcHBNb2RlbCB7XG4gICAgaWYgKG5vIDwgdGhpcy5fbW9kZWxzLmdldFNpemUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZGVscy5hdChubyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44K344O844Oz44Gn5L+d5oyB44GX44Gm44GE44KL44GZ44G544Gm44Gu44Oi44OH44Or44KS6Kej5pS+44GZ44KLXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZUFsbE1vZGVsKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICB0aGlzLl9tb2RlbHMuYXQoaSkucmVsZWFzZSgpO1xuICAgICAgdGhpcy5fbW9kZWxzLnNldChpLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbHMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvpnaLjgpLjg4njg6njg4PjgrDjgZfjgZ/mmYLjga7lh6bnkIZcbiAgICpcbiAgICogQHBhcmFtIHgg55S76Z2i44GuWOW6p+aomVxuICAgKiBAcGFyYW0geSDnlLvpnaLjga5Z5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25EcmFnKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbHMuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGNvbnN0IG1vZGVsOiBMQXBwTW9kZWwgPSB0aGlzLmdldE1vZGVsKGkpO1xuXG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWwuc2V0RHJhZ2dpbmcoeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+mdouOCkuOCv+ODg+ODl+OBl+OBn+aZguOBruWHpueQhlxuICAgKlxuICAgKiBAcGFyYW0geCDnlLvpnaLjga5Y5bqn5qiZXG4gICAqIEBwYXJhbSB5IOeUu+mdouOBrlnluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvblRhcCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnTG9nRW5hYmxlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcbiAgICAgICAgYFtBUFBddGFwIHBvaW50OiB7eDogJHt4LnRvRml4ZWQoMil9IHk6ICR7eS50b0ZpeGVkKDIpfX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxzLmF0KGkpLmhpdFRlc3QoTEFwcERlZmluZS5IaXRBcmVhTmFtZUhlYWQsIHgsIHkpKSB7XG4gICAgICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnTG9nRW5hYmxlKSB7XG4gICAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXG4gICAgICAgICAgICBgW0FQUF1oaXQgYXJlYTogWyR7TEFwcERlZmluZS5IaXRBcmVhTmFtZUhlYWR9XWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vZGVscy5hdChpKS5zZXRSYW5kb21FeHByZXNzaW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX21vZGVscy5hdChpKS5oaXRUZXN0KExBcHBEZWZpbmUuSGl0QXJlYU5hbWVCb2R5LCB4LCB5KSkge1xuICAgICAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z0xvZ0VuYWJsZSkge1xuICAgICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICAgICAgYFtBUFBdaGl0IGFyZWE6IFske0xBcHBEZWZpbmUuSGl0QXJlYU5hbWVCb2R5fV1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2RlbHNcbiAgICAgICAgICAuYXQoaSlcbiAgICAgICAgICAuc3RhcnRSYW5kb21Nb3Rpb24oXG4gICAgICAgICAgICBMQXBwRGVmaW5lLk1vdGlvbkdyb3VwVGFwQm9keSxcbiAgICAgICAgICAgIExBcHBEZWZpbmUuUHJpb3JpdHlOb3JtYWwsXG4gICAgICAgICAgICB0aGlzLl9maW5pc2hlZE1vdGlvblxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+mdouOCkuabtOaWsOOBmeOCi+OBqOOBjeOBruWHpueQhlxuICAgKiDjg6Ljg4fjg6vjga7mm7TmlrDlh6bnkIblj4rjgbPmj4/nlLvlh6bnkIbjgpLooYzjgYZcbiAgICovXG4gIHB1YmxpYyBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcblxuICAgIGNvbnN0IG1vZGVsQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVscy5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQ291bnQ7ICsraSkge1xuICAgICAgY29uc3QgcHJvamVjdGlvbjogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICAgIGNvbnN0IG1vZGVsOiBMQXBwTW9kZWwgPSB0aGlzLmdldE1vZGVsKGkpO1xuXG4gICAgICBtb2RlbC5hbmdsZVggPSB0aGlzLmFuZ2xlWDtcbiAgICAgIG1vZGVsLmFuZ2xlWSA9IHRoaXMuYW5nbGVZO1xuICAgICAgbW9kZWwuYW5nbGVaID0gdGhpcy5hbmdsZVo7XG4gICAgICBtb2RlbC5leWVMT3BlbiA9IHRoaXMuZXllTE9wZW47XG4gICAgICBtb2RlbC5leWVMU21pbGUgPSB0aGlzLmV5ZUxTbWlsZTtcbiAgICAgIG1vZGVsLmV5ZVJPcGVuID0gdGhpcy5leWVST3BlbjtcbiAgICAgIG1vZGVsLmV5ZVJTbWlsZSA9IHRoaXMuZXllUlNtaWxlO1xuICAgICAgbW9kZWwuZXllQmFsbFggPSB0aGlzLmV5ZUJhbGxYO1xuICAgICAgbW9kZWwuZXllQmFsbFkgPSB0aGlzLmV5ZUJhbGxZO1xuICAgICAgbW9kZWwuZXllQmFsbEZvcm0gPSB0aGlzLmV5ZUJhbGxGb3JtO1xuICAgICAgbW9kZWwuYnJvd0xZID0gdGhpcy5icm93TFk7XG4gICAgICBtb2RlbC5icm93UlkgPSB0aGlzLmJyb3dSWTtcbiAgICAgIG1vZGVsLmJyb3dMWCA9IHRoaXMuYnJvd0xYO1xuICAgICAgbW9kZWwuYnJvd1JYID0gdGhpcy5icm93Ulg7XG4gICAgICBtb2RlbC5icm93TEFuZ2xlID0gdGhpcy5icm93TEFuZ2xlO1xuICAgICAgbW9kZWwuYnJvd1JBbmdsZSA9IHRoaXMuYnJvd1JBbmdsZTtcbiAgICAgIG1vZGVsLmJyb3dMRm9ybSA9IHRoaXMuYnJvd0xGb3JtO1xuICAgICAgbW9kZWwuYnJvd1JGb3JtID0gdGhpcy5icm93UkZvcm07XG4gICAgICAvL21vdXRoIGZvcm1cbiAgICAgIG1vZGVsLm1vdXRoRm9ybSA9IHRoaXMubW91dGhGb3JtO1xuICAgICAgLy9tb3V0aCBvcGVuWVxuICAgICAgbW9kZWwubW91dGhPcGVuWSA9IHRoaXMubW91dGhPcGVuWTtcbiAgICAgIG1vZGVsLmNoZWVrID0gdGhpcy5jaGVlaztcbiAgICAgIG1vZGVsLmJvZHlBbmdsZVggPSB0aGlzLmJvZHlBbmdsZVg7XG4gICAgICBtb2RlbC5ib2R5QW5nbGVZID0gdGhpcy5ib2R5QW5nbGVZO1xuICAgICAgbW9kZWwuYm9keUFuZ2xlWiA9IHRoaXMuYm9keUFuZ2xlWjtcbiAgICAgIG1vZGVsLmJyZWF0aCA9IHRoaXMuYnJlYXRoO1xuICAgICAgbW9kZWwuYXJtTEEgPSB0aGlzLmFybUxBO1xuICAgICAgbW9kZWwuYXJtUkEgPSB0aGlzLmFybVJBO1xuICAgICAgbW9kZWwuYXJtTEIgPSB0aGlzLmFybUxCO1xuICAgICAgbW9kZWwuYXJtUkIgPSB0aGlzLmFybVJCO1xuICAgICAgbW9kZWwuaGFuZEwgPSB0aGlzLmhhbmRMO1xuICAgICAgbW9kZWwuaGFuZFIgPSB0aGlzLmhhbmRSO1xuICAgICAgbW9kZWwuaGFpckZyb250ID0gdGhpcy5oYWlyRnJvbnQ7XG4gICAgICBtb2RlbC5oYWlyU2lkZSA9IHRoaXMuaGFpclNpZGU7XG4gICAgICBtb2RlbC5oYWlyQmFjayA9IHRoaXMuaGFpckJhY2s7XG4gICAgICBtb2RlbC5oYWlyRmx1ZmZ5ID0gdGhpcy5oYWlyRmx1ZmZ5O1xuICAgICAgbW9kZWwuc2hvdWxkZXJZID0gdGhpcy5zaG91bGRlclk7XG4gICAgICBtb2RlbC5idXN0WCA9IHRoaXMuYnVzdFg7XG4gICAgICBtb2RlbC5idXN0WSA9IHRoaXMuYnVzdFk7XG4gICAgICBtb2RlbC5iYXNlWCA9IHRoaXMuYmFzZVg7XG4gICAgICBtb2RlbC5iYXNlWSA9IHRoaXMuYmFzZVk7XG5cbiAgICAgIGlmIChtb2RlbC5nZXRNb2RlbCgpKSB7XG4gICAgICAgIGlmIChtb2RlbC5nZXRNb2RlbCgpLmdldENhbnZhc1dpZHRoKCkgPiAxLjAgJiYgd2lkdGggPCBoZWlnaHQpIHtcbiAgICAgICAgICAvLyDmqKrjgavplbfjgYTjg6Ljg4fjg6vjgpLnuKbplbfjgqbjgqPjg7Pjg4njgqbjgavooajnpLrjgZnjgovpmpvjg6Ljg4fjg6vjga7mqKrjgrXjgqTjgrrjgadzY2FsZeOCkueul+WHuuOBmeOCi1xuICAgICAgICAgIG1vZGVsLmdldE1vZGVsTWF0cml4KCkuc2V0V2lkdGgoMi4wKTtcbiAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKDEuMCwgd2lkdGggLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoaGVpZ2h0IC8gd2lkdGgsIDEuMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlv4XopoHjgYzjgYLjgozjgbDjgZPjgZPjgafkuZfnrpdcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdNYXRyaXggIT0gbnVsbCkge1xuICAgICAgICAgIHByb2plY3Rpb24ubXVsdGlwbHlCeU1hdHJpeCh0aGlzLl92aWV3TWF0cml4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtb2RlbC51cGRhdGUoKTtcbiAgICAgIG1vZGVsLmRyYXcocHJvamVjdGlvbik7IC8vIOWPgueFp+a4oeOBl+OBquOBruOBp3Byb2plY3Rpb27jga/lpInos6rjgZnjgovjgIJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5qyh44Gu44K344O844Oz44Gr5YiH44KK44GL44GI44KLXG4gICAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBp+OBr+ODouODh+ODq+OCu+ODg+ODiOOBruWIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIG5leHRTY2VuZSgpOiB2b2lkIHtcbiAgICBjb25zdCBubzogbnVtYmVyID0gKHRoaXMuX3NjZW5lSW5kZXggKyAxKSAlIExBcHBEZWZpbmUuTW9kZWxEaXJTaXplO1xuICAgIHRoaXMuY2hhbmdlU2NlbmUobm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuWIh+OCiuabv+OBiOOCi1xuICAgKiDjgrXjg7Pjg5fjg6vjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjgafjga/jg6Ljg4fjg6vjgrvjg4Pjg4jjga7liIfjgormm7/jgYjjgpLooYzjgYbjgIJcbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VTY2VuZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2NlbmVJbmRleCA9IGluZGV4O1xuICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnTG9nRW5hYmxlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1tb2RlbCBpbmRleDogJHt0aGlzLl9zY2VuZUluZGV4fWApO1xuICAgIH1cblxuICAgIC8vIE1vZGVsRGlyW13jgavkv53mjIHjgZfjgZ/jg4fjgqPjg6zjgq/jg4jjg6rlkI3jgYvjgolcbiAgICAvLyBtb2RlbDMuanNvbuOBruODkeOCueOCkuaxuuWumuOBmeOCi+OAglxuICAgIC8vIOODh+OCo+ODrOOCr+ODiOODquWQjeOBqG1vZGVsMy5qc29u44Gu5ZCN5YmN44KS5LiA6Ie044GV44Gb44Gm44GK44GP44GT44Go44CCXG4gICAgY29uc3QgbW9kZWw6IHN0cmluZyA9IExBcHBEZWZpbmUuTW9kZWxEaXJbaW5kZXhdO1xuICAgIGNvbnN0IG1vZGVsUGF0aDogc3RyaW5nID0gTEFwcERlZmluZS5SZXNvdXJjZXNQYXRoICsgbW9kZWwgKyAnLyc7XG4gICAgbGV0IG1vZGVsSnNvbk5hbWU6IHN0cmluZyA9IExBcHBEZWZpbmUuTW9kZWxEaXJbaW5kZXhdO1xuICAgIG1vZGVsSnNvbk5hbWUgKz0gJy5tb2RlbDMuanNvbic7XG5cbiAgICB0aGlzLnJlbGVhc2VBbGxNb2RlbCgpO1xuICAgIHRoaXMuX21vZGVscy5wdXNoQmFjayhuZXcgTEFwcE1vZGVsKCkpO1xuICAgIHRoaXMuX21vZGVscy5hdCgwKS5sb2FkQXNzZXRzKG1vZGVsUGF0aCwgbW9kZWxKc29uTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Vmlld01hdHJpeChtOiBDdWJpc21NYXRyaXg0NCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdGhpcy5fdmlld01hdHJpeC5nZXRBcnJheSgpW2ldID0gbS5nZXRBcnJheSgpW2ldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgY3NtVmVjdG9yPExBcHBNb2RlbD4oKTtcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gMDtcbiAgICB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuX3NjZW5lSW5kZXgpO1xuICB9XG5cbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg6Ljg4fjg6vmj4/nlLvjgavnlKjjgYTjgot2aWV36KGM5YiXXG4gIF9tb2RlbHM6IGNzbVZlY3RvcjxMQXBwTW9kZWw+OyAvLyDjg6Ljg4fjg6vjgqTjg7Pjgrnjgr/jg7Pjgrnjga7jgrPjg7Pjg4bjg4pcbiAgX3NjZW5lSW5kZXg6IG51bWJlcjsgLy8g6KGo56S644GZ44KL44K344O844Oz44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gIC8vIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBfZmluaXNoZWRNb3Rpb24gPSAoc2VsZjogQUN1YmlzbU1vdGlvbik6IHZvaWQgPT4ge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdNb3Rpb24gRmluaXNoZWQ6Jyk7XG4gICAgY29uc29sZS5sb2coc2VsZik7XG4gIH07XG5cbiAgLy8g5Y+D5pW45pW45YC85Yid5aeLXG4gIHB1YmxpYyBhbmdsZVg6bnVtYmVyID0gMDtcbiAgcHVibGljIGFuZ2xlWTpudW1iZXIgPSAwO1xuICBwdWJsaWMgYW5nbGVaOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVMT3BlbjpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllTFNtaWxlOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVST3BlbjpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllUlNtaWxlOm51bWJlciA9IDA7XG4gIHB1YmxpYyBleWVCYWxsWDpudW1iZXIgPSAwO1xuICBwdWJsaWMgZXllQmFsbFk6bnVtYmVyID0gMDtcbiAgcHVibGljIGV5ZUJhbGxGb3JtOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xZOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JZOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xYOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd1JYOm51bWJlcj0wO1xuICBwdWJsaWMgYnJvd0xBbmdsZTpudW1iZXI9MDtcbiAgcHVibGljIGJyb3dSQW5nbGU6bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93TEZvcm06bnVtYmVyPTA7XG4gIHB1YmxpYyBicm93UkZvcm06bnVtYmVyPTA7XG4gIC8vbW91dGggZm9ybVxuICBwdWJsaWMgbW91dGhGb3JtOiBudW1iZXIgPSAwO1xuICAvL21vdXRoIG9wZW5ZXG4gIHB1YmxpYyBtb3V0aE9wZW5ZOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2hlZWs6bnVtYmVyPTA7XG4gIHB1YmxpYyBib2R5QW5nbGVYOm51bWJlciA9IDA7XG4gIHB1YmxpYyBib2R5QW5nbGVZOm51bWJlciA9IDA7XG4gIHB1YmxpYyBib2R5QW5nbGVaOm51bWJlciA9IDA7XG4gIHB1YmxpYyBicmVhdGg6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1MQTpudW1iZXI9MDtcbiAgcHVibGljIGFybVJBOm51bWJlcj0wO1xuICBwdWJsaWMgYXJtTEI6bnVtYmVyPTA7XG4gIHB1YmxpYyBhcm1SQjpudW1iZXI9MDtcbiAgcHVibGljIGhhbmRMOm51bWJlcj0wO1xuICBwdWJsaWMgaGFuZFI6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyRnJvbnQ6bnVtYmVyPTA7XG4gIHB1YmxpYyBoYWlyU2lkZTpudW1iZXI9MDtcbiAgcHVibGljIGhhaXJCYWNrOm51bWJlcj0wO1xuICBwdWJsaWMgaGFpckZsdWZmeTpudW1iZXI9MDtcbiAgcHVibGljIHNob3VsZGVyWTpudW1iZXI9MDtcbiAgcHVibGljIGJ1c3RYOm51bWJlcj0wO1xuICBwdWJsaWMgYnVzdFk6bnVtYmVyPTA7XG4gIHB1YmxpYyBiYXNlWDpudW1iZXI9MDtcbiAgcHVibGljIGJhc2VZOm51bWJlcj0wO1xuXG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOTNmMmNmNjUyN2Q1YWM4OWE5ZjVcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==