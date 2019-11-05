/*
 * @message: db 模块
 * @Author: lzh
 * @since: 2019-11-05 09:53:01
 * @lastTime: 2019-11-05 10:28:44
 * @LastAuthor: Do not edit
 */
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

// 全局引入数据模型
const models = TypegooseModule.forFeature([User]);

@Module({
  imports: [
    // 连接数据库
    TypegooseModule.forRoot('mongodb://localhost/video', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
