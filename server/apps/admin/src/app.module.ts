/*
 * @message: 引入db模块
 * @Author: lzh
 * @since: 2019-11-04 15:24:05
 * @lastTime: 2019-11-05 10:15:38
 * @LastAuthor: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
