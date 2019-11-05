/*
 * @message: 用户模型
 * @Author: lzh
 * @since: 2019-11-05 10:18:31
 * @lastTime: 2019-11-05 10:30:34
 * @LastAuthor: Do not edit
 */
import { prop } from '@typegoose/typegoose';

export class User {
    @prop()
    username: string;

    @prop()
    password: string;
}
