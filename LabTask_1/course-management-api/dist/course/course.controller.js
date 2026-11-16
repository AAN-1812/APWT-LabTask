"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const course_service_js_1 = require("./course.service.js");
const create_course_dto_js_1 = require("./dto/create-course.dto.js");
const update_course_dto_js_1 = require("./dto/update-course.dto.js");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    getAllCourses() {
        return this.courseService.getAllCourses();
    }
    getCourseById(id) {
        return this.courseService.getCourseById(id);
    }
    createCourse(dto) {
        return this.courseService.createCourse(dto);
    }
    updateCourse(id, dto) {
        return this.courseService.updateCourse(id, dto);
    }
    patchCourse(id, dto) {
        return this.courseService.patchCourse(id, dto);
    }
    deleteCourse(id) {
        return this.courseService.deleteCourse(id);
    }
    async uploadCourseMaterial(id, file) {
        return this.courseService.uploadCourseMaterial(id, file);
    }
};
exports.CourseController = CourseController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getAllCourses", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getCourseById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_dto_js_1.CreateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_dto_js_1.UpdateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_dto_js_1.UpdateCourseDto]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "patchCourse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteCourse", null);
__decorate([
    (0, common_1.Post)(':id/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({
                fileType: /image\/(jpeg|png)|application\/pdf/,
            }),
            new common_1.MaxFileSizeValidator({
                maxSize: 2 * 1024 * 1024,
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "uploadCourseMaterial", null);
exports.CourseController = CourseController = __decorate([
    (0, common_1.Controller)('course'),
    __metadata("design:paramtypes", [course_service_js_1.CourseService])
], CourseController);
