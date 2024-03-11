/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  constructor() {}
  @Get('index')
  index(@Res({passthrough: true}) res) : string {
   return 'Hello World!';
  }

  @Post('store')
  store(@Req() req, @Res({passthrough: true}) res)
  {
    return{
      data : req.body
    }
  }

  @Get('detail/:id')
  find(@Param('id') id: string) {
    return `This action returns a #${id} hero`;
  }
}
