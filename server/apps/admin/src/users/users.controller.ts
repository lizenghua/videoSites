/*
 * @message: users 控制器
 * @Author: lzh
 * @since: 2019-11-05 10:35:38
 * @lastTime: 2019-11-05 10:50:40
 * @LastAuthor: Do not edit
 */
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';

// 用户的增删改查
@Crud({
    model: User,
})
@Controller('users')
export class UsersController {
    // 将 user 模型注入给 model
    constructor(@InjectModel(User) private readonly model) {}
}
